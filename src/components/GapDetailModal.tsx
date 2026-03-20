import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, ExternalLink } from 'lucide-react';

interface GapDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  gap: {
    title: string;
    desc: string;
    details: string;
  } | null;
  index: number;
}

export const GapDetailModal: React.FC<GapDetailModalProps> = ({ isOpen, onClose, gap, index }) => {
  if (!gap) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl neon-border"
          >
            {/* Cyberpunk Header */}
            <div className="relative h-32 bg-slate-800 overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <div className="text-xs font-bold text-cyan-400 mb-1 uppercase tracking-[0.2em]">Gap Analysis Profile #{index + 1}</div>
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">{gap.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900/50 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 sm:p-10">
              {/* Gap Image */}
              <div className="mb-8 rounded-2xl overflow-hidden border border-cyan-500/20">
                <img 
                  src={`/images/gap${index + 1}.png`} 
                  alt={`Gap ${index + 1}: ${gap.title}`}
                  className="w-full h-auto"
                />
              </div>

              <div className="flex items-start space-x-4 mb-8 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                <Info className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                <p className="text-cyan-100/80 italic text-sm leading-relaxed">
                  {gap.desc}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                  <div className="w-1 h-6 bg-pink-500 rounded-full" />
                  <span>Structural Analysis</span>
                </h3>
                <p className="text-slate-400 leading-relaxed text-base mb-8">
                  {gap.details}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Strategic Impact</div>
                    <div className="text-sm text-slate-300">High priority for Gen-Z fintech innovators focusing on financial inclusion.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Regulatory Context</div>
                    <div className="text-sm text-slate-300">Subject to SBV Decree 94/2025/ND-CP sandbox frameworks.</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Data Verified: 2026-03-19</span>
                </div>
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-bold">
                  <span>View Source Document</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
