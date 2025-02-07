"use client"

import { JSX, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  technologies: z.array(z.string()).min(1, "Select at least one technology"),
  location: z.string().optional(),
  experience: z.number().min(0).max(50).optional(),
})

type FormValues = z.infer<typeof formSchema>

export function LinkedInForm(): JSX.Element {
  const [generatedLink, setGeneratedLink] = useState<string>("")
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      technologies: [],
      location: "",
      experience: 0,
    },
  })

  const onSubmit = async (data: FormValues): Promise<void> => {
    try {
      const searchParams = new URLSearchParams()
      
      if (data.technologies.length > 0) {
        searchParams.append("keywords", data.technologies.join(" OR "))
      }
      
      if (data.location) {
        searchParams.append("location", data.location)
      }
      
      if (data.experience) {
        searchParams.append("experience", data.experience.toString())
      }

      const link = `https://www.linkedin.com/search/results/people/?${searchParams.toString()}`
      setGeneratedLink(link)
      
      toast({
        title: "Link generated successfully",
        description: "Your LinkedIn search link is ready to use.",
      })
    } catch (error) {
      toast({
        title: "Error generating link",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
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
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate LinkedIn Search Link</CardTitle>
        <CardDescription>
          Create a custom LinkedIn search link by selecting your preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., React, TypeScript" 
                      {...field}
                      onChange={(e) => field.onChange(e.target.value.split(",").map(t => t.trim()))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., San Francisco" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Experience</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      max="50" 
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Generate Link</Button>
          </form>
        </Form>

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