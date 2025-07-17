# UK GovWatch Pro

AI-powered platform that helps UK businesses discover government contracts, grants, and opportunities they're missing.

## Overview

UK GovWatch Pro monitors 350+ UK government sources including national databases and all local councils to find relevant opportunities for your business. No more missing out on valuable contracts because they were hidden on obscure council websites.

## Features

- **Comprehensive Coverage**: Monitors Contracts Finder, Find a Grant, 300+ local councils, NHS, and regional sources
- **Smart Matching**: AI-powered matching based on your business profile, capabilities, and location
- **Real-time Alerts**: Get notified immediately when relevant opportunities appear
- **Unified Dashboard**: See all opportunities in one place, no more checking multiple websites
- **Local Focus**: Discovers hidden opportunities from your local councils

## Tech Stack

- **Backend**: Python/FastAPI
- **Frontend**: React/Next.js
- **Database**: PostgreSQL
- **Search**: Elasticsearch
- **Queue**: Redis/Celery
- **Deployment**: Docker/Kubernetes

## Getting Started

### Prerequisites

- Python 3.9+
- Node.js 18+
- PostgreSQL 14+
- Redis

### Installation

1. Clone the repository
```bash
git clone https://github.com/rowbot1/uk-govwatch-pro.git
cd uk-govwatch-pro
```

2. Set up the backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Set up the frontend
```bash
cd frontend
npm install
```

4. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Run the development servers
```bash
# Backend
cd backend
uvicorn main:app --reload

# Frontend (new terminal)
cd frontend
npm run dev
```

## License

Proprietary - All rights reserved

## Contact

For inquiries about UK GovWatch Pro, please visit our website.