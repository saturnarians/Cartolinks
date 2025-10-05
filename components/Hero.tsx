"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";

export default function Hero() {

  const themeContext =  useContext(ThemeContext);
  if(!themeContext) throw new Error(" Must be used inside ThemeProvider wrapper ");

  const { theme } = themeContext;


  return (
    <section className={`${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}
      grid grid-cols-2 gap-4 px-4 py-8 `}>
        <div className={`{theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}
          relative rounded-xl overflow-hidden shadow-md`}>
            <Image
            src="/Wan_2.2.jpg"
            alt="WAN 2.2"
            className="w-full h-74 object-cover"
            width={600}
            height={400}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
            <h2 className="text-3xl font-bold">WAN 2.2</h2>
            <p className="text-sm">Image generation with realistic textures.</p>
            <button className="mt-2 bg-white text-black px-2 rounded-lg text-sm font-semibold">
                Try WAN 2.2
            </button>
            </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md">
            <Image
            src="/Open_source.jpg"
            alt="Flux 1 Krea"
            className="w-full h-74 object-cover"
                        width={300}
            height={400}
            />
            <div className="absolute inset-0 bg-black/40 flex-col justify-end p-4 text-white">
            <h2 className="text-3xl font-bold">Open Source</h2>
            <p className="text-sm">FLUX1 krea model, open weights.</p>
            </div>
        </div>
    </section>
  );
}
