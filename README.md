## Interactive Portfolio – Full Stack + QA Automation

This project is an interactive developer portfolio built using React + TypeScript + Tailwind CSS with a Node.js (Express) backend.
It includes a fully working AI-style chatbot, project showcase, skills section, and contact details.

## Tech Stack
Frontend

React (Create React App)

TypeScript

Tailwind CSS

Axios

Lucid-React

Framer Motion

Backend

Node.js

Express.js

CORS

dotenv

## Features

 Modern UI built with Tailwind CSS

 AI-style Chatbot powered by backend API

 Dynamic Projects section fetched from backend

 QA & Full-Stack focused portfolio

 Contact section with Email, LinkedIn, GitHub

 Proper frontend–backend integration using CRA proxy

## Project Structure
interactive-portfolio/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── ChatBot.tsx
│   │   ├── components/
│   │   └── index.css
│   ├── package.json
│   └── .env

## Vercel Link:
https://interactive-portfolio-black.vercel.app/

## Important Note

For deployment on Vercel, API routes must be colocated with the frontend when using a single-repository setup.
This project follows that approach to maintain a unified deployment pipeline.

ChatBot works well under local,CodeSpace or Clone Setup.

##  Setup Instructions (Step-by-Step)
1 Clone the repository
git clone https://github.com/your-username/interactive-portfolio.git
cd interactive-portfolio

2️ Backend Setup
cd backend
npm install
npm run dev


You should see:

 Backend API running: http://localhost:5000

3️ Frontend Setup
cd ../client
npm install
npm start


Frontend runs on:

http://localhost:3000

 Frontend ↔ Backend Communication (IMPORTANT)

This project uses Create React App proxy to communicate with the backend.

## Why Proxy?

Avoids CORS issues

Works reliably in Codespaces & local dev

No hardcoded API URLs

 Proxy Configuration (client/package.json)
"proxy": "http://localhost:5000"

 API Calls (ChatBot.tsx)
fetch("/api/chat", { ... })


 No direct localhost:5000 calls from frontend
 No environment variables needed for API URL in CRA

## Codespaces Port Visibility (VERY IMPORTANT)

If you are using GitHub Codespaces, you must expose backend port:

Steps:

Open PORTS tab in Codespaces

Add port: 5000

Set visibility to Public

Restart backend if needed

 If port 5000 is private, the chatbot will not work.

## Chatbot Feature

The chatbot is powered by a backend endpoint:

POST /api/chat


It responds to user messages with predefined intelligent replies.

## Sample Prompts to Try

Hi

Tell me about your projects

What skills do you have?

How can I contact you?

What tech stack do you use?

Example Response:
"I specialize in Playwright automation, React development, and CI/CD pipelines."

## Projects Included

NFT Marketplace Landing Page (React, UI-heavy)

Playwright E2E Test Suite

Fleet Tracking Dashboard (React + Leaflet)

AI Chat Portal (Django + React + PostgreSQL)

## Error Handling

Chatbot gracefully handles backend downtime

User-friendly error messages shown in UI

Input disabled during API calls

## Author

Kadari Grace Magdalene

 Email: gracemagdalene1305@gmail.com

 LinkedIn: https://www.linkedin.com/in/grace-magdalene-kadari-52494a1a0

 GitHub: https://github.com/123gra
