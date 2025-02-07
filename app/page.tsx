import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"
import { 
  SiReact, SiTypescript, SiPython, SiNodedotjs,
  SiDocker, SiKubernetes, SiTensorflow, SiJavascript,
  SiTailwindcss, SiNextdotjs, SiGithub, SiVercel,
  SiMongodb, SiPostgresql, SiRedis
} from 'react-icons/si'

const floatingIcons = [
  { Icon: SiReact, delay: "0s", initialPosition: "5%", direction: 1 },
  { Icon: SiTypescript, delay: "0.5s", initialPosition: "15%", direction: -1 },
  { Icon: SiPython, delay: "1s", initialPosition: "25%", direction: 1 },
  { Icon: SiNodedotjs, delay: "1.5s", initialPosition: "35%", direction: -1 },
  { Icon: SiDocker, delay: "2s", initialPosition: "45%", direction: 1 },
  { Icon: SiKubernetes, delay: "2.5s", initialPosition: "55%", direction: -1 },
  { Icon: SiTensorflow, delay: "3s", initialPosition: "65%", direction: 1 },
  { Icon: SiJavascript, delay: "3.5s", initialPosition: "75%", direction: -1 },
  { Icon: SiTailwindcss, delay: "4s", initialPosition: "85%", direction: 1 },
  { Icon: SiNextdotjs, delay: "4.5s", initialPosition: "95%", direction: -1 },
  { Icon: SiGithub, delay: "5s", initialPosition: "10%", direction: 1 },
  { Icon: SiVercel, delay: "5.5s", initialPosition: "30%", direction: -1 },
  { Icon: SiMongodb, delay: "6s", initialPosition: "50%", direction: 1 },
  { Icon: SiPostgresql, delay: "6.5s", initialPosition: "70%", direction: -1 },
  { Icon: SiRedis, delay: "7s", initialPosition: "90%", direction: 1 },
  { Icon: SiRedis, delay: "7.5s", initialPosition: "20%", direction: -1 },
].map(icon => ({
  ...icon,
  randomOffset: Math.random() * 40 - 20 // Random offset between -20 and 20
}))

export default function Home() {
  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, initialPosition, direction, randomOffset }, index) => (
          <div
            key={index}
            className="absolute text-purple-600/20 transform"
            style={{
              left: initialPosition,
              animation: `float-${direction > 0 ? 'right' : 'left'} 20s ease-in-out infinite ${delay}`,
              top: Math.random() * 80 + 10 + '%',
              fontSize: '2rem',
              willChange: 'transform',
              transform: `translateX(${randomOffset}px)`
            }}
          >
            <Icon size={60} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 px-4">
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
    </div>
  )
}
