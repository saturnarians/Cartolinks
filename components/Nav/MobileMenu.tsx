"use client";

import { useState, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

interface MobileMenuProps {
  className?: string;
}

export default function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { resolvedTheme }  = useTheme();

  useEffect(() => setMounted(true),[]);
  if(!mounted) return null;


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`${ className }`}>
      <a href="#" className="md:hidden font-serif text-md font-bold py-0 relative top-7 px-4">
          Logo
      </a>
      <nav
        onClick={toggleMenu}
        className="md:hidden z-40 flex justify-end py-1 px-4 relative left-0 right-0 transition transform duration-600 ease-in-out"
      >
        {isOpen ? <X className="fixed" size={30} /> : <Menu size={30} />}
      </nav>

      {isOpen && (
        <div 
        className={`${resolvedTheme === 'dark' ? 'dark:bg-[#212124]' : 'bg-white'}
        fixed top-0 left-0 w-full h-screen mx-[-0.6rem] z-10 transform transition-transform duration-900 translate-x-2.5 ease-in-out`}>
          <DesktopMenu className="md:hidden py-4 my-5.5 relative top-7 "/>
        </div>
      )}
    </div>
    {/* ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${className || ''}  'dark:bg-[#2e2e2e]'*/}
    </>
  );
}
