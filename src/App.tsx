import React, { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import type { Todo } from './types';
import { Button } from "@/components/ui/button"


const App: React.FC = () => {
  // reading from localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (e) {
      console.error("localStorage error", e);
      return [];
    }
  });

  // now this useEffect only save it
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Adding
  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  // Toggling
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  };

  // Deleteing
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col items-center p-4'>
      <h1 className='text-3xl font-bold mb-6'>Todo App</h1>

      <AddTodoForm addTodo={addTodo} />

      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  )
}

const AddTodoForm: React.FC<{ addTodo: (text: string) => void }> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4" >
      <input

        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
        className="flex-1 p-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50"
      />
      <Button type="submit" className="hover:scale-105 transition-transform">
        Add
      </Button>
    </form>
  )
}

export default App
