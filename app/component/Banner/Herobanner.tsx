import React from 'react';

export default function Herobanner() {
  return (
    <section className="relative min-h-[85vh] w-full bg-[#FAFAFA] flex items-center selection:bg-amber-100 selection:text-amber-900 overflow-hidden">
      {/* Ultra-subtle Premium Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(217,119,6,0.03)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-10 md:gap-16">
          
          {/* LEFT SIDE: Minimalist Luxury Typography */}
          <div className="max-w-2xl relative z-20">
            <header className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-amber-600" aria-hidden="true" />
                <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-amber-700">
                  Simko • Premium
                </span>
              </div>
              
              <h1 className="text-[11vw] md:text-[6vw] lg:text-[5.5rem] font-light leading-[0.9] tracking-tight text-slate-900">
                Automate <br />
                <span className="font-serif italic text-slate-400 pr-4">your</span> Elegance.
              </h1>
            </header>

            <div className="mt-8 md:mt-12 max-w-sm">
              <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light">
                Elevate your home with Simko. We seamlessly blend premium light decoration with cutting-edge automation for spaces that adapt to your lifestyle.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
                <a 
                  href="#" 
                  className="w-fit text-[11px] font-bold uppercase tracking-[0.2em] border-b border-amber-600 pb-1 text-slate-900 hover:text-amber-700 transition-colors focus:outline-none"
                >
                  Explore Decor
                </a>
                <a 
                  href="#" 
                  className="w-fit text-[11px] font-bold uppercase tracking-[0.2em] border-b border-slate-200 pb-1 text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all duration-300 focus:outline-none"
                >
                  Smart Solutions
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Compact, Ultra-Premium Glass Box */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full aspect-square max-w-[320px] md:max-w-95">
              
              {/* Softer, luxurious glowing background blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] opacity-50 pointer-events-none mix-blend-multiply">
                <div className="absolute top-0 left-0 w-40 md:w-56 h-40 md:h-56 bg-amber-200 rounded-full blur-[50px] md:blur-[70px] animate-[spin_10s_linear_infinite]" />
                <div className="absolute bottom-0 right-0 w-40 md:w-56 h-40 md:h-56 bg-rose-100 rounded-full blur-[50px] md:blur-[70px] animate-[spin_12s_linear_infinite_reverse]" />
              </div>

              {/* Main Minimalist Glassmorphism Card */}
              <div className="absolute inset-4 md:inset-6 bg-white/30 backdrop-blur-3xl border border-white/50 rounded-2xl shadow-[0_20px_40px_-15px_rgba(217,119,6,0.1)] overflow-hidden z-10 flex items-center justify-center group cursor-pointer transition-all duration-700 hover:bg-white/40 hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(217,119,6,0.15)]">
                
                {/* Inner Content / Compact Boxes */}
                <div className="w-full h-full p-6 flex flex-col gap-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  
                  {/* Box 1: Sleek Top Bar */}
                  <div className="w-full h-8 bg-white/40 rounded-xl border border-white/40 shadow-sm flex items-center px-4">
                     <span className="text-[9px] font-semibold tracking-widest uppercase text-slate-600">Simko OS</span>
                  </div>
                  
                  {/* Box 2 & 3: Middle Split Section */}
                  <div className="flex gap-3 h-24 md:h-28">
                    {/* Left Small Box (Status) */}
                    <div className="w-1/4 h-full bg-white/40 rounded-xl border border-white/40 shadow-sm flex flex-col items-center justify-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Right Large Box (Mode) */}
                    <div className="w-3/4 h-full bg-white/40 rounded-xl border border-white/40 shadow-sm relative overflow-hidden flex flex-col justify-center px-5">
                      <span className="text-lg md:text-xl font-light text-slate-800 tracking-tight">Aura Mode</span>
                      <span className="text-[10px] md:text-xs font-serif italic text-slate-500 mt-1">Premium Lighting</span>
                      
                      {/* Subtle Animated scanline */}
                      <div className="absolute top-0 left-0 w-full h-px bg-amber-400/50 blur-[1px] -translate-y-full group-hover:animate-[ping_3s_linear_infinite]" />
                    </div>
                  </div>
                  
                  {/* Box 4: Bottom Gradient Bar */}
                  <div className="w-2/3 h-8 bg-linear-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/10 flex items-center px-4">
                    <span className="text-[9px] font-medium tracking-wider text-amber-800/60 uppercase">Ambience Synced</span>
                  </div>

                </div>
                
                {/* Soft Glass Glare */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/60 via-white/5 to-transparent opacity-30 pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}