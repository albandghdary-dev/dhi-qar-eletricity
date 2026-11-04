import SiteHeader from '@/components/site/site-header'
import QuickActionsHero from '@/components/site/quick-actions-hero'
import { ServicesPanel } from '@/components/site/services-panel'
import SiteFooter from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-slate-900">
        <QuickActionsHero />
        <ServicesPanel />
      </main>
      <SiteFooter />
    </>
  )
}
