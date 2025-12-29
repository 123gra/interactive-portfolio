import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = req.body;

  let reply = "Ask me about projects, skills, or experience!";

  if (message?.toLowerCase().includes("project")) {
    reply = "I’ve worked on UI-heavy React apps, Playwright automation, and full-stack dashboards.";
  } else if (message?.toLowerCase().includes("skill")) {
    reply = "My skills include React, TypeScript, Playwright, Tailwind CSS, CI/CD, and backend APIs.";
  } else if (message?.toLowerCase().includes("contact")) {
    reply = "You can reach me via Email, LinkedIn, or GitHub from the Contact section.";
  }

  res.status(200).json({ reply });
}
