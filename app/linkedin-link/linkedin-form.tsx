'use client'

import { useState } from "react"
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { techStacks } from "./tech-stack-data"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FormData = {
  techStack: string[]
  city: string
  experience: string
}

export function LinkedInForm() {
  const [open, setOpen] = useState(false)
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [generatedLink, setGeneratedLink] = useState<string>("")
  const { toast } = useToast()
  const form = useForm<FormData>({
    defaultValues: {
      techStack: [],
      city: "",
      experience: "",
    }
  })

  const onSubmit = (data: FormData) => {
    const baseUrl = "https://www.linkedin.com/search/results/people/?"
    const keywords = `keywords=${encodeURIComponent(selectedTech.join(" OR "))}`
    const location = `&geoUrn=${encodeURIComponent(`["${data.city}"]`)}`
    const experience = data.experience ? `&experience=${data.experience}` : ""
    
    const link = `${baseUrl}${keywords}${location}${experience}`
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
        <CardTitle>Generate LinkedIn Search Link</CardTitle>
        <CardDescription>
          Create a custom search link for finding professionals with specific tech skills
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="techStack"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tech Stack</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      if (!selectedTech.includes(value)) {
                        setSelectedTech([...selectedTech, value])
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select technologies" />
                    </SelectTrigger>
                    <SelectContent>
                      {techStacks.map((tech) => (
                        <SelectItem key={tech.value} value={tech.value}>
                          {tech.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedTech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedTech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                          onClick={() => {
                            setSelectedTech(selectedTech.filter((t) => t !== tech))
                          }}
                        >
                          {techStacks.find((t) => t.value === tech)?.label}
                          <span className="ml-1 cursor-pointer">×</span>
                        </Badge>
                      ))}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. London" {...field} />
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
                    <Input type="number" min="0" max="50" {...field} />
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
            <Button onClick={copyToClipboard} variant="secondary" className="w-full">
              Copy Link
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 