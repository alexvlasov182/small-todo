import { useEffect, useReducer, useMemo, useState } from 'react'
import type { Todo, Filter } from '../types'
import { todosReducer } from '../reducer'

const STORAGE_KEY = 'todos'

export function useTodos(initialTodos: Todo[] = []) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos, () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    } catch {
      return []
    }
  })

  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // Fitltered todos
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed)
      case 'completed':
        return todos.filter((t) => t.completed)
      case 'all':
      default:
        return todos
    }
  }, [todos, filter])

  // Stats
  const stats = useMemo(
    () => ({
      total: todos.length,
      active: todos.filter((t) => !t.completed).length,
      completed: todos.filter((t) => t.completed).length,
    }),
    [todos]
  )

  return {
    todos,
    dispatch,
    filter,
    setFilter,
    filteredTodos,
    stats,
  }
}
