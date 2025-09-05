import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TodoItem } from '../components/TodoItem'
import type { Todo } from '../types'

const todo: Todo = { id: '1', text: 'Test', completed: false }

test('toggles todo on checkbox click', () => {
  const onToggle = jest.fn()
  render(<TodoItem todo={todo} onToggle={onToggle} onRemove={jest.fn()} />)

  fireEvent.click(screen.getByRole('checkbox'))
  expect(onToggle).toHaveBeenCalledWith('1')
})

test('removes todo on delete click', () => {
  const onRemove = jest.fn()
  render(<TodoItem todo={todo} onToggle={jest.fn()} onRemove={onRemove} />)

  fireEvent.click(screen.getByRole('button', { name: /delete/i }))
  expect(onRemove).toHaveBeenCalledWith('1')
})
