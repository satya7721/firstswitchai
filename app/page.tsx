import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 px-4">
      <div className="space-y-4 max-w-3xl animate-fade-in">
        <h1 className="text-6xl font-bold tracking-tight">
          First Switch ?
          <br />
          Here is{" "}
          <span className="text-purple-600 relative">
            Ai tool
            <svg
              className="absolute w-full h-4 -bottom-2 left-0 text-purple-300"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 12.5C15 12.5 15 7.5 30 7.5S45 12.5 60 12.5 75 7.5 90 7.5 100 12.5 100 12.5V20H0V12.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mt-6">
          Professional tools to accelerate your career growth and personal branding
        </p>
      </div>

      <div className="flex items-center gap-6 animate-fade-in-up">
        <Link href="/linkedin-link">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Explore our services
            <span className="ml-2">→</span>
          </Button>
        </Link>
        <Link href="/ai-guidance" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
          <Play size={20} className="text-purple-600" />
          <span>Watch our reel</span>
        </Link>
      </div>
    </div>
  )
}
