import { Clock, Mail, MapPin, Phone, PhoneCall, Siren } from 'lucide-react'
import { Logo } from './logo'

const socials = [
  {
    label: 'فيسبوك',
    href: 'https://facebook.com',
    path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  },
  {
    label: 'إكس',
    href: 'https://x.com',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'يوتيوب',
    href: 'https://youtube.com',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'تيليغرام',
    href: 'https://telegram.org',
    path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  },
]

const offices = [
  { label: 'مقر الفرع - الناصرية', phone: '٠٧٨٠ ١٥٩ ٢٠٠٠' },
  { label: 'شعبة المشتركين', phone: '٠٧٨٠ ١٥٩ ٣٠٠٠' },
  { label: 'شعبة الشكاوى', phone: '٠٧٧٠ ١٥٩ ٤٠٠٠' },
]

const quickLinks = ['الاستعلام عن الفاتورة', 'الدفع الإلكتروني', 'طلب مقياس جديد', 'جدول الصيانة', 'دليل التعرفة', 'الإعلانات والمناقصات']

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-white">
      <div className="bg-grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-l from-gold to-[#FFB800] p-6 text-navy md:flex-row md:items-center md:p-8">
          <div className="flex items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-navy text-gold">
              <Siren className="size-7" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-extrabold">خط الطوارئ متاح على مدار الساعة</h2>
              <p className="mt-1 text-sm font-medium text-navy/75">للإبلاغ عن الحرائق، الأسلاك الساقطة، أو انقطاع التيار الطارئ</p>
            </div>
          </div>
          <a
            href="tel:159"
            className="inline-flex h-14 items-center gap-3 rounded-2xl bg-navy px-7 text-3xl font-extrabold text-white transition hover:bg-navy-soft"
          >
            <PhoneCall className="size-6 text-gold" aria-hidden="true" />
            ١٥٩
          </a>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.3fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              الفرع الرسمي المسؤول عن توزيع الطاقة الكهربائية وخدمة المشتركين في محافظة ذي قار وأقضيتها ونواحيها.
            </p>
            <ul className="mt-6 flex gap-2" aria-label="حساباتنا الرسمية على مواقع التواصل">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-xl bg-white/8 ring-1 ring-white/10 transition hover:bg-azure hover:ring-azure"
                  >
                    <svg viewBox="0 0 24 24" className="size-4.5 fill-current" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="روابط سريعة">
            <h2 className="text-base font-bold">روابط سريعة</h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#top" className="transition-colors hover:text-teal">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-bold">أرقام المكاتب</h2>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              {offices.map((office) => (
                <li key={office.label} className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                  <span>
                    <span className="block text-white/60">{office.label}</span>
                    <span className="font-bold tracking-wide" dir="ltr">
                      {office.phone}
                    </span>
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <a href="mailto:info@dhiqar-elec.gov.iq" className="font-bold hover:text-teal" dir="ltr">
                  info@dhiqar-elec.gov.iq
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/6 p-4 ring-1 ring-white/10">
              <p className="flex items-center gap-2 text-sm font-bold">
                <Clock className="size-4 text-gold" aria-hidden="true" />
                أوقات الدوام الرسمي
              </p>
              <p className="mt-2 text-sm text-white/65">الأحد – الخميس: ٨:٠٠ ص – ٢:٠٠ م</p>
              <p className="mt-1 text-sm text-white/65">الطوارئ وفرق الصيانة: ٢٤ ساعة طوال الأسبوع</p>
            </div>
          </div>

          <div id="network-map">
            <h2 className="text-base font-bold">موقع مقر الفرع</h2>
            <p className="mt-5 flex items-start gap-2 text-sm text-white/65">
              <MapPin className="mt-0.5 size-4 shrink-0 text-flame" aria-hidden="true" />
              الناصرية، شارع النيل، مجاور مديرية بلدية ذي قار
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-white/15">
              <iframe
                title="خريطة موقع فرع توزيع كهرباء ذي قار في الناصرية"
                src="https://www.openstreetmap.org/export/embed.html?bbox=46.22%2C31.02%2C46.30%2C31.07&layer=mapnik&marker=31.044%2C46.259"
                className="h-48 w-full border-0 grayscale-[30%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 md:flex-row">
          <p>© ٢٠٢٦ فرع توزيع كهرباء ذي قار – وزارة الكهرباء العراقية. جميع الحقوق محفوظة.</p>
          <ul className="flex gap-5">
            <li>
              <a href="#top" className="hover:text-white">سياسة الخصوصية</a>
            </li>
            <li>
              <a href="#top" className="hover:text-white">شروط الاستخدام</a>
            </li>
            <li>
              <a href="#top" className="hover:text-white">إمكانية الوصول</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
