'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP = 'https://wa.me/919025325517';

const categoryKeys = ['homeCare', 'hygiene', 'wellness', 'mobility', 'ortho', 'monitoring'] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', category: '', message: '' });
  const { lang, tr } = useLanguage();
  const c = tr.contact;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <div className="bg-[#0d766e] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{c.heroTitle}</h1>
          <p className="text-teal-200 text-lg">{c.heroSub}</p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#0d766e] mb-6">{c.getInTouch}</h2>
            <div className="space-y-5 text-slate-600">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0d766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-0.5">{c.hqLabel}</p>
                  <p className="text-sm">{c.hqAddress}</p>
                  <p className="text-sm">{c.hqBranches}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0d766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-0.5">{c.emailLabel}</p>
                  <a href="mailto:info@vaibhavsurgicals.com" className="text-sm text-[#0d766e] hover:underline">info@vaibhavsurgicals.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-0.5">{c.whatsappLabel}</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline">{c.whatsappLink}</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl bg-green-50 border border-green-100 p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.successTitle}</h3>
                <p className="text-slate-500 text-sm">{c.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{c.nameLabel} {c.required}</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e]/30 focus:border-[#0d766e]"
                      placeholder={c.namePlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{c.phoneLabel} {c.required}</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e]/30 focus:border-[#0d766e]"
                      placeholder={c.phonePlaceholder} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{c.emailFieldLabel}</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e]/30 focus:border-[#0d766e]"
                    placeholder="your@email.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{c.cityLabel}</label>
                    <input type="text" name="city" value={form.city} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e]/30 focus:border-[#0d766e]"
                      placeholder={c.cityPlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{c.categoryLabel}</label>
                    <select name="category" value={form.category} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e]/30 focus:border-[#0d766e] bg-white">
                      <option value="">{c.categoryPlaceholder}</option>
                      {categoryKeys.map(key => (
                        <option key={key}>{tr.categories.items[key].title}</option>
                      ))}
                      <option>{lang === 'ta' ? 'மற்றவை' : 'Other'}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{c.messageLabel}</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d766e]/30 focus:border-[#0d766e] resize-none"
                    placeholder={c.messagePlaceholder} />
                </div>
                <button type="submit" className="w-full py-3 rounded-lg bg-[#0d766e] text-white font-semibold hover:bg-[#0a5c56] transition-colors">
                  {c.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
