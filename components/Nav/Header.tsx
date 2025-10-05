"use client";
import { useContext} from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { House, Image, Video, Brush, WandSparkles, Folder, DraftingCompass } from 'lucide-react';

interface MiniHeaderProps {
  className?: string;
}

export default function MiniHeader({className}: MiniHeaderProps) {

    const themeContext = useContext(ThemeContext);
    if(!themeContext) throw new Error(" Must be inside a ThemeProvider wrapper")

    const {theme} = themeContext;
  return (
    <nav className='md:relative right-8'>
    <div className={`${className} flex justify-center gap-2 border-2 rounded-lg  py-2 px-2 w-[245px] h-[50px] 
    ${theme === "light" ?  "bg-gray-300 text-black border-amber-50" : "bg-gray-800 text-white border-gray-800"}
    `}>
    <a href='./src' 
    title='Home' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out p-1 rounded-sm'>
     <House  className='w-4 h-6 '/></a>{/*<House  className='w-4 h-6 absolute top-9 bottom-0.5'/> */}

        <a href='./src' 
    title='Image' 
    className='hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out p-1 rounded-sm'>
    <Image  className='w-4 h-6 0'/></a>

    <a href='./src' 
    title='Video' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out p-1 rounded-sm'>
    <Video  className={`w-4 h-6 ${theme === "light" ? "fill-black" : "fill-white"}`}/></a>

    <a href='./src' 
    title='WandSparkles' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out p-1 rounded-sm'>
    <WandSparkles  className={`w-4 h-6 ${theme === "light" ? "fill-black" : "fill-white"}`}/></a>

    <a href='./src' 
    title='Brush'
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out p-1 rounded-sm'>
    <Brush  className={`w-4 h-6 ${theme === "light" ? "fill-black" : "fill-white"}`}/></a>

    <a href='./src' 
    title='DraftingCompass' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out p-1 rounded-sm'>
    <DraftingCompass className={`w-4 h-6 ${theme === "light" ? "fill-black" : "fill-white"}`}/></a>

        <a href='./src' 
    title='Folder' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out p-1 rounded-sm'>
    <Folder  className={`w-4 h-6 ${theme === "light" ? "fill-black" : "fill-white"}`}/></a>

    </div>
    </nav>
  )
}
