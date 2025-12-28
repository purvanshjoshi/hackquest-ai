@echo off
echo ============================================
echo  HackQuest AI - Frontend Server Startup
echo ============================================
echo.
cd /d "%~dp0frontend"
echo Starting frontend on http://localhost:5173
echo.
npx vite --host --port 5173
pause
