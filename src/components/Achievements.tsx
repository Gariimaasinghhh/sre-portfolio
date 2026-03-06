import { motion } from 'motion/react';
import { Trophy, Star, Target } from 'lucide-react';

export const Achievements = ({ achievements }: { achievements: any[] }) => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-blue-600/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Key Achievements</h2>
          <p className="text-slate-400">Measurable impact and professional milestones.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {index === 0 ? <Trophy size={24} /> : index === 1 ? <Star size={24} /> : <Target size={24} />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
