'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const branches = ['Trichy (HQ)', 'Chennai', 'Coimbatore', 'Salem', 'Pondicherry'];

export default function Footer() {
  const { tr } = useLanguage();

  const productLinks = [
    { label: tr.categories.items.homeCare.title, href: '/products#home-care' },
    { label: tr.categories.items.hygiene.title, href: '/products#hygiene' },
    { label: tr.categories.items.wellness.title, href: '/products#wellness' },
    { label: tr.categories.items.mobility.title, href: '/products#mobility' },
    { label: tr.categories.items.ortho.title, href: '/products#ortho' },
    { label: tr.categories.items.monitoring.title, href: '/products#monitoring' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#0d766e] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">VS</span>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold">Vaibhav Surgicals</span>
                <span className="block text-slate-400 text-xs">Est. 1987</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{tr.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{tr.footer.products}</h3>
            <ul className="space-y-2">
              {productLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{tr.footer.locations}</h3>
            <ul className="space-y-2">
              {branches.map(branch => (
                <li key={branch}>
                  <Link href="/locations" className="text-sm text-slate-400 hover:text-white transition-colors">{branch}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{tr.footer.getInTouch}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Trichy, Tamil Nadu (HQ)
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@vaibhavsurgicals.com
              </li>
              <li>
                <Link href="/contact" className="inline-block mt-1 px-4 py-2 rounded-md bg-[#dc2626] text-white text-sm font-medium hover:bg-[#b91c1c] transition-colors">
                  {tr.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>{tr.footer.rights.replace('{year}', String(new Date().getFullYear()))}</p>
          <p>{tr.footer.associate}</p>
        </div>
      </div>
    </footer>
  );
}
