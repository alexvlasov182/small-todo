import type { Todo } from '../../types/types';
import { Button } from '../ui/button';

type Props = {
  todo: Todo;
  toggle: () => void;
  remove: () => void;
};

export default function TodoItem({ todo, toggle, remove }: Props) {

  return (
    <li className='flex items-center justify-between p-4 mb-3 rounded-2xl bg-card text-card-foreground shadow-md hover:bg-card/90 transition-colors'>
      <label className='flex items-center gap-3 cursor-pointer'>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggle}
          className='w-6 h-6 accent-primary'
        />
        <span className={`${todo.completed ? "line-through text-muted-foreground" : ""} text-lg`} >{todo.text}</span>
      </label>
      <Button variant="destructive" size="sm" onClick={remove} className="hover:scale-110 transition-transform cursor-pointer">Delete</Button>
    </li>
  )
}
