# Quick Start Guide - 5 Minutes

## 🚀 Fastest Path to Running HackQuest AI

### Option 1: Docker (Recommended - 2 minutes)

```bash
# 1. Copy environment file
cp backend/.env.example backend/.env

# 2. Edit .env with your API keys
# At minimum, add these:
# - GROQ_API_KEY
# - PINECONE_API_KEY
# - GITHUB_TOKEN

# 3. Start everything
docker-compose -f docker/docker-compose.yml up -d

# 4. Wait 10 seconds for services to start

# 5. Open in browser
# Frontend: http://localhost:5173
# API Docs: http://localhost:8000/docs
```

### Option 2: Manual Setup (5 minutes)

#### Terminal 1: Backend

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # or: venv\Scripts\activate on Windows

# Install packages
pip install -r requirements.txt

# Copy and configure .env
cp .env.example .env
# Edit .env with your API keys

# Start server
uvicorn app.main:app --reload
```

#### Terminal 2: Frontend

```bash
cd frontend

# Install packages
npm install

# Start dev server
npm run dev
```

#### Terminal 3: Databases

```bash
# Start MongoDB
mongod

# In another terminal, start Redis
redis-server
```

## 🔑 Get Your API Keys (10 minutes)

### 1. Groq API Key
1. Go to https://console.groq.com
2. Sign up (free)
3. Create API key
4. Copy to `.env`

### 2. Pinecone API Key
1. Go to https://pinecone.io
2. Create free account
3. Create index named `hackquest-index`
4. Copy API key to `.env`

### 3. GitHub Token
1. Go to https://github.com/settings/tokens
2. Create "Personal access token"
3. Select scopes: `repo`, `user`, `read:user`
4. Copy to `.env`

### 4. HuggingFace API Key (Optional)
1. Go to https://huggingface.co/settings/tokens
2. Create access token
3. Copy to `.env`

## 📝 First Test

### Test Authentication
```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123",
    "username": "testuser",
    "full_name": "Test User"
  }'
```

### Login
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123"
  }'
```

### Get Hackathons
```bash
curl http://localhost:8000/api/matches/hackathons
```

## 🌐 Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:5173 | Main application |
| Backend API | http://localhost:8000 | REST API |
| API Docs | http://localhost:8000/docs | Swagger documentation |
| Health Check | http://localhost:8000/api/health | System status |

## 🎯 Next Steps

1. **Explore Dashboard** - See match overview
2. **Browse Matches** - Filter hackathons
3. **Generate Code** - Create boilerplate
4. **Create Profile** - Sync GitHub data
5. **View API Docs** - Swagger at `/docs`

## ⚙️ Configuration

### Change Port
```env
# .env
PORT=9000  # Change from default 8000
```

### Change Database URLs
```env
# .env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
REDIS_URL=redis://username:password@hostname:port
```

### Adjust Logging
```env
# .env
LOG_LEVEL=debug  # or: info, warning, error
```

## 🐛 Quick Fixes

### "Connection refused" error
- Check MongoDB is running: `mongo --version`
- Check Redis is running: `redis-cli ping`
- Check backend port 8000 is free

### "API key invalid" error
- Verify no extra spaces in .env
- Check key is copied completely
- Try generating new key on platform

### "CORS error" in frontend
- Verify `CORS_ORIGINS` includes `http://localhost:5173`
- Restart backend after .env change

### Frontend can't reach backend
- Check backend is running on port 8000
- Verify `config.api.baseUrl` in frontend
- Check browser console for error details

## 📚 Documentation

- **Full Setup:** See [SETUP.md](./SETUP.md)
- **API Docs:** http://localhost:8000/docs (Swagger)
- **Architecture:** See [README.md](./README.md)

## 💡 Tips

- **Dev Mode:** Run with `--reload` for auto-restart
- **Debug:** Use `LOG_LEVEL=debug` in .env
- **Database GUI:** Use MongoDB Compass for visual DB management
- **API Testing:** Use Postman or Thunder Client for API testing

## 🎉 You're Ready!

Visit http://localhost:5173 and start exploring!

If you hit issues, check the [Troubleshooting](./SETUP.md#-troubleshooting) section in SETUP.md.

---

Need help? Check the issue tracker or community Discord!
