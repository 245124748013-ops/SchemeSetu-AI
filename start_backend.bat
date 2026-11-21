@echo off
title SchemeSetu AI - Backend Server
cd /d %~dp0backend
echo Starting SchemeSetu AI Backend at http://127.0.0.1:8000 ...
python -m uvicorn app:app --host 127.0.0.1 --port 8000 --reload
pause
