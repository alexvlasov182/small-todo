import * as React from 'react'
import { Toast } from './Toast'

type ToastMessage = {
  id: string
  message: string
  type?: 'success' | 'error' | 'info'
}

type ToastContextType = {
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([])

  const addToast = (
    message: string,
    type: 'success' | 'error' | 'info' = 'info'
  ) => {
    const id = Math.random().toString()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
        />
      ))}
    </ToastContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
