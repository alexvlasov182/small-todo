import ThemeToggle from '@/shared/components/ThemeToggle'
import { Card } from '@/shared/components/ui/card'
import { useToast } from '@/shared/components/ui/useToast'
import { AddTodoForm, useTodos } from '@/features/todos'
import TodoList from '@/features/todos/components/TodoList'

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo, stats } = useTodos()
  const { addToast } = useToast()

  const handleAdd = (text: string) => {
    addTodo(text)
    addToast('Task added!', 'success')
  }

  const handleToggle = (id: number) => {
    toggleTodo(id)
    addToast('Task status updated!', 'info')
  }

  const handleRemove = (id: number) => {
    removeTodo(id)
    addToast('Task removed!', 'error')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Todo App</h1>
            <p className="text-muted-foreground mt-1">
              {stats.total} total • {stats.open} open • {stats.completed} done
            </p>
          </div>
          <ThemeToggle />
        </header>

        <main className="space-y-6">
          <Card>
            <h2 className="mb-4 text-2xl font-semibold">Add New Task</h2>
            <AddTodoForm addTodo={handleAdd} />
          </Card>

          <Card>
            <h2 className="mb-4 text-2xl font-semibold">Your Tasks</h2>
            <TodoList
              todos={todos}
              toggleTodo={handleToggle}
              removeTodo={handleRemove}
            />
          </Card>
        </main>
      </div>
    </div>
  )
}
