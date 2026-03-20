import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Language, translations } from '../translations';
import { ChevronRight, Zap } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with prompt2.png */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/images/prompt2.png')`,
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/90 via-[#121212]/60 to-[#121212]" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      {/* Parallax Floating Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-32 right-10 w-64 h-64 pointer-events-none hidden lg:block"
      >
        <div className="relative w-full h-full">
          {/* Holographic graph elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 right-0 p-4 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 backdrop-blur-md"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span className="text-[10px] font-mono text-[#00D2FF] uppercase tracking-widest">Market Analysis</span>
            </div>
            <div className="flex items-end space-x-1 h-16">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div 
                  key={i}
                  className="w-3 bg-[#00D2FF]/60 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-32 left-10 w-48 pointer-events-none hidden lg:block"
      >
        {/* Flying crane parallax */}
        <img 
          src="/images/prompt4.png" 
          alt="" 
          className="w-full h-auto opacity-30"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ opacity }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>{t.tagline}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 font-headline text-[#F5F5F5] neon-glow">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-[#00D2FF]' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-2xl text-[#B2EBF2] mb-12 max-w-3xl mx-auto font-body font-light tracking-wide">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,210,255,0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="cta-button flex items-center space-x-2 group"
            >
              <span>{t.cta}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <button className="px-8 py-4 border border-[#FFC107]/50 text-[#FFC107] font-bold rounded-xl hover:bg-[#FFC107]/10 transition-all backdrop-blur-md luminous-pulse">
              <a href="#learn-more">Learn More</a>
            </button>
          </div>
        </motion.div>
      </div>

      {/* VND Transaction Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#1A237E]/30 backdrop-blur-sm">
        <div className="ticker-animate flex whitespace-nowrap py-2">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-8 text-xs font-mono text-[#00D2FF]">
                VND 15,000,000 → Transaction #AFS{i + 1001}
              </span>
              <span className="mx-8 text-xs font-mono text-[#FFC107]">
                VND 28,500,000 → Payment Received
              </span>
              <span className="mx-8 text-xs font-mono text-[#B2EBF2]">
                VND 5,200,000 → Transfer Complete
              </span>
              <span className="mx-8 text-xs font-mono text-[#00D2FF]">
                VND 42,000,000 → Investment +%
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
