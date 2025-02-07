"use client"

import { JSX, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface VideoItem {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  category: string
  videoUrl: string
}

interface VideoListProps {
  videos: VideoItem[]
}

export function VideoList({ videos }: VideoListProps): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...new Set(videos.map(video => video.category))]
  const filteredVideos = selectedCategory === "all" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className={cn(
              selectedCategory === category && "bg-primary text-primary-foreground"
            )}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button variant="ghost" className="text-white">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Now
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {video.duration}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 