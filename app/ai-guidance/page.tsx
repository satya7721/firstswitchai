import { JSX } from "react"
import { GuidanceForm } from "./guidance-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StepItem {
  title: string
  description: string
}

const steps: StepItem[] = [
  {
    title: "1. Current Situation",
    description: "Tell us about your current role and experience level.",
  },
  {
    title: "2. Current Role",
    description: "Tell us about your current position or role in the tech industry.",
  },
  {
    title: "3. Career Goal",
    description: "Share your career aspirations and where you'd like to be in your professional journey.",
  },
  {
    title: "4. Get Guidance",
    description: "Click the button to receive AI-powered career advice tailored to your situation.",
  },
]

export default function AIGuidance(): JSX.Element {
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
            {steps.map((step) => (
              <div key={step.title} className="space-y-2">
                <h3 className="font-medium text-base">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 