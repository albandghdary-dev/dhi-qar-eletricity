import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileSignature,
  House,
  MessageSquareWarning,
  RefreshCcw,
  Store,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const subscriberTypes = [
  {
    title: 'المشترك المنزلي',
    tag: 'سكني',
    description: 'خدمات مخصصة للمنازل والشقق السكنية، من الاشتراك الجديد إلى متابعة الاستهلاك الشهري.',
    icon: House,
    accent: 'bg-azure',
    iconStyle: 'bg-azure/10 text-azure',
    tagStyle: 'bg-azure/10 text-azure',
    features: ['مقياس ذكي مسبق الدفع', 'فاتورة شهرية برسالة نصية', 'تقسيط الديون المتراكمة'],
  },
  {
    title: 'المشترك التجاري',
    tag: 'تجاري',
    description: 'للمحال والأسواق والمكاتب والمراكز الصحية الخاصة، مع تعرفة تجارية واضحة وخدمة أولوية.',
    icon: Store,
    accent: 'bg-teal',
    iconStyle: 'bg-teal/10 text-teal',
    tagStyle: 'bg-teal/10 text-[#0284c7]',
    features: ['زيادة الأحمال المعتمدة', 'كشف حساب تفصيلي', 'تسديد عبر الحساب المصرفي'],
  },
  {
    title: 'المشترك الصناعي',
    tag: 'صناعي',
    description: 'للمعامل والمصانع والورش الكبرى، تشمل تجهيز المحولات الخاصة وخطوط التغذية المستقلة.',
    icon: Factory,
    accent: 'bg-flame',
    iconStyle: 'bg-flame/10 text-flame',
    tagStyle: 'bg-flame/10 text-[#c2410c]',
    features: ['خطوط ١١ ك.ف مخصصة', 'دراسة فنية للأحمال', 'مهندس متابعة مخصص'],
  },
]

const eServices = [
  { title: 'نقل ملكية الاشتراك', icon: FileSignature },
  { title: 'تغيير صنف الاشتراك', icon: RefreshCcw },
  { title: 'طلب قراءة المقياس', icon: ClipboardList },
  { title: 'تقديم شكوى أو مقترح', icon: MessageSquareWarning },
]

export function ServicesPanel() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-surface py-20 md:py-24">
      <div className="bg-grid-lines-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="services-title"
          eyebrow="خدمات المشتركين"
          title="خدمات مصممة لكل صنف من المشتركين"
          description="اختر صنف اشتراكك للاطلاع على الخدمات الإلكترونية والتعرفة والمستمسكات المطلوبة لكل معاملة."
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-azure hover:underline">
            دليل المستمسكات المطلوبة
            <ArrowLeft className="size-4" aria-hidden="true" />
          </a>
        </SectionHeading>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {subscriberTypes.map((type) => (
            <li
              key={type.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
            >
              <span className={cn('absolute inset-x-0 top-0 h-1.5', type.accent)} aria-hidden="true" />
              <div className="flex items-start justify-between">
                <span className={cn('grid size-16 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105', type.iconStyle)}>
                  <type.icon className="size-8" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className={cn('rounded-full px-3 py-1 text-xs font-bold', type.tagStyle)}>{type.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-navy">{type.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{type.description}</p>
              <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                    <CheckCircle2 className="size-4.5 shrink-0 text-teal" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#bill-inquiry"
                className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary font-bold text-navy transition-colors group-hover:bg-navy group-hover:text-white"
              >
                عرض الخدمات
                <ArrowLeft className="size-4" aria-hidden="true" />
                <span className="sr-only">{`- ${type.title}`}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {eServices.map((service) => (
            <a
              key={service.title}
              href="#contact"
              className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 font-bold text-navy transition-all hover:border-azure/40 hover:text-azure"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold/25 text-navy">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm">{service.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
