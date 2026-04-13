import React from 'react';

// Sample product data
const products = [
  { id: 1, name: 'Aura Wall Panels', category: 'Smart Decor', price: '$299' },
  { id: 2, name: 'Zenith Pendant', category: 'Premium Lighting', price: '$450' },
  { id: 3, name: 'Lumina Floor Lamp', category: 'Ambient', price: '$320' },
  { id: 4, name: 'Core LED Strip', category: 'Essentials', price: '$90' },
  { id: 5, name: 'Simko Controller', category: 'Automation', price: '$150' },
  { id: 6, name: 'Nova Chandelier', category: 'Luxury Series', price: '$899' },
];

export default function Products() {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-20 selection:bg-amber-100 selection:text-amber-900 overflow-hidden">
      
      {/* Ultra-subtle Premium Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(217,119,6,0.03)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <header className="mb-14 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-8 h-px bg-amber-600" aria-hidden="true" />
            <span className="text-[9px] font-semibold tracking-[0.4em] uppercase text-amber-700">
              Curated Collection
            </span>
            <span className="w-8 h-px bg-amber-600 md:hidden" aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-slate-900">
            Automated <span className="font-serif italic text-slate-400">Brilliance.</span>
          </h2>
        </header>

        {/* 6-Card Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <div key={product.id} className="relative group w-full">
              
              {/* Soft glowing background blob (revealed on hover) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-rose-100 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              
              {/* ADDED BORDER HERE: 
                Changed to border-amber-600/20 and hover:border-amber-500/60
              */}
              <div className="relative h-full bg-white/30 backdrop-blur-3xl border border-amber-600/20 rounded-2xl shadow-[0_20px_40px_-15px_rgba(217,119,6,0.05)] overflow-hidden flex flex-col transition-all duration-700 hover:bg-white/40 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-[0_25px_50px_-15px_rgba(217,119,6,0.12)] p-5 z-10">
                
                {/* Product Image Placeholder */}
                <div className="w-full bg-orange-500 h-48 md:h-52 rounded-xl border border-white/40 shadow-sm relative overflow-hidden flex items-center justify-center mb-5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/40 to-transparent pointer-events-none" />
                  
                  <span className="text-[9px] font-semibold tracking-widest uppercase text-slate-100 relative z-10">
                    Product Visual
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-bold tracking-wider uppercase text-amber-600">
                      {product.category}
                    </span>
                    
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-500 group-hover:animate-pulse transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-light text-slate-800 tracking-tight mb-4">
                    {product.name}
                  </h3>

                  {/* Price & Action */}
                  <div className="mt-auto flex items-end justify-between border-t border-slate-200 pt-4">
                    <p className="text-base md:text-lg font-serif italic text-slate-500">
                      {product.price}
                    </p>
                    <button className="text-[9px] font-bold uppercase tracking-[0.2em] border-b border-transparent text-slate-900 group-hover:border-amber-600 transition-all duration-300 pb-0.5 focus:outline-none">
                      Details
                    </button>
                  </div>
                </div>

                {/* Soft Glass Glare Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-white/5 to-transparent opacity-20 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}