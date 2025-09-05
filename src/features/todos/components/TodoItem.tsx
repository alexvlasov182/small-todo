import { memo, useCallback } from 'react'
import { Button } from '@/shared/components/ui/button'
import { type Todo } from '../types'

type Props = {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

function TodoItemComponent({ todo, onToggle, onRemove }: Props) {
  const handleToggle = useCallback(() => onToggle(todo.id), [onToggle, todo.id])
  const handleRemove = useCallback(() => onRemove(todo.id), [onRemove, todo.id])

  return (
    <li className="group flex items-center justify-between gap-3 p-4 rounded-md bg-card text-card-foreground shadow-[0_2px_6px_rgba(0,0,0,0.15),0_-1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-accent">
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="w-5 h-5 accent-primary"
          aria-label={todo.completed ? 'Mark as not done' : 'Mark as done'}
        />
        <span
          className={[
            'text-lg',
            todo.completed ? 'line-through text-muted-foreground' : '',
          ].join(' ')}
        >
          {todo.text}
        </span>
      </label>

      <Button
        size="sm"
        variant="destructive"
        className="hover:scale-105 transition-transform cursor-pointer"
        onClick={handleRemove}
      >
        Delete
      </Button>
    </li>
  )
}

export const TodoItem = memo(TodoItemComponent)
