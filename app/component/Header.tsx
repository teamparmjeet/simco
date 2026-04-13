'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Lightbulb, 
  Phone, 
  ChevronDown, 
  Zap, 
  Sun, 
  ShieldCheck, 
  Cpu,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

// 1. Full Navigation Structure (For Desktop & Full Mobile Menu)
const NAV_LINKS = [
  { name: 'Home', href: '/', icon: Home },
  {
    name: 'Premium Decor',
    href: '#', 
    icon: Sparkles,
    subLinks: [
      { name: 'Aura Series', href: '/decor/aura', icon: Sun },
      { name: 'Architectural', href: '/decor/architectural', icon: Lightbulb },
      { name: 'Landscape', href: '/decor/landscape', icon: Sun },
    ],
  },
  {
    name: 'Smart Solutions',
    href: '#',
    icon: Cpu,
    subLinks: [
      { name: 'Simko Home OS', href: '/smart/os', icon: Cpu },
      { name: 'Energy Optimization', href: '/smart/energy', icon: Zap },
      { name: 'Security Sync', href: '/smart/security', icon: ShieldCheck },
    ],
  },
  { name: 'Contact', href: '/contact', icon: Phone },
];

// 2. Bottom Navigation Quick Links (Mobile Only)
const QUICK_LINKS = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Decor', href: '/decor/aura', icon: Sparkles },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* =========================================
          DESKTOP TOP HEADER
          ========================================= */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-20">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-amber-50 to-amber-100/50 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300">
                <Lightbulb className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold tracking-[0.15em] uppercase text-slate-900">
                SIMKO
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-2">
              {NAV_LINKS.map((link) => {
                const isMainActive = pathname === link.href || link.subLinks?.some(sub => pathname === sub.href);
                const hasSubLinks = !!link.subLinks;

                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={hasSubLinks ? '#' : link.href}
                      className={`flex items-center gap-1 px-4 py-8 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                        isMainActive ? 'text-amber-600' : 'text-slate-500 hover:text-amber-600'
                      }`}
                    >
                      {link.name}
                      {hasSubLinks && (
                        <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                      )}
                    </Link>

                    {/* Desktop Dropdown Panel */}
                    {hasSubLinks && (
                      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-white p-2 transform scale-95 group-hover:scale-100 transition-transform duration-300 origin-top">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 ${
                                pathname === subLink.href
                                  ? 'bg-amber-50/50 text-amber-700'
                                  : 'text-slate-600 hover:bg-slate-50 hover:text-amber-600'
                              }`}
                            >
                              <subLink.icon className={`w-4 h-4 ${pathname === subLink.href ? 'text-amber-500' : 'text-slate-400'}`} />
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Call to Action */}
            <div className="hidden md:block">
              <button className="px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-white bg-slate-900 hover:bg-amber-600 rounded-xl transition-all duration-300 shadow-md hover:shadow-amber-500/30 hover:-translate-y-0.5">
                Consultation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          MOBILE FULL NAVIGATION OVERLAY
          ========================================= */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-2xl transition-all duration-500 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-8 invisible'
        }`}
      >
        <div className="flex justify-between items-center px-6 h-20 border-b border-slate-200/50">
          <span className="text-lg font-bold tracking-[0.15em] uppercase text-slate-900">
            Menu
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="flex flex-col gap-4">
              {link.subLinks ? (
                <>
                  <div className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600 border-b border-slate-200 pb-2">
                    {link.name}
                  </div>
                  <div className="flex flex-col gap-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${
                          pathname === subLink.href ? 'bg-amber-50 text-amber-700' : 'text-slate-600 active:bg-slate-100'
                        }`}
                      >
                        <subLink.icon className="w-5 h-5 opacity-70" />
                        <span className="text-sm font-medium">{subLink.name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-slate-900 active:text-amber-600 transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          MOBILE BOTTOM NAVIGATION (QUICK LINKS + TOGGLER)
          ========================================= */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-2xl border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center h-16 px-2">
          
          {/* Quick Links */}
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 relative ${
                  isActive ? 'text-amber-600' : 'text-slate-400 active:text-slate-600'
                }`}
              >
                <div className={`relative p-1.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-amber-50 scale-110' : 'bg-transparent scale-100'}`}>
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className="text-[9px] font-semibold tracking-wider uppercase">
                  {link.name}
                </span>
              </Link>
            );
          })}

          {/* Menu Toggler */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 text-slate-400 active:text-slate-600 transition-colors`}
          >
            <div className="relative p-1.5 rounded-xl bg-transparent">
              <Menu className="w-5 h-5" strokeWidth={2} />
            </div>
            <span className="text-[9px] font-semibold tracking-wider uppercase">
              Menu
            </span>
          </button>

        </div>
      </nav>
    </>
  );
}