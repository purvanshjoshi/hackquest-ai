@echo off
REM HackQuest AI - Quick Start Script

echo.
echo ======================================
echo   HACKQUEST AI - Starting Servers
echo ======================================
echo.

REM Check if backend port is in use
echo [1] Checking if port 8000 is available...
netstat -ano | findstr :8000 >nul
if %errorlevel%==0 (
    echo [!] Port 8000 is in use. Killing existing process...
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8000') do taskkill /PID %%a /F 2>nul
    timeout /t 2 /nobreak
)

REM Start Backend
echo [2] Starting Backend API (Port 8000)...
echo.
cd /d "%~dp0backend"
start "HackQuest Backend" cmd /k "python -m uvicorn app.main_lite:app --host 127.0.0.1 --port 8000"

REM Wait for backend to start
timeout /t 5 /nobreak

REM Check if node_modules exists in frontend
cd /d "%~dp0frontend"
if not exist "node_modules\" (
    echo [3] Installing frontend dependencies...
    call npm install
)

REM Start Frontend
echo [4] Starting Frontend (Port 5173)...
echo.
start "HackQuest Frontend" cmd /k "npm run dev"

echo.
echo ======================================
echo   SERVERS STARTING...
echo ======================================
echo.
echo Backend:  http://127.0.0.1:8000
echo Frontend: http://localhost:5173
echo.
echo Two command windows should open. Keep both running.
echo.
pause
