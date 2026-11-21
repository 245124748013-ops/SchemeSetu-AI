@echo off
title SchemeSetu AI - Live Public Sharer
echo ===================================================
echo     SchemeSetu AI - 1-Click Public Link Generator
echo ===================================================
echo.
echo Starting FastAPI Backend (Port 8000)...
start /B python -m uvicorn app:app --app-dir backend --host 127.0.0.1 --port 8000

echo Starting Vite Frontend (Port 5173)...
start /B npm run dev --prefix frontend

echo.
echo Waiting 5 seconds for servers to start...
timeout /t 5 /nobreak >nul

echo.
echo ---------------------------------------------------
echo 1) Local Network (Wi-Fi) Link:
ipconfig | findstr /i "IPv4"
echo Open http://<YOUR_IPV4>:5173 on any device on your Wi-Fi
echo.
echo ---------------------------------------------------
echo 2) Generating Public Internet Link (Worldwide)...
echo Please wait, connecting to secure tunnel...
echo (Press Ctrl+C when you want to stop sharing)
echo ---------------------------------------------------
ssh -o ServerAliveInterval=30 -o ServerAliveCountMax=5 -o StrictHostKeyChecking=no -R 80:localhost:5173 nokey@localhost.run
pause
