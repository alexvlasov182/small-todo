import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { useToast } from "./hooks/useToast";
import type { Todo } from "./types/types";

function AppContent() {
  const { addToast } = useToast();
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("todos") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    addToast("Task added!", "success");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    addToast("Status changed", "info");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
    addToast("Task was deleted", "error");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      <header className="flex items-center justify-between w-full max-w-3xl mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Todo App
        </h1>
        <ThemeToggle />
      </header>

      <div className="w-full max-w-3xl space-y-6">
        <div className="p-6 rounded-2xl shadow-lg bg-card dark:bg-gray-800 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-semibold">Add New Task</h2>
          <AddTodoForm addTodo={addTodo} />
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-card dark:bg-gray-800 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-semibold">Your Tasks</h2>
          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
