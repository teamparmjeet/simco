import React from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] antialiased">
      {/* Header / Hero */}
      <div className="pt-24 pb-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            {/* Orange Accent Line */}
            <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            <span className="font-body text-[10px] font-black tracking-[0.3em] text-orange-600 uppercase">
              Simko Support
            </span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-slate-950 tracking-tighter leading-[0.85]">
            Bright ideas <br />
            <span className="text-slate-200 italic">start here.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: INFO CARDS */}
          <div className="lg:col-span-4 space-y-10">
            <section className="space-y-6">
              <div className="group">
                <p className="font-body text-[10px] font-bold text-slate-400 uppercase mb-2">General Inquiry</p>
                <a href="mailto:support@simko.com" className="font-heading text-2xl text-slate-950 hover:text-orange-500 transition-colors flex items-center gap-2">
                  support@simko.com <ArrowUpRight size={18} className="text-slate-300" />
                </a>
              </div>
              <div className="group">
                <p className="font-body text-[10px] font-bold text-slate-400 uppercase mb-2">Direct Line</p>
                <a href="tel:+910000000000" className="font-heading text-2xl text-slate-950 hover:text-orange-500 transition-colors flex items-center gap-2">
                  +91 00000 00000 <ArrowUpRight size={18} className="text-slate-300" />
                </a>
              </div>
            </section>

            {/* Architectural Detail Card */}
            <div className="bg-slate-950 rounded-[40px] p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                  <MapPin size={20} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl mb-4">Simko HQ</h3>
                <p className="font-body text-slate-400 text-sm leading-relaxed max-w-[180px]">
                  Industrial Hub, Rajasthan, India
                </p>
                <div className="mt-10 flex items-center gap-2 text-orange-500 font-body text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles size={12} /> Lighting the Way
                </div>
              </div>
              {/* Subtle orange glow in the corner */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 blur-[60px] rounded-full" />
            </div>
          </div>

          {/* RIGHT: THE FORM */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[48px] p-8 sm:p-14 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="text" className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 font-body outline-none focus:border-orange-500 transition-colors" placeholder=" " />
                    <label className="absolute left-0 top-3 font-body text-sm text-slate-400 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-orange-600 transition-all uppercase tracking-widest">Your Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 font-body outline-none focus:border-orange-500 transition-colors" placeholder=" " />
                    <label className="absolute left-0 top-3 font-body text-sm text-slate-400 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-orange-600 transition-all uppercase tracking-widest">Email Address</label>
                  </div>
                </div>

                <div className="relative">
                  <textarea rows={4} className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 font-body outline-none focus:border-orange-500 transition-colors resize-none" placeholder=" "></textarea>
                  <label className="absolute left-0 top-3 font-body text-sm text-slate-400 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-orange-600 transition-all uppercase tracking-widest">Project Description</label>
                </div>

                <div className="flex justify-start">
                  <button className="group relative h-16 px-12 bg-orange-500 text-white rounded-full font-heading text-lg overflow-hidden transition-all hover:bg-orange-600 hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)] active:scale-95">
                    <span className="relative z-10 flex items-center gap-3">
                      Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}