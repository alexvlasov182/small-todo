import {Sun, Moon} from "lucide-react"
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const {theme, toggleTheme} = useTheme()

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-card hover:bg-card/90 transition cursor-pointer">
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-yellow-400"/>
      ) : (
        <Sun className="w-6 h-6 text-yellow-300"/>
      )}
    </button>
  )
}