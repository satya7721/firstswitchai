'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function IntroForm() {
  const [intro, setIntro] = useState("")
  const [generatedLink, setGeneratedLink] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would parse the intro text to extract relevant information
    // For now, we'll just create a simple search link
    const searchTerms = intro.split(/\s+/).slice(0, 3).join(" ") // First 3 words
    const link = `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(searchTerms)}`
    setGeneratedLink(link)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink)
    toast({
      title: "Copied!",
      description: "Link copied to clipboard",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parse LinkedIn Intro</CardTitle>
        <CardDescription>
          Paste your LinkedIn intro text and we'll generate a search link
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Textarea
            placeholder="Paste your LinkedIn intro here..."
            className="min-h-[200px]"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
          <Button type="submit" className="w-full">Generate Link</Button>
        </form>

        {generatedLink && (
          <div className="mt-6 p-4 border rounded-lg bg-muted/50">
            <p className="mb-4 break-all text-sm">{generatedLink}</p>
            <Button onClick={copyToClipboard} variant="secondary" className="w-full">
              Copy Link
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 