'use client'

import { useState } from 'react'
import { BellRing, Clock, MapPin, TimerReset } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

type Status = 'active' | 'scheduled' | 'done'

const schedule: {
  day: string
  month: string
  weekday: string
  area: string
  district: string
  work: string
  window: string
  restore: string
  status: Status
}[] = [
  { day: '٠١', month: 'تشرين الثاني', weekday: 'الأحد', area: 'حي أور، حي الشموخ', district: 'الناصرية', work: 'استبدال محولة ٤٠٠ ك.ف.أ', window: '٠٨:٠٠ ص – ١٢:٠٠ م', restore: '١٢:٣٠ م', status: 'active' },
  { day: '٠١', month: 'تشرين الثاني', weekday: 'الأحد', area: 'شارع الحبوبي، السوق الكبير', district: 'الناصرية', work: 'صيانة مغذي ١١ ك.ف رقم ٧', window: '٠٦:٠٠ ص – ٠٨:٠٠ ص', restore: '٠٨:١٥ ص', status: 'done' },
  { day: '٠٢', month: 'تشرين الثاني', weekday: 'الاثنين', area: 'مركز القضاء، حي العسكري', district: 'الشطرة', work: 'تأهيل الشبكة الهوائية', window: '٠٧:٣٠ ص – ١١:٣٠ ص', restore: '١٢:٠٠ م', status: 'scheduled' },
  { day: '٠٣', month: 'تشرين الثاني', weekday: 'الثلاثاء', area: 'ناحية كرمة بني سعيد', district: 'سوق الشيوخ', work: 'ربط مغذي جديد بالمحطة', window: '٠٩:٠٠ ص – ٠٢:٠٠ م', restore: '٠٢:٣٠ م', status: 'scheduled' },
  { day: '٠٤', month: 'تشرين الثاني', weekday: 'الأربعاء', area: 'حي الزهراء، حي الشهداء', district: 'الرفاعي', work: 'صيانة دورية لمحطة ٣٣ ك.ف', window: '٠٨:٠٠ ص – ١٠:٠٠ ص', restore: '١٠:٣٠ ص', status: 'scheduled' },
  { day: '٠٥', month: 'تشرين الثاني', weekday: 'الخميس', area: 'مركز القضاء، الطريق العام', district: 'الجبايش', work: 'نصب أعمدة وأسلاك معزولة', window: '٠٧:٠٠ ص – ١٢:٠٠ م', restore: '١٢:٣٠ م', status: 'scheduled' },
]

const statusMeta: Record<Status, { label: string; style: string; dot: string }> = {
  active: { label: 'جارٍ الآن', style: 'bg-flame/10 text-[#c2410c]', dot: 'bg-flame animate-pulse' },
  scheduled: { label: 'مجدول', style: 'bg-azure/10 text-azure', dot: 'bg-azure' },
  done: { label: 'أُعيد التيار', style: 'bg-teal/10 text-[#0369a1]', dot: 'bg-teal' },
}

const filters: { value: 'all' | Status; label: string }[] = [
  { value: 'all', label: 'جميع الأعمال' },
  { value: 'active', label: 'جارٍ الآن' },
  { value: 'scheduled', label: 'مجدولة' },
]

export function OutageSchedule() {
  const [filter, setFilter] = useState<'all' | Status>('all')
  const rows = schedule.filter((row) => filter === 'all' || row.status === filter)

  return (
    <section id="maintenance" aria-labelledby="maintenance-title" className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="maintenance-title"
          eyebrow="القطع المبرمج"
          title="جدول الصيانة والانقطاعات المبرمجة"
          description="مواعيد أعمال الصيانة المخطط لها في مناطق محافظة ذي قار مع الوقت المتوقع لإعادة التيار الكهربائي."
        >
          <div role="group" aria-label="تصفية جدول الصيانة" className="inline-flex rounded-2xl bg-white p-1.5 ring-1 ring-border">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={cn(
                  'h-10 rounded-xl px-4 text-sm font-bold transition-all',
                  filter === f.value ? 'bg-navy text-white shadow-md' : 'text-navy/70 hover:text-navy',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionHeading>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-white px-6 py-4">
            <p className="flex items-center gap-2 text-sm font-bold text-navy">
              <BellRing className="size-4 text-flame" aria-hidden="true" />
              آخر تحديث: اليوم ٠٧:٤٥ صباحاً
            </p>
            <ul className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground" aria-label="دليل الحالات">
              {Object.values(statusMeta).map((meta) => (
                <li key={meta.label} className="flex items-center gap-1.5">
                  <span className={cn('size-2 rounded-full', meta.dot)} aria-hidden="true" />
                  {meta.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-right">
              <caption className="sr-only">جدول أعمال الصيانة المبرمجة في محافظة ذي قار</caption>
              <thead>
                <tr className="bg-surface text-xs font-bold text-muted-foreground">
                  <th scope="col" className="px-6 py-3.5">التاريخ</th>
                  <th scope="col" className="px-4 py-3.5">المناطق المتأثرة</th>
                  <th scope="col" className="px-4 py-3.5">نوع العمل</th>
                  <th scope="col" className="px-4 py-3.5">وقت الانقطاع</th>
                  <th scope="col" className="px-4 py-3.5">إعادة التيار المتوقعة</th>
                  <th scope="col" className="px-6 py-3.5">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((row) => {
                  const meta = statusMeta[row.status]
                  return (
                    <tr
                      key={`${row.day}-${row.area}`}
                      className={cn('transition-colors hover:bg-secondary/50', row.status === 'active' && 'bg-flame/[0.03]')}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              'flex w-[4.5rem] shrink-0 flex-col items-center rounded-xl px-1 py-2 leading-none',
                              row.status === 'active' ? 'bg-flame text-white' : 'bg-navy text-white',
                            )}
                          >
                            <span className="text-xl font-extrabold">{row.day}</span>
                            <span className="mt-1 text-[10px] font-medium opacity-80">{row.month}</span>
                          </div>
                          <span className="text-sm font-bold text-navy">{row.weekday}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-bold text-navy">{row.area}</p>
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="size-3" aria-hidden="true" />
                          {row.district}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm text-navy/80">{row.work}</td>
                      <td className="px-4 py-4">
                        <span className="flex items-center gap-1.5 text-sm font-bold whitespace-nowrap text-navy">
                          <Clock className="size-4 text-muted-foreground" aria-hidden="true" />
                          {row.window}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="flex items-center gap-1.5 text-sm font-bold whitespace-nowrap text-teal">
                          <TimerReset className="size-4" aria-hidden="true" />
                          {row.restore}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn('inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap', meta.style)}>
                          <span className={cn('size-1.5 rounded-full', meta.dot)} aria-hidden="true" />
                          {meta.label}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
