import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-[#1A237E] hover:bg-[#00D2FF]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#FFC107]" />
      ) : (
        <Moon className="w-5 h-5 text-[#121212]" />
      )}
    </button>
  );
};
