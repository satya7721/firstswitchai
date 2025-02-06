import Link from "next/link"
import { Button } from "./ui/button"

export function Nav() {
  return (
    <nav className="border-b">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Career Tools</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/linkedin-link">
              <Button variant="ghost">LinkedIn Generator</Button>
            </Link>
            <Link href="/ai-guidance">
              <Button variant="ghost">AI Guidance</Button>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
} 