'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, CalendarClock, CreditCard, Gauge, Loader2, Receipt, User } from 'lucide-react'
import { BILL_INQUIRY_EVENT, toArabicDigits, toWesternDigits } from './bill-inquiry-events'

type BillResult = {
  id: string
  name: string
  district: string
  amount: number
  consumption: number
  dueDate: string
}

const districts = ['الناصرية - حي أور', 'الشطرة', 'سوق الشيوخ', 'الرفاعي', 'الغراف', 'قلعة سكر']
const names = ['علي ح***', 'زينب ع***', 'حسين ك***', 'فاطمة م***', 'محمد ج***']

function buildDemoResult(id: string): BillResult {
  const seed = id.split('').reduce((sum, d) => sum + Number(d), 0)
  const consumption = 380 + seed * 23
  return {
    id,
    name: names[seed % names.length],
    district: districts[seed % districts.length],
    consumption,
    amount: Math.round((consumption * 72) / 250) * 250,
    dueDate: '١٥ / ١١ / ٢٠٢٦',
  }
}

export function BillInquiryPanel() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<BillResult | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  function runInquiry(raw: string) {
    const id = toWesternDigits(raw.trim())
    if (!/^\d{6,12}$/.test(id)) {
      setResult(null)
      setError('يرجى إدخال رقم مشترك صحيح مكوّن من ٦ إلى ١٢ رقماً.')
      return
    }
    setError('')
    setLoading(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setResult(buildDemoResult(id))
      setLoading(false)
    }, 700)
  }

  useEffect(() => {
    function onRequest(event: Event) {
      const id = (event as CustomEvent<string>).detail
      setValue(id)
      if (id) runInquiry(id)
      else inputRef.current?.focus()
    }
    window.addEventListener(BILL_INQUIRY_EVENT, onRequest)
    return () => {
      window.removeEventListener(BILL_INQUIRY_EVENT, onRequest)
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <div id="bill-inquiry" className="glass rounded-3xl p-6 text-white shadow-2xl shadow-black/20 md:p-7">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-gold text-navy">
          <Receipt className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold">الاستعلام السريع عن الفاتورة</h2>
          <p className="text-sm text-white/65">أدخل رقم المشترك المدوّن على فاتورتك الورقية</p>
        </div>
      </div>

      <form
        className="mt-5 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault()
          runInquiry(value)
        }}
        noValidate
      >
        <label htmlFor="hero-subscriber-id" className="sr-only">
          رقم المشترك
        </label>
        <input
          ref={inputRef}
          id="hero-subscriber-id"
          inputMode="numeric"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/[^\d٠-٩]/g, ''))}
          placeholder="مثال: ١٢٠٤٥٥٨٩"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'inquiry-error' : undefined}
          className="h-13 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 text-base font-bold tracking-wider text-white outline-none transition placeholder:font-normal placeholder:tracking-normal placeholder:text-white/45 focus:border-teal focus:bg-white/15 focus:ring-3 focus:ring-teal/30"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-azure px-6 font-bold text-white shadow-lg shadow-azure/30 transition hover:bg-[#0062d6] disabled:opacity-70"
        >
          {loading ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
          استعلام
        </button>
      </form>

      <div aria-live="polite" className="mt-4">
        {error ? (
          <p id="inquiry-error" className="rounded-lg bg-flame/15 px-3 py-2 text-sm font-medium text-orange-200">
            {error}
          </p>
        ) : null}

        {result && !loading ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 rounded-2xl bg-white p-5 text-navy duration-300">
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-secondary text-azure">
                  <User className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold">{result.name}</p>
                  <p className="text-xs text-muted-foreground">
                    رقم المشترك {toArabicDigits(result.id)} · {result.district}
                  </p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-flame/10 px-2.5 py-1 text-xs font-bold text-flame">غير مسددة</span>
            </div>
            <dl className="grid grid-cols-3 gap-3 py-4 text-center">
              <div>
                <dt className="text-xs text-muted-foreground">المبلغ المستحق</dt>
                <dd className="mt-1 text-lg font-extrabold">
                  {toArabicDigits(result.amount.toLocaleString('en-US'))} <span className="text-xs font-medium">د.ع</span>
                </dd>
              </div>
              <div className="border-x border-border">
                <dt className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Gauge className="size-3.5" aria-hidden="true" /> الاستهلاك
                </dt>
                <dd className="mt-1 text-lg font-extrabold">
                  {toArabicDigits(result.consumption)} <span className="text-xs font-medium">ك.و.س</span>
                </dd>
              </div>
              <div>
                <dt className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <CalendarClock className="size-3.5" aria-hidden="true" /> آخر موعد
                </dt>
                <dd className="mt-1 text-lg font-extrabold">{result.dueDate}</dd>
              </div>
            </dl>
            <a
              href="#quick-actions"
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-navy font-bold text-white transition hover:bg-navy-soft"
            >
              <CreditCard className="size-4" aria-hidden="true" />
              ادفع الآن إلكترونياً
              <ArrowLeft className="size-4" aria-hidden="true" />
            </a>
          </div>
        ) : null}

        {!result && !error ? (
          <p className="text-xs leading-relaxed text-white/55">
            يمكنك أيضاً الاستعلام عبر الرسائل القصيرة بإرسال رقم المشترك إلى ٥٥١٥٩ مجاناً لجميع شبكات الاتصال.
          </p>
        ) : null}
      </div>
    </div>
  )
}
