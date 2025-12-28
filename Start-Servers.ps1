#!/usr/bin/env pwsh
# HackQuest AI - Quick Start Script for PowerShell

Write-Host "`n======================================" -ForegroundColor Cyan
Write-Host "  HACKQUEST AI - Starting Servers" -ForegroundColor Cyan
Write-Host "======================================`n" -ForegroundColor Cyan

# Kill any existing processes on port 8000
Write-Host "[1] Checking port 8000..." -ForegroundColor Yellow
$port8000 = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
if ($port8000) {
    Write-Host "[!] Port 8000 in use. Killing process..." -ForegroundColor Yellow
    $port8000.OwningProcess | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }
    Start-Sleep -Seconds 2
}

# Start Backend
Write-Host "`n[2] Starting Backend API (Port 8000)..." -ForegroundColor Green
$backendPath = "$PSScriptRoot\backend"
$backendProcess = Start-Process -FilePath "python" `
    -ArgumentList "-m", "uvicorn", "app.main_lite:app", "--host", "127.0.0.1", "--port", "8000" `
    -WorkingDirectory $backendPath `
    -PassThru `
    -NoNewWindow

Write-Host "    Backend Process ID: $($backendProcess.Id)" -ForegroundColor Green

Start-Sleep -Seconds 8

# Check Frontend Dependencies
$frontendPath = "$PSScriptRoot\frontend"
Write-Host "`n[3] Checking frontend dependencies..." -ForegroundColor Yellow
if (!(Test-Path "$frontendPath\node_modules")) {
    Write-Host "    Installing npm packages..." -ForegroundColor Yellow
    Push-Location $frontendPath
    npm install
    Pop-Location
}

# Start Frontend
Write-Host "`n[4] Starting Frontend (Port 5173)..." -ForegroundColor Green
$frontendProcess = Start-Process -FilePath "npm" `
    -ArgumentList "run", "dev" `
    -WorkingDirectory $frontendPath `
    -PassThru `
    -NoNewWindow

Write-Host "    Frontend Process ID: $($frontendProcess.Id)" -ForegroundColor Green

# Print startup summary
Write-Host "`n======================================" -ForegroundColor Cyan
Write-Host "  SERVERS STARTED" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "`n  Backend API:  " -ForegroundColor Green -NoNewline
Write-Host "http://127.0.0.1:8000" -ForegroundColor White

Write-Host "  Frontend App: " -ForegroundColor Green -NoNewline
Write-Host "http://localhost:5173" -ForegroundColor White

Write-Host "`n  Backend Process:  " -ForegroundColor Cyan -NoNewline
Write-Host "$($backendProcess.Id)" -ForegroundColor White

Write-Host "  Frontend Process: " -ForegroundColor Cyan -NoNewline
Write-Host "$($frontendProcess.Id)" -ForegroundColor White

Write-Host "`n  Test Account:" -ForegroundColor Cyan
Write-Host "    Email:    test@example.com" -ForegroundColor White
Write-Host "    Password: password123" -ForegroundColor White

Write-Host "`n  To stop servers, close the console or press Ctrl+C" -ForegroundColor Yellow
Write-Host "`n======================================`n" -ForegroundColor Cyan

# Keep script running
$backendProcess | Wait-Process
