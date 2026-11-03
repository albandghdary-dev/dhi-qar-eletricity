import QuickActionsHero from '@/components/site/quick-actions-hero'
import { ServicesPanel } from '@/components/site/services-panel'

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      <QuickActionsHero />
      <ServicesPanel />
    </main>
  )
}
