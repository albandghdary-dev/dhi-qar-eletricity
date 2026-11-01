import { Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <a href="#top" className={cn('flex items-center gap-3', className)} aria-label="فرع توزيع كهرباء ذي قار - الصفحة الرئيسية">
      <span className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-azure to-navy shadow-lg shadow-azure/25 ring-1 ring-white/20">
        <Zap className="size-6 fill-gold text-gold" aria-hidden="true" />
        <span className="absolute -bottom-1 -left-1 size-3.5 rounded-full border-2 border-white bg-teal" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight whitespace-nowrap">
        <span className={cn('text-lg font-extrabold', inverted ? 'text-white' : 'text-navy')}>كهرباء ذي قار</span>
        <span className={cn('text-xs font-medium', inverted ? 'text-white/60' : 'text-muted-foreground')}>
          فرع توزيع كهرباء ذي قار
        </span>
      </span>
    </a>
  )
}
