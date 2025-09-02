import React,{useState} from 'react'
import { Button } from "../ui/button";

type Props = {addTodo: (text: string) => void};

export default function AddTodoForm({addTodo}: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4" >
      <input

        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
        className="flex-1 p-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 transition"
      />
      <Button variant="success" type="submit" className="hover:scale-105 transition-transform cursor-pointer">
        Add
      </Button>
    </form>
  )
}

