'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { tr } = useLanguage();
  const a = tr.about;

  return (
    <div className="bg-white">
      <div className="bg-[#0d766e] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{a.heroTitle}</h1>
          <p className="text-teal-200 text-lg">{a.heroSub}</p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0d766e] mb-5">{a.storyTitle}</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>{a.story1}</p>
              <p>{a.story2}</p>
              <p>{a.story3}</p>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/about/about-us.jpg" alt="Vaibhav Surgicals" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="bg-[#f0fdfa] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0d766e] mb-4">{a.missionTitle}</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">{a.missionSub}</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {(['quality', 'affordability', 'service'] as const).map(key => (
              <div key={key} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0d766e] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">{a[key].title[0]}</span>
                </div>
                <h3 className="font-semibold text-[#0d766e] text-lg mb-2">{a[key].title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0d766e] mb-4">{a.serveTitle}</h2>
          <p className="text-slate-500 mb-10">{a.serveSub}</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: a.hospitals, icon: '🏥' },
              { label: a.medicalShops, icon: '💊' },
              { label: a.patients, icon: '🏠' },
            ].map(({ label, icon }) => (
              <div key={label} className="rounded-2xl border border-slate-100 p-8 shadow-sm">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-semibold text-slate-800">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
