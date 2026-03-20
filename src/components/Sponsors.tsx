import React from 'react';
import { motion, useInView } from 'motion/react';
import { Language, translations } from '../translations';
import { Award, Star } from 'lucide-react';
import { useRef } from 'react';

interface SponsorsProps {
  lang: Language;
}

export const Sponsors: React.FC<SponsorsProps> = ({ lang }) => {
  const t = translations[lang].sponsors;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const goldSponsors = [
    { name: 'Edunet', logo: '/images/edunetjsc-logo.png', alt: 'Edunet JSC - Gold Sponsor' },
    { name: 'UII', logo: '/images/UII-logo.png', alt: 'UII - Gold Sponsor' },
    { name: 'UII Incubator', logo: '/images/uii-incubator-logo.png', alt: 'UII Incubator - Gold Sponsor' },
  ];

  const silverSponsors = [
    { name: 'Long Dat Laptop', logo: '/images/LongDat-logo.png', alt: 'Long Dat Laptop - Silver Sponsor' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="sponsors" 
      className="py-24 relative overflow-hidden"
      aria-labelledby="sponsors-title"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1A237E]/20 to-[#121212]" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: `url('/images/prompt5.png')`,
          backgroundSize: 'cover'
        }}
      />

      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            id="sponsors-title"
            className="text-4xl md:text-5xl font-bold mb-6 font-headline text-[#F5F5F5] neon-glow"
          >
            {t.title}
          </h2>
          <p className="text-[#B2EBF2] max-w-2xl mx-auto font-body text-lg">
            {t.desc}
          </p>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/30 text-[#FFC107] text-sm font-bold mb-10 uppercase tracking-widest"
          >
            <Star className="w-5 h-5 fill-[#FFC107]" />
            <span>{t.gold}</span>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {goldSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-2xl p-8 border border-[#FFC107]/20 hover:border-[#FFC107]/50 transition-all duration-300 cursor-pointer"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#FFC107]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative flex items-center justify-center h-32">
                  <div className="absolute inset-0 bg-[#FFC107]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    className={`relative max-h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${
                      sponsor.name === 'Edunet' ? 'scale-[300%]' : 'scale-[120%]'
                    }`}
                    loading="lazy"
                  />
                </div>
                
                {/* Sponsor Name */}
                <p className="mt-4 text-[#F5F5F5] font-medium font-body text-sm group-hover:text-[#FFC107] transition-colors">
                  {sponsor.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-[#B2EBF2]/10 border border-[#B2EBF2]/30 text-[#B2EBF2] text-sm font-bold mb-10 uppercase tracking-widest"
          >
            <Award className="w-5 h-5" />
            <span>{t.silver}</span>
          </motion.div>
          
          <div className="flex justify-center">
            {silverSponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-[#1A237E]/30 to-[#121212] rounded-2xl p-8 border border-[#B2EBF2]/20 hover:border-[#B2EBF2]/50 transition-all duration-300 cursor-pointer max-w-sm w-full"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#B2EBF2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative flex items-center justify-center h-28">
                  <div className="absolute inset-0 bg-[#B2EBF2]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    className={`relative max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${
                      sponsor.name === 'Long Dat Laptop' ? 'scale-[175%]' : ''
                    }`}
                    loading="lazy"
                  />
                </div>
                
                {/* Sponsor Name */}
                <p className="mt-4 text-[#F5F5F5] font-medium font-body text-sm group-hover:text-[#B2EBF2] transition-colors text-center">
                  {sponsor.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
