import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LearnMore } from './components/LearnMore';
import { Sponsors } from './components/Sponsors';
import { CompetitionDetails } from './components/CompetitionDetails';
import { GapAnalysis } from './components/GapAnalysis';
import { RegistrationForm } from './components/RegistrationForm';
import { TeamsTable } from './components/TeamsTable';
import { Footer } from './components/Footer';
import { Language } from './translations';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Chat from './components/Chat';

function AppContent() {
  const [lang, setLang] = React.useState<Language>('vi');
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-body selection:bg-[#00D2FF]/30 selection:text-[#00D2FF] ${theme === 'dark' ? 'bg-[#121212] text-[#F5F5F5]' : 'bg-[#F5F5F5] text-[#121212]'}`}>
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <LearnMore lang={lang} />
        <Sponsors lang={lang} />
        <CompetitionDetails lang={lang} />
        <GapAnalysis lang={lang} />
        <RegistrationForm lang={lang} />
        <TeamsTable lang={lang} />
      </main>

      <Footer lang={lang} />
      <Chat />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
