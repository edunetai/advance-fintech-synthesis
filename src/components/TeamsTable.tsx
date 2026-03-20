import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown, Users, Calendar, CheckCircle, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { translations, Language } from '../translations';

interface Team {
  id: number;
  teamName: string;
  teamCaptainName: string;
  registrationDate: string;
  status: 'confirmed' | 'pending';
}

type SortField = 'teamName' | 'teamCaptainName' | 'registrationDate' | 'status';
type SortDirection = 'asc' | 'desc';

interface TeamsTableProps {
  lang: Language;
}

export const TeamsTable: React.FC<TeamsTableProps> = ({ lang }) => {
  const t = translations[lang].teams;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>('registrationDate');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/teams');
      
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      
      const result = await response.json();
      
      if (result.success) {
        setTeams(result.data);
      } else {
        throw new Error(result.message || 'Failed to fetch teams');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedTeams = [...teams].sort((a, b) => {
    let comparison = 0;
    
    switch (sortField) {
      case 'teamName':
        comparison = a.teamName.localeCompare(b.teamName);
        break;
      case 'teamCaptainName':
        comparison = a.teamCaptainName.localeCompare(b.teamCaptainName);
        break;
      case 'registrationDate':
        comparison = new Date(a.registrationDate).getTime() - new Date(b.registrationDate).getTime();
        break;
      case 'status':
        comparison = a.status.localeCompare(b.status);
        break;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status: 'confirmed' | 'pending') => {
    if (status === 'confirmed') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] text-sm font-medium">
          <CheckCircle className="w-4 h-4" />
          {t.confirmed}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFC107]/20 text-[#FFC107] text-sm font-medium">
        <Clock className="w-4 h-4" />
        {t.pending}
      </span>
    );
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 opacity-50" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-4 h-4 text-[#00D2FF]" />
    ) : (
      <ArrowDown className="w-4 h-4 text-[#00D2FF]" />
    );
  };

  const SortableHeader: React.FC<{ field: SortField; children: React.ReactNode; className?: string }> = ({ 
    field, 
    children, 
    className = '' 
  }) => (
    <th 
      className={`px-6 py-4 text-left text-sm font-semibold text-[#B2EBF2] cursor-pointer hover:text-[#00D2FF] transition-colors ${className}`}
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-2">
        {children}
        {getSortIcon(field)}
      </div>
    </th>
  );

  if (loading) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1A237E]/20 to-[#121212]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-[#00D2FF] animate-spin" />
            <span className="ml-3 text-[#B2EBF2]">{t.loading}</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1A237E]/20 to-[#121212]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center py-20">
            <AlertCircle className="w-10 h-10 text-red-500" />
            <span className="ml-3 text-red-400">{error}</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="teams" 
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          {teams.length === 0 ? (
            <div className="text-center py-16">
              <Users className="w-16 h-16 mx-auto text-[#B2EBF2]/30 mb-4" />
              <p className="text-[#B2EBF2] text-lg">{t.noTeams}</p>
              <p className="text-[#B2EBF2]/60">{t.beFirst}</p>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-2xl border border-[#00D2FF]/20 overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#00D2FF]/20">
                      <SortableHeader field="teamName" className="pl-6">
                        {t.teamName}
                      </SortableHeader>
                      <SortableHeader field="teamCaptainName">
                        {t.teamCaptain}
                      </SortableHeader>
                      <SortableHeader field="registrationDate">
                        {t.registrationDate}
                      </SortableHeader>
                      <SortableHeader field="status">
                        {t.status}
                      </SortableHeader>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#00D2FF]/10">
                    {sortedTeams.map((team, index) => (
                      <motion.tr
                        key={team.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="hover:bg-[#00D2FF]/5 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#00D2FF]/20 flex items-center justify-center">
                              <Users className="w-5 h-5 text-[#00D2FF]" />
                            </div>
                            <span className="font-semibold text-[#F5F5F5]">{team.teamName}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#B2EBF2]">
                          {team.teamCaptainName}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-[#B2EBF2]">
                            <Calendar className="w-4 h-4" />
                            {formatDate(team.registrationDate)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(team.status)}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4 p-4">
                {sortedTeams.map((team, index) => (
                  <motion.div
                    key={team.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-[#1A237E]/30 rounded-xl p-4 border border-[#00D2FF]/20"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00D2FF]/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-[#00D2FF]" />
                        </div>
                        <span className="font-semibold text-[#F5F5F5]">{team.teamName}</span>
                      </div>
                      {getStatusBadge(team.status)}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-[#B2EBF2]">
                        <span className="text-[#B2EBF2]/60">Captain:</span>
                        <span>{team.teamCaptainName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#B2EBF2]">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(team.registrationDate)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Stats */}
        {teams.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-xl p-4 border border-[#00D2FF]/20 text-center">
              <div className="text-3xl font-bold text-[#00D2FF]">{teams.length}</div>
              <div className="text-[#B2EBF2] text-sm">{t.totalTeams}</div>
            </div>
            <div className="bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-xl p-4 border border-[#00D2FF]/20 text-center">
              <div className="text-3xl font-bold text-[#00D2FF]">
                {teams.filter(t => t.status === 'confirmed').length}
              </div>
              <div className="text-[#B2EBF2] text-sm">{t.confirmed}</div>
            </div>
            <div className="bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-xl p-4 border border-[#00D2FF]/20 text-center">
              <div className="text-3xl font-bold text-[#FFC107]">
                {teams.filter(t => t.status === 'pending').length}
              </div>
              <div className="text-[#B2EBF2] text-sm">{t.pending}</div>
            </div>
            <div className="bg-gradient-to-br from-[#1A237E]/40 to-[#121212] rounded-xl p-4 border border-[#00D2FF]/20 text-center">
              <div className="text-3xl font-bold text-[#F5F5F5]">
                {teams.reduce((acc, t) => acc + 3, 0)}
              </div>
              <div className="text-[#B2EBF2] text-sm">{t.totalParticipants}</div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
