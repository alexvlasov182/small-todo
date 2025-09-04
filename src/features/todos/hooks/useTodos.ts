import { useEffect, useState, useMemo } from 'react'
import type { Todo } from '../types'

const STORAGE_KEY = 'todos'

export function useTodos() {

  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [todos]);

  return { todos, addTodo, toggleTodo, removeTodo, stats };
}