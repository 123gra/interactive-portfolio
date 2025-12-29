import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ChatBot from './ChatBot';
import './styles/hero.css';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

function App() {
  const projects: Project[] = [
    {
      title: 'NFT Marketplace Landing Page',
      description:
        'A UI-heavy, pixel-perfect NFT marketplace landing page built with React, recreating the Carbon Crunch Figma design with hero sections, trending NFTs, artists, CTA, and footer.',
      technologies: ['React', 'Tailwind CSS', 'UI/UX'],
      githubLink: 'https://github.com/123gra/nftme'
    },
    {
      title: 'Playwright E2E Automation Framework',
      description:
        'End-to-end automation framework for the Buggy Cars Rating application with reusable test architecture and reporting.',
      technologies: ['Playwright', 'JavaScript', 'Automation'],
      githubLink: 'https://github.com/123gra/goquant-qa-automation'
    },
    {
      title: 'MapUp Fleet Tracking Dashboard',
      description:
        'A real-time fleet tracking dashboard visualizing vehicle trips, live status, and animated route playback using interactive maps.',
      technologies: ['React', 'Leaflet', 'CSS'],
      githubLink: 'https://github.com/123gra/fleet-tracking-dashboard'
    },
    {
      title: 'AI Chat Portal (Full Stack)',
      description:
        'A full-stack AI chat platform built with React and Django where conversations are stored in PostgreSQL and summarized using GPT.',
      technologies: ['React', 'Django', 'PostgreSQL', 'AI'],
      githubLink: 'https://github.com/123gra/ai-chat-portal'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white overflow-x-hidden antialiased">

      <Navbar />

     {/* HERO SECTION */}
<section id="about" className="hero-section relative z-10 min-h-screen flex items-center justify-center px-6">
  <div className="max-w-7xl mx-auto text-center">

    {/* Role badge */}
    <div className="hero-role-badge inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 max-w-fit mx-auto">
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-pulse"></div>
      <span className="text-lg font-semibold text-purple-300 tracking-wide uppercase">
        Full Stack Engineer & QA Automation Specialist
      </span>
    </div>

    {/* Main headline */}
    <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-white via-purple-50 to-pink-100 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
  Kadari Grace Magdalene
</h1>


    {/* Subtitle */}
    <h2 className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-medium text-white/90 max-w-4xl mx-auto leading-relaxed">
  Building UI-heavy React applications, scalable backends, and automation-first testing solutions with Playwright
</h2>


    {/* Description */}
    <p className="hero-description text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
      MCA graduate passionate about clean UI design, full-stack development, CI/CD pipelines, and delivering high-quality, production-ready software.
    </p>

    {/* CTA */}
    <a
      href="#projects"
      className="inline-flex items-center justify-center px-14 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xl font-bold shadow-xl transition-all duration-300"
    >
      View My Projects
    </a>

  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-200 text-center mb-20">
            Full Stack Development · UI Engineering · Automation · Cloud
          </p>
          <Skills />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-10">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/30 rounded-3xl p-8 hover:scale-105 transition shadow-lg"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-200 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-emerald-500/30 text-emerald-200 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-semibold"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
     <section
  id="contact"
  className="relative z-10 py-24 px-6 bg-white/5 backdrop-blur-xl border-t border-white/10"
>
  <div className="max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      Get In Touch
    </h2>

    <p className="text-xl text-gray-200 mb-16 max-w-2xl mx-auto">
      Open to full-stack, frontend, and QA automation opportunities.  
      Let’s connect and build something impactful.
    </p>

    {/* Contact cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Email */}
      <a
        href="mailto:gracemagdalene1305@gmail.com"
        className="group p-8 rounded-2xl bg-white/10 border border-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105"
      >
        <div className="text-4xl mb-4">✉️</div>
        <h3 className="text-xl font-bold text-white mb-2">Email</h3>
        <p className="text-gray-100 break-all">
          gracemagdalene1305@gmail.com
        </p>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/grace-magdalene-kadari-52494a1a0"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-8 rounded-2xl bg-white/10 border border-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105"
      >
        <div className="text-4xl mb-4">💼</div>
        <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
        <p className="text-gray-100">
          View Profile
        </p>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/123gra"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-8 rounded-2xl bg-white/10 border border-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105"
      >
        <div className="text-4xl mb-4">🐙</div>
        <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
        <p className="text-gray-100">
          github.com/123gra
        </p>
      </a>

    </div>
  </div>
</section>

      <ChatBot />

      <footer className="border-t border-white/20 py-10 text-center text-gray-300">
        © 2025 Kadari Grace Magdalene · React · TypeScript · Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
