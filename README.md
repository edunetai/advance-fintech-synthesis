# Advance Fintech Synthesis 2026

A modern competition website for the Advance Fintech Synthesis (AFS) 2026 - a premier fintech innovation challenge organized by UII Incubator in Vietnam.

## Overview

AFS 2026 brings together talented teams to solve Vietnam's most pressing fintech challenges. The competition focuses on 10 structural gaps in Vietnam's fintech ecosystem, including financial inclusion, fraud prevention, digital banking, and more.

## Features

- 📋 **Team Registration** - Online registration system for competition participants
- 📊 **Gap Analysis** - Interactive visualization of Vietnam's fintech landscape
- 🏆 **Teams Dashboard** - Real-time leaderboard and team showcase
- 🌍 **Multi-language Support** - Vietnamese and English translations
- 🎨 **Dark/Light Theme** - User-selectable theme preference

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS 4 + Motion (animations)
- **Backend:** Express.js + TypeScript
- **Database:** SQLite (better-sqlite3)
- **Charts:** Recharts
- **Deployment:** Docker + Nginx

## Prerequisites

- Node.js 18+
- npm or yarn
- Docker (for containerized deployment)

## Getting Started

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your settings
   ```

3. **Start development servers:**
   ```bash
   # Start both frontend and backend
   npm start
   
   # Or run separately:
   npm run dev    # Frontend on http://localhost:3000
   npm run backend # Backend on http://localhost:3002
   ```

### Docker Deployment

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Frontend: http://localhost:8060
   - Backend API: http://localhost:8060/api

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Submit team registration |
| GET | `/api/teams` | Get all registered teams |
| GET | `/api/registrations` | Get all registrations (admin) |
| GET | `/api/registrations/:id` | Get specific registration |
| GET | `/api/health` | Health check |

## Project Structure

```
├── backend/
│   ├── server.ts        # Express API server
│   ├── database.ts       # SQLite database operations
│   └── data/            # SQLite database files
├── src/
│   ├── components/      # React components
│   ├── context/         # React context providers
│   ├── translations.ts  # i18n translations
│   └── index.css        # Global styles
├── public/
│   └── images/          # Static images
├── Dockerfile           # Docker configuration
├── docker-compose.yaml  # Docker Compose config
└── nginx.conf          # Nginx configuration
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `GEMINI_API_KEY` | Gemini AI API key (optional) | - |
| `PORT` | Backend server port | 3002 |
| `NODE_ENV` | Environment | development |

## License

This project is for the AFS 2026 competition.
