"use client";

 import { useContext } from 'react';
 import { ThemeContext } from '@/context/ThemeProvider';


export default function Gallery() {
    const themeContext =  useContext(ThemeContext);
    if (!themeContext) throw new Error("Must used inside a ThemeProvider");

    const { theme } = themeContext;

    return (
        <section className={`px-6 py-8 ${theme === "light" ? " bg-white text-black" : "bg-gray-900 text-white"}`}>
            <h2 className="text-xl font-semibold mb-4 ">Gallery</h2>
            <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}
                grid grid-cols-2 md:grid-cols-4 gap-4`}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                    key={i}
                    className={`${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}
                        aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg`}
                    />
                ))}
            </div>
        </section>
    )
}