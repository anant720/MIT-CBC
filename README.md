# MIT CBC Website v2

The official student-led cybersecurity and blockchain club website of MIT ADT University.

🌐 **Live Website:** [https://cbc-one-psi.vercel.app/](https://cbc-one-psi.vercel.app/)

## Architecture

This project is a monorepo consisting of a decoupled frontend and backend:

- **Frontend (`/frontend`)**: Built with **Next.js 14**, React, Tailwind CSS, and Framer Motion for dynamic animations. Deployed on **Vercel**.
- **Backend (`/backend`)**: Built with **Node.js** and **Express.js** providing a robust REST API. Connected to **Supabase** (PostgreSQL) for database management and Row Level Security (RLS). Deployed on **Render**.

## Local Development

### 1. Backend (API)
```bash
cd backend
npm install
# Create a .env file based on .env.example with your Supabase keys
npm run dev
```
The API will run on `http://localhost:5000`

### 2. Frontend (UI)
```bash
cd frontend
npm install
# Make sure to set NEXT_PUBLIC_API_URL in your .env.local if running a local backend
npm run dev
```
The frontend will run on `http://localhost:3000`

## Features & Endpoints

- **`/events`**: Manage past and upcoming club events.
- **`/members` & `/alumni`**: Showcase current core team members and alumni.
- **`/projects`**: Highlight cybersecurity and blockchain projects.
- **`/articles`**: Publish writeups, tutorials, and research.
- **`/join`**: Public intake form for new student applications.
