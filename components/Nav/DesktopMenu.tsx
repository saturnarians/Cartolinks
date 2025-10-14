"use client";
import ThemeToggle from "../ThemeToggle";
import MiniHeader from "@/components/Nav/Header";
import { Image } from "lucide-react";
import { Headset } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";

interface DesktopMenuProps {
  className?: string;
}

export default function DesktopMenu({className}: DesktopMenuProps) {

  return (
    <nav className={`${className} px-6 py-2 `}>
      <div className="hidden md:flex gap-3.5 py-2">
        <a href="#" className="font-serif text-md font-bold py-0 pt-0.5">
          Logo
        </a>
        <div className="flex flex-row">
        <div className="bg-purple-600 border-transparent rounded-[50px] w-[20px] h-[20px] mt-1"></div>
        <a
          href="#"
          className="text-sm font-bold py-1 px-2 flex gap-0.5 hover:text-black hover:scale-105 transform transition duration-200 ease-in-out "
        >
          benevolentartist
          <ChevronDown className="h-6 w-4 pb-1" />
        </a>
        </div>
      </div>

      <MiniHeader className=""/>

      <div className="md:flex gap-2 px-6 my-1 ">
        <a
          href="./src"
          title="Image"
          className="flex p-1 my-1 font-semibold gap-0.5 md:hover:rounded-sm md:hover:h-8 md:hover:bg-gray-500 hover:text-black hover:scale-105 transform transition duration-200 ease-in-out "
        >
          <Image className="w-4 h-6  " />
          {/* <span className="text-sm py-0.5">Gallery</span> */}
        </a>

        <a
          href="./src"
          title="Image"
          className="flex p-1 my-1 font-semibold gap-0.5 md:hover:rounded-sm md:hover:h-8 md:hover:bg-gray-500 hover:text-black hover:scale-105 transform transition duration-200 ease-in-out "
        >
          <Headset className="w-4 h-6" />
          {/* <span className="text-sm py-0.5">Support</span> */}
        </a>

        <a
          href="./src"
          title="Notification"
          className="flex p-1 my-1 font-semibold gap-0.5 md:hover:rounded-sm md:hover:h-8 md:hover:bg-gray-500 hover:text-black hover:scale-105 transform transition duration-200 ease-in-out "
        >
          <Bell
            className="w-4 h-6 fill-black fill-inherit"
          />
          {/* <span className="text-sm py-0.5">Support</span> */}
        </a>

        <ThemeToggle />
        <div className="bg-purple-600 border-transparent rounded-[50px] w-[15px] h-[15px] mt-[20px] ml-1 md:mt-2.5 md:ml-2"></div>
      </div>
    </nav>
  );
}
