'use client'

import Link from "next/link"
import Image from "next/image"
import { Home, LayoutDashboard, Calendar, FileText, Menu, Phone, Video } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { useSidebar } from "@/contexts/sidebar-context"
import { JSX } from "react"

interface MenuItem {
  href: string
  label: string
  icon: React.ElementType
}

export function Sidebar(): JSX.Element {
  const pathname = usePathname()
  const { isOpen, toggle } = useSidebar()
  
  const menuItems: MenuItem[] = [
    { href: "/", label: "Home", icon: Home },
    { href: "/linkedin-link", label: "LinkedIn Generator", icon: LayoutDashboard },
    { href: "/ai-guidance", label: "AI Guidance", icon: Calendar },
    { href: "/resume-review", label: "Resume Review", icon: FileText },
    { href: "/book-call", label: "Book a Call", icon: Phone },
    { href: "/demo-videos", label: "Demo Videos", icon: Video },
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggle}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-white transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col border-r p-8">
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/firstswitch-logo.png"
                alt="FirstSwitch.ai"
                width={180}
                height={60}
                priority
              />
            </Link>
          </div>
          
          <nav className="mt-8 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 transition-colors",
                    isActive && "bg-blue-50 text-blue-600 font-medium"
                  )}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
} 