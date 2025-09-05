import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        'rounded-md bg-card text-card-foreground p-6 shadow-[0_2px_6px_rgba(0,0,0,0.15),0_-1px_2px_rgba(0,0,0,0.05)]',
        className
      )}
    >
      {children}
    </div>
  )
}
