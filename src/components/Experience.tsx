import { motion } from 'motion/react';
import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export const Experience = ({ experience }: { experience: any[] }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Professional Journey</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500",
                expandedIndex === index ? "ring-1 ring-blue-500/50" : "hover:bg-white/10"
              )}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-6">
                  <div className="mt-1 p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {exp.dates}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                  {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 pt-0 border-t border-white/5">
                  <div className="grid lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 space-y-4">
                      {exp.bullets.map((bullet: string, i: number) => (
                        <div key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {bullet}
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2">
                          <Zap size={14} /> Impact Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights?.map((highlight: string, i: number) => (
                            <span key={i} className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
