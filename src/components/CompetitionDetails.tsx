import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { Calendar, Users, Trophy, FileText, UserCheck } from 'lucide-react';

interface CompetitionDetailsProps {
  lang: Language;
}

// Card icon components using icon1-4.png
const CardIcons = {
  icon1: () => (
    <img src="/images/icon1.png" alt="" className="w-12 h-12 object-contain" />
  ),
  icon2: () => (
    <img src="/images/icon2.png" alt="" className="w-12 h-12 object-contain" />
  ),
  icon3: () => (
    <img src="/images/icon3.png" alt="" className="w-12 h-12 object-contain" />
  ),
  icon4: () => (
    <img src="/images/icon4.png" alt="" className="w-12 h-12 object-contain" />
  ),
};

export const CompetitionDetails: React.FC<CompetitionDetailsProps> = ({ lang }) => {
  const t = translations[lang].competition;

  return (
    <section id="competition" className="py-24 bg-texture relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[#121212]" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none"
        style={{ backgroundImage: `url('/images/prompt5.png')` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center font-headline text-[#F5F5F5] neon-glow">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Registration Card with icon1 */}
          <motion.div
            whileHover={{ y: -5, borderColor: 'rgba(0,210,255,0.6)' }}
            className="feature-card"
          >
            <div className="w-14 h-14 rounded-xl bg-[#00D2FF]/10 flex items-center justify-center mb-6 neon-border">
              <CardIcons.icon1 />
            </div>
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 font-headline">{t.registration.title}</h3>
            <p className="text-[#B2EBF2] mb-6 font-body">{t.registration.desc}</p>
            <a href="#register" className="px-6 py-2 bg-[#00D2FF]/10 border border-[#00D2FF]/50 text-[#00D2FF] rounded-lg font-bold hover:bg-[#00D2FF] hover:text-[#121212] transition-all luminous-pulse inline-block">
              {t.registration.link}
            </a>
          </motion.div>

          {/* Eligibility Card with icon2 */}
          <motion.div
            whileHover={{ y: -5, borderColor: 'rgba(255,193,7,0.6)' }}
            className="feature-card"
          >
            <div className="w-14 h-14 rounded-xl bg-[#FFC107]/10 flex items-center justify-center mb-6 neon-border">
              <CardIcons.icon2 />
            </div>
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 font-headline">{t.eligibility.title}</h3>
            <p className="text-[#B2EBF2] font-body">{t.eligibility.desc}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Important Dates Card with icon3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="feature-card"
          >
            <div className="flex items-center space-x-3 mb-8">
              <CardIcons.icon3 />
              <h3 className="text-xl font-bold text-[#F5F5F5] font-headline">{t.dates.title}</h3>
            </div>
            <div className="space-y-6">
              {t.dates.items.map((item, i) => (
                <div key={i} className="relative pl-6 border-l border-[#00D2FF]/30">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-[#00D2FF]" />
                  <div className="text-sm font-bold text-[#00D2FF] mb-1">{item.date}</div>
                  <div className="text-[#B2EBF2] font-body">{item.event}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Prizes Card with icon4 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="feature-card"
          >
            <div className="flex items-center space-x-3 mb-8">
              <CardIcons.icon4 />
              <h3 className="text-xl font-bold text-[#F5F5F5] font-headline">{t.prizes.title}</h3>
            </div>
            <div className="space-y-6">
              {t.prizes.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#1A237E]/30 border border-[#FFC107]/20">
                  <div>
                    <div className="text-xs font-bold text-[#B2EBF2] uppercase">{item.rank}</div>
                    <div className="text-sm font-bold text-[#F5F5F5]">{item.value}</div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 0 ? 'bg-[#FFC107]/20 text-[#FFC107]' : 'bg-[#1A237E] text-[#B2EBF2]'}`}>
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Guidelines Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="feature-card"
          >
            <div className="flex items-center space-x-3 mb-8">
              <Trophy className="w-12 h-12 text-[#880E4F]" />
              <h3 className="text-xl font-bold text-[#F5F5F5] font-headline">{t.guidelines.title}</h3>
            </div>
            <p className="text-[#B2EBF2] mb-8 font-body">{t.guidelines.desc}</p>
            <div className="p-4 rounded-xl bg-[#880E4F]/5 border border-[#880E4F]/20 text-xs text-[#880E4F] font-mono">
              // SUBMISSION_FORMAT: PDF_5P + MVP_LINK
              <br />
              // DEADLINE: 2026-04-15T23:59:59Z
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
