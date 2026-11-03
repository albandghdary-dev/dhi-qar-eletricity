import SiteHeader from '@/components/site/site-header'
import QuickActionsHero from '@/components/site/quick-actions-hero'
import { ServicesPanel } from '@/components/site/services-panel'
import NewsSection from '@/components/site/news-section'
import OutageSchedule from '@/components/site/outage-schedule'
import StatsRow from '@/components/site/stats-row'
import SiteFooter from '@/components/site/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white" dir="rtl">
      <SiteHeader />
      <QuickActionsHero />
      <StatsRow />
      <ServicesPanel />
      <OutageSchedule />
      <NewsSection />
      <SiteFooter />
    </main>
  )
}
