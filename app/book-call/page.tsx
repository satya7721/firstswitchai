import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingForm } from "./booking-form"

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

const timeSlots: TimeSlot[] = [
  { id: "1", time: "9:00 AM", available: true },
  { id: "2", time: "10:00 AM", available: true },
  { id: "3", time: "11:00 AM", available: false },
  { id: "4", time: "2:00 PM", available: true },
  { id: "5", time: "3:00 PM", available: true },
  { id: "6", time: "4:00 PM", available: true },
]

export default function BookCall(): JSX.Element {
  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-semibold tracking-tight">Book a Consultation Call</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full">
          <BookingForm timeSlots={timeSlots} />
        </div>
        
        <Card className="h-fit">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Why Book a Call?</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Get personalized guidance for your career transition
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium text-base">1. Personalized Strategy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get a customized roadmap for your career transition based on your specific situation.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">2. Expert Guidance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Benefit from years of industry experience and insights.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-base">3. Action Plan</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Walk away with concrete next steps and resources.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 