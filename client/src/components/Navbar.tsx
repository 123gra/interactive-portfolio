import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Kadari Grace Magdalene
        </div>
        
        <ul className="hidden lg:flex gap-12 text-white/80 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="hover:text-purple-300 transition-colors py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <button 
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {open && (
        <div className="lg:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 px-6 py-6">
          <ul className="flex flex-col gap-6 text-white/90 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="hover:text-purple-300 py-2 block"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
