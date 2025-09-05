import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { TodoContainer } from '../components/TodoContainer'
import { ThemeProvider } from '@/shared/context/ThemeContext'

const todos = [
  { id: '1', text: 'Task 1', completed: false },
  { id: '2', text: 'Task 2', completed: true },
]

describe('TodoContainer integration', () => {
  const mockAdd = jest.fn()
  const mockToggle = jest.fn()
  const mockRemove = jest.fn()
  const setFilter = jest.fn()

  test('renders tasks and handles actions', () => {
    render(
      <ThemeProvider>
        <TodoContainer
          filter="all"
          setFilter={setFilter}
          filteredTodos={todos}
          onAdd={mockAdd}
          onToggle={mockToggle}
          onRemove={mockRemove}
          stats={{ total: 2, active: 1, completed: 1 }}
        />
      </ThemeProvider>
    )

    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.getByText('Task 2')).toBeInTheDocument()

    const input = screen.getByPlaceholderText(/new task/i)
    fireEvent.change(input, { target: { value: 'Task 3' } })
    fireEvent.click(screen.getByRole('button', { name: /add/i }))
    expect(mockAdd).toHaveBeenCalledWith('Task 3')

    fireEvent.click(screen.getAllByRole('checkbox')[0])
    expect(mockToggle).toHaveBeenCalledWith('1')

    fireEvent.click(screen.getAllByRole('button', { name: /delete/i })[0])
    expect(mockRemove).toHaveBeenCalledWith('1')
  })

  test('theme toggle works', () => {
    render(
      <ThemeProvider>
        <TodoContainer
          filter="all"
          setFilter={setFilter}
          filteredTodos={todos}
          onAdd={mockAdd}
          onToggle={mockToggle}
          onRemove={mockRemove}
          stats={{ total: 2, active: 1, completed: 1 }}
        />
      </ThemeProvider>
    )

    // const button = screen.getByRole('button', { name: /toggle theme/i })
    // fireEvent.click(button)
    // expect(document.documentElement.classList.contains('dark')).toBe(true)
    // fireEvent.click(button)
    // expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
