import React, { useState } from 'react';
import { MissionControl } from './components/MissionControl';
import { RetroButton } from './components/RetroButton';
import { GameFeature } from './types';

const App: React.FC = () => {
  const [email, setEmail] = useState('');

  const features: GameFeature[] = [
    {
      id: 'jetpack',
      title: 'R-500 JETPACK',
      description: 'Defy gravity. Master the thrust mechanics to navigate treacherous caverns without touching the magma.',
      icon: '🚀',
      image: 'https://picsum.photos/400/300?grayscale&blur=2' 
    },
    {
      id: 'laser',
      title: 'LASER EYES',
      description: 'Precision cutting. Blast through rock walls and alien carapaces with your helmet-mounted heavy laser.',
      icon: '👁️',
      image: 'https://picsum.photos/401/301?grayscale&blur=2'
    },
    {
      id: 'dynamite',
      title: 'TNT CHARGES',
      description: 'When finesse fails, use force. Clear obstacles and decimate nests with timed explosives.',
      icon: '🧨',
      image: 'https://picsum.photos/402/302?grayscale&blur=2'
    }
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`RECRUIT REGISTERED: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-slug-dark/90 border-b-4 border-slug-metal z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-slug-gold font-retro text-lg tracking-tighter">
            <span className="text-white">SUPER</span> MINER
          </div>
          <div className="hidden md:flex gap-6 font-retro text-xs text-white">
            <a href="#features" className="hover:text-slug-rust transition-colors">GEAR</a>
            <a href="#gameplay" className="hover:text-slug-rust transition-colors">INTEL</a>
            <a href="#community" className="hover:text-slug-rust transition-colors">SQUAD</a>
          </div>
          <RetroButton variant="danger" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
            PLAY DEMO
          </RetroButton>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-40">
            {/* Abstract visual representing a cave background */}
            <img src="https://picsum.photos/1920/1080?blur=5" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slug-dark/50 to-slug-dark z-10"></div>
        
        <div className="relative z-20 text-center px-4 animate-float">
          <h1 className="font-retro text-4xl md:text-6xl lg:text-8xl text-white mb-4 drop-shadow-[4px_4px_0_#000]">
            <span className="text-slug-gold block mb-2 text-2xl md:text-4xl">H.E.R.O. CHRONICLES</span>
            SUPER MINER
          </h1>
          <p className="font-terminal text-2xl md:text-3xl text-gray-300 mb-8 max-w-2xl mx-auto bg-black/50 p-2">
            "Rescue the lost. Defuse the danger. Get out alive."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton variant="primary" className="text-lg" onClick={() => document.getElementById('gameplay')?.scrollIntoView({ behavior: 'smooth' })}>
              START MISSION
            </RetroButton>
            <RetroButton variant="metal" className="text-lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              VIEW TECH SPECS
            </RetroButton>
          </div>
        </div>
      </header>

      {/* Features Section (Scroll Grid) */}
      <section id="features" className="py-20 bg-slug-dark relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-retro text-3xl text-slug-rust mb-4">ARSENAL & ABILITIES</h2>
            <div className="h-1 w-24 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-slug-metal/20 border-2 border-slug-metal p-6 hover:bg-slug-metal/40 transition-colors group">
                <div className="h-48 w-full bg-black mb-4 overflow-hidden border-2 border-black relative">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 text-4xl">{feature.icon}</div>
                </div>
                <h3 className="font-retro text-xl text-slug-gold mb-2">{feature.title}</h3>
                <p className="font-terminal text-xl text-gray-300 leading-tight">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay / Video Section */}
      <section id="gameplay" className="py-20 bg-[#2a2d42] border-y-8 border-black">
        <div className="container mx-auto px-4 text-center">
           <h2 className="font-retro text-3xl text-white mb-8">MISSION FOOTAGE</h2>
           
           {/* Main Video Container */}
           <div className="max-w-4xl mx-auto border-4 border-slug-rust bg-black p-2 shadow-[0_0_30px_rgba(217,87,99,0.3)]">
              <div className="relative aspect-video bg-gray-900 flex items-center justify-center group cursor-pointer overflow-hidden">
                  {/* Placeholder for Game Video */}
                  <img src="https://picsum.photos/1280/720?grayscale" alt="Gameplay" className="w-full h-full object-cover opacity-60" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-slug-gold rounded-full flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-2"></div>
                    </div>
                  </div>
                  
                  {/* Overlay UI elements to simulate game screen */}
                  <div className="absolute top-4 left-4 font-retro text-white text-shadow">
                    SCORE: 004500
                  </div>
                  <div className="absolute top-4 right-4 font-retro text-red-500 animate-pulse text-shadow">
                    WARNING: MAGMA RISING
                  </div>
                  <div className="absolute bottom-4 left-4 h-4 w-48 bg-black border border-white">
                    <div className="h-full bg-yellow-500 w-3/4"></div>
                  </div>
              </div>
           </div>

           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-video bg-black border-2 border-slug-metal cursor-pointer hover:border-slug-gold transition-colors relative opacity-70 hover:opacity-100">
                    <img src={`https://picsum.photos/300/169?random=${i}`} className="w-full h-full object-cover" alt={`Clip ${i}`} />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Mission Control (Gemini AI) */}
      <section className="py-20 bg-black relative overflow-hidden">
         {/* Matrix-like background effect via CSS or just dark texture */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #0f0 20px)'}}></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10">
              <h2 className="font-retro text-2xl md:text-3xl text-green-500 mb-2">MISSION CONTROL UPLINK</h2>
              <p className="font-terminal text-xl text-green-800">AI ASSISTED TACTICAL SUPPORT</p>
            </div>
            <MissionControl />
         </div>
      </section>

      {/* Newsletter / Footer */}
      <footer id="community" className="bg-slug-rust py-16 text-white relative border-t-8 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-retro text-3xl mb-6 text-black drop-shadow-md">JOIN THE SQUAD</h2>
          <p className="font-terminal text-2xl mb-8 max-w-xl mx-auto text-black/80">
            Get the latest mission briefings, update logs, and beta access codes delivered to your inbox.
          </p>

          <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              required
              placeholder="ENTER EMAIL ADDRESS" 
              className="flex-1 bg-black/20 border-2 border-black px-4 py-3 font-retro text-xs text-white placeholder-white/50 focus:bg-black/40 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <RetroButton variant="metal" className="bg-black text-white hover:bg-gray-900 border-white">
              ENLIST
            </RetroButton>
          </form>

          <div className="mt-16 border-t border-black/20 pt-8 flex flex-col md:flex-row justify-between items-center font-terminal text-lg text-black/60">
            <p>© 2024 SUPER MINER DEV TEAM.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">TWITTER</a>
              <a href="#" className="hover:text-white">DISCORD</a>
              <a href="#" className="hover:text-white">ITCH.IO</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;