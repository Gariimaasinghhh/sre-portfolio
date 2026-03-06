import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Linkedin, Mail, Github } from 'lucide-react';

const RESUME_DATA = {
  basics: {
    name: "Garima Singh",
    title: "Site Reliability Engineer",
    company: "Epam Systems",
    location: "Hyderabad, Telangana, India",
    email: "gariimasingh100@gmail.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/garima-singh-2620ab213"
      }
    ],
    summary: "I specialize in managing and optimizing complex supply chain applications using advanced technologies like Azure Functions, Cosmos DB, Azure Service Bus (ASB), Azure Kubernetes Service (AKS), and New Relic. My role centers on ensuring these systems are robust, scalable, and high-performing to support critical business operations."
  },
  experience: [
    {
      company: "EPAM Systems",
      role: "Site Reliability Engineer",
      dates: "October 2024 - Present",
      duration: "1 year 6 months",
      location: "Hyderabad, Telangana, India",
      bullets: [
        "Specialize in managing and optimizing complex supply chain applications using advanced technologies like Azure Functions, Cosmos DB, Azure Service Bus (ASB), Azure Kubernetes Service (AKS), and New Relic.",
        "Ensure these systems are robust, scalable, and high-performing to support critical business operations.",
        "Apply expertise in infrastructure, automation, and problem-solving to streamline workflows, reduce downtime, and enhance overall system efficiency.",
        "Drive operational excellence and deliver measurable impact to both businesses and their customers."
      ],
      highlights: [
        "Infrastructure Optimization",
        "Workflow Streamlining",
        "Downtime Reduction",
        "Operational Excellence"
      ]
    },
    {
      company: "Analyze Infotech - India",
      role: "Summer Trainee",
      dates: "June 2021 - August 2021",
      duration: "3 months",
      location: "India",
      bullets: [
        "Completed summer training program focused on technical skill development and industry practices."
      ],
      highlights: ["Technical Training", "Industry Exposure"]
    }
  ],
  achievements: [
    {
      title: "Operational Excellence",
      context: "Consistently driving measurable impact to businesses and customers through infrastructure streamlining and efficiency improvements."
    },
    {
      title: "Cloud Specialization",
      context: "Expertise in managing complex Azure-based supply chain applications at scale."
    },
    {
      title: "System Reliability",
      context: "Ensuring high performance and scalability for critical business operations using New Relic and AKS."
    }
  ],
  skills: [
    {
      category: "Core Skills",
      items: ["Docker", "Java EE", "Core Java", "Linux" ,"Python" , "LangChain","System Troubleshooting"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["Azure Functions", "Cosmos DB", "Azure Service Bus (ASB)", "Azure Kubernetes Service (AKS)","Terraform","CI/CD tools" , "Github Actions", "New Relic", "ServiceNow"]
    }
  ],
  education: [
    {
      institution: "GL Bajaj Institute of Technology and Management",
      degree: "Master of Computer Applications - MCA",
      field: "Computer application",
      dates: "November 2022 - August 2024"
    },
    {
      institution: "SHRI RAMSWAROOP MEMORIAL COLLEGE OF ENGINEERING AND MANAGEMENT, LUCKNOW",
      degree: "BCA",
      field: "Bachelors of computer application",
      dates: "2019 - 2022"
    },
    {
      institution: "Central Academy",
      degree: "Mathematics and Computer Science",
      field: "High School",
      dates: "2018 - 2019"
    }
  ],
  certifications: [
    "Learning ServiceNow",
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Azure Administrator Associate",
    "Unix Essential Training",
    "Github action"
  ]
};

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatePresence>
        {loading && <Splash onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedBackground />
          
          <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/50 backdrop-blur-md border-b border-white/5 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="text-xl font-bold tracking-tighter text-white">
                <span className="text-blue-500">G</span>S
              </div>
              <div className="flex gap-6">
                <a href="#experience" className="text-sm font-medium hover:text-blue-400 transition-colors">Experience</a>
                <a href="#skills" className="text-sm font-medium hover:text-blue-400 transition-colors">Skills</a>
                <a href="https://www.linkedin.com/in/garima-singh-2620ab213" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </nav>

          <main>
            <Hero basics={RESUME_DATA.basics} />
            
            {/* Impact Strip */}
            <div className="py-12 border-y border-white/5 bg-white/2">
              <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">1.5y+</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">Azure</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Specialization</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">SRE</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Focus</div>
                </div>
              </div>
            </div>

            <Experience experience={RESUME_DATA.experience} />
            <Achievements achievements={RESUME_DATA.achievements} />
            <div id="skills">
              <Skills skills={RESUME_DATA.skills} />
            </div>
            <Education education={RESUME_DATA.education} certifications={RESUME_DATA.certifications} />
          </main>

          <footer className="py-20 px-6 border-t border-white/5 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Let's connect</h2>
              <div className="flex justify-center gap-8 mb-12">
                <motion.a
                  whileHover={{ y: -5 }}
                  href={`mailto:${RESUME_DATA.basics.email}`}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://www.linkedin.com/in/garima-singh-2620ab213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} {RESUME_DATA.basics.name}. Built with precision.
              </p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
