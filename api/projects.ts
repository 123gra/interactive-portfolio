import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const projects = [
    {
      title: "NFT Marketplace Landing Page",
      description:
        "UI-heavy NFT marketplace landing page built with React and Tailwind.",
      technologies: ["React", "Tailwind CSS", "UI/UX"],
      githubLink: "https://github.com/123gra/nftme",
    },
    {
      title: "Playwright Automation Framework",
      description:
        "End-to-end automation framework with Playwright.",
      technologies: ["Playwright", "JavaScript"],
      githubLink: "https://github.com/123gra/goquant-qa-automation",
    },
  ];

  return res.status(200).json({ projects });
}
