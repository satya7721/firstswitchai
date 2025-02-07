import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarProvider } from "@/contexts/sidebar-context"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Career Tools",
  description: "Professional career tools for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex h-screen bg-background">
              <Sidebar />
              <main className="flex-1 overflow-auto">
                <div className="flex justify-end p-4">
                  <ThemeToggle />
                </div>
                {children}
                <Toaster />
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
