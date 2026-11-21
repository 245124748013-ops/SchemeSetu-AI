@echo off
title SchemeSetu AI - Launcher
echo ===================================================
echo        Starting SchemeSetu AI Platform
echo ===================================================
echo.

echo [1/3] Starting FastAPI Backend on http://127.0.0.1:8000 ...
start "SchemeSetu Backend" cmd /k "cd /d %~dp0backend && python -m uvicorn app:app --host 127.0.0.1 --port 8000 --reload"

timeout /t 3 /nobreak >nul

echo [2/3] Starting Vite Frontend on http://localhost:5173 ...
start "SchemeSetu Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

timeout /t 3 /nobreak >nul

echo [3/3] Opening SchemeSetu AI in your browser...
start http://localhost:5173

echo.
echo ===================================================
echo SchemeSetu AI is running!
echo Frontend: http://localhost:5173
echo Backend:  http://127.0.0.1:8000/api/health
echo ===================================================
echo.
pause
