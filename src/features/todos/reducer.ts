import type { Todo, TodoAction } from './types'

export function todosReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          text: action.payload.text,
          completed: false,
        },
      ]
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.payload.id)
    default:
      return state
  }
}
