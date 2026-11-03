import { CheckCircle2, Factory, House, Store, ArrowLeft } from 'lucide-react'
import { SectionHeading } from './section-heading'

const subscriberTypes = [
  {
    title: 'المشترك المنزلي',
    tag: 'سكني',
    description: 'خدمات مخصصة للمنازل، واستهلاك الكهرباء من الشريحة المدعومة إلى متابعة الاستهلاك المنزلي.',
    icon: House,
    href: 'https://moelc.gov.iq/?billing',
    features: ['العداد الذكي مسبق الدفع', 'الفاتورة شهرية برسالة نصية', 'التقسيط للديون المتراكمة'],
  },
  {
    title: 'المشترك التجاري',
    tag: 'تجاري',
    description: 'للمحال والأسواق والشركات الخدمية الخاصة مع تسهيلات تجارية وخدمة أولوية.',
    icon: Store,
    href: 'https://moelc.gov.iq/?page=1122%20',
    features: ['إدارة الاحمال المرتفعة', 'تقدير حسابات الاستهلاك', 'تسهيلات سداد الشركات'],
  },
  {
    title: 'المشترك الصناعي',
    tag: 'صناعي',
    description: 'المصانع والورش والخطوط الإنتاجية الكبيرة، وتوفير طاقة مستقرة ومراقبة للقدرة المحركة.',
    icon: Factory,
    href: 'https://ur.gov.iq/index/show-eservice/50933/10036/cat',
    features: ['خطوط نقل خاصة', 'دراسة معاملات القدرة', 'تعرفة خاصة بالاستهلاك الصناعي'],
  },
]

export function ServicesPanel() {
  return (
    <section className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="خدمات المشتركين"
          title="خدمات مصممة لكل صنف من المشتركين"
          description="اختر فئة الاشتراك الخاصة بك لتتعرف على الخدمات الرقمية والإجراءات المتاحة لك."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {subscriberTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                      {type.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{type.description}</p>

                  <div className="space-y-3 mb-8">
                    {type.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-2.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={type.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-semibold flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>عرض الخدمات</span>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
