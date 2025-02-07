"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps): JSX.Element {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="system"
      enableSystem
      themes={["light", "dark"]} 
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
} 