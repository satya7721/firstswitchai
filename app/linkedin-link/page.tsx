import { LinkedInForm } from "./linkedin-form"
import { IntroForm } from "./intro-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LinkedInLink() {
  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-semibold tracking-tight">LinkedIn Search Link Generator</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full">
          <Tabs defaultValue="manual" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="manual">Manual Search</TabsTrigger>
              <TabsTrigger value="intro">Parse Intro</TabsTrigger>
            </TabsList>
            <TabsContent value="manual">
              <LinkedInForm />
            </TabsContent>
            <TabsContent value="intro">
              <IntroForm />
            </TabsContent>
          </Tabs>
        </div>
        
        <Card className="h-fit">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">How to Use</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Choose your preferred method to generate LinkedIn search links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium text-base">Manual Search</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Select specific technologies, location, and experience level to create a targeted search.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">Parse Intro</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Simply paste your LinkedIn intro text and let us generate a search link based on the content.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 