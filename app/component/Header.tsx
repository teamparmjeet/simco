'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Lightbulb, 
  Wrench, 
  Phone, 
  ChevronDown, 
  Zap, 
  Sun, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';

// 1. Expanded Dynamic Links with Sub-links
const NAV_LINKS = [
  { name: 'Home', href: '/', icon: Home },
  {
    name: 'Lighting',
    href: '#', 
    icon: Lightbulb,
    subLinks: [
      { name: 'Smart LED Series', href: '/lighting/smart', icon: Cpu },
      { name: 'Outdoor & Landscape', href: '/lighting/outdoor', icon: Sun },
      { name: 'Industrial High-Bay', href: '/lighting/industrial', icon: Zap },
    ],
  },
  {
    name: 'Services',
    href: '#',
    icon: Wrench,
    subLinks: [
      { name: 'Custom Installation', href: '/services/installation', icon: Wrench },
      { name: 'Energy Audits', href: '/services/audit', icon: ShieldCheck },
    ],
  },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export default function Header() {
  const pathname = usePathname();
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  // Close mobile dropdown when route changes
  useEffect(() => {
    setActiveMobileMenu(null);
  }, [pathname]);

  const handleMobileClick = (linkName: string, hasSubLinks: boolean, e: React.MouseEvent) => {
    if (hasSubLinks) {
      e.preventDefault();
      setActiveMobileMenu(activeMobileMenu === linkName ? null : linkName);
    } else {
      setActiveMobileMenu(null);
    }
  };

  return (
    <>
      {/* =========================================
          DESKTOP TOP HEADER (HOVER DROPDOWNS)
          ========================================= */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
                <Lightbulb className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
              </div>
              {/* Changed from font-extrabold to font-bold */}
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                SIMCO
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) => {
                const isMainActive = pathname === link.href || link.subLinks?.some(sub => pathname === sub.href);
                const hasSubLinks = !!link.subLinks;

                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={hasSubLinks ? '#' : link.href}
                      className={`flex items-center gap-1 px-4 py-8 text-sm font-medium transition-colors duration-300 ${
                        isMainActive ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                      }`}
                    >
                      {link.name}
                      {hasSubLinks && (
                        <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                      )}
                    </Link>

                    {/* Desktop Dropdown Panel (CSS Hover based) */}
                    {hasSubLinks && (
                      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 transform scale-95 group-hover:scale-100 transition-transform duration-300 origin-top">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                pathname === subLink.href
                                  ? 'bg-orange-50 text-orange-600'
                                  : 'text-slate-600 hover:bg-slate-50 hover:text-orange-500'
                              }`}
                            >
                              <subLink.icon className={`w-4 h-4 ${pathname === subLink.href ? 'text-orange-500' : 'text-slate-400'}`} />
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
              {/* Changed from font-bold to font-medium */}
              <button className="px-6 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-orange-500 rounded-xl transition-all duration-300 shadow-md hover:shadow-orange-500/30 hover:-translate-y-0.5">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          MOBILE BOTTOM NAVIGATION (CLICK DROPDOWNS)
          ========================================= */}
      {/* Invisible overlay to close mobile dropdown when clicking outside */}
      {activeMobileMenu && (
        <div 
          className="md:hidden fixed inset-0 z-40"
          onClick={() => setActiveMobileMenu(null)}
        />
      )}

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-between items-center h-16 px-4">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const hasSubLinks = !!link.subLinks;
            const isMainActive = pathname === link.href || link.subLinks?.some(sub => pathname === sub.href);
            const isMenuOpen = activeMobileMenu === link.name;

            return (
              <div key={link.name} className="relative flex-1">
                
                {/* Mobile Popup Menu (Appears above the clicked icon) */}
                {hasSubLinks && isMenuOpen && (
                  <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-200">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-slate-100 rotate-45" />
                    
                    <div className="relative bg-white z-10 flex flex-col gap-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors ${
                            pathname === subLink.href
                              ? 'bg-orange-50 text-orange-600'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <subLink.icon className={`w-4 h-4 ${pathname === subLink.href ? 'text-orange-500' : 'text-slate-400'}`} />
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Nav Button */}
                <Link
                  href={hasSubLinks ? '#' : link.href}
                  onClick={(e) => handleMobileClick(link.name, hasSubLinks, e)}
                  className={`flex flex-col items-center justify-center w-full h-full space-y-1 relative z-10 ${
                    isMainActive ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <div 
                    className={`relative p-1.5 rounded-xl transition-all duration-300 ${
                      isMainActive ? 'bg-orange-50 scale-110' : 'bg-transparent scale-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={isMainActive ? 2.5 : 2} />
                  </div>
                  {/* Changed from font-bold to font-medium */}
                  <span className="text-[10px] font-medium tracking-wide">
                    {link.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}