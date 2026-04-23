'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [
  <svg key="q" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="p" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" /></svg>,
  <svg key="n" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  <svg key="e" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

const pointKeys = ['quality', 'price', 'network', 'experience'] as const;

export default function WhyUs() {
  const { tr } = useLanguage();

  return (
    <section className="py-16 bg-[#f0fdfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square max-w-md mx-auto lg:mx-0 w-full">
            <Image
              src="/images/about/about-us.jpg"
              alt="Vaibhav Surgicals product range"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0d766e] mb-3">{tr.whyUs.heading}</h2>
            <p className="text-slate-500 mb-8">{tr.whyUs.subheading}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {pointKeys.map((key, i) => (
                <div key={key} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0d766e] text-white flex items-center justify-center">
                    {icons[i]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{tr.whyUs.points[key].title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{tr.whyUs.points[key].desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
