@echo off
echo ============================================
echo  HackQuest AI - Backend Server Startup
echo ============================================
echo.
cd /d "%~dp0backend"
echo Starting backend on http://localhost:8000
echo.
python -m uvicorn app.main_lite:app --host 0.0.0.0 --port 8000 --reload
pause
