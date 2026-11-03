import SiteHeader from '@/components/site/site-header'
import QuickActionsHero from '@/components/site/quick-actions-hero'
import StatsRow from '@/components/site/stats-row'
import { ServicesPanel } from '@/components/site/services-panel'
import NewsSection from '@/components/site/news-section'
import OutageSchedule from '@/components/site/outage-schedule'
import SiteFooter from '@/components/site/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <QuickActionsHero />
        <StatsRow />
        <ServicesPanel />
        <NewsSection />
        <OutageSchedule />
      </main>
      <SiteFooter />
    </>
  )
}
