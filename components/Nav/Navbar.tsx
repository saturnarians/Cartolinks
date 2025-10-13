"use client";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

  return (
    <>
    <DesktopMenu className='hidden md:flex justify-between' />
    <MobileMenu className='md:hidden'/>
    </>

  );
}
