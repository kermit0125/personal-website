#!/usr/bin/env python3
"""
Simple HTTP server for local testing
Usage: python start-server.py [port]
Default port: 8000
"""

import http.server
import socketserver
import sys
import os
import webbrowser
from pathlib import Path

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        # Custom log format
        print(f"[{self.log_date_time_string()}] {format % args}")

def main():
    # Change to the directory containing this script
    os.chdir(Path(__file__).parent)
    
    Handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("=" * 60)
            print(f"Local server started successfully!")
            print(f"Server running at: http://localhost:{PORT}")
            print(f"Server running at: http://127.0.0.1:{PORT}")
            print("=" * 60)
            print("\nPress Ctrl+C to stop the server\n")
            
            # Try to open browser automatically
            try:
                webbrowser.open(f'http://localhost:{PORT}')
                print("Browser opened automatically")
            except:
                print("Please open http://localhost:{PORT} in your browser")
            
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 98 or "Address already in use" in str(e):
            print(f"Error: Port {PORT} is already in use.")
            print(f"Please use a different port: python start-server.py {PORT + 1}")
        else:
            print(f"Error starting server: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n\nServer stopped by user")
        sys.exit(0)

if __name__ == "__main__":
    main()

