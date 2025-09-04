import { useCallback, useState } from 'react'
import { Button } from '../../../shared/components/ui/button.tsx'

export function AddTodoForm({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('')

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const trimmed = text.trim()
      if (trimmed === '') return
      onAdd(trimmed)
      setText('')
    },
    [text, onAdd]
  )

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        aria-label="New task."
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
        className="flex-1 h-10 px-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button
        variant="success"
        type="submit"
        className="hover:scale-105 transition-transform cursor-pointer"
      >
        Add
      </Button>
    </form>
  )
}
