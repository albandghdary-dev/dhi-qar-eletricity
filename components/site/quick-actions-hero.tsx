import { ArrowLeft, CreditCard, UtilityPole, Wrench, Zap } from 'lucide-react'
import EnergyGridBackground from './energy-grid-background'
import cn from '@/lib/utils'

const actions = [
  {
    title: 'استعلام الفاتورة',
    description: 'اعرف مبلغ فاتورتك واستهلاكك الشهري فوراً.',
    icon: Zap,
    href: 'https://moelc.gov.iq/?billing',
    card: 'bg-gradient-to-br from-[#FFD240] to-gold text-navy shadow-gold/25',
    iconwrap: 'bg-navy text-gold',
    sub: 'text-navy/70',
  },
  {
    title: 'تسديد الفاتورة',
    description: 'ادفع إلكترونياً عبر البطاقات والمحافظ الرقمية.',
    icon: CreditCard,
    href: 'https://moelc.gov.iq/?page=1122%20',
    card: 'bg-gradient-to-br from-[#288CFF] to-azure text-white shadow-azure/25',
    iconwrap: 'bg-white/20 text-white',
    sub: 'text-white/80',
  },
  {
    title: 'الإبلاغ عن عطل',
    description: 'أبلغ عن انقطاع أو خطر في الشبكة وتابع حالة البلاغ.',
    icon: Wrench,
    href: 'https://comp.moelc.gov.iq/',
    card: 'bg-gradient-to-br from-[#F88A3C] to-flame text-white shadow-flame/30',
    iconwrap: 'bg-white/20 text-white',
    sub: 'text-white/80',
  },
  {
    title: 'طلب مقياس جديد',
    description: 'قدم طلب اشتراك أو مقياس ذكي جديد إلكترونياً.',
    icon: UtilityPole,
    href: 'https://ur.gov.iq/index/show-eservice/50933/10036/cat',
    card: 'bg-gradient-to-br from-[#10B981] to-emerald-600 text-white shadow-emerald/30',
    iconwrap: 'bg-white/20 text-white',
    sub: 'text-white/80',
  },
]

export default function QuickActionsHero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-navy text-white">
      <EnergyGridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            خدمات الكهرباء في ذي قار
            <span className="block text-gold mt-2">أسرع، أوضح، ورقمية بالكامل</span>
          </h2>
          <p className="text-lg text-gray-300">
            أنجز معاملاتك دون مراجعة الدوائر: استعلم عن فاتورتك، ادفعها، وأبلغ عن الأعطال على مدار الساعة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <a
                key={index}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col justify-between',
                  action.card
                )}
              >
                <div>
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', action.iconwrap)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                  <p className={cn('text-sm mb-4', action.sub)}>{action.description}</p>
                </div>
                <div className="flex items-center text-sm font-semibold mt-2">
                  <span>انتقل للخدمة</span>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
