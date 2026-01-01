# HackQuest AI - Deployment Guide

This guide documents the production deployment architecture, environment configuration, and deployment procedures for HackQuest AI.

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    PRODUCTION DEPLOYMENT                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Frontend (Vite + React)                                        │
│  Domain: https://hackquest-ai.me                                │
│  Hosted on: [Your hosting platform - Netlify/Vercel/etc.]       │
│         │                                                        │
│         │ (All API/WS requests)                                 │
│         ▼                                                        │
│  Backend (FastAPI)                                              │
│  Domain: https://hackquest-ai-1.onrender.com                    │
│  Hosted on: Render (Python Web Service)                         │
│         │                                                        │
│         │ (Database queries)                                    │
│         ▼                                                        │
│  MongoDB Atlas (Cloud Database)                                 │
│  Connection: mongodb+srv:// SRV URI                             │
│  Replica Set: Multi-region                                      │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Environment Variables

### Frontend: `.frontend/.env.production`

Used by Vite during production build. These values are baked into the compiled JavaScript.

```dotenv
# Backend API Configuration
VITE_API_URL=https://hackquest-ai-1.onrender.com
VITE_WS_URL=wss://hackquest-ai-1.onrender.com

# Application Environment
VITE_ENV=production
VITE_APP_NAME=HackQuest AI
VITE_APP_VERSION=1.0.0

# Feature Flags (production settings)
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
VITE_LOG_LEVEL=error
```

**Key Notes:**
- `VITE_API_URL`: All HTTP requests go to this URL
- `VITE_WS_URL`: WebSocket connections use this URL (wss = WebSocket Secure)
- These are read by `src/config/index.ts` via `import.meta.env`
- Build-time: Vite replaces `import.meta.env.VITE_*` with literal values during `npm run build`

### Backend: Render Environment Variables

Set these in the Render dashboard under your backend service **Settings → Environment**:

```
ENVIRONMENT=production
DEBUG=False
MONGODB_URL=mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/?retryWrites=true&w=majority&tls=true
MONGODB_DB=hackquest
SECRET_KEY=[STRONG_RANDOM_KEY_MIN_32_CHARS]
```

**MongoDB Atlas Setup:**
1. Go to MongoDB Atlas → Your Cluster → **Connect → Drivers**
2. Copy the Python driver connection string
3. Replace `[USERNAME]`, `[PASSWORD]`, and `[CLUSTER]` with actual values
4. Example format:
   ```
   mongodb+srv://myuser:mypassword@hackquest-cluster.mongodb.net/?retryWrites=true&w=majority&tls=true
   ```
5. Set as `MONGODB_URL` in Render dashboard

---

## CORS Configuration

### Backend CORS Setup (FastAPI)

**File:** `backend/app/main.py` (Lines 100-115)

```python
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "https://hackquest-ai.me",
    "https://www.hackquest-ai.me",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,           # Only these domains allowed
    allow_credentials=True,           # Allow cookies/auth headers
    allow_methods=["*"],              # All HTTP methods
    allow_headers=["*"],              # All headers
    max_age=3600,                     # CORS cache 1 hour
)
```

**How It Works:**
1. Browser makes request from `https://hackquest-ai.me`
2. Sends `Origin: https://hackquest-ai.me` header
3. Backend checks if origin is in `allow_origins` list
4. If match: returns `Access-Control-Allow-Origin: https://hackquest-ai.me` header
5. Browser allows response

**Security:**
- ✅ Not using `allow_origins=["*"]` (insecure in production)
- ✅ Explicitly lists only real frontend domains
- ✅ Allows credentials (needed for authentication)

---

## Build and Deployment Process

### Frontend Build and Deploy

**Local Build (for testing):**
```bash
cd frontend
npm install
npm run build  # Vite automatically loads .env.production
```

**Output:** `frontend/dist/` contains production-optimized HTML, CSS, JS

**Vite Env Loading Rules:**
- `npm run build` → Vite detects production mode
- Loads `.env` (base)
- Overlays `.env.production` (production-specific)
- `import.meta.env.VITE_API_URL` → `https://hackquest-ai-1.onrender.com`

