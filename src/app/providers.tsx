import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@/shared/context/ThemeContext'
import { ToastProvider } from '@/shared/components/ui/useToast'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  )
}
