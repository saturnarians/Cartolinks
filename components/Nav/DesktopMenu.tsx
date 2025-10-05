"use client";
import ThemeToggle from "../ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import MiniHeader from "@/components/Nav/Header";
import { Image } from "lucide-react";
import { Headset } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";

interface DesktopMenuProps {
  className?: string;
}

export default function DesktopMenu({className}: DesktopMenuProps) {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Must be used inside ThemeProvider wrapper");

  const { theme } = themeContext;
  return (
    <nav
      className={`${className} item-center px-6 py-2 dark:border-gray-700 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="md:flex gap-3.5 py-2">
        <a href="#" className="hidden font-serif text-md font-bold py-0">
          Logo
        </a>
        <a
          href="#"
          className="text-sm font-bold py-1 px-2 flex gap-0.5 hover:rounded-sm hover:h-8 hover:bg-gray-400 hover:text-black hover:scale-105 transform transition duration-200 ease-in-out "
        >
          benevolentartist
          <ChevronDown className="h-6 w-4 pb-1" />
        </a>
      </div>

      <MiniHeader className=""/>

      <div className="md:flex gap-1 px-6 my-1">
        <a
          href="./src"
          title="Image"
          className="flex p-1 my-1 font-semibold gap-0.5 hover:rounded-sm hover:h-8 hover:bg-gray-400 hover:text-black hover:scale-105 transform transition duration-200 ease-in-out "
        >
          <Headset className="w-4 h-6" />
          <span className="text-sm py-0.5">Support</span>
        </a>

        <a
          href="./src"
          title="Image"
          className="flex p-1 my-1 font-semibold gap-0.5 hover:rounded-sm hover:h-8 hover:bg-gray-400 hover:text-black hover:scale-105 transform transition duration-200 ease-in-out "
        >
          <Image className="w-4 h-6  " />
          <span className="text-sm py-0.5">Gallery</span>
        </a>

        <a
          href="./src"
          title="Notification"
          className="flex p-1 my-1 font-semibold gap-0.5 hover:rounded-sm hover:h-8 hover:bg-gray-400 hover:text-black hover:scale-105 transform transition duration-200 ease-in-out "
        >
          <Bell
            className={`w-4 h-6 ${
              theme === "light" ? "fill-black" : "fill-inherit"
            }`}
          />
          {/* <span className="text-sm py-0.5">Support</span> */}
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}
