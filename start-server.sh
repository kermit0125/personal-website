#!/bin/bash
# Linux/Mac shell script to start local server
# Usage: ./start-server.sh [port]
# Default port: 8000

PORT=${1:-8000}

echo "============================================================"
echo "Starting local server..."
echo "============================================================"
echo ""

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    if ! command -v python &> /dev/null; then
        echo "Error: Python is not installed"
        echo "Please install Python 3.x"
        exit 1
    else
        PYTHON_CMD=python
    fi
else
    PYTHON_CMD=python3
fi

# Make script executable
chmod +x start-server.py

# Start the server
$PYTHON_CMD start-server.py $PORT

