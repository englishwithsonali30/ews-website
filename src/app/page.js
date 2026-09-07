"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModule, setActiveModule] = useState(null);
  
  // 🔥 Booking Slot Selector States 🔥
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('06:00 PM');

  const availableDates = ['Today', 'Tomorrow', 'Thursday', 'Friday'];
  const availableTimes = ['10:00 AM', '01:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModule = (id) => {
    if (activeModule === id) setActiveModule(null);
    else setActiveModule(id);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        /* 🔥 Ultra-Cinematic Film Grain 🔥 */
        .film-grain {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          z-index: 50;
        }

        @keyframes smoothReveal {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .reveal {
          animation: smoothReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }

        html { scroll-behavior: smooth; background-color: #030303; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #030303; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }
      `}</style>

      {/* 🔥 GLOBAL AMBIENT GLOW 🔥 */}
      <div className="fixed inset-0 z-[-1] bg-[#030303] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 blur-[150px] rounded-full mix-blend-screen" style={{animation: 'pulseGlow 8s infinite'}}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" style={{animation: 'pulseGlow 10s infinite 2s'}}></div>
      </div>
      
      <div className="film-grain"></div>

      <div className="min-h-screen text-zinc-100 font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white relative z-10">
        
        {/* 🏛️ 1. Ultra-Minimalist Navbar (Glassmorphism) */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/5 py-3 md:py-4 shadow-2xl' : 'bg-gradient-to-b from-black/80 to-transparent py-5 md:py-8'}`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
            <div className="flex items-center gap-3 md:gap-4 reveal">
              <img src="/logo.jpg" alt="EWS Logo" className="h-8 md:h-10 w-auto object-contain rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]" onError={(e) => e.target.style.display='none'} />
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white uppercase hover:text-blue-400 transition-colors cursor-pointer drop-shadow-md">
                English With Sonali
              </h1>
            </div>
            
            <div className="hidden lg:flex gap-10 text-xs font-semibold uppercase tracking-[0.2em] reveal delay-100 items-center">
              <a href="#curriculum" className="text-zinc-300 hover:text-blue-400 transition-colors duration-300 drop-shadow-sm">Curriculum</a>
              <a href="#sessions" className="text-zinc-300 hover:text-blue-400 transition-colors duration-300 drop-shadow-sm">Sessions</a>
              <a href="#outreach" className="text-zinc-300 hover:text-blue-400 transition-colors duration-300 drop-shadow-sm">Impact</a>
              <a href="#book-slot" className="bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded hover:bg-blue-600 hover:text-white hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all duration-500 transform hover:-translate-y-0.5">
                Book Consultation
              </a>
            </div>

            <button className="lg:hidden text-2xl text-white reveal hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-3xl absolute top-full left-0 w-full px-6 py-10 flex flex-col gap-8 border-t border-white/10 shadow-2xl">
              <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="font-medium text-xl text-zinc-300 hover:text-blue-400 transition-colors">Curriculum</a>
              <a href="#sessions" onClick={() => setMobileMenuOpen(false)} className="font-medium text-xl text-zinc-300 hover:text-blue-400 transition-colors">Live Sessions</a>
              <a href="#outreach" onClick={() => setMobileMenuOpen(false)} className="font-medium text-xl text-zinc-300 hover:text-blue-400 transition-colors">Impact</a>
              <a href="#book-slot" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 text-center text-white px-6 py-4 rounded font-bold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">Book Your Slot</a>
            </div>
          )}
        </nav>

        {/* 🏛️ 2. Cinematic Hero Section - 🔥 FIXED FULL SCREEN VIDEO 🔥 */}
        <main className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            {/* object-cover ensures it fills the entire width and height */}
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ filter: 'brightness(0.55) contrast(1.15) saturate(1.1)' }}>
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            
            {/* Dark Gradients to make the text on the left readable and cinematic */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent pointer-events-none w-full md:w-[75%]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none h-[40%] mt-auto"></div>
          </div>

          <div className="relative z-20 px-6 lg:px-12 max-w-[1400px] w-full mx-auto mt-16">
            <div className="reveal flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-8 md:w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <p className="text-blue-400 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase drop-shadow-md">The EWS Masterclass</p>
            </div>
            
            <h2 className="reveal delay-100 text-5xl md:text-6xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[1.05] mb-6 md:mb-8 max-w-4xl drop-shadow-2xl">
              Speak Confidently.<br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Transform Your Personality.</span>
            </h2>
            
            <p className="reveal delay-200 text-base md:text-xl text-zinc-300 mb-10 md:mb-12 max-w-2xl font-light leading-relaxed drop-shadow-lg">
              Move beyond traditional grammar rules. We focus on practical, real-world communication to build unshakeable confidence in your professional and personal life.
            </p>
            
            <div className="reveal delay-300 flex flex-col sm:flex-row gap-5">
              <a href="#curriculum" className="bg-white/90 backdrop-blur-sm text-black px-8 md:px-10 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-500 transform hover:-translate-y-1 text-center">
                Explore Programs
              </a>
              <a href="#book-slot" className="bg-black/30 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 rounded text-xs font-bold uppercase tracking-widest hover:border-blue-400 hover:text-blue-300 hover:bg-blue-900/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-500 transform hover:-translate-y-1 text-center flex items-center justify-center gap-3">
                Book Your Slot
              </a>
            </div>
          </div>
        </main>

        {/* 🏛️ 3. Interactive Curriculum Section (Glassmorphic) */}
        <section id="curriculum" className="py-24 md:py-32 px-6 bg-black/40 backdrop-blur-sm border-b border-white/5 relative">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-6">
              <div className="max-w-2xl">
                <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-md">Academic Structure</p>
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-xl">The Curriculum.</h3>
              </div>
              <p className="text-zinc-400 max-w-sm md:text-right font-light text-sm md:text-base leading-relaxed">
                Click on any module to explore the details. Designed for rapid improvement and real-world dominance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div onClick={() => toggleModule(1)} className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-xl p-8 md:p-10 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 group cursor-pointer h-max relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>
                <div className="border-b border-white/10 pb-6 mb-6 flex justify-between items-center relative z-10">
                  <div>
                    <span className="text-zinc-500 font-serif italic mb-2 block group-hover:text-blue-400 transition-colors">Level I</span>
                    <h4 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors drop-shadow-md">Foundation</h4>
                  </div>
                  <div className={`text-2xl text-blue-500 transition-transform duration-500 ${activeModule === 1 ? 'rotate-45' : ''}`}>+</div>
                </div>
                <ul className="space-y-4 text-zinc-300 text-sm font-light relative z-10">
                  <li className="flex gap-3 items-start"><span className="text-blue-500 block mt-1 text-[10px] drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">◆</span> Grammar & Sentence Structuring</li>
                  <li className="flex gap-3 items-start"><span className="text-blue-500 block mt-1 text-[10px] drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">◆</span> Everyday Vocabulary Building</li>
                  <li className="flex gap-3 items-start"><span className="text-blue-500 block mt-1 text-[10px] drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">◆</span> Overcoming Initial Hesitation</li>
                </ul>
                <div className={`grid transition-all duration-500 ease-in-out relative z-10 ${activeModule === 1 ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-blue-200 text-sm leading-relaxed font-medium">This module focuses on the absolute basics. We dive deep into core grammar rules not by mugging them up, but through practical speaking. We will work on daily-use vocabulary so you never run out of words during a conversation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={() => toggleModule(2)} className="bg-white/95 backdrop-blur-xl text-black rounded-xl p-8 md:p-10 relative transform md:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 transition-all duration-500 group cursor-pointer h-max">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest py-2 px-4 rounded-bl-xl shadow-lg">Flagship</div>
                <div className="border-b border-black/10 pb-6 mb-6 flex justify-between items-center mt-2">
                  <div>
                    <span className="text-blue-600 font-serif italic mb-2 block font-medium">Level II</span>
                    <h4 className="text-2xl font-bold text-black group-hover:text-blue-700 transition-colors">Intermediate</h4>
                  </div>
                  <div className={`text-2xl text-blue-600 transition-transform duration-500 ${activeModule === 2 ? 'rotate-45' : ''}`}>+</div>
                </div>
                <ul className="space-y-4 text-zinc-800 text-sm font-medium">
                  <li className="flex gap-3 items-start"><span className="text-blue-600 block mt-1 text-[10px]">◆</span> Advanced Fluency & Flow</li>
                  <li className="flex gap-3 items-start"><span className="text-blue-600 block mt-1 text-[10px]">◆</span> Real-life Scenario Practice</li>
                  <li className="flex gap-3 items-start"><span className="text-blue-600 block mt-1 text-[10px]">◆</span> Spontaneous Expression</li>
                </ul>
                <div className={`grid transition-all duration-500 ease-in-out ${activeModule === 2 ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <div className="pt-6 border-t border-black/10">
                      <p className="text-blue-900 text-sm leading-relaxed font-bold">Transition from basic translation to thinking directly in English. We simulate real-life environments (cafes, office meetings, travel) and focus heavily on reducing your mother-tongue influence (MTI) for a neutral, global accent.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={() => toggleModule(3)} className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-xl p-8 md:p-10 border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 group cursor-pointer h-max relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-500/20 transition-colors"></div>
                <div className="border-b border-white/10 pb-6 mb-6 flex justify-between items-center relative z-10">
                  <div>
                    <span className="text-zinc-500 font-serif italic mb-2 block group-hover:text-purple-400 transition-colors">Level III</span>
                    <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors drop-shadow-md">Advanced</h4>
                  </div>
                  <div className={`text-2xl text-purple-500 transition-transform duration-500 ${activeModule === 3 ? 'rotate-45' : ''}`}>+</div>
                </div>
                <ul className="space-y-4 text-zinc-300 text-sm font-light relative z-10">
                  <li className="flex gap-3 items-start"><span className="text-purple-500 block mt-1 text-[10px] drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">◆</span> Business English</li>
                  <li className="flex gap-3 items-start"><span className="text-purple-500 block mt-1 text-[10px] drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">◆</span> Interview & Presentation Prep</li>
                  <li className="flex gap-3 items-start"><span className="text-purple-500 block mt-1 text-[10px] drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">◆</span> Executive Presence</li>
                </ul>
                <div className={`grid transition-all duration-500 ease-in-out relative z-10 ${activeModule === 3 ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-purple-200 text-sm leading-relaxed font-medium">Strictly designed for the corporate world. You will master the art of email writing, delivering high-stakes presentations, salary negotiations, and cracking tough behavioral interviews while maintaining elite body language.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 🏛️ 4. Corporate & Team Training */}
        <section className="py-24 px-6 bg-transparent relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-black/40 backdrop-blur-2xl rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-stretch border border-white/10 group hover:border-blue-500/40 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen"></div>
                <div className="relative z-10">
                  <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block drop-shadow-md">Corporate & Studio Training</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter group-hover:text-blue-300 transition-colors duration-500 drop-shadow-xl">Transforming Salon Professionals.</h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 font-light">We don't just train individuals; we elevate entire salon and studio teams. Our specialized group sessions are designed to build collective confidence, polish client-handling skills, and ensure seamless communication in premium professional environments.</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[500px] overflow-hidden border-l border-white/5">
                <img src="/group.jpg" alt="EWS Salon Team Training" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 🏛️ 5. Inside The Masterclass (Cinematic Video Grid) */}
        <section id="sessions" className="py-24 md:py-32 px-6 bg-black/60 backdrop-blur-xl border-y border-white/5 relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-20 text-center md:text-left">
              <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-md">Inside The Masterclass</p>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter drop-shadow-xl">Real Voices. Real Impact.</h3>
              <p className="text-zinc-300 mt-4 max-w-2xl font-light text-sm md:text-base leading-relaxed">
                Listen directly to our students and experience the interactive, practical nature of our live online sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {['Student Review', 'Live Session', 'Interactive', 'Confidence', 'Student Review', 'Growth Story'].map((tag, i) => (
                <div key={i} className="group relative rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500">
                  <video className="w-full aspect-[4/5] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" controls preload="metadata">
                    <source src={`/VIDEO${i+1 === 5 ? '5' : i+1}.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold text-white tracking-widest uppercase pointer-events-none shadow-lg">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🏛️ 6. BENTO GRID: Impact Beyond Classrooms */}
        <section id="outreach" className="py-24 md:py-32 px-6 bg-transparent relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-20 text-center md:text-left">
              <p className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-md">Our Outreach</p>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter drop-shadow-xl">Impact Beyond Classrooms.</h3>
              <p className="text-zinc-300 mt-4 max-w-2xl font-light text-sm md:text-base leading-relaxed">
                From corporate stages and massive seminars to nurturing young minds, our mission is to empower every voice globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Bento Items with deeper cinematic shadows */}
              <div className="lg:col-span-2 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <img src="/MAIN.jpg" alt="Award Recognition" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-2 block drop-shadow-md">Recognition</span>
                  <h4 className="text-2xl md:text-4xl font-bold text-white drop-shadow-xl">Award of Excellence</h4>
                </div>
              </div>
              <div className="lg:col-span-1 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <img src="/AWARD.jpg" alt="Honors" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-yellow-400 font-bold text-[10px] uppercase tracking-widest mb-2 block drop-shadow-md">Community Honors</span>
                  <h4 className="text-xl md:text-3xl font-bold text-white drop-shadow-xl">Respected Guest</h4>
                </div>
              </div>
              <div className="lg:col-span-1 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <img src="/CAMPAIGN.jpg" alt="Campaign Seminars" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-red-400 font-bold text-[10px] uppercase tracking-widest mb-2 block drop-shadow-md">Mega Seminars</span>
                  <h4 className="text-xl md:text-3xl font-bold text-white drop-shadow-xl">Inspiring Thousands</h4>
                </div>
              </div>
              <div className="lg:col-span-2 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <img src="/CONFERENCE.jpg" alt="Corporate Conference" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-indigo-400 font-bold text-[10px] uppercase tracking-widest mb-2 block drop-shadow-md">Workshops</span>
                  <h4 className="text-2xl md:text-4xl font-bold text-white drop-shadow-xl">Corporate Collaborations</h4>
                </div>
              </div>
              <div className="lg:col-span-1 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <img src="/SPEAK.jpg" alt="Speaking Engagement" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-purple-400 font-bold text-[10px] uppercase tracking-widest mb-2 block drop-shadow-md">Workshops</span>
                  <h4 className="text-xl md:text-3xl font-bold text-white drop-shadow-xl">Interactive Sessions</h4>
                </div>
              </div>
              <div className="lg:col-span-1 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <img src="/HAPPPY.jpg" alt="Happy Students" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-2 block drop-shadow-md">Outreach</span>
                  <h4 className="text-xl md:text-3xl font-bold text-white drop-shadow-xl">Empowering Future</h4>
                </div>
              </div>
              <div className="lg:col-span-1 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <img src="/HELP.jpg" alt="Classroom Teaching" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-green-400 font-bold text-[10px] uppercase tracking-widest mb-2 block drop-shadow-md">Mentorship</span>
                  <h4 className="text-xl md:text-3xl font-bold text-white drop-shadow-xl">Personal Guidance</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🏛️ 7. Wall of Excellence */}
        <section id="alumni" className="py-24 md:py-32 px-6 bg-zinc-50 text-black border-y border-zinc-200 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-20">
              <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">Recognition</p>
              <h3 className="text-4xl md:text-6xl font-bold text-black tracking-tighter">Wall of Excellence.</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-white rounded-2xl overflow-hidden border border-zinc-200 flex flex-col md:flex-row items-stretch group cursor-pointer hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700">
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[350px] bg-zinc-200 overflow-hidden order-2 md:order-1">
                  <img src="/sonali-josh.jpg" alt="Sonali at Josh Talks" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000" onError={(e) => e.target.style.display='none'} />
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center bg-white group-hover:bg-orange-50/50 transition-colors duration-700 order-1 md:order-2">
                  <span className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Global Platform</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6 group-hover:text-orange-600 transition-colors duration-500">Featured on Josh Talks</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-light">Recognized globally for her commitment to helping individuals build unshakeable confidence and strong communication skills.</p>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#0a0a0a] text-white rounded-2xl relative flex flex-col justify-end p-8 md:p-10 min-h-[350px] md:min-h-[400px] group overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
                <img src="/priya.jpg" alt="Priya Munjal" className="absolute inset-0 w-full h-full object-cover object-[30%_20%] opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000" onError={(e) => e.target.style.display='none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-blue-900/90 transition-colors duration-700"></div>
                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
                  <h4 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">Priya Munjal</h4>
                  <p className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-semibold">Mrs India 1st Runner Up</p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 flex items-center gap-6 md:gap-8 group cursor-pointer hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full bg-zinc-200 flex-shrink-0 border-4 border-white shadow-md group-hover:border-blue-100 transition-colors duration-500">
                  <img src="/sanjay.jpg" alt="Sanjay" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => e.target.style.display='none'} />
                </div>
                <div>
                  <h4 className="text-xl md:text-3xl font-bold text-black mb-1 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">Sanjay Aswale</h4>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-blue-500 transition-colors duration-300">Additional Collector, Nagpur</p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 flex items-center gap-6 md:gap-8 group cursor-pointer hover:border-purple-300 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full bg-zinc-200 flex-shrink-0 border-4 border-white shadow-md group-hover:border-purple-100 transition-colors duration-500">
                  <img src="/mukti.jpg" alt="Mukti" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => e.target.style.display='none'} />
                </div>
                <div>
                  <h4 className="text-xl md:text-3xl font-bold text-black mb-1 md:mb-2 group-hover:text-purple-600 transition-colors duration-300">Mukti Singh</h4>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-purple-500 transition-colors duration-300">Sister of Vinit Kumar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🏛️ 8. Premium SLOT BOOKING Section (NATIVE HTML FORMSPREE) 🔥 */}
        <section id="book-slot" className="py-24 md:py-32 px-6 bg-black/40 backdrop-blur-md relative border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block border border-blue-500/50 bg-blue-500/20 text-blue-300 font-bold tracking-[0.2em] uppercase text-[10px] px-5 py-2 rounded-full mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)]">Limited Seats Available</span>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter drop-shadow-xl">Book Your Free Consultation.</h3>
              <p className="text-zinc-300 font-light text-sm md:text-lg max-w-2xl mx-auto drop-shadow-md">
                Select a convenient date and time to speak directly with our experts. Let's design the perfect learning path for your goals.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              
              <div className="w-full lg:w-1/2 lg:border-r border-white/10 lg:pr-12">
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.6)]">1</span>
                    <h4 className="text-white text-xl font-semibold drop-shadow-md">Select a Date</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {availableDates.map(date => (
                      <button 
                        key={date} 
                        type="button" 
                        onClick={() => setSelectedDate(date)}
                        className={`py-4 px-5 rounded-2xl border text-sm font-medium transition-all duration-300 ${selectedDate === date ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] transform scale-105' : 'bg-black/40 border-white/10 text-zinc-400 hover:border-blue-500/50 hover:text-white hover:bg-black/60'}`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.6)]">2</span>
                    <h4 className="text-white text-xl font-semibold drop-shadow-md">Select a Time</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {availableTimes.map(time => (
                      <button 
                        key={time} 
                        type="button" 
                        onClick={() => setSelectedTime(time)}
                        className={`py-4 px-5 rounded-2xl border text-sm font-medium transition-all duration-300 ${selectedTime === time ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] transform scale-105' : 'bg-black/40 border-white/10 text-zinc-400 hover:border-blue-500/50 hover:text-white hover:bg-black/60'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 lg:pl-4 pt-8 lg:pt-0 border-t border-white/10 lg:border-t-0">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.6)]">3</span>
                  <h4 className="text-white text-xl font-semibold drop-shadow-md">Your Details</h4>
                </div>

                {/* 🔥 NATIVE HTML FORM (No JS, 100% Reliable) 🔥 */}
                <form action="https://formspree.io/f/xjyvaodl" method="POST" className="flex flex-col gap-6">
                  <input type="hidden" name="Form Type" value="🚨 NEW SLOT BOOKING" />
                  <input type="hidden" name="Selected Date" value={selectedDate} />
                  <input type="hidden" name="Selected Time" value={selectedTime} />

                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-300 text-[11px] uppercase tracking-widest font-bold ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="Name"
                      required 
                      placeholder="e.g. John Doe" 
                      className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all shadow-inner" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-300 text-[11px] uppercase tracking-widest font-bold ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="Phone"
                      required 
                      placeholder="+91 XXXXX XXXXX" 
                      className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all shadow-inner" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-300 text-[11px] uppercase tracking-widest font-bold ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="Email"
                      required 
                      placeholder="e.g. john@example.com" 
                      className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all shadow-inner" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-300 text-[11px] uppercase tracking-widest font-bold ml-1">What do you want to improve?</label>
                    <input 
                      type="text" 
                      name="Goal"
                      required 
                      placeholder="e.g. Interview prep, basic grammar..." 
                      className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all shadow-inner" 
                    />
                  </div>

                  <div className="mt-2 bg-blue-900/10 border border-blue-500/20 p-5 rounded-2xl flex items-center justify-between backdrop-blur-md">
                    <div>
                      <p className="text-[10px] text-blue-300 uppercase tracking-widest font-bold">Your Selected Slot</p>
                      <p className="text-white font-semibold text-base mt-1 drop-shadow-md">{selectedDate} at {selectedTime}</p>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-white text-black mt-2 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-500 transform hover:-translate-y-1">
                    Confirm My Booking
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* 🏛️ 9. QUICK ENQUIRY SECTION (NATIVE HTML FORMSPREE) 🔥 */}
        <section id="enquiry" className="py-24 px-6 bg-transparent relative">
          <div className="max-w-[1000px] mx-auto relative z-10 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent rounded-[3rem] pointer-events-none"></div>
            
            <div className="text-center mb-12 relative z-10">
              <span className="text-zinc-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block drop-shadow-md">Still Have Doubts?</span>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter drop-shadow-xl">Drop a Quick Enquiry.</h3>
              <p className="text-zinc-300 font-light text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
                Not sure which program is right for you? Drop your details below and our counselors will guide you through the process.
              </p>
            </div>

            {/* 🔥 NATIVE HTML FORM 🔥 */}
            <form action="https://formspree.io/f/xjyvaodl" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <input type="hidden" name="Form Type" value="❓ QUICK ENQUIRY" />
              
              <div>
                <input 
                  type="text" 
                  name="Name"
                  required 
                  placeholder="Your Name" 
                  className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-300 focus:bg-black/90 transition-all shadow-inner" 
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="Phone"
                  required 
                  placeholder="Phone Number" 
                  className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-300 focus:bg-black/90 transition-all shadow-inner" 
                />
              </div>

              <div className="md:col-span-2">
                <input 
                  type="email" 
                  name="Email"
                  required 
                  placeholder="Your Email Address" 
                  className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-300 focus:bg-black/90 transition-all shadow-inner" 
                />
              </div>

              <div className="md:col-span-2">
                <textarea 
                  rows="3" 
                  name="Message"
                  required 
                  placeholder="What's your query? (e.g., Fees, Timings, Batch details...)" 
                  className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-300 focus:bg-black/90 transition-all resize-none shadow-inner"
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit" 
                  className="w-full bg-zinc-100 text-black py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500 transform hover:-translate-y-1">
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* 🏛️ 10. High-End Footer */}
        <footer className="bg-black/80 backdrop-blur-xl text-zinc-500 py-20 px-6 border-t border-white/10 relative z-10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-b border-white/10 pb-12 mb-8">
            <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-white/5 p-2 rounded-xl border border-white/10 mb-5 hover:border-blue-500/50 transition-colors duration-500 cursor-pointer shadow-lg">
                <img src="/logo.jpg" alt="EWS Logo" className="h-14 md:h-16 w-auto object-contain rounded-lg opacity-90 hover:opacity-100 transition-opacity" onError={(e) => e.target.style.display='none'} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4 drop-shadow-lg">English With Sonali.</h2>
              <p className="text-sm max-w-sm font-light leading-relaxed text-zinc-400">Transforming personalities through world-class communication training and real-world application.</p>
            </div>
            
            <div className="md:col-span-6 flex flex-col md:items-end items-center text-center md:text-right gap-5 mt-4 md:mt-0">
              <p className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-2 drop-shadow-md">Connect With Us</p>
              <a href="mailto:englishwithsonali30@gmail.com" className="text-zinc-400 hover:text-blue-400 md:hover:-translate-x-2 transition-all duration-500 flex items-center gap-4 font-medium text-sm drop-shadow-sm">
                <span className="hidden md:inline">englishwithsonali30@gmail.com</span><span className="md:hidden">Email Us</span><span className="text-lg md:text-xl">✉</span>
              </a>
              <a href="tel:+919569842851" className="text-zinc-400 hover:text-blue-400 md:hover:-translate-x-2 transition-all duration-500 flex items-center gap-4 font-medium text-sm drop-shadow-sm">
                <span>+91 7881170144</span><span className="text-lg md:text-xl">✆</span>
              </a>
              <a href="https://instagram.com/englishwithsonali" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-blue-400 md:hover:-translate-x-2 transition-all duration-500 flex items-center gap-4 font-medium text-sm drop-shadow-sm">
                <span>@englishwithsonali</span><span className="text-lg md:text-xl">📸</span>
              </a>
            </div>
          </div>
          
          {/* 🔥 CREATED BY SECTION WITH INSTAGRAM LINK 🔥 */}
          <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-5 text-[10px] font-bold uppercase tracking-[0.2em] text-center text-zinc-600 mt-8">
            <p>© {new Date().getFullYear()} English With Sonali. All Rights Reserved.</p>
            
            <a 
              href="https://www.instagram.com/stackmates.developers?igsh=MThnMXljZnNoand2dA==" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-sm shadow-md hover:border-pink-500/50 hover:bg-pink-900/10 transition-all duration-500 group"
            >
              <span className="text-zinc-500">Designed & Developed by</span>
              <span className="text-blue-400 group-hover:text-pink-400 transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                Stackmates Developers
              </span>
              <span className="text-[12px] group-hover:scale-125 transition-transform duration-300">🚀</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}