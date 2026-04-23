'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const categoryImages = [
  { key: 'homeCare', img: '/images/categories/home-care-furniture.jpg', href: '/products#home-care' },
  { key: 'hygiene', img: '/images/categories/hygiene.jpg', href: '/products#hygiene' },
  { key: 'wellness', img: '/images/categories/wellness.jpg', href: '/products#wellness' },
  { key: 'mobility', img: '/images/categories/mobility.jpg', href: '/products#mobility' },
  { key: 'ortho', img: '/images/categories/ortho.jpg', href: '/products#ortho' },
  { key: 'monitoring', img: '/images/categories/monitoring.jpg', href: '/products#monitoring' },
] as const;

export default function ProductCategories() {
  const { tr } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0d766e]">{tr.categories.heading}</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">{tr.categories.subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryImages.map(({ key, img, href }) => {
            const cat = tr.categories.items[key];
            return (
              <Link
                key={key}
                href={href}
                className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="relative h-48 bg-slate-50 overflow-hidden">
                  <Image
                    src={img}
                    alt={cat.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#0d766e] text-lg group-hover:text-[#dc2626] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#dc2626]">
                    {tr.categories.viewProducts}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
