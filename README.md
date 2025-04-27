# PODC Chatbot Backend

Flask-based backend server for the PODC AI Assistant chatbot.

## Features
- OpenAI GPT-4 integration
- Document search capabilities
- CORS support for frontend integration
- Production-ready with Gunicorn/Waitress

## Setup Instructions

### Local Development
1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Configure API Key:
- Create a `.env` file
- Add your OpenAI API key:
```
OPENAI_API_KEY=your_key_here
```

3. Run the server:
```bash
python server.py
```

### Production Deployment
Deployed on Render.com with the following configuration:
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn server:app`
- Environment Variables:
  - `OPENAI_API_KEY`
  - `PORT`

### API Endpoints
POST `/chat`
- Accepts JSON with `message` field
- Returns JSON with `response` and `citations` fields

## Tech Stack
- Python 3.9.18
- Flask
- OpenAI API
- Gunicorn (Linux) / Waitress (Windows)
