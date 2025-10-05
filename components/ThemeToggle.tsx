"use client";
import { Moon, Sun } from "lucide-react";
import { useContext} from "react";
import { ThemeContext } from "../context/ThemeProvider";




export default function ThemeToggle() {

  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("Must be used inside ThemeProvider wrapper");

  const { theme, toggleTheme } = themeContext;

  return (
    <div className={`w-4 h-6 py-[9.4px] hover:bg-inherit hover:scale-105 transform transition duration-200 ease-in-out
    ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
      <button onClick={toggleTheme}>
        { theme === "light" ? (<Sun className="w-6 h-4 fill-black"/>) : (<Moon className="w-6 h-4 fill-black"/>) }
      </button>
    </div>
  );
}
