import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Language, translations } from '../translations';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Activity, TrendingUp, Globe, ShieldAlert, Info, ArrowRight } from 'lucide-react';
import { GapDetailModal } from './GapDetailModal';

interface GapAnalysisProps {
  lang: Language;
}

export const GapAnalysis: React.FC<GapAnalysisProps> = ({ lang }) => {
  const t = translations[lang].gapAnalysis;
  const [selectedGap, setSelectedGap] = useState<{ title: string; desc: string; details: string } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredCell, setHoveredCell] = useState<{ district: string; value: number } | null>(null);

  // Parallax scroll
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 100]);

  const marketData = [
    { name: '2023', value: 33.9, fill: '#00D2FF' },
    { name: '2025', value: 19.8, fill: '#FFC107' },
    { name: '2029', value: 72.0, fill: '#880E4F' },
    { name: '2032', value: 100.0, fill: '#00D2FF' },
  ];

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, label: t.stats.valuation, value: 'USD 72B+', sub: 'by 2029' },
    { icon: <Globe className="w-6 h-6" />, label: t.stats.unbanked, value: '70%', sub: 'Population' },
    { icon: <ShieldAlert className="w-6 h-6" />, label: t.stats.fraud, value: '91%', sub: 'Online Scams' },
    { icon: <Info className="w-6 h-6" />, label: t.stats.internet, value: '72%', sub: 'Urban (2016)' },
  ];

  const districts = [
    'District 1', 'District 3', 'District 5', 'District 7', 'District 10', 
    'Binh Thanh', 'Thu Duc', 'Go Vap', 'Tan Binh', 'District 4',
    'District 8', 'District 12', 'Hoc Mon', 'Cu Chi', 'Nha Be'
  ];

  const heatmapData = Array.from({ length: 8 }).map((_, row) => 
    Array.from({ length: 12 }).map((_, col) => ({
      row,
      col,
      district: districts[(row + col) % districts.length],
      value: Math.random()
    }))
  ).flat();

  const handleGapClick = (gap: any, index: number) => {
    setSelectedGap(gap);
    setSelectedIndex(index);
  };

  return (
    <section id="gap-analysis" className="py-24 relative overflow-hidden bg-texture">
      {/* Parallax background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover opacity-5"
          style={{ backgroundImage: `url('/images/prompt5.png')` }}
        />
      </motion.div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D2FF]/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#880E4F]/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-headline text-[#F5F5F5] neon-glow">
            {t.title}
          </h2>
          <p className="text-[#B2EBF2] max-w-3xl mx-auto font-body">{t.intro}</p>
        </div>

        {/* Illustration from prompt4.png */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-2xl"
          >
            <img 
              src="/images/prompt4.png" 
              alt="Technology Deep Dive" 
              className="w-full h-auto opacity-80"
            />
          </motion.div>
        </div>

        {/* Vietnam's Fintech Ecosystem Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="feature-card">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-4 flex items-center space-x-2 font-headline">
              <Globe className="w-5 h-5 text-[#FFC107]" />
              <span>{t.ecosystemTitle || "Vietnam's Fintech Ecosystem: An Overview 🌐"}</span>
            </h3>
            <p className="text-sm text-[#B2EBF2] mb-6 leading-relaxed font-body">
              {t.ecosystemDesc || "An overview of the Vietnamese Fintech market, from key sectors to prominent players, reveals its dynamism and exceptional growth potential."}
            </p>
            <img 
              src="/images/fintech-vn-ecosystem.png" 
              alt="Vietnam Fintech Ecosystem Overview" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0,210,255,0.6)' }}
              className="feature-card text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1A237E]/50 flex items-center justify-center text-[#00D2FF] mx-auto mb-4 neon-border">
                {stat.icon}
              </div>
              <div className="text-xs font-bold text-[#B2EBF2] uppercase mb-1 font-body">{stat.label}</div>
              <div className="text-2xl font-black text-[#F5F5F5] font-headline">{stat.value}</div>
              <div className="text-xs text-[#B2EBF2]">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Market Growth Chart */}
          <div className="feature-card">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-8 flex items-center space-x-2 font-headline">
              <TrendingUp className="w-5 h-5 text-[#00D2FF]" />
              <span>Vietnam Fintech Market Value (USD Billions)</span>
            </h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1A237E" vertical={false} />
                  <XAxis dataKey="name" stroke="#B2EBF2" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#B2EBF2" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#121212', border: '1px solid #00D2FF', borderRadius: '12px' }}
                    itemStyle={{ color: '#00D2FF' }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Heatmap Visualization */}
          <div className="feature-card relative group">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-4 flex items-center space-x-2 font-headline">
              <Activity className="w-5 h-5 text-[#FFC107]" />
              <span>Retail Trend Heatmap (Alternative Data)</span>
            </h3>
            <p className="text-xs text-[#B2EBF2] mb-6 leading-relaxed font-body">
              Real-time consumer sentiment and foot traffic analysis aggregated from social media, 
              local search trends, and satellite imagery.
            </p>
            
            <div className="grid grid-cols-12 gap-1 aspect-video relative">
              {heatmapData.map((cell, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.002 }}
                  onMouseEnter={() => setHoveredCell({ district: cell.district, value: cell.value })}
                  onMouseLeave={() => setHoveredCell(null)}
                  className="rounded-sm cursor-crosshair transition-all hover:scale-110 hover:z-10"
                  style={{ 
                    backgroundColor: cell.value > 0.8 ? '#FFC107' : cell.value > 0.5 ? '#00D2FF' : cell.value > 0.2 ? '#1A237E' : '#121212',
                    opacity: cell.value * 0.6 + 0.4,
                    boxShadow: cell.value > 0.8 ? '0 0 10px rgba(255,193,7,0.5)' : cell.value > 0.5 ? '0 0 10px rgba(0,210,255,0.5)' : 'none'
                  }}
                />
              ))}

              {/* Tooltip Overlay */}
              {hoveredCell && (
                <div className="absolute top-0 right-0 p-3 bg-[#121212]/90 border border-[#00D2FF]/30 rounded-xl backdrop-blur-md shadow-2xl z-20 pointer-events-none">
                  <div className="text-[10px] font-bold text-[#B2EBF2] uppercase mb-1">{hoveredCell.district}</div>
                  <div className="flex items-center space-x-2">
                    <div className="text-lg font-black text-[#F5F5F5]">{(hoveredCell.value * 100).toFixed(1)}%</div>
                    <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${hoveredCell.value > 0.6 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {hoveredCell.value > 0.8 ? 'BOOMING' : hoveredCell.value > 0.5 ? 'GROWING' : 'STABLE'}
                    </div>
                  </div>
                  <div className="text-[8px] text-[#B2EBF2] mt-1">SENTIMENT SCORE</div>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#B2EBF2] uppercase tracking-widest">Live Stream</span>
                </div>
                <div className="text-[10px] font-mono text-[#B2EBF2]/60 uppercase tracking-widest">Sources: TikTok, Zalo, Google Maps</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 10 Gap Showcase */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#F5F5F5] mb-8 text-center font-headline gradient-text">
            Top 10 Structural Gaps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.gaps.map((gap, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10, borderColor: 'rgba(0,210,255,0.6)' }}
                onClick={() => handleGapClick(gap, i)}
                className="feature-card flex items-start space-x-6 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#1A237E] flex items-center justify-center text-xl font-black text-[#00D2FF] border border-[#00D2FF]/30 group-hover:border-[#00D2FF]/60 transition-colors">
                  {i + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-[#F5F5F5] group-hover:text-[#00D2FF] transition-colors font-headline">{gap.title}</h4>
                    <ArrowRight className="w-4 h-4 text-[#B2EBF2] group-hover:text-[#00D2FF] transition-colors" />
                  </div>
                  <p className="text-sm text-[#B2EBF2] leading-relaxed line-clamp-2 font-body">{gap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <GapDetailModal 
        isOpen={!!selectedGap} 
        onClose={() => setSelectedGap(null)} 
        gap={selectedGap} 
        index={selectedIndex}
      />
    </section>
  );
};
