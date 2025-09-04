import { cn } from '@/lib/utils'

export type ToastProps = {
  id: string
  message: string
  type?: 'success' | 'error' | 'info'
  onClose?: (id: string) => void
}

export function Toast({ id, message, type = 'info', onClose }: ToastProps) {
  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 rounded-lg p-4 shadow-lg transition-all',
        type === 'success' && 'bg-green-500 text-white',
        type === 'error' && 'bg-red-500 text-white',
        type === 'info' && 'bg-blue-500 text-white'
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        {onClose && (
          <button
            onClick={() => onClose(id)}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
