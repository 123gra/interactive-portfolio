// api/chat.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
   if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ reply: "Invalid message" });
  }

  const lower = message.toLowerCase();
  let reply =
    "I'm still learning! Try asking about projects, skills, or experience";

  if (lower.includes("project")) {
    reply =
      "I’ve worked on UI-heavy React apps, Playwright automation frameworks, fleet dashboards, and an AI chat portal.";
  } else if (lower.includes("skill")) {
    reply =
      "My skills include React, TypeScript, Tailwind CSS, Playwright, CI/CD, Node.js, Django, and PostgreSQL.";
  } else if (lower.includes("contact")) {
    reply =
      "You can reach me via email, LinkedIn, or GitHub — check the Get In Touch section!";
  } else if (lower.includes("hi") || lower.includes("hello")) {
    reply = "Hey there!  How can I help you today?";
  }

  return res.status(200).json({ reply });
}
