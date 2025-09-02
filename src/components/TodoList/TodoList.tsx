import TodoItem from '../TodoItem/TodoItem';
import type { Todo } from '../../types/types';


interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoList({todos, toggleTodo, removeTodo}: Props) {

  if (todos.length === 0) return <p className='text-muted-foreground'>No tasks yet 🙈</p>

  return (
      <ul className='flex flex-col'>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            toggle={() => toggleTodo(todo.id)}
            remove={() => removeTodo(todo.id)}
          />
        ))}
      </ul>
  );
};