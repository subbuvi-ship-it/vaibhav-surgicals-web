'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const categoryImages: Record<string, string> = {
  'home-care': '/images/categories/home-care-furniture.jpg',
  hygiene: '/images/categories/hygiene.jpg',
  wellness: '/images/categories/wellness.jpg',
  mobility: '/images/categories/mobility.jpg',
  ortho: '/images/categories/ortho.jpg',
  monitoring: '/images/categories/monitoring.jpg',
};

const categoryKeys = ['homeCare', 'hygiene', 'wellness', 'mobility', 'ortho', 'monitoring'] as const;

export default function ProductsPage() {
  const { tr } = useLanguage();
  const p = tr.products;

  const categories = categoryKeys.map(key => ({
    key,
    ...p.items[key],
    img: categoryImages[p.items[key].id],
  }));

  return (
    <div className="bg-white">
      <div className="bg-[#0d766e] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{p.heroTitle}</h1>
          <p className="text-teal-200 text-lg">{p.heroSub}</p>
        </div>
      </div>

      {/* Jump nav */}
      <div className="sticky top-16 bg-white border-b border-slate-100 shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {categories.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:bg-[#f0fdfa] hover:text-[#0d766e] whitespace-nowrap transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {categories.map((cat, i) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-28">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-50 shadow-sm">
                  <Image src={cat.img} alt={cat.title} fill className="object-contain p-6" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-2xl font-bold text-[#0d766e] mb-3">{cat.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{cat.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {cat.products.map(prod => (
                    <li key={prod} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] shrink-0" />
                      {prod}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d766e] text-white text-sm font-semibold hover:bg-[#0a5c56] transition-colors"
                >
                  {p.enquireCategory}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
