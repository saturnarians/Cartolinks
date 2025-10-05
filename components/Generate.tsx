"use client";

import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import data from "../utils/Data.json";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

type IconName = keyof typeof LucideIcons;

interface DataItem {
  icon: IconName;
  title: string;
  desc: string;
  buttonLabel: string;
  isNew?: boolean;
  iconClass: string;
  buttonClass: string;
}



export default function Generate() {
  const [items, setItems] = useState<DataItem[]>([]);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    setItems(data as DataItem[]);
  }, []);

  if (!themeContext) throw new Error("Must be in ThemeProvider wrapper ");
  const { theme } = themeContext;

  return (
    <section
      className={`px-4 py-4 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4 mx-2 text-left">Generate</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {items.map((item, idx) => {
          const Icon = LucideIcons[item.icon] as LucideIcon;
          return (
            <div
              key={idx}
              className={`${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-gray-900 text-white"
              }
            flex flex-col flex-wrap flex-center gap-2 md:flex md:flex-row md:gap-2 py-4 px-1`}
            >
               <div className="text-black ">{Icon && <Icon className={item.iconClass}/>}</div>
               <div className="flex flex-col ">
               <div className="flex gap-1">
               <h3 className="font-bold text-[13px]">{item.title}</h3>
                {item.isNew && 
                <span 
                className={`bg-blue-600 text-[9px] text-white border-transparent rounded-[10px] w-[30px] h-[15px] px-1.5 py-0  font-semibold` }>
                  New
                </span>}
                </div>
              <p className="text-[11px] font-semibold text-gray-500">{item.desc}</p>
               </div>
              <button className={item.buttonClass}>
                {item.buttonLabel ? "Open" : "Coming Soon"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
