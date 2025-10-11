"use client";
// import { createContext, useEffect, useState, ReactNode} from "react";

// export type Theme = "light" | "dark " | "system";
//  interface ThemeContextType {
//     theme: Theme;
//     toggleTheme: () => void;
//     setTheme: (theme: Theme) => void;
//     resolvedTheme: "light" | "dark";
// }

// export const ThemeContext = createContext<ThemeContextType>({
//     theme: "system",
//     toggleTheme: () => {},
//     setTheme: () => {},
//     resolvedTheme: "light",

// });

// interface ThemeProviderProps {
//     children:ReactNode;
// }
// export const ThemeProvider = ({ children }: ThemeProviderProps) => {
//     const [ theme, setTheme ] = useState<Theme>("system");
//     const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark " >("light");

//     // detcet user sysytem
//     useEffect(() => {
//         const userDarkPreference = window.matchMedia("(prefers-colors-scheme: dark)").matches;
//         const savedTheme = (localStorage.getItem("theme") as Theme )|"system";

//           const activeTheme === "system" ? (userDarkPreference ? "dark" : "light"): savedTheme;
//           setTheme(savedTheme);
//           setResolvedTheme(activeTheme);

//           root.classList.remove("light")
//         )
//     })

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }} >
//             { children }
//         </ThemeContext.Provider>
//     );
// };

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function ThemeProviders({ 
    children, 
    ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
