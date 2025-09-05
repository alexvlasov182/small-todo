import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { AddTodoForm } from '../components/AddTodoForm'

test('adds new todo when form is submitted', async () => {
  const handleAdd = jest.fn()
  render(<AddTodoForm onAdd={handleAdd} />)

  const input = screen.getByPlaceholderText(/new task/i) as HTMLInputElement
  const button = screen.getByRole('button', { name: /add/i })

  await userEvent.type(input, 'Buy milk')
  await userEvent.click(button)

  expect(handleAdd).toHaveBeenCalledWith('Buy milk')
  expect(input.value).toBe('')
})
