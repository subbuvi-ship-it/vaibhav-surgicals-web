'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_BASE = 'https://wa.me/919025325517';

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
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/contact?category=${encodeURIComponent(cat.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d766e] text-white text-sm font-semibold hover:bg-[#0a5c56] transition-colors"
                  >
                    {p.enquireCategory}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Hi, I am enquiring about Vaibhav Surgicals. Product category: ${cat.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
