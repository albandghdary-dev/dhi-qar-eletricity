'use client'

import { useState } from 'react'
import { Menu, PhoneCall, Receipt, Search, X } from 'lucide-react'
import { Logo } from './logo'
import { requestBillInquiry } from './bill-inquiry-events'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'الرئيسية', href: '#top' },
  { label: 'الخدمات', href: '#services' },
  { label: 'الأخبار', href: '#news' },
  { label: 'الصيانة', href: '#maintenance' },
  { label: 'خريطة الشبكة', href: '#network-map' },
  { label: 'اتصل بنا', href: '#contact' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subscriberId, setSubscriberId] = useState('')

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    requestBillInquiry(subscriberId)
    setMenuOpen(false)
  }

  return (
    <header id="top" className="sticky top-0 z-50">
      <div className="bg-navy text-white/80">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs md:px-6">
          <p className="truncate">جمهورية العراق · وزارة الكهرباء · المديرية العامة لتوزيع كهرباء الجنوب</p>
          <a href="tel:159" className="flex shrink-0 items-center gap-1.5 font-bold text-gold transition-colors hover:text-white">
            <PhoneCall className="size-3.5" aria-hidden="true" />
            الطوارئ ١٥٩
          </a>
        </div>
      </div>

      <div className="border-b border-border bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 md:px-6">
          <Logo />

          <nav aria-label="القائمة الرئيسية" className="mx-auto hidden xl:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-lg px-2.5 py-2 text-sm font-bold whitespace-nowrap text-navy/75 transition-colors hover:bg-secondary hover:text-azure"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ms-auto flex items-center gap-2 xl:ms-0">
            <form onSubmit={handleSearch} role="search" className="relative hidden md:block">
              <label htmlFor="header-subscriber-id" className="sr-only">
                البحث برقم المشترك
              </label>
              <Search className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <input
                id="header-subscriber-id"
                inputMode="numeric"
                value={subscriberId}
                onChange={(e) => setSubscriberId(e.target.value.replace(/[^\d٠-٩]/g, ''))}
                placeholder="رقم المشترك"
                className="h-11 w-44 rounded-xl border border-input bg-surface pr-9 pl-3 text-sm font-medium text-navy outline-none transition-all placeholder:text-muted-foreground focus:w-52 focus:border-azure focus:bg-white focus:ring-3 focus:ring-azure/15 xl:w-40 xl:focus:w-48 2xl:w-52"
              />
            </form>

            <a
              href="#bill-inquiry"
              className="hidden h-11 items-center gap-2 rounded-xl bg-azure px-4 text-sm font-bold whitespace-nowrap text-white shadow-lg shadow-azure/25 transition-all hover:-translate-y-0.5 hover:bg-[#0062d6] sm:inline-flex"
            >
              <Receipt className="size-4" aria-hidden="true" />
              استعلام سريع عن الفاتورة
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="grid size-11 place-items-center rounded-xl border border-border text-navy transition-colors hover:bg-secondary xl:hidden"
            >
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
              <span className="sr-only">{menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}</span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            'grid border-t border-border transition-all duration-300 xl:hidden',
            menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] border-transparent opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
              <form onSubmit={handleSearch} role="search" className="relative mb-3 md:hidden">
                <label htmlFor="mobile-subscriber-id" className="sr-only">
                  البحث برقم المشترك
                </label>
                <Search className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                  id="mobile-subscriber-id"
                  inputMode="numeric"
                  value={subscriberId}
                  onChange={(e) => setSubscriberId(e.target.value.replace(/[^\d٠-٩]/g, ''))}
                  placeholder="ابحث برقم المشترك"
                  className="h-12 w-full rounded-xl border border-input bg-surface pr-9 pl-3 text-sm outline-none focus:border-azure focus:ring-3 focus:ring-azure/15"
                />
              </form>
              <nav aria-label="القائمة الرئيسية للأجهزة اللوحية">
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex h-12 items-center rounded-xl bg-surface px-4 text-sm font-bold text-navy transition-colors hover:bg-secondary hover:text-azure"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
