import React, { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Send, User, Mail, Phone, Building, Users, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { translations, Language } from '../translations';

interface FormData {
  teamName: string;
  teamLeaderName: string;
  email: string;
  phone: string;
  institution: string;
  teamSize: string;
}

interface FormErrors {
  teamName?: string;
  teamLeaderName?: string;
  email?: string;
  phone?: string;
  institution?: string;
  teamSize?: string;
}

interface RegistrationFormProps {
  lang: Language;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ lang }) => {
  const t = translations[lang].register;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    teamLeaderName: '',
    email: '',
    phone: '',
    institution: '',
    teamSize: '3',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    }
    if (!formData.teamLeaderName.trim()) {
      newErrors.teamLeaderName = 'Team leader name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.institution.trim()) {
      newErrors.institution = 'Institution/Company is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      const result = await response.json();
      console.log('Registration successful:', result);
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (error?: string) => `
    w-full px-4 py-3 rounded-xl bg-[#1A237E]/30 border ${
      error ? 'border-red-500' : 'border-[#00D2FF]/20'
    } text-[#F5F5F5] placeholder-[#B2EBF2]/50 font-body
    focus:outline-none focus:border-[#00D2FF] transition-colors
  `;

  if (isSubmitted) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1A237E]/20 to-[#121212]" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 relative z-10 text-center"
        >
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#00D2FF]/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-[#00D2FF]" />
          </div>
          <h2 className="text-3xl font-bold mb-4 font-headline text-[#F5F5F5]">
            Registration Successful!
          </h2>
          <p className="text-[#B2EBF2] mb-8 font-body">
            Thank you for registering for AFS 2026. We have received your submission and will contact you at {formData.email} with further details.
          </p>
          <a 
            href="#"
            className="inline-block px-8 py-4 bg-[#00D2FF] text-[#121212] font-bold rounded-xl hover:bg-[#00D2FF]/90 transition-colors"
          >
            Back to Home
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <section 
      id="register" 
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline text-[#F5F5F5] neon-glow">
            {t.title}
          </h2>
          <p className="text-[#B2EBF2] max-w-2xl mx-auto font-body text-lg">
            {t.desc}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Team Info */}
          <div className="bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-2xl p-8 border border-[#00D2FF]/20">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-6 font-headline flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#00D2FF]" />
              <span>Team Information</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#B2EBF2] text-sm font-medium mb-2">
                  Team Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Enter your team name"
                    className={inputClasses(errors.teamName)}
                  />
                  {errors.teamName && (
                    <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
                  )}
                </div>
                {errors.teamName && (
                  <p className="text-red-500 text-xs mt-1">{errors.teamName}</p>
                )}
              </div>

              <div>
                <label className="block text-[#B2EBF2] text-sm font-medium mb-2">
                  Team Size *
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className={inputClasses()}
                >
                  <option value="2">2 Members</option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                  <option value="5">5 Members</option>
                </select>
              </div>
            </div>
          </div>

          {/* Team Leader Info */}
          <div className="bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-2xl p-8 border border-[#00D2FF]/20">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-6 font-headline flex items-center space-x-2">
              <User className="w-5 h-5 text-[#00D2FF]" />
              <span>Team Leader Details</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#B2EBF2] text-sm font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="teamLeaderName"
                    value={formData.teamLeaderName}
                    onChange={handleChange}
                    placeholder="Team leader's full name"
                    className={inputClasses(errors.teamLeaderName)}
                  />
                  {errors.teamLeaderName && (
                    <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
                  )}
                </div>
                {errors.teamLeaderName && (
                  <p className="text-red-500 text-xs mt-1">{errors.teamLeaderName}</p>
                )}
              </div>

              <div>
                <label className="block text-[#B2EBF2] text-sm font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-[#B2EBF2]/50" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`${inputClasses(errors.email)} pl-12`}
                  />
                  {errors.email && (
                    <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
                  )}
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-[#B2EBF2] text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-[#B2EBF2]/50" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+84 xxx xxx xxx"
                    className={`${inputClasses(errors.phone)} pl-12`}
                  />
                  {errors.phone && (
                    <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
                  )}
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-[#B2EBF2] text-sm font-medium mb-2">
                  Institution/Company *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-5 h-5 text-[#B2EBF2]/50" />
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="University or Company name"
                    className={`${inputClasses(errors.institution)} pl-12`}
                  />
                  {errors.institution && (
                    <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
                  )}
                </div>
                {errors.institution && (
                  <p className="text-red-500 text-xs mt-1">{errors.institution}</p>
                )}
              </div>
            </div>
          </div>


          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all ${
              isSubmitting
                ? 'bg-[#00D2FF]/50 cursor-not-allowed'
                : 'bg-[#00D2FF] text-[#121212] hover:bg-[#00D2FF]/90'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#121212]/30 border-t-[#121212] rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Registration</span>
              </>
            )}
          </motion.button>

          <p className="text-center text-[#B2EBF2]/60 text-sm">
            By submitting, you agree to our terms and conditions.
          </p>
        </motion.form>
      </div>
    </section>
  );
};
