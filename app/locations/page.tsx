'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const branches = [
  { cityKey: 'trichy' as const, isHQ: true, address: 'Trichy, Tamil Nadu', phone: '', email: 'info@vaibhavsurgicals.com' },
  { cityKey: 'coimbatore' as const, isHQ: false, address: 'No 159A, Ranga Konar Street, Katoor, Coimbatore – 641009', phone: '', email: '' },
  { cityKey: 'chennai' as const, isHQ: false, address: 'Chennai, Tamil Nadu', phone: '', email: '' },
  { cityKey: 'salem' as const, isHQ: false, address: 'Salem, Tamil Nadu', phone: '', email: '' },
  { cityKey: 'pondicherry' as const, isHQ: false, address: 'Pondicherry', phone: '', email: '' },
];

export default function LocationsPage() {
  const { tr } = useLanguage();
  const l = tr.locations;

  return (
    <div className="bg-white">
      <div className="bg-[#0d766e] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{l.heroTitle}</h1>
          <p className="text-teal-200 text-lg">{l.heroSub}</p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map(({ cityKey, isHQ, address, phone, email }) => (
            <div key={cityKey} className="rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0d766e] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-[#0d766e] text-lg leading-tight">{tr.cities[cityKey]}</h2>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${isHQ ? 'bg-[#dc2626] text-white' : 'bg-[#f0fdfa] text-[#0d766e]'}`}>
                    {isHQ ? l.headquarters : l.branch}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-3">{address}</p>
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0d766e] mb-1">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0d766e]">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {email}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0d766e] mb-6 text-center">{l.mapHeading}</h2>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-80">
            <iframe
              title="Vaibhav Surgicals Coimbatore"
              src="https://maps.google.com/maps?q=No+159A,+Ranga+Konar+Street,+Katoor,+Coimbatore+641009,+Tamil+Nadu,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <div className="bg-[#f0fdfa] py-10 px-4 text-center">
        <p className="text-slate-600 text-sm">
          {l.moreNote}{' '}
          <Link href="/contact" className="text-[#0d766e] font-semibold hover:underline">{l.contactUs}</Link>{' '}
          {l.toFindOut}
        </p>
      </div>
    </div>
  );
}
