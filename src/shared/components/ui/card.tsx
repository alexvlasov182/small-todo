import clsx from "clsx";
import type { PropsWithChildren } from "react";

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx(
      "rounded-2xl bg-card text-card-foreground shadow-lg p-6",
      className
    )}>
      {children}
    </div>
  );
}
