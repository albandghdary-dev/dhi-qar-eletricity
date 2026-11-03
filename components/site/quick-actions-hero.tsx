import { ArrowLeft, CreditCard, Activity, Clock4, UtilityPole, Wrench, Zap, ShieldCheck } from 'lucide-react'
import { EnergyGridBackground } from './energy-grid-background'
import { BillInquiryPanel } from './bill-inquiry-panel'
import { toArabicDigits } from './bill-inquiry-events'
import { cn } from '@/lib/utils'

const actions = [
  {
    title: 'استعلام الفاتورة',
    description: 'اعرف مبلغ فاتورتك واستهلاكك الشهري فوراً',
    icon: Zap,
    href: '#bill-inquiry',
    card: 'bg-gradient-to-br from-[#FFE24D] to-gold text-navy shadow-gold/25',
    iconWrap: 'bg-navy text-gold',
    sub: 'text-navy/70',
  },
  {
    title: 'تسديد الفاتورة',
    description: 'ادفع إلكترونياً عبر البطاقات والمحافظ الرقمية',
    icon: CreditCard,
    href: '#services',
    card: 'bg-gradient-to-br from-[#2B8CFF] to-azure text-white shadow-azure/30',
    iconWrap: 'bg-white/20 text-white',
    sub: 'text-white/80',
  },
  {
    title: 'الإبلاغ عن عطل',
    description: 'أبلغ عن انقطاع أو خطر في الشبكة وتابع البلاغ',
    icon: Wrench,
    href: '#contact',
    card: 'bg-gradient-to-br from-[#FB8A3C] to-flame text-white shadow-flame/30',
    iconWrap: 'bg-white/20 text-white',
    sub: 'text-white/80',
  },
  {
    title: 'طلب مقياس جديد',
    description: 'قدّم طلب اشتراك أو مقياس ذكي جديد إلكترونياً',
    icon: UtilityPole,
    href: '#services',
    card: 'bg-gradient-to-br from-[#38BDF8] to-teal text-white shadow-teal/30',
    iconWrap: 'bg-white/20 text-white',
    sub: 'text-white/85',
  },
]

const networkStatus = [
  { label: 'حالة الشبكة', value: 'مستقرة', icon: Activity, accent: 'text-teal' },
  { label: 'ساعات التجهيز اليوم', value: '٢٠ ساعة', icon: Clock4, accent: 'text-gold' },
  { label: 'الحمل الحالي', value: '١,٨٤٠ ميغاواط', icon: Zap, accent: 'text-flame' },
]

export function QuickActionsHero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy pt-12 pb-16 text-white md:pt-14 md:pb-20">
      <EnergyGridBackground />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="glass mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold text-white/85">
              <ShieldCheck className="size-4 text-teal" aria-hidden="true" />
              البوابة الإلكترونية الرسمية للمشتركين
            </p>
            <h1 id="hero-title" className="text-balance text-4xl leading-tight font-extrabold md:text-5xl">
              خدمات الكهرباء في ذي قار
              <span className="block bg-gradient-to-l from-teal via-[#7DD3FC] to-white bg-clip-text text-transparent">
                أسرع، أوضح، ورقمية بالكامل
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
              أنجز معاملاتك دون مراجعة الدوائر: استعلم عن فاتورتك، ادفعها، وأبلغ عن الأعطال على مدار الساعة.
            </p>
          </div>

          <ul className="grid grid-cols-3 gap-3 lg:w-[480px]" aria-label="حالة الشبكة الآن">
            {networkStatus.map((item) => (
              <li key={item.label} className="glass rounded-2xl p-4">
                <item.icon className={cn('mb-2 size-5', item.accent)} aria-hidden="true" />
                <p className="text-xs text-white/60">{item.label}</p>
                <p className="mt-0.5 font-extrabold">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>

        <div id="quick-actions" className="mt-10">
          <h2 className="sr-only">الإجراءات السريعة</h2>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {actions.map((action) => (
              <li key={action.title}>
                <a
                  href={action.href}
                  className={cn(
                    'group relative flex h-full min-h-52 flex-col overflow-hidden rounded-3xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:outline-none',
                    action.card,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-10 -left-10 size-40 rounded-full border-[18px] border-white/15 transition-transform duration-500 group-hover:scale-125"
                  />
                  <span className={cn('grid size-16 place-items-center rounded-2xl shadow-inner', action.iconWrap)}>
                    <action.icon className="size-8" strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="mt-auto pt-6 text-xl font-extrabold md:text-2xl">{action.title}</span>
                  <span className={cn('mt-1.5 text-sm leading-relaxed', action.sub)}>{action.description}</span>
                  <ArrowLeft
                    className="absolute top-6 left-6 size-5 transition-transform duration-300 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          <BillInquiryPanel />

          <div className="glass flex flex-col justify-between gap-6 rounded-3xl p-6 md:p-7">
            <div>
              <h2 className="text-xl font-extrabold">التحول الرقمي في ذي قار</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                نعمل على استبدال المقاييس التقليدية بمقاييس ذكية مسبقة الدفع وأتمتة جميع خدمات المشتركين.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: 'المقاييس الذكية المنصوبة', value: 64, color: 'bg-teal' },
                { label: 'المعاملات المنجزة إلكترونياً', value: 78, color: 'bg-azure' },
                { label: 'نسبة الجباية الإلكترونية', value: 52, color: 'bg-gold' },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-white/75">{bar.label}</span>
                    <span className="font-extrabold">٪{toArabicDigits(bar.value)}</span>
                  </div>
                  <div
                    className="h-2 overflow-hidden rounded-full bg-white/10"
                    role="progressbar"
                    aria-valuenow={bar.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={bar.label}
                  >
                    <div className={cn('h-full rounded-full', bar.color)} style={{ width: `${bar.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
