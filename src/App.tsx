import { useState, useEffect } from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import type { Todo } from './types/types';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { useToast } from './hooks/useToast';

export default function App() {
  const { addToast } = useToast();
  // reading from localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("todos") || "[]");
    } catch {
      return []
    }
  });

  // now this useEffect only save it
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Adding
  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
    addToast("Task added!", "success")
  }

  // Toggling
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
    addToast("Status changed", "info")
  };

  // Deleteing
  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id))
    addToast("Task was delted", "error")
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between w-full max-w-3xl mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Todo App
        </h1>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <div className="w-full max-w-3xl space-y-6">
        {/* Add Todo */}
        <div className="p-6 rounded-2xl shadow-lg bg-card">
          <h2 className="mb-4 text-2xl font-semibold">Add New Task</h2>
          <AddTodoForm addTodo={addTodo} />
        </div>

        {/* Todo List */}
        <div className="p-6 rounded-2xl shadow-lg bg-card">
          <h2 className="mb-4 text-2xl font-semibold">Your Tasks</h2>
          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
      </div>
    </div>

  )
}

