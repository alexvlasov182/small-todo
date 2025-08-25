import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './Todolist.css';
import type { Todo } from '../../types';


interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, removeTodo}) => {

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

export default TodoList;
