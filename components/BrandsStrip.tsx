'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const brands = [
  { name: 'Tynor', logo: '/images/brands/tynor.png' },
  { name: 'Seni', logo: '/images/brands/seni.png' },
  { name: 'Friends', logo: '/images/brands/friends.png' },
  { name: 'Dynamic Techno Medicals', logo: '/images/brands/dynamic.png' },
  { name: 'CareNow', logo: '/images/brands/carenow.png' },
  { name: 'Venus', logo: '/images/brands/venus.png' },
];

export default function BrandsStrip() {
  const { tr } = useLanguage();

  return (
    <section className="py-14 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
          {tr.brands.heading}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map(({ name, logo }) => (
            <div
              key={name}
              className="relative h-12 w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image src={logo} alt={name} fill className="object-contain" sizes="128px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
