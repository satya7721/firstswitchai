"use client"

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
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  introText: z.string().min(1, "Please enter your LinkedIn intro"),
})

type FormValues = z.infer<typeof formSchema>

export function IntroForm(): JSX.Element {
  const [generatedLink, setGeneratedLink] = useState<string>("")
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      introText: "",
    },
  })

  const onSubmit = async (data: FormValues): Promise<void> => {
    try {
      // Here you would parse the intro text to extract relevant information
      // For now, we'll create a simple search link
      const keywords = data.introText
        .split(/\s+/)
        .filter(word => word.length > 3)
        .join(" OR ")

      const searchParams = new URLSearchParams()
      searchParams.append("keywords", keywords)

      const link = `https://www.linkedin.com/search/results/people/?${searchParams.toString()}`
      setGeneratedLink(link)

      toast({
        title: "Link generated successfully",
        description: "Your LinkedIn search link is ready to use.",
      })
    } catch (error) {
      toast({
        title: "Error generating link",
        description: "Please try again with different text.",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(generatedLink)
      toast({
        title: "Copied to clipboard",
        description: "The link has been copied to your clipboard.",
      })
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the link manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parse LinkedIn Intro</CardTitle>
        <CardDescription>
          Generate a search link by pasting your LinkedIn introduction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Textarea
            placeholder="Paste your LinkedIn intro here..."
            className="min-h-[200px]"
            {...form.register("introText")}
          />
          <Button type="submit" className="w-full">Generate Link</Button>
        </form>

        {generatedLink && (
          <div className="mt-6 p-4 border rounded-lg bg-muted/50">
            <p className="mb-4 break-all text-sm">{generatedLink}</p>
            <Button 
              onClick={copyToClipboard} 
              variant="secondary" 
              className="w-full"
            >
              Copy Link
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 