import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  variant = 'dark',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  variant?: 'dark' | 'light'
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      <p
        className={cn(
          'text-sm font-semibold uppercase tracking-[0.25em] text-accent',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-3 text-balance font-serif text-3xl font-semibold md:text-4xl',
          variant === 'light' ? 'text-background' : 'text-primary',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty leading-relaxed',
            variant === 'light' ? 'text-background/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
