import { Building2, Cable, Users, Zap } from 'lucide-react'

const stats = [
  { value: '٨٦', label: 'محطة ثانوية', icon: Building2, color: 'text-azure bg-azure/10' },
  { value: '١٢,٤٠٠', label: 'كيلومتر من الشبكة', icon: Cable, color: 'text-teal bg-teal/10' },
  { value: '٤١٢ ألف', label: 'مشترك مسجّل', icon: Users, color: 'text-flame bg-flame/10' },
  { value: '٢٤/٧', label: 'فرق طوارئ ميدانية', icon: Zap, color: 'text-navy bg-gold/30' },
]

export function StatsRow() {
  return (
    <section aria-label="إحصائيات الفرع" className="border-b border-border bg-white">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-4 md:px-6 lg:grid-cols-4 lg:divide-x lg:divide-x-reverse">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4 py-7 lg:justify-center lg:px-6">
            <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${stat.color}`}>
              <stat.icon className="size-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
              <dd className="text-3xl font-extrabold text-navy">{stat.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}