**Deploy to Hosting Platform:**
- If Netlify/Vercel: Connect GitHub repo, auto-deploys on push
- If custom: Upload `frontend/dist/` to web server
- Ensure `VITE_API_URL` env var is set at build time

### Backend Deployment

**Platform:** Render (https://render.com)

**Deployment Steps:**
1. **Connect GitHub:** Render dashboard → Create Web Service → GitHub → Select repo
2. **Configure:**
   - Build command: `pip install -r requirements-prod.txt`
   - Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - Set environment variables (see above)
3. **Deploy:** Push to `main` branch → Render auto-redeploys
4. **Verify:** Check `https://hackquest-ai-1.onrender.com/api/health`

**Health Check Endpoint:**
```bash
curl https://hackquest-ai-1.onrender.com/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "service": "hackquest-ai-backend",
  "version": "1.0.0",
  "environment": "production",
  "database": "connected"
}
```

---

## MongoDB Atlas Setup

### Initial Configuration

**Step 1: Create Cluster**
1. MongoDB Atlas → Create Cluster
2. Choose cloud provider (AWS/Google Cloud/Azure) and region
3. Recommended: Multi-region replica set for high availability

**Step 2: Create Database User**
1. Security → Database Access → Add Database User
2. Username: `hackquest_user`
3. Password: [Generate strong password]
4. Built-in Role: `readWriteAnyDatabase`

**Step 3: Whitelist Render IP**
1. Security → Network Access → Add IP Address
2. Click "Add Current IP" or manually add Render's IP
3. Or use: `0.0.0.0/0` (allows all - less secure but simpler for development)

**Step 4: Get Connection String**
1. Cluster → Connect → Drivers
2. Select Python → Copy Connection String
3. Format:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority&tls=true
   ```

### Connection String Breakdown

```
mongodb+srv://user:pass@cluster.mongodb.net/?retryWrites=true&w=majority&tls=true
│            │  │   │    │        │        │  │              │              │
│            │  │   │    │        │        │  │              │              └─ TLS enabled
│            │  │   │    │        │        │  │              └─ Write quorum majority
│            │  │   │    │        │        │  └─ Automatic retry on transient errors
│            │  │   │    │        │        └─ Query parameters
│            │  │   │    │        └─ Cluster domain
│            │  │   │    └─ Password
│            │  │   └─ Username
│            │  └─ Password separator
│            └─ Connection protocol (SRV = auto-discover servers)
└─ MongoDB driver indicator
```

---

## Verification Checklist

### ✅ Frontend Verification

1. **Build Environment**
   ```bash
   cd frontend
   npm run build
   # Check: dist/ folder contains index.html with correct API URL embedded
   ```

2. **Live Site Check**
   - Open https://hackquest-ai.me
   - Hard refresh (Ctrl+Shift+R)
   - Open DevTools → Network tab
   - Trigger API call (login, fetch hackathons)
   - **Verify:** Request URL starts with `https://hackquest-ai-1.onrender.com/api/`

3. **No CORS Errors**
   - DevTools → Console tab
   - Should see NO errors like: "Access to XMLHttpRequest at '...' has been blocked by CORS policy"

### ✅ Backend Verification

1. **Health Endpoint**
   ```bash
   curl https://hackquest-ai-1.onrender.com/api/health
   # Expected: 200 OK with status: "healthy"
   ```

2. **Logs in Render Dashboard**
   - Should see: `✅ CORS middleware configured for origins: ['https://hackquest-ai.me', 'https://www.hackquest-ai.me']`
   - Should see: `✅ MongoDB connection successful` (or graceful warning if DB unavailable)
   - Should NOT see: SSL handshake errors, ReplicaSetNoPrimary errors

3. **CORS Validation**
   ```bash
   curl -H "Origin: https://hackquest-ai.me" \
        -H "Access-Control-Request-Method: GET" \
        https://hackquest-ai-1.onrender.com/api/health -v
   # Check response headers for: Access-Control-Allow-Origin: https://hackquest-ai.me
   ```

### ✅ Database Verification

1. **Connection Test** (via health endpoint)
   - If MongoDB connected: `database": "connected"`
   - Check Render logs for connection messages

2. **CRUD Operation Test**
   - Trigger user registration or data fetch
   - Check Render logs for successful query execution

---

## Troubleshooting

### Issue: CORS Error in Browser Console

**Error:** `Access to XMLHttpRequest ... blocked by CORS policy`

**Solution:**
1. Check frontend is requesting correct URL:
   ```bash
   # In DevTools → Network, click API request
   # Request URL should be: https://hackquest-ai-1.onrender.com/...
   ```
2. Verify backend CORS config:
   ```python
   # backend/app/main.py should have:
   origins = ["https://hackquest-ai.me", "https://www.hackquest-ai.me"]
   ```
3. Check Origin header in browser request:
   ```
   # DevTools → Network → Request Headers
   # Should show: Origin: https://hackquest-ai.me
   ```
4. Redeploy backend if config changed

### Issue: MongoDB SSL/ReplicaSet Errors in Logs

**Error:** `SSL: CERTIFICATE_VERIFY_FAILED` or `ReplicaSetNoPrimary`

**Solution:**
1. Verify Atlas connection string:
   ```
   - Must be mongodb+srv://... (SRV, not standard)
   - Must include ?retryWrites=true&w=majority&tls=true
   ```
2. Check Render environment variable:
   - Render dashboard → backend service → Settings → Environment
   - Verify `MONGODB_URL` is set to full SRV URI
3. Check Atlas IP whitelist:
   - Atlas → Security → Network Access
   - Ensure Render's IP is whitelisted (or 0.0.0.0/0)
4. Restart backend service:
   - Render dashboard → Manual Deploy

### Issue: Frontend Requests Still Go to localhost

**Solution:**
1. Check `.env.production` has correct URL:
   ```
   VITE_API_URL=https://hackquest-ai-1.onrender.com
   ```
2. Rebuild frontend:
   ```bash
   rm -rf frontend/dist
   npm run build
   # Verify dist/assets/*.js contains "hackquest-ai-1.onrender.com"
   ```
3. Clear browser cache:
   - DevTools → Application → Cache Storage → Clear all
   - Hard refresh (Ctrl+Shift+R)

---

## Security Best Practices

- ✅ **CORS:** Locked to specific domains, no `allow_origins=["*"]`
- ✅ **HTTPS:** All URLs use `https://` and `wss://`
- ✅ **MongoDB:** SRV URI with TLS, password in Render env (not in code)
- ✅ **Debug:** `DEBUG=False` in production
- ✅ **Secrets:** Never commit `.env` files with real credentials
- ✅ **Logging:** Production logs do not expose sensitive data

---

## Production Monitoring

### Key Endpoints to Monitor

- **Health:** `https://hackquest-ai-1.onrender.com/api/health`
- **Docs:** `https://hackquest-ai-1.onrender.com/docs` (disable in production if needed)

### Logs to Watch

- Render backend logs for MongoDB connection errors
- Frontend console for CORS or API errors
- MongoDB Atlas dashboard for query performance

---

## Rollback Procedure

If deployment fails:

1. **Frontend:** Revert to previous commit and redeploy
2. **Backend:** Render → Manual Deploy → Select previous version
3. **Database:** MongoDB Atlas backups → Restore (if needed)

---

## Quick Reference: Deployment Checklist

```
FRONTEND:
[ ] .env.production has VITE_API_URL=https://hackquest-ai-1.onrender.com
[ ] npm run build completes without errors
[ ] dist/ folder is deployed to hosting
[ ] https://hackquest-ai.me loads and shows no CORS errors

BACKEND:
[ ] Render service has MONGODB_URL set to full SRV URI
[ ] backend/app/main.py has secure CORS origins list
[ ] ENVIRONMENT=production and DEBUG=False in Render env
[ ] https://hackquest-ai-1.onrender.com/api/health returns 200

DATABASE:
[ ] MongoDB Atlas cluster created with user and whitelist
[ ] Connection string uses mongodb+srv:// with TLS
[ ] Render logs show successful MongoDB connection
```

---

## Support and Further Help

For issues beyond this guide:
- Render docs: https://render.com/docs
- MongoDB Atlas docs: https://docs.atlas.mongodb.com
- Vite env docs: https://vitejs.dev/guide/env-and-mode.html
- FastAPI CORS: https://fastapi.tiangolo.com/tutorial/cors/
