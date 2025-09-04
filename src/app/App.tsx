// src/App.tsx
import ThemeToggle from '@/shared/components/ThemeToggle'

import { useToast } from '@/shared/components/ui/useToast'
import { useTodos } from '@/features/todos/hooks/useTodos'
import { TodoContainer } from '@/features/todos/components/TodoContainer'
import type { TodoAction } from '@/features/todos/types'

export default function App() {
  const { filter, setFilter, filteredTodos, dispatch, stats } = useTodos()
  const { addToast } = useToast()

  const handleAdd = (text: string) => {
    dispatch({ type: 'ADD', payload: { text } } as TodoAction)
    addToast('Task added!', 'success')
  }

  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE', payload: { id } } as TodoAction)
    addToast('Task status updated!', 'info')
  }

  const handleRemove = (id: string) => {
    dispatch({ type: 'REMOVE', payload: { id } } as TodoAction)
    addToast('Task removed!', 'error')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Todo App</h1>
            <p className="text-sm text-muted-foreground">
              {stats.total} total • {stats.active} active • {stats.completed}{' '}
              done
            </p>
          </div>

          <ThemeToggle />
        </header>

        <main className="space-y-6">
          <TodoContainer
            filter={filter}
            setFilter={setFilter}
            filteredTodos={filteredTodos}
            onAdd={handleAdd}
            onToggle={handleToggle}
            onRemove={handleRemove}
            stats={stats}
          />
        </main>
      </div>
    </div>
  )
}
