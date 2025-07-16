# Next-Express-Drizzle Fullstack Project 🚀

Simple fullstack CRUD application using Next.js for frontend, Express for backend, Drizzle ORM and PostgreSQL database 🛠️🐘.

## Features ✨

- Frontend with Next.js (App Router, TypeScript) ⚛️
- Backend with Express and TypeScript ⚙️
- Database access with Drizzle ORM and PostgreSQL 🐘
- API routes organized under `/api` 🔗
- Environment variables support with `.env` files 🌿
- Docker Compose setup for PostgreSQL and Adminer (optional) 🐳

## Getting Started 🚦

1. Clone the repo 📥  
2. Setup environment variables in `.env` files for backend and frontend 🔧  
3. Run database migrations and generate Drizzle models 🛠️  
4. Start backend server: `npm run dev` inside `/back` folder 💻  
5. Start frontend server: `npm run dev` inside `/front` folder 💻  
6. Access frontend at `http://localhost:3000` and backend API at `http://localhost:3001/api` 🌐

## Docker (optional) 🐳

You can run PostgreSQL and Adminer using Docker Compose:

```bash
docker-compose up -d
