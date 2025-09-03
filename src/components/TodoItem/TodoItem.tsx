import { Button } from "../ui/button";

export default function TodoItem({ todo, toggle, remove }: Props) {
  return (
    <li className='flex items-center justify-between p-4 mb-3 rounded-2xl bg-card text-card-foreground dark:bg-gray-800 dark:text-gray-100 shadow-md hover:bg-card/90 dark:hover:bg-gray-700 transition-colors'>
      <label className='flex items-center gap-3 cursor-pointer'>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggle}
          className='w-6 h-6 accent-primary'
        />
        <span className={`${todo.completed ? "line-through text-muted-foreground" : ""} text-lg`}>
          {todo.text}
        </span>
      </label>
      <Button variant="destructive" size="sm" onClick={remove} className="hover:scale-110 transition-transform cursor-pointer">
        Delete
      </Button>
    </li>
  )
}
