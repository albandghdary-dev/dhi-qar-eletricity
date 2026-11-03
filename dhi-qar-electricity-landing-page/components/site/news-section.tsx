'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, CalendarDays, MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { toArabicDigits } from './bill-inquiry-events'
import { cn } from '@/lib/utils'

type Category = 'news' | 'projects'

const items: {
  title: string
  excerpt: string
  date: string
  location: string
  image: string
  alt: string
  category: Category
  progress?: number
}[] = [
  {
    title: 'تشغيل محطة الفداء الثانوية ١٣٢ ك.ف لتعزيز تجهيز مركز الناصرية',
    excerpt: 'دخول المحطة الجديدة الخدمة بسعة ٢×٦٣ ميغا فولت أمبير لتخفيف الأحمال عن المحطات المجاورة.',
    date: '٢٨ تشرين الأول ٢٠٢٦',
    location: 'الناصرية',
    image: '/images/substation.png',
    alt: 'محطة كهرباء ثانوية حديثة بمحولات ومنصات فولاذية في ذي قار',
    category: 'projects',
    progress: 100,
  },
  {
    title: 'ملاكات الفرع تنجز تأهيل المغذيات الهوائية في قضاء الشطرة',
    excerpt: 'استبدال أكثر من ٤٠ كم من الأسلاك القديمة بأسلاك معزولة ضمن خطة الصيف المقبل.',
    date: '٢٤ تشرين الأول ٢٠٢٦',
    location: 'الشطرة',
    image: '/images/network-upgrade.png',
    alt: 'فنيو الكهرباء يعملون على تحديث خطوط الشبكة الهوائية',
    category: 'news',
  },
  {
    title: 'المرحلة الثانية من نصب المقاييس الذكية في أحياء الناصرية',
    excerpt: 'نصب ٢٥ ألف مقياس ذكي مسبق الدفع ضمن مشروع التحول الرقمي للجباية وتقليل الضائعات.',
    date: '١٩ تشرين الأول ٢٠٢٦',
    location: 'حي أور والشموخ',
    image: '/images/smart-meters.png',
    alt: 'صف من المقاييس الكهربائية الذكية المنصوبة على جدار مبنى سكني',
    category: 'projects',
    progress: 62,
  },
  {
    title: 'مدير الفرع يتابع جاهزية الشبكة لموسم الشتاء على ضفاف الفرات',
    excerpt: 'جولة ميدانية لمتابعة خطوط النقل المغذية للمدينة والتأكد من جاهزية فرق الطوارئ.',
    date: '١٥ تشرين الأول ٢٠٢٦',
    location: 'مركز المحافظة',
    image: '/images/nasiriyah-grid.png',
    alt: 'مدينة الناصرية عند الغسق مع أبراج نقل الطاقة على نهر الفرات',
    category: 'news',
  },
]

const filters: { value: 'all' | Category; label: string }[] = [
  { value: 'all', label: 'الكل' },
  { value: 'news', label: 'الأخبار' },
  { value: 'projects', label: 'المشاريع' },
]

export function NewsSection() {
  const [filter, setFilter] = useState<'all' | Category>('all')
  const visible = items.filter((item) => filter === 'all' || item.category === filter)

  return (
    <section id="news" aria-labelledby="news-title" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="news-title"
          eyebrow="آخر المستجدات"
          title="الأخبار والمشاريع"
          description="تابع أحدث مشاريع تأهيل الشبكة والمحطات الجديدة وأخبار الفرع في عموم محافظة ذي قار."
        >
          <div role="group" aria-label="تصفية المحتوى" className="inline-flex rounded-2xl bg-surface p-1.5 ring-1 ring-border">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={cn(
                  'h-10 rounded-xl px-5 text-sm font-bold transition-all',
                  filter === f.value ? 'bg-navy text-white shadow-md' : 'text-navy/70 hover:text-navy',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionHeading>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((item) => (
            <li key={item.title} className="animate-in fade-in zoom-in-95 duration-300">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/8">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={cn(
                      'absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold shadow-sm',
                      item.category === 'projects' ? 'bg-gold text-navy' : 'bg-azure text-white',
                    )}
                  >
                    {item.category === 'projects' ? 'مشروع' : 'خبر'}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="size-3.5" aria-hidden="true" />
                      <time>{item.date}</time>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg leading-snug font-bold text-pretty text-navy">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>

                  {item.progress !== undefined ? (
                    <div className="mt-4">
                      <div className="mb-1 flex justify-between text-xs font-bold">
                        <span className="text-muted-foreground">نسبة الإنجاز</span>
                        <span className={item.progress === 100 ? 'text-teal' : 'text-flame'}>
                          {item.progress === 100 ? 'مكتمل' : `٪${toArabicDigits(item.progress)}`}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn('h-full rounded-full', item.progress === 100 ? 'bg-teal' : 'bg-flame')}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ) : null}

                  <a
                    href="#news"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-azure transition-all group-hover:gap-2.5"
                  >
                    اقرأ المزيد
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    <span className="sr-only">{`عن ${item.title}`}</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
