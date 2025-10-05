"use client";

import { useState, useContext } from "react";
import DesktopMenu from "./DesktopMenu";
import { Menu, X } from "lucide-react";
import { ThemeContext } from "@/context/ThemeProvider";

interface MobileMenuProps {
  className?: string;
}

export default function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const themeContext = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!themeContext) throw new Error('Must be used inside a ThemeProviderWrapper');

  const {theme} = themeContext;
  return (
    <>
    <div className={`${theme === 'light' ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
      <a href="#" className="md:hidden font-serif text-md font-bold py-0 relative top-7 px-4">
          Logo
      </a>
      <nav
        onClick={toggleMenu}
        className="md:hidden z-40 flex justify-end py-2 px-4 relative left-0 right-0 transition transform duration-600 ease-in-out"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </nav>

      {isOpen && (
        <div 
        className={`
        fixed top-0 left-0 w-full h-screen z-10 transform transition-transform duration-900 translate-x-2.5 ease-in-out
         ${theme === 'light' ? 'bg-inherit':'bg-inherit'} `}>
          <DesktopMenu className="md:hidden py-4 my-8"/>
        </div>
      )}
    </div>
    {/* ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${className || ''} */}
    </>
  );
}
