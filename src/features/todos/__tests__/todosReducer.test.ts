import { todosReducer } from '../reducer'
import type { TodoAction, Todo } from '../types'

test('adds a todo', () => {
  const initial: Todo[] = []
  const action: TodoAction = { type: 'ADD', payload: { text: 'Hello' } }
  const r = todosReducer(initial, action)
  expect(r).toHaveLength(1)
  expect(r[0].text).toBe('Hello')
  expect(r[0].completed).toBe(false)
})

test('toggles a todo', () => {
  const initial: Todo[] = [{ id: '1', text: 'A', completed: false }]
  const action: TodoAction = { type: 'TOGGLE', payload: { id: '1' } }
  const r = todosReducer(initial, action)
  expect(r[0].completed).toBe(true)
})

test('removes a todo', () => {
  const initial: Todo[] = [{ id: '1', text: 'A', completed: false }]
  const action: TodoAction = { type: 'REMOVE', payload: { id: '1' } }
  const r = todosReducer(initial, action)
  expect(r).toHaveLength(0)
})
