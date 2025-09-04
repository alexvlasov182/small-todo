import { Button } from '@/shared/components/ui/button'
import { type Todo } from '../types'

type Props = {
  todo: Todo
  onToggle: () => void
  onRemove: () => void
}

export default function TodoItem({ todo, onToggle, onRemove }: Props) {
  return (
    <li className="group flex items-center justify-between gap-3 p-4 rounded-2xl bg-card text-card-foreground shadow-md transition-colors hover:bg-accent">
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
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
        variant="destructive"
        className="hover:scale-105 transition-transform cursor-pointer"
        onClick={onRemove}
      >
        Delete
      </Button>
    </li>
  )
}
