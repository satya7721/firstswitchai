import { GuidanceForm } from "./guidance-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIGuidance() {
  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-semibold tracking-tight">AI Career Guidance</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full">
          <GuidanceForm />
        </div>
        
        <Card className="h-fit">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">How to Get Career Advice</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Follow these steps to receive personalized AI career guidance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium text-base">1. Enter Your Name</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Start by providing your name so we can personalize the guidance for you.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">2. Current Role</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tell us about your current position or role in the tech industry.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">3. Career Goal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Share your career aspirations and where you'd like to be in your professional journey.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">4. Get Guidance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Click the button to receive AI-powered career advice tailored to your situation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 