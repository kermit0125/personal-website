# Local Testing Guide

## Quick Start

### Windows
```cmd
start-server.bat
```

### Linux/Mac
```bash
chmod +x start-server.sh
./start-server.sh
```

### Python
```bash
python start-server.py
```

The server will start on `http://localhost:8000` and automatically open your browser.

## Usage

1. **Start the server** using one of the methods above
2. **Access the website** at `http://localhost:8000`
3. **Stop the server** by pressing `Ctrl+C`

## Features

- Auto-opens browser when server starts
- Cache disabled for development
- Request logging for debugging
- Port conflict handling

## Troubleshooting

### Port Already in Use
Use a different port:
```bash
python start-server.py 8080
```

### Python Not Found
Install Python 3.x from https://www.python.org/downloads/

### Permission Error (Linux/Mac)
```bash
chmod +x start-server.sh
chmod +x start-server.py
```

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Language switching works
- [ ] Mobile menu works
- [ ] All course pages load
- [ ] All project pages load
- [ ] Images display correctly
- [ ] PDF files can be downloaded
