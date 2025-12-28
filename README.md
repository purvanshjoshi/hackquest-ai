# 🚀 HackQuest AI

**AI-powered hackathon discovery and matching platform** for competitive developers.

**Status:** ✅ Production Ready | **Updated:** December 28, 2025

---

## 📖 Quick Links

| | |
|---|---|
| **Getting Started** | [SETUP.md](SETUP.md) - Installation & configuration |
| **Testing & Debugging** | [TESTING.md](TESTING.md) - Run tests & troubleshoot |
| **Deployment** | [QUICKSTART.md](QUICKSTART.md) - Deploy to production |
| **Project Overview** | [START_HERE.md](START_HERE.md) - Full project details |

---

## ⚡ 30-Second Setup

```powershell
# Backend
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python run_server.py

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

- Backend: http://localhost:8000 (API docs at `/docs`)
- Frontend: http://localhost:5174
- Database: PostgreSQL on localhost:5432

---

## 🎯 What It Does

| Feature | Description |
|---------|-------------|
| **AI Question Generation** | Creates hackathon problems using Groq API |
| **Smart Matching** | Matches questions to developer skills via embeddings |
| **Authentication** | Secure login with password reset |
| **Real-time Updates** | WebSocket-powered live notifications |
| **Code Scaffolding** | Auto-generates FastAPI/React boilerplate |

---

## 🏗️ Tech Stack

**Frontend:** React 19 + Vite + TypeScript + Tailwind CSS  
**Backend:** FastAPI + SQLAlchemy + LangChain  
**Database:** PostgreSQL 15  
**Infrastructure:** Docker + Docker Compose  

---

## 🐳 Docker (Quickest)

```powershell
docker-compose -f docker/docker-compose.yml up
```

Includes:
- ✅ Backend API (port 8000)
- ✅ Frontend (port 5174)  
- ✅ PostgreSQL database

---

## ☁️ Cloud Deployment

### Azure (Student Subscription Restricted)

Your subscription has policy restrictions on resource creation. **Alternatives:**

1. **Railway.app** (Recommended)
   - Free $5/month credit
   - PostgreSQL included
   - Deploy from GitHub: [railway.app](https://railway.app)

2. **Render.com** 
   - Free hobby tier
   - PostgreSQL free tier
   - [render.com](https://render.com)

3. **Local Docker** (For testing)
   ```powershell
   docker-compose -f docker/docker-compose.yml up
   ```

4. **Request Azure Exception**
   - Contact Graphic Era University IT
   - Request policy exception (1-3 days)

---

## 📚 API Reference

### Auth
```
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/reset-password
```

### Questions
```
GET    /api/questions
POST   /api/questions          (AI generation)
GET    /api/questions/{id}
```

### Matching
```
POST   /api/match              (Smart matching)
GET    /api/matches
POST   /api/matches/{id}       (Accept match)
```

### System
```
GET    /health
GET    /api/health
```

Full OpenAPI docs: http://localhost:8000/docs

---

## 🔐 Security

- ✅ Password hashing (bcrypt)
- ✅ JWT authentication
- ✅ SQL injection prevention
- ✅ CORS protection
- ✅ Input validation
- ✅ Secure headers

---

## 🧪 Testing

### Backend
```powershell
cd backend
pytest test_api.py -v
python test_agent.py
```

### Frontend
```powershell
cd frontend
npm run test
```

### Full Stack (End-to-End)
```powershell
docker-compose -f docker/docker-compose.yml up
python backend/test_all_endpoints.py
```

---

## 📋 Project Status

| Component | Status |
|-----------|--------|
| Backend API | ✅ Production Ready |
| Frontend UI | ✅ Production Ready |
| Database | ✅ PostgreSQL configured |
| Docker | ✅ Multi-stage builds |
| Security | ✅ Hardened |
| Tests | ✅ All passing |

---

## 📁 File Organization

```
hackquest-ai/
├── backend/              # FastAPI application
│   ├── app/
│   │   ├── api/         # REST endpoints
│   │   ├── agents/      # LangChain agents
│   │   ├── models/      # Database models
│   │   └── core/        # Business logic
│   └── requirements.txt
├── frontend/            # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/    # API client
│   │   └── types/       # TypeScript
│   └── package.json
├── docker/             # Docker configs
└── [Documentation below]
```

---

## 📚 Documentation

- **SETUP.md** - Installation, environment variables, database setup
- **TESTING.md** - Testing procedures, troubleshooting, debug logs
- **QUICKSTART.md** - Deployment steps, production checklist
- **START_HERE.md** - Complete project overview and architecture
- **LICENSE** - MIT License

---

## 🚀 Environment Variables

Create `.env.production`:

```env
DATABASE_URL=postgresql://user:pass@host/dbname
GROQ_API_KEY=your_key
SECRET_KEY=your_secret
VITE_API_URL=http://localhost:8000
```

See SETUP.md for complete list.

---

## 🆘 Troubleshooting

**Backend won't start?**
→ Check TESTING.md "Backend Troubleshooting"

**Frontend build fails?**
→ Run `npm install` and check TESTING.md

**Database connection error?**
→ Verify PostgreSQL running, check connection string in SETUP.md

**Docker issues?**
→ See TESTING.md "Docker Troubleshooting"

---

## 📞 Support

- **Setup help:** [SETUP.md](SETUP.md)
- **Debugging:** [TESTING.md](TESTING.md)
- **Deployment:** [QUICKSTART.md](QUICKSTART.md)
- **Full details:** [START_HERE.md](START_HERE.md)
- **API Reference:** http://localhost:8000/docs (when running)

---

## 📄 License

MIT License - See [LICENSE](LICENSE)

---

**Version:** 1.0.0 Production Ready  
**Last Updated:** December 28, 2025