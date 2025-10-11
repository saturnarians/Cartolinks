"use client";
import { House, Image, Video, Brush, WandSparkles, Folder, DraftingCompass } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect} from 'react';

interface MiniHeaderProps {
  className?: string;
}

export default function MiniHeader({className}: MiniHeaderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setIsMounted(true),[]);
  if (!isMounted) return null;

  return (
    <nav className={`${className} ${resolvedTheme === "dark" ? "bg-[#39393a]": "bg-gray-400 "}
    md:relative md:right-20 border-1-inherit rounded-lg `}>
    <div className="flex justify-center items-center gap-2 py-2 px-2 md:w-[290px] h-[50px]">
    <a href='./src' 
    title='Home' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out py-1 px-2 rounded-sm'>
     <House  className='w-4 h-6 '/></a>{/*<House  className='w-4 h-6 absolute top-9 bottom-0.5'/> */}

        <a href='./src' 
    title='Image' 
    className='hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out py-1 px-2 rounded-sm'>
    <Image  className='w-4 h-6 0'/></a>

    <a href='./src' 
    title='Video' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out py-1 px-2 rounded-sm'>
    <Video  className={`w-4 h-6 `}/></a>

    <a href='./src' 
    title='WandSparkles' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out py-1 px-2 rounded-sm'>
    <WandSparkles  className={`w-4 h-6 `}/></a>

    <a href='./src' 
    title='Brush'
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out py-1 px-2 rounded-sm'>
    <Brush  className={`w-4 h-6 `}/></a>

    <a href='./src' 
    title='DraftingCompass' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out py-1 px-2 rounded-sm'>
    <DraftingCompass className={`w-4 h-6 `}/></a>

        <a href='./src' 
    title='Folder' 
    className=' hover:bg-gray-500 hover:px-2 hover:text-black hover:scale-125 transform transition duration-300 ease-in-out py-1 px-2 rounded-sm'>
    <Folder  className={`w-4 h-6 `}/></a>

    </div>
    </nav>
  )
}
