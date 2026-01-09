@echo off
REM Windows batch script to start local server
REM Usage: start-server.bat [port]
REM Default port: 8000

setlocal

set PORT=8000
if not "%1"=="" set PORT=%1

echo ============================================================
echo Starting local server...
echo ============================================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Python is not installed or not in PATH
    echo Please install Python 3.x from https://www.python.org/
    pause
    exit /b 1
)

REM Start the server
python start-server.py %PORT%

pause

