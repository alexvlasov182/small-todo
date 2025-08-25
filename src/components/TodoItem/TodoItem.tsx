import React from 'react';
import './TodoItem.css'
import type { Todo } from '../../types';
import { Button } from '../ui/button';

type TodoItemProps = {
  todo: Todo;
  toggle: () => void;
  remove: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggle, remove }) => (
  <li className='flex items-center justify-between p-3 mb-2 rounded-md bg-card text-card-foreground shadow-md hover:bg-card/90 transition-colors'>
    <label className='flex items-center gap-3'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggle}
        className='w-5 h-5 accent-primary'
      />
      <span className={`text-lg ${todo.completed ? 'line-through text-muted-foreground' : ''}`} >{todo.text}</span>
    </label>
    <Button variant="destructive" size="sm" onClick={remove} className="hover:scale-110 transition-transform">Delete</Button>
  </li>
);

export default TodoItem;
