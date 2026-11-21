@echo off
title SchemeSetu AI - Frontend Server
cd /d %~dp0frontend
echo Starting SchemeSetu AI Frontend at http://localhost:5173 ...
npm run dev
pause
