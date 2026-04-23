'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TrustBar() {
  const { tr } = useLanguage();
  const stats = [
    { value: '1987', label: tr.trust.established },
    { value: '5', label: tr.trust.branches },
    { value: '35+', label: tr.trust.years },
    { value: '1000+', label: tr.trust.products },
  ];

  return (
    <div className="bg-[#0d766e] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="text-teal-200 text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
