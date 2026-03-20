import React from 'react';
import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].nav;

  return (
    <footer className="py-12 bg-[#121212] border-t border-[#00D2FF]/20 relative overflow-hidden">
      {/* Crane watermark from prompt4.png */}
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-10">
        <img 
          src="/images/prompt4.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            {/* Logo from prompt1.png */}
            <img 
              src="/images/prompt1.png" 
              alt="AFS 2026" 
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-[#B2EBF2] max-w-sm font-body">
              Advance Fintech Synthesis: Bridging the gap between traditional finance and localized AI innovation for Vietnam's Gen-Z.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-[#F5F5F5] uppercase mb-6 tracking-widest font-headline">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#B2EBF2] hover:text-[#00D2FF] transition-colors font-body">{t.home}</a></li>
              <li><a href="#competition" className="text-[#B2EBF2] hover:text-[#00D2FF] transition-colors font-body">{t.competition}</a></li>
              <li><a href="#gap-analysis" className="text-[#B2EBF2] hover:text-[#00D2FF] transition-colors font-body">{t.gapAnalysis}</a></li>
              <li><a href="#demos" className="text-[#B2EBF2] hover:text-[#00D2FF] transition-colors font-body">{t.demos}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#00D2FF]/20 flex flex-col md:flex-row justify-between items-center text-xs text-[#B2EBF2]">
          <p>© 2026 Advance Fintech Synthesis. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#00D2FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00D2FF] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
