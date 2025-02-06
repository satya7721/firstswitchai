'use client'

import Link from "next/link"
import Image from "next/image"
import { Home, LayoutDashboard, Calendar } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()
  
  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/linkedin-link", label: "LinkedIn Generator", icon: LayoutDashboard },
    { href: "/ai-guidance", label: "AI Guidance", icon: Calendar },
  ]

  return (
    <div className="w-64 bg-white border-r p-8 space-y-8">
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
      
      <div className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
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
      </div>
    </div>
  )
} 