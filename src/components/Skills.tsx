import { motion } from 'motion/react';
import { Code2, Cloud, Database, Terminal } from 'lucide-react';

export const Skills = ({ skills }: { skills: any[] }) => {
  const getIcon = (category: string) => {
    if (category.includes('Core')) return <Code2 size={20} />;
    if (category.includes('Cloud')) return <Cloud size={20} />;
    if (category.includes('Database')) return <Database size={20} />;
    return <Terminal size={20} />;
  };

  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-white/5 text-slate-300 text-sm hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
