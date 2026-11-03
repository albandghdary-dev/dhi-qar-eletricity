import { ExternalLink, Zap, CreditCard, Wrench, UtilityPole } from 'lucide-react'
import EnergyGridBackground from './energy-grid-background'

const actions = [
  {
    title: 'استعلام الفاتورة',
    description: 'اعرف مبلغ فاتورتك واستهلاكك الشهري فوراً.',
    icon: Zap,
    href: 'https://moelc.gov.iq/?billing',
    card: 'bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-900',
    iconwrap: 'bg-slate-900 text-amber-400',
    sub: 'text-slate-800',
  },
  {
    title: 'تسديد الفاتورة',
    description: 'ادفع إلكترونياً عبر البطاقات والمحافظ الرقمية.',
    icon: CreditCard,
    href: 'https://moelc.gov.iq/?page=1122%20',
    card: 'bg-gradient-to-br from-blue-500 to-blue-700 text-white',
    iconwrap: 'bg-white/20 text-white',
    sub: 'text-blue-100',
  },
  {
    title: 'الإبلاغ عن عطل',
    description: 'أبلغ عن انقطاع أو خطر في الشبكة وتابع حالة البلاغ.',
    icon: Wrench,
    href: 'https://comp.moelc.gov.iq/',
    card: 'bg-gradient-to-br from-orange-500 to-red-600 text-white',
    iconwrap: 'bg-white/20 text-white',
    sub: 'text-orange-100',
  },
  {
    title: 'طلب مقياس جديد',
    description: 'قدم طلب اشتراك أو مقياس ذكي جديد إلكترونياً.',
    icon: UtilityPole,
    href: 'https://ur.gov.iq/index/show-eservice/50933/10036/cat',
    card: 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white',
    iconwrap: 'bg-white/20 text-white',
    sub: 'text-emerald-100',
  },
]

export default function QuickActionsHero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-slate-900 text-white" dir="rtl">
      <EnergyGridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            خدمات الكهرباء في ذي قار
            <span className="block text-amber-400 mt-2">أسرع، أوضح، ورقمية بالكامل</span>
          </h2>
          <p className="text-lg text-gray-300">
            أنجز معاملاتك دون مراجعة الدوائر: استعلم عن فاتورتك، ادفعها، وأبلغ عن الأعطال على مدار الساعة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <a
                key={index}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col justify-between shadow-lg ${action.card}}
              >
                <div>
                  <div className={w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${action.iconwrap}}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                  <p className={text-sm mb-4 opacity-90 ${action.sub}}>{action.description}</p>
                </div>
                <div className="flex items-center text-sm font-semibold mt-2">
                  <span>انتقل للخدمة</span>
                  <ExternalLink className="w-4 h-4 mr-2" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
