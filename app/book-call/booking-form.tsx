"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { cn } from "@/lib/utils"

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

interface BookingFormProps {
  timeSlots: TimeSlot[]
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function BookingForm({ timeSlots }: BookingFormProps): JSX.Element {
  const [selectedSlot, setSelectedSlot] = useState<string>("")
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      timeSlot: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues): Promise<void> => {
    try {
      // Here you would integrate with your booking system
      console.log("Booking data:", data)
      
      toast({
        title: "Booking submitted successfully",
        description: "We'll send you a confirmation email shortly.",
      })
    } catch (error) {
      toast({
        title: "Error submitting booking",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Your Call</CardTitle>
        <CardDescription>
          Book a 30-minute consultation call
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              {...form.register("name")}
            />
            <Input
              type="email"
              placeholder="Your Email"
              {...form.register("email")}
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Available Time Slots</h3>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full",
                    selectedSlot === slot.id && "border-primary",
                    !slot.available && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={!slot.available}
                  onClick={() => {
                    setSelectedSlot(slot.id)
                    form.setValue("timeSlot", slot.id)
                  }}
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          </div>

          <Textarea
            placeholder="Any specific topics you'd like to discuss?"
            className="min-h-[100px]"
            {...form.register("message")}
          />

          <Button type="submit" className="w-full">
            Book Call
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 