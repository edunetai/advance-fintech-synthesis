import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, Server, MessageSquare, FileText, TrendingUp, Shield, Smartphone, Globe, Code, Users, Award, CheckCircle } from 'lucide-react';
import { translations, Language } from '../translations';

interface LearnMoreProps {
  lang: Language;
}

export const LearnMore: React.FC<LearnMoreProps> = ({ lang }) => {
  const t = translations[lang].learnMore;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const phases = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: lang === 'vi' ? 'Giai đoạn 1: Trí tuệ tài chính dựa trên AI' : 'Phase 1: AI-Driven Financial Intelligence',
      color: "#00D2FF",
      items: lang === 'vi' 
        ? translations[lang].learnMore.phase1Items 
        : [
            { icon: <TrendingUp className="w-5 h-5" />, text: "Alternative Data: Use AI to collect and analyze non-traditional data (e.g., social media sentiment, satellite imagery, web-scraped retail trends, or mobile usage)" },
            { icon: <Shield className="w-5 h-5" />, text: "Improved Service Logic: Demonstrate how this data enhances core functions like credit scoring, fraud detection, or personalized investment advice" },
          ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: lang === 'vi' ? 'Giai đoạn 2: Hạ tầng API tùy chỉnh' : 'Phase 2: Custom API Infrastructure',
      color: "#FFC107",
      items: lang === 'vi'
        ? translations[lang].learnMore.phase2Items
        : [
            { icon: <Globe className="w-5 h-5" />, text: "Proprietary OpenAPI Servers: Develop a custom backend to resolve the limitations of global providers (like Stripe or Plaid), specifically regarding non-Vietnamese currency issues" },
            { icon: <Code className="w-5 h-5" />, text: "Localized Processing: Ensure the system acts as a central logic hub where transactions and local balances are displayed accurately for the target market" },
          ],
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: lang === 'vi' ? 'Giai đoạn 3: Tự động hóa Agentic & Tương tác' : 'Phase 3: Agentic Automation & Interaction',
      color: "#880E4F",
      items: lang === 'vi'
        ? translations[lang].learnMore.phase3Items
        : [
            { icon: <Smartphone className="w-5 h-5" />, text: "Advanced Chatbots: Integrate the Gemini API to move from simple chat to functional account management" },
            { icon: <Users className="w-5 h-5" />, text: "Natural Language Transactions: Enable users to execute actual transactions or query AI-derived insights through natural language commands" },
          ],
    },
  ];

  const evaluationCriteria = [
    { criteria: "AI & Alternative Data", weight: "30%", focus: "Extraction of value from non-traditional sources", color: "#00D2FF" },
    { criteria: "Custom API Infrastructure", weight: "30%", focus: "Proprietary server functionality and design", color: "#FFC107" },
    { criteria: "MVP UX & Agentic AI", weight: "20%", focus: "Seamless UI and chatbot action capabilities", color: "#880E4F" },
    { criteria: "Technical Documentation", weight: "20%", focus: "Clarity of the AI and backend technical stack", color: "#B2EBF2" },
  ];

  const submissions = [
    "A 5-page technical report",
    "OpenAPI documentation (Swagger/YAML)",
    "A deployed MVP prototype link",
  ];

  return (
    <section 
      id="learn-more" 
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1A237E]/20 to-[#121212]" />
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: `url('/images/prompt5.png')`,
          backgroundSize: 'cover'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline text-[#F5F5F5] neon-glow">
            {t.title}
          </h2>
          <p className="text-[#B2EBF2] max-w-3xl mx-auto font-body text-lg">
            {t.desc}
          </p>
        </motion.div>

        {/* Competition Phases */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 font-headline text-[#F5F5F5]">
            {t.phasesTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02]"
                style={{ borderColor: `${phase.color}30` }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${phase.color}10` }}
                />
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${phase.color}20`, color: phase.color }}
                  >
                    {phase.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#F5F5F5] mb-6 font-headline">
                    {phase.title}
                  </h4>
                  <ul className="space-y-4">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div style={{ color: phase.color }} className="flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <p className="text-[#B2EBF2] text-sm font-body">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Evaluation Criteria */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 font-headline text-[#F5F5F5]">
            {t.evaluationTitle}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-[#00D2FF]/20">
                  <th className="text-left py-4 px-6 text-[#F5F5F5] font-bold font-headline">Criteria</th>
                  <th className="text-center py-4 px-6 text-[#F5F5F5] font-bold font-headline">Weight</th>
                  <th className="text-left py-4 px-6 text-[#F5F5F5] font-bold font-headline">Focus Area</th>
                </tr>
              </thead>
              <tbody>
                {evaluationCriteria.map((item, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-[#00D2FF]/10 hover:bg-[#00D2FF]/5 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[#F5F5F5] font-medium">{item.criteria}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span 
                        className="inline-block px-4 py-1 rounded-full text-sm font-bold"
                        style={{ backgroundColor: `${item.color}20`, color: item.color }}
                      >
                        {item.weight}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#B2EBF2] font-body">{item.focus}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Required Submissions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-center mb-12 font-headline text-[#F5F5F5]">
            {t.submissionsTitle}
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#1A237E]/30 to-[#121212] rounded-2xl p-8 border border-[#00D2FF]/20">
              <ul className="space-y-4">
                {submissions.map((submission, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#00D2FF]/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#00D2FF]" />
                    </div>
                    <span className="text-[#F5F5F5] font-medium">{submission}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#00D2FF]/20">
                <div className="flex items-center justify-center space-x-2 text-[#FFC107]">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Projects will be presented at Demo Day attended by UII Incubator</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a 
            href="#register"
            className="cta-button inline-flex items-center space-x-2"
          >
            <span>Register Now</span>
            <CheckCircle className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
