import { ResumeForm } from "./resume-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumeReview() {
  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-semibold tracking-tight">Resume Review & Score</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Resume</TabsTrigger>
              <TabsTrigger value="paste">Paste Content</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <ResumeForm type="upload" />
            </TabsContent>
            <TabsContent value="paste">
              <ResumeForm type="paste" />
            </TabsContent>
          </Tabs>
        </div>
        
        <Card className="h-fit">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">How Resume Review Works</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Get detailed feedback and scoring for your resume
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium text-base">1. Submit Your Resume</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Upload your resume file or paste the content directly.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">2. AI Analysis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our AI analyzes your resume for key metrics and industry standards.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">3. Get Your Score</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Receive a detailed score breakdown and improvement suggestions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 