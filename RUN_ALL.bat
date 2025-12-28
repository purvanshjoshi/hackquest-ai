@echo off
setlocal enabledelayedexpansion

echo ============================================
echo  HackQuest AI - Start Both Servers
echo ============================================
echo.
echo Starting Backend Server...
start /d "%~dp0backend" cmd /k "python -m uvicorn app.main_lite:app --host 0.0.0.0 --port 8000 --reload"

timeout /t 3 /nobreak

echo Starting Frontend Server...
start /d "%~dp0frontend" cmd /k "npx vite --host --port 5173"

timeout /t 3 /nobreak

echo.
echo ============================================
echo  Servers Starting...
echo ============================================
echo.
echo Backend:  http://localhost:8000
echo Frontend: http://localhost:5173
echo.
echo Waiting for servers to initialize...
timeout /t 5 /nobreak

start http://localhost:5173

echo Done! Servers are running.
pause
