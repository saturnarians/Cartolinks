import type { Metadata } from "next";
import "../styles/globals.css";
// import ThemeWrapper from "./ThemeWrapper";
import { Fragment } from "react";
import { ThemeProviders } from '@/context/ThemeProvider'

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "Pixel perfect",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <Fragment>
          <ThemeProviders 
          attribute="class" 
          defaultTheme='system' 
          enableSystem
          disableTransitionOnChange
          > 
            {children} 
            </ThemeProviders>
        </Fragment>
      </body>
    </html>
  );
}

