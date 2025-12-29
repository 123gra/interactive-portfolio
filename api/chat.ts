import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Invalid message" });
  }

  const lower = message.toLowerCase();
  let reply = "I'm still learning! Try asking about projects or skills 😊";

  if (lower.includes("project")) {
    reply =
      "I’ve built UI-heavy React apps, automation frameworks, and full-stack systems. Check the Projects section!";
  } else if (lower.includes("skill")) {
    reply =
      "My skills include React, TypeScript, Playwright, Tailwind CSS, Node.js, and CI/CD.";
  } else if (lower.includes("contact")) {
    reply =
      "You can reach me via Email, LinkedIn, or GitHub — see the Contact section below.";
  } else if (lower.includes("hello") || lower.includes("hi")) {
    reply = "Hey there! 👋 How can I help you today?";
  }

  return res.status(200).json({ reply });
}
