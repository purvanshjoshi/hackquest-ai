#!/usr/bin/env python
"""Simple script to run the FastAPI server."""
import subprocess
import sys
import os

# Change to backend directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Run uvicorn
subprocess.run(
    [sys.executable, "-m", "uvicorn", "app.main_lite:app", "--host", "0.0.0.0" "--port", "8000"],
    cwd=os.path.dirname(os.path.abspath(__file__))
)
