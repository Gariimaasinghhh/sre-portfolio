import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const Education = ({ education, certifications }: { education: any[], certifications: string[] }) => {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <GraduationCap className="text-blue-500" /> Education
            </h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                <p className="text-blue-400 text-sm mb-2">{edu.degree}</p>
                <p className="text-slate-500 text-xs font-mono">{edu.dates}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Award className="text-blue-500" /> Certifications
            </h2>
          </motion.div>

          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span className="text-slate-300 text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
