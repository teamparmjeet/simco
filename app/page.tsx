import React from "react";
import { Plus, ArrowRight } from "lucide-react";

const formatPrice = (val: any) => {
  const price = typeof val === 'object' ? val?.$numberDecimal : val;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price || 0);
};

export default function CompactProductGrid() {
  return (
    /* Changed to a grid: 2 columns on small mobile, 3 on tablet, 4+ on desktop */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3 sm:p-6 bg-[#FAFAFA]">
      
      {/* 1. SMALL SIMPLE CARD */}
      <div className="group w-full bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-100 shadow-sm transition-all hover:shadow-md active:scale-[0.98]">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50 mb-2 sm:mb-3">
          <img 
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            alt="Simple"
          />
          <div className="absolute top-1.5 left-1.5 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 rounded-full font-body text-[7px] sm:text-[8px] font-bold text-slate-500 uppercase tracking-tighter">
            Simko
          </div>
        </div>
        
        <div className="px-0.5">
          <h3 className="font-heading text-sm sm:text-base text-slate-900 truncate">LED Wood</h3>
          <p className="font-body text-[9px] sm:text-[10px] text-slate-400 mb-2 sm:mb-3">PVC • 4m Warranty</p>
          
          <div className="flex items-center justify-between border-t border-slate-50 pt-2">
            <span className="font-heading text-base sm:text-lg text-slate-950">{formatPrice(400)}</span>
            <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-emerald-500 transition-colors">
              <Plus size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. SMALL VARIANT CARD */}
      <div className="group w-full bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-100 shadow-sm transition-all hover:shadow-md active:scale-[0.98]">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 mb-2 sm:mb-3">
          <img 
            src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            alt="Variant"
          />
          <div className="absolute bottom-1.5 right-1.5 flex -space-x-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white bg-pink-400" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white bg-yellow-400" />
          </div>
        </div>

        <div className="px-0.5">
          <div className="flex justify-between items-start">
            <h3 className="font-heading text-sm sm:text-base text-slate-900 truncate">Led Lamp</h3>
            <span className="hidden sm:block font-body text-[8px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-md uppercase">New</span>
          </div>
          <p className="font-body text-[9px] sm:text-[10px] text-slate-400 mb-2 sm:mb-3 truncate">RGB Series • Pro</p>

          <div className="flex items-center justify-between border-t border-slate-50 pt-2">
            <div className="flex flex-col">
              <span className="text-[7px] sm:text-[8px] font-body text-slate-400 uppercase">From</span>
              <span className="font-heading text-base sm:text-lg text-slate-950 leading-none">{formatPrice(200)}</span>
            </div>
            <button className="h-7 px-2 sm:h-8 sm:px-3 rounded-full bg-slate-100 text-slate-900 font-heading text-[9px] sm:text-[10px] flex items-center gap-1 hover:bg-slate-950 hover:text-white transition-all">
              <span className="hidden xs:block">Details</span> <ArrowRight size={10} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}