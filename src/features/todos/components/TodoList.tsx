import TodoItem from './TodoItem'
import type { Todo } from '../types'

interface Props {
  todos: Todo[]
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

export default function TodoList({ todos, toggleTodo, removeTodo }: Props) {
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
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={() => toggleTodo(t.id)}
          onRemove={() => removeTodo(t.id)}
        />
      ))}
    </ul>
  )
}
