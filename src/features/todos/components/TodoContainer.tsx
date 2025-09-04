import { Button } from '@/shared/components/ui/button'
import { Card } from '@/shared/components/ui/card'
import { AddTodoForm } from './AddTodoForm'
import TodoList from './TodoList'
import type { Todo, Filter } from '../types'

type Props = {
  filter: Filter
  setFilter: (f: Filter) => void
  filteredTodos: Todo[]
  onAdd: (text: string) => void
  onToggle: (id: string) => void
  onRemove: (id: string) => void
  stats: { total: number; active: number; completed: number }
}

export function TodoContainer({
  filter,
  setFilter,
  filteredTodos,
  onAdd,
  onToggle,
  onRemove,
}: Props) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          {(['all', 'active', 'completed'] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              onClick={() => setFilter(f)}
              className={`
        transition-transform
        cursor-pointer
        hover:scale-105
        ${filter === f ? 'text-white' : 'text-gray-400'}
      `}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <Card>
        <h2 className="mb-4 text-2xl font-semibold">Add New Task</h2>
        <AddTodoForm onAdd={onAdd} />
      </Card>

      <Card>
        <h2 className="mb-4 text-2xl font-semibold">Your Tasks</h2>
        <TodoList
          todos={filteredTodos}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      </Card>
    </>
  )
}

export default TodoContainer
