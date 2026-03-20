import React from 'react';
import { motion } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import { Language, translations } from '../translations';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = translations[lang].nav;

  const navItems = [
    { name: t.home, href: '#' },
    { name: 'Details', href: '#learn-more' },
    { name: t.competition, href: '#competition' },
    { name: t.gapAnalysis, href: '#gap-analysis' },
    { name: t.sponsors, href: '#sponsors' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-[#00D2FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo from prompt1.png */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/images/prompt1.png" 
                alt="AFS 2026" 
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#F5F5F5] hover:text-[#00D2FF] px-3 py-2 rounded-md text-sm font-medium transition-colors font-body"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
              className="flex items-center space-x-1 text-[#B2EBF2] hover:text-[#00D2FF] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{lang}</span>
            </button>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#F5F5F5] hover:text-[#00D2FF]"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#121212] border-b border-[#00D2FF]/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#F5F5F5] hover:text-[#00D2FF] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
