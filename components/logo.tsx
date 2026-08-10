import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  const primary = variant === 'light' ? 'text-background' : 'text-primary'
  const accent = 'text-accent'

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <LighthouseMark className={cn('h-9 w-9 shrink-0', accent)} />
      <div className="flex flex-col leading-none">
        <span className={cn('font-serif text-xl font-semibold tracking-[0.18em]', primary)}>
          HARBOUR
        </span>
        <span className={cn('text-[0.6rem] font-medium tracking-[0.42em]', accent)}>
          REALTY
        </span>
      </div>
    </div>
  )
}

function LighthouseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 16h8" />
      <path d="M24 8v2" />
      <path d="M21 16l-2 20h10l-2-20" />
      <path d="M18 24h12" />
      <path d="M17 31h14" />
      <path d="M8 38c3-3 5-3 8 0" />
      <path d="M32 38c3-3 5-3 8 0" />
    </svg>
  )
}
