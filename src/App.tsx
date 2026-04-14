/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Gamepad2, 
  Target, 
  Cpu, 
  Layers, 
  Zap, 
  Trophy, 
  Code2, 
  Palette, 
  Lightbulb, 
  Rocket,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Play,
  Monitor,
  Smartphone,
  Globe,
  ExternalLink
} from 'lucide-react';
import React, { useRef } from 'react';

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-neon-blue font-display text-sm uppercase tracking-[0.3em] mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold font-display"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple mt-6"
    />
  </div>
);

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-dark-bg overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cyberpunk/1920/1080?blur=4')] bg-cover bg-center opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/20 via-dark-bg/60 to-dark-bg" />
        </motion.div>

        <div className="relative z-10 text-center px-6 pt-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Sections Navigation Buttons - Upside of Profile */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl">
              {[
                { name: "About", id: "about" },
                { name: "Gameplay", id: "gameplay" },
                { name: "Gallery", id: "gallery" },
                { name: "Tech", id: "tech" },
                { name: "Results", id: "results" }
              ].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="px-5 py-2 glass rounded-full text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all border border-white/5"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Profile Photo Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative mb-10"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_30px_rgba(0,242,255,0.3)] relative z-10">
                <img 
                  src="https://www.image2url.com/r2/default/images/1776186365148-d23ef055-4ef6-4535-8c7e-d6d5b016da06.jpeg" 
                  alt="Lingampally srinath" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Rings */}
              <div className="absolute inset-[-10px] border border-neon-purple/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-20px] border border-neon-pink/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </motion.div>

            <span className="text-neon-blue font-display tracking-[0.5em] uppercase text-sm mb-4 block neon-glow-blue">
              PROJECT: SCARY RUN
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black font-display mb-6 tracking-tighter uppercase">
              LINGAMPALLY <span className="text-gradient">SRINATH</span>
            </h1>

            {/* Academic Sub-headers */}
            <div className="max-w-4xl mx-auto mb-12 space-y-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 md:gap-8"
              >
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-neon-purple uppercase tracking-widest opacity-70">Academic Status</span>
                  <span className="text-lg md:text-xl font-medium text-gray-200">3rd Year B.Tech CSE</span>
                </div>
                <div className="w-px h-10 bg-white/10 hidden md:block" />
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-neon-blue uppercase tracking-widest opacity-70">Institution</span>
                  <span className="text-lg md:text-xl font-medium text-gray-200">SR University, Warangal</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 border-t border-white/5"
              >
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-neon-pink uppercase tracking-widest opacity-70">Supervision</span>
                  <span className="text-lg md:text-xl font-medium text-gray-200">Dr. Vijaya Chandra Jadala</span>
                </div>
                <div className="w-px h-10 bg-white/10 hidden md:block" />
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-yellow-500 uppercase tracking-widest opacity-70">Subject</span>
                  <span className="text-lg md:text-xl font-medium text-gray-200">Game Mechanics Design & Development</span>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 242, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-neon-blue text-dark-bg font-bold rounded-full flex items-center gap-2 transition-all"
              >
                EXPLORE SECTIONS <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to dive</span>
          <div className="w-px h-12 bg-gradient-to-b from-neon-blue to-transparent" />
        </motion.div>
      </section>

      {/* About Me Section */}
      <Section id="about-me" className="bg-dark-surface/20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle subtitle="Profile">About Me</SectionTitle>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed font-display">
              I'm <span className="text-neon-blue font-bold">Lingampally srinath</span>, a 3rd-year B.Tech CSE student at SR University, Warangal.
            </p>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                With a strong foundation in <span className="text-white">C, Python, and C#</span>, I have a deep passion for technical problem-solving and software architecture. 
              </p>
              <p>
                Through this course, I explored how <span className="text-neon-purple">thoughtful mechanics</span>, <span className="text-neon-pink">dynamic systems</span>, and <span className="text-neon-blue">player-centred design</span> combine to create compelling game experiences. 
              </p>
              <p>
                My work focuses on developing games that are not only technically sound but also inherently fun and engaging to play. I believe that the best games are built at the intersection of robust code and creative storytelling.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Core Skills", value: "C, Python, C#", icon: <Code2 className="text-neon-blue" /> },
              { label: "Focus", value: "Game Mechanics", icon: <Target className="text-neon-purple" /> },
              { label: "Education", value: "B.Tech CSE", icon: <Trophy className="text-neon-pink" /> },
              { label: "Location", value: "Warangal, TS", icon: <Globe className="text-neon-blue" /> },
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-3xl flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="font-bold text-white">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* About Section (Game Concept) */}
      <Section id="about">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <SectionTitle subtitle="The Project">SCARY RUN</SectionTitle>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                <span className="text-white font-bold">Scary Run</span> is an intense, horror-themed endless runner that pushes player reflexes to the limit. Set in a haunting, procedurally generated environment, the game combines atmospheric tension with high-speed evasion mechanics.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Players must navigate through a series of terrifying obstacles while being pursued by an unseen entity. The core design focuses on "fear-driven gameplay," where the environment itself reacts to the player's speed and performance, creating a unique sense of urgency and dread.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 flex justify-center"
            >
              <a 
                href="https://github.com/Lingampellysrinath/scary_run" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-bold transition-all hover:scale-105 active:scale-95 group"
              >
                <Github size={20} className="group-hover:text-neon-blue transition-colors" />
                <span>View on GitHub</span>
                <ExternalLink size={16} className="opacity-50" />
              </a>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: <Gamepad2 className="text-neon-blue" />, label: "Genre", value: "Horror Runner" },
                { icon: <Target className="text-neon-purple" />, label: "Audience", value: "Thrill Seekers" },
                { icon: <Monitor className="text-neon-pink" />, label: "Platform", value: "PC & Mobile" },
                { icon: <Trophy className="text-yellow-500" />, label: "Objective", value: "Survive the Night" },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl">
                  <div className="mb-3 flex justify-center">{item.icon}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-bold text-white text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Gameplay Section */}
      <Section id="gameplay">
        <SectionTitle subtitle="Mechanics">How It Plays</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Evasive Movement",
              desc: "Master precise jumps and slides to navigate through a gauntlet of lethal traps and shifting terrain.",
              icon: <Zap className="text-neon-blue" size={32} />
            },
            {
              title: "Atmospheric Tension",
              desc: "Dynamic lighting and sound design that intensifies as the pursuer gets closer, affecting visibility and controls.",
              icon: <Layers className="text-neon-purple" size={32} />
            },
            {
              title: "Survival Upgrades",
              desc: "Collect rare artifacts to unlock temporary boosts like 'Shadow Dash' or 'Ghost Sight'.",
              icon: <Cpu className="text-neon-pink" size={32} />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-neon-blue/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-dark-bg to-dark-surface py-24">
        <Section id="features">
          <SectionTitle subtitle="An Endless Adventure">Key Features – Scary Run</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Endless horror running gameplay with increasing difficulty",
              "Dark, spooky environment with immersive visuals",
              "Random obstacles and creepy enemies",
              "Smooth and simple controls (jump, dodge)",
              "Horror sound effects for thrilling experience",
              "Score system based on survival time",
              "Clean and responsive UI",
              "High replay value with dynamic gameplay"
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-6 glass rounded-xl hover:bg-white/10 transition-colors cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
                <span className="font-medium text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Gallery Section */}
      <Section id="gallery">
        <SectionTitle subtitle="Visuals">Game Gallery</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "data:image/jpeg;base64,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", label: "The Whispering Woods" },
            { src: "https://www.image2url.com/r2/default/images/1776185749350-49eeab37-c716-439b-b830-f7df960e45c5.png", label: "The Shadow Keep" },
            { src: "https://www.image2url.com/r2/default/images/1776185807351-d2f5a81f-5642-4233-ac87-c621d6568c37.png", label: "Corridor of Echoes" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={item.label} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-sm font-display tracking-widest uppercase">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <div className="bg-dark-surface/30">
        <Section id="tech">
          <SectionTitle subtitle="Tools">Technologies Used</SectionTitle>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Unity 6", color: "bg-white/10" },
              { name: "C#", color: "bg-purple-500/20 text-purple-400" },
              { name: "Universal Render Pipeline", color: "bg-blue-500/20 text-blue-400" },
              { name: "Cinemachine", color: "bg-green-500/20 text-green-400" },
              { name: "Unity Input System", color: "bg-orange-500/20 text-orange-400" },
              { name: "Physics Raycasting", color: "bg-red-500/20 text-red-400" },
              { name: "URP Local Volumes", color: "bg-cyan-500/20 text-cyan-400" },
              { name: "Mixamo", color: "bg-indigo-500/20 text-indigo-400" },
              { name: "Unity Starter Assets", color: "bg-yellow-500/20 text-yellow-400" },
              { name: "Blender", color: "bg-orange-600/20 text-orange-500" },
            ].map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`px-6 py-3 rounded-full font-bold text-sm tracking-wide ${tech.color} border border-white/5`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </Section>
      </div>

      {/* Process Section */}
      <Section id="process">
        <SectionTitle subtitle="Workflow">Development Journey</SectionTitle>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <div className="space-y-12">
            {[
              { 
                title: "Ideation", 
                desc: "Started with the core mechanic of 'Rhythm as Movement'. Sketched out the dystopian world and Echo's character design.",
                icon: <Lightbulb className="text-neon-blue" />
              },
              { 
                title: "Prototyping", 
                desc: "Built a gray-box version of the first 5 levels to test the beat-matching logic and platforming feel.",
                icon: <Palette className="text-neon-purple" />
              },
              { 
                title: "Production", 
                desc: "Full-scale asset creation, shader development, and soundtrack integration. Refined the narrative branching.",
                icon: <Code2 className="text-neon-pink" />
              },
              { 
                title: "Polishing", 
                desc: "Extensive playtesting to ensure the difficulty curve was fair. Added visual 'juice' and haptic feedback.",
                icon: <Rocket className="text-yellow-500" />
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 relative"
              >
                <div className="w-16 h-16 rounded-2xl glass flex-shrink-0 flex items-center justify-center z-10">
                  {step.icon}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 max-w-2xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <div className="bg-neon-blue/5">
        <Section id="results">
          <SectionTitle subtitle="Retrospective">Results & Learnings</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="text-neon-blue" size={20} /> Challenges Overcome
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-2 flex-shrink-0" />
                  <span>Optimizing high-fidelity horror environments for smooth performance on mobile devices.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-2 flex-shrink-0" />
                  <span>Implementing a procedural obstacle generation system that maintains a consistent difficulty curve.</span>
                </li>
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="text-neon-purple" size={20} /> Key Takeaways
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-2 flex-shrink-0" />
                  <span>Mastered Unity's Universal Render Pipeline for creating atmospheric lighting and fog effects.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-2 flex-shrink-0" />
                  <span>Deepened understanding of player psychology in horror games to create effective jump scares and tension.</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-black font-display mb-2 tracking-tighter">
              SCARY <span className="text-neon-blue">RUN</span>
            </div>
            <p className="text-gray-500 text-sm">Designed & Developed by Lingampally srinath</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/Lingampellysrinath/scary_run" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/srinath-lingampelly-7734092b8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-purple transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:gdattanarayana@gmail.com" className="text-gray-400 hover:text-neon-pink transition-colors"><Mail size={24} /></a>
          </div>

          <div className="text-gray-500 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Lingampally srinath. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
