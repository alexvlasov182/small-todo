import { TodoItem } from './TodoItem'
import type { Todo } from '../types'

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export default function TodoList({ todos, onToggle, onRemove }: Props) {
  if (todos.length === 0) {
    return (
      <p className="text-muted-foreground text-center">
        No tasks yet <span aria-hidden>🙈</span>
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  )
}
