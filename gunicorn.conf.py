import os

# Get port from environment variable
port = os.environ.get('PORT', '8000')

# Gunicorn config variables
workers = 4
bind = f"0.0.0.0:{port}"
timeout = 120