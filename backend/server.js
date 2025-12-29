import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}));
app.use(express.json());

const projects = [
  {
    id: 1,
    title: "NFT Landing Page",
    description: "Responsive React landing page matching Figma design",
    tech: ["React", "CSS Grid", "Responsive"],
    image: "https://via.placeholder.com/400x250/9d4edd/ffffff?text=NFT",
    github: "https://github.com/yourusername/nft-landing"
  },
  {
    id: 2,
    title: "Playwright Test Automation", 
    description: "Full test suite with CI/CD pipeline integration",
    tech: ["Playwright", "TypeScript", "GitHub Actions"],
    image: "https://via.placeholder.com/400x250/4f46e5/ffffff?text=QA",
    github: "https://github.com/yourusername/playwright-tests"
  },
  {
    id: 3,
    title: "Interactive Portfolio",
    description: "AI-powered portfolio with backend API + chatbot",
    tech: ["React", "Tailwind", "Node.js", "AI"],
    image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Portfolio",
    github: "https://github.com/yourusername/interactive-portfolio"
  }
];

app.get('/api/projects', (req, res) => {
  res.json({ projects });
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid message' });
  }

  let reply = "I'm working on understanding that! Check back soon.";
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('project')) {
    reply = "I've worked on several projects! Check the Featured Projects section to see my latest work.";
  } else if (lowerMessage.includes('skill')) {
    reply = "I specialize in Playwright automation, React development, and CI/CD pipelines. See my skills section!";
  } else if (lowerMessage.includes('contact')) {
    reply = "You can reach me via email or LinkedIn. Use the contact section above!";
  } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    reply = "Hey there! How can I help you today?";
  }

  res.json({ reply });
});

const PORT = process.env.API_PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend API running: http://localhost:${PORT}/api/projects`);
});