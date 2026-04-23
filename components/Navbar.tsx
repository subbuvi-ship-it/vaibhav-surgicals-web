'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, tr } = useLanguage();

  const links = [
    { href: '/', label: tr.nav.home },
    { href: '/about', label: tr.nav.about },
    { href: '/products', label: tr.nav.products },
    { href: '/brands', label: tr.nav.brands },
    { href: '/locations', label: tr.nav.locations },
    { href: '/contact', label: tr.nav.contact },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#0d766e] flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tight">VS</span>
            </div>
            <div className="leading-tight">
              <span className="block text-[#0d766e] font-bold text-base">Vaibhav</span>
              <span className="block text-[#dc2626] font-semibold text-xs tracking-wide uppercase">Surgicals</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'bg-[#f0fdfa] text-[#0d766e]'
                    : 'text-slate-600 hover:text-[#0d766e] hover:bg-slate-50'
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="ml-2 px-3 py-1.5 rounded-md text-sm font-semibold border border-[#0d766e] text-[#0d766e] hover:bg-[#f0fdfa] transition-colors"
              aria-label="Switch language"
            >
              {lang === 'en' ? 'தமிழ்' : 'EN'}
            </button>

            <Link
              href="/contact"
              className="ml-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors"
            >
              {tr.nav.enquireNow}
            </Link>
          </nav>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="px-2.5 py-1 rounded border border-[#0d766e] text-[#0d766e] text-xs font-semibold"
            >
              {lang === 'en' ? 'தமிழ்' : 'EN'}
            </button>
            <button
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4 pt-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium mb-1 ${
                pathname === href
                  ? 'bg-[#f0fdfa] text-[#0d766e]'
                  : 'text-slate-600 hover:text-[#0d766e]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-2 px-3 py-2.5 rounded-md text-sm font-semibold bg-[#dc2626] text-white text-center"
          >
            {tr.nav.enquireNow}
          </Link>
        </div>
      )}
    </header>
  );
}
