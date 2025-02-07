'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

interface ResumeFormProps {
  type: 'upload' | 'paste'
}

interface ScoreData {
  score: number
  monthlySpend: number
  change: number
  history: number[]
  details: {
    skills: number
    experience: number
    education: number
    formatting: number
  }
  suggestions: string[]
}

export function ResumeForm({ type }: ResumeFormProps) {
  const [content, setContent] = useState("")
  const [scoreData, setScoreData] = useState<ScoreData | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Mock score data - replace with actual API call
    setScoreData({
      score: 682.5,
      monthlySpend: 2.45,
      change: 2.45,
      history: [40, 25, 60, 30, 45, 75, 35],
      details: {
        skills: 85,
        experience: 75,
        education: 90,
        formatting: 70
      },
      suggestions: [
        "Add more quantifiable achievements",
        "Include relevant certifications",
        "Improve formatting consistency",
        "Add a professional summary"
      ]
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{type === 'upload' ? 'Upload Resume' : 'Paste Resume Content'}</CardTitle>
        <CardDescription>
          {type === 'upload' 
            ? 'Upload your resume file for AI analysis' 
            : 'Paste your resume content for AI analysis'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {type === 'upload' ? (
            <Input type="file" accept=".pdf,.doc,.docx" />
          ) : (
            <Textarea
              placeholder="Paste your resume content here..."
              className="min-h-[200px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          )}
          <Button type="submit" className="w-full">Analyze Resume</Button>
        </form>

        {scoreData && (
          <div className="mt-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Resume Score</p>
                  <div className="text-3xl font-bold">{scoreData.score}</div>
                  <div className="flex items-center text-sm text-green-600">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    {scoreData.change}%
                    <span className="text-muted-foreground ml-1">vs last month</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Skills</span>
                      <span>{scoreData.details.skills}%</span>
                    </div>
                    <Progress value={scoreData.details.skills} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Experience</span>
                      <span>{scoreData.details.experience}%</span>
                    </div>
                    <Progress value={scoreData.details.experience} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Education</span>
                      <span>{scoreData.details.education}%</span>
                    </div>
                    <Progress value={scoreData.details.education} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Formatting</span>
                      <span>{scoreData.details.formatting}%</span>
                    </div>
                    <Progress value={scoreData.details.formatting} />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="pt-4">
                <div className="h-[120px] w-full">
                  <div className="flex h-full items-end gap-2">
                    {scoreData.history.map((value, i) => (
                      <div
                        key={i}
                        className="bg-blue-600 w-full rounded-md transition-all hover:opacity-80"
                        style={{ height: `${value}%` }}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="suggestions" className="pt-4">
                <ul className="space-y-2">
                  {scoreData.suggestions.map((suggestion, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 