'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const brands = [
  { name: 'Tynor', logo: '/images/brands/tynor.png', desc: { en: "India's leading orthopaedic and rehabilitation products brand — known for superior-quality splints, supports, braces, and mobility aids.", ta: 'இந்தியாவின் முன்னணி எலும்பியல் மற்றும் மறுவாழ்வு தயாரிப்புகள் பிராண்ட் — சிறந்த தர ஸ்பிளிண்டுகள், ஆதரவுகள், பிரேஸ்கள் மற்றும் நடமாட்ட உதவிகளுக்கு பிரபலமானது.' }, categories: { en: ['Ortho Rehabilitation', 'Patient Mobility'], ta: ['எலும்பியல் மறுவாழ்வு', 'நோயாளி நடமாட்டம்'] } },
  { name: 'Seni', logo: '/images/brands/seni.png', desc: { en: 'A European leader in adult incontinence products — offering a complete range of adult diapers for hospital and home use.', ta: 'பெரியவர் சிறுநீர் கட்டுப்பாட்டு தயாரிப்புகளில் ஐரோப்பிய முன்னணி — மருத்துவமனை மற்றும் வீட்டு பயன்பாட்டிற்கான பெரியவர் நாப்கின்களின் முழுமையான வரம்பு.' }, categories: { en: ['Hygiene Products'], ta: ['சுகாதார தயாரிப்புகள்'] } },
  { name: 'Friends Adult Diapers', logo: '/images/brands/friends.png', desc: { en: "One of India's most trusted adult diaper brands, providing comfort and dignity for patients and elderly individuals.", ta: 'இந்தியாவின் மிகவும் நம்பகமான பெரியவர் நாப்கின் பிராண்டுகளில் ஒன்று, நோயாளிகளுக்கும் முதியோர்களுக்கும் வசதியும் மரியாதையும் வழங்குகிறது.' }, categories: { en: ['Hygiene Products'], ta: ['சுகாதார தயாரிப்புகள்'] } },
  { name: 'Dynamic Techno Medicals', logo: '/images/brands/dynamic.png', desc: { en: 'Specialist manufacturers of home care medical equipment including hospital furniture, wheelchairs, and patient aids.', ta: 'மருத்துவமனை தளபாடங்கள், சக்கர நாற்காலிகள் மற்றும் நோயாளி உதவிகள் உட்பட வீட்டு பராமரிப்பு மருத்துவ உபகரணங்களின் நிபுணர் உற்பத்தியாளர்கள்.' }, categories: { en: ['Home Care Furniture', 'Patient Mobility'], ta: ['வீட்டு பராமரிப்பு', 'நோயாளி நடமாட்டம்'] } },
  { name: 'CareNow', logo: '/images/brands/carenow.png', desc: { en: 'Redefining health and hygiene with a wide range of personal care and hygiene solutions for patients and caregivers.', ta: 'நோயாளிகள் மற்றும் பராமரிப்பாளர்களுக்கான பரந்த தனிப்பட்ட பராமரிப்பு மற்றும் சுகாதார தீர்வுகளுடன் ஆரோக்கியம் மற்றும் சுகாதாரத்தை மறுவரையறை செய்கிறது.' }, categories: { en: ['Hygiene Products', 'Wellness'], ta: ['சுகாதார தயாரிப்புகள்', 'நலன்'] } },
  { name: 'Venus', logo: '/images/brands/venus.png', desc: { en: 'A trusted brand for safety and personal protection equipment — including gloves, masks, and protective gear.', ta: 'கையுறைகள், முககவசங்கள் மற்றும் பாதுகாப்பு உபகரணங்கள் உட்பட பாதுகாப்பு மற்றும் தனிப்பட்ட பாதுகாப்பு உபகரணங்களுக்கான நம்பகமான பிராண்ட்.' }, categories: { en: ['Hygiene Products', 'Wellness'], ta: ['சுகாதார தயாரிப்புகள்', 'நலன்'] } },
];

export default function BrandsPage() {
  const { lang, tr } = useLanguage();
  const b = tr.brandsPage;

  return (
    <div className="bg-white">
      <div className="bg-[#0d766e] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{b.heroTitle}</h1>
          <p className="text-teal-200 text-lg">{b.heroSub}</p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map(({ name, logo, desc, categories }) => (
            <div key={name} className="rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col">
              <div className="relative h-16 mb-5">
                <Image src={logo} alt={name} fill className="object-contain object-left" sizes="200px" />
              </div>
              <h2 className="font-semibold text-[#0d766e] text-lg mb-2">{name}</h2>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc[lang]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories[lang].map(c => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-[#f0fdfa] text-[#0d766e] font-medium">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#f0fdfa] py-10 px-4 text-center">
        <p className="text-slate-600 max-w-xl mx-auto">{b.moreNote}</p>
      </div>
    </div>
  );
}
