import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className,
  children,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-6 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-2xl">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-azure">
          <span className="h-1 w-6 rounded-full bg-gradient-to-l from-azure to-teal" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="text-pretty text-3xl font-extrabold text-navy md:text-4xl">
          {title}
        </h2>
        {description ? <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p> : null}
      </div>
      {children}
    </div>
  )
}
