# CBC Website v2 — MERN Stack

A full-stack rebuild of the MIT CBC website with a proper backend.

## Structure
```
CBC-Website - 2/
├── backend/    → Express + Node.js REST API (port 5000)
└── frontend/   → Next.js frontend (port 3000)
```

## Quick Start

### 1. Backend
```bash
cd backend
npm install
# Edit .env with your MongoDB URI
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

## API Endpoints
- GET/POST  /api/v1/events
- GET/POST  /api/v1/members  |  GET /api/v1/members/alumni
- GET/POST  /api/v1/projects
- GET/POST  /api/v1/articles
- GET/POST  /api/v1/join
- GET       /api/v1/health

## MongoDB
Default: `mongodb://localhost:27017/cbc-website`
Update MONGODB_URI in `backend/.env` for MongoDB Atlas.
