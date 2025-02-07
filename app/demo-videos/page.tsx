import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VideoList } from "./video-list"

interface VideoItem {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  category: string
  videoUrl: string
}

const demoVideos: VideoItem[] = [
  {
    id: "1",
    title: "LinkedIn Generator Tutorial",
    description: "Learn how to create powerful LinkedIn search links for your job search",
    thumbnail: "/thumbnails/linkedin-demo.jpg",
    duration: "5:30",
    category: "Tutorial",
    videoUrl: "https://youtube.com/watch?v=..."
  },
  {
    id: "2",
    title: "Resume Review Features",
    description: "See how our AI-powered resume review system works",
    thumbnail: "/thumbnails/resume-demo.jpg",
    duration: "4:45",
    category: "Feature Demo",
    videoUrl: "https://youtube.com/watch?v=..."
  },
  {
    id: "3",
    title: "Career Guidance Walkthrough",
    description: "Explore our AI career guidance system",
    thumbnail: "/thumbnails/guidance-demo.jpg",
    duration: "6:15",
    category: "Walkthrough",
    videoUrl: "https://youtube.com/watch?v=..."
  },
]

export default function DemoVideos(): JSX.Element {
  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-semibold tracking-tight">Product Demos & Tutorials</h1>
      </div>
      <div className="grid gap-8">
        <div className="w-full">
          <VideoList videos={demoVideos} />
        </div>
        
        <Card className="h-fit">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Why Watch Our Demos?</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Get the most out of our career tools
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium text-base">1. Learn Best Practices</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover tips and tricks to maximize the effectiveness of our tools.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">2. Feature Overview</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get a comprehensive look at all available features.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">3. Step-by-Step Guides</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Follow along with detailed tutorials for each tool.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 