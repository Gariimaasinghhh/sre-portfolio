import { motion } from 'motion/react';
import { ChevronRight, Download, ExternalLink, Mail, MapPin } from 'lucide-react';

export const Hero = ({ basics }: { basics: any }) => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
              Available for Opportunities
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            {basics.name}
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-slate-400 mb-8 max-w-2xl leading-tight">
            {basics.title} <span className="text-blue-500">@{basics.company}</span>
          </h2>
          
          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            {basics.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={16} />
              {basics.location}
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Mail size={16} />
              {basics.email}
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToExperience}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
            >
              View Experience <ChevronRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium flex items-center gap-2 transition-all backdrop-blur-sm"
            >
              Download Resume <Download size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
};
