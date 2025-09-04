import { useState } from 'react'
import { Button } from '../../../shared/components/ui/button.tsx'

export function AddTodoForm({ addTodo }: { addTodo: (text: string) => void }) {
  const [text, setText] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    addTodo(value)
    setText('')
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
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
