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
import { useForm } from "react-hook-form"
import { Card } from "@/components/ui/card"

type FormData = {
  name: string
  currentRole: string
  careerGoal: string
}

export function GuidanceForm() {
  const [guidance, setGuidance] = useState<string>("")
  const form = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Here you would typically make an API call to your AI service
    // For demo purposes, we'll just set a mock response
    setGuidance(
      `Dear ${data.name}, based on your current role as a ${data.currentRole} and your goal to become a ${data.careerGoal}, here are some suggestions: [AI guidance would go here]`
    )
  }

  return (
    <div className="max-w-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentRole"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Job Role</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Junior Developer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="careerGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Career Goal</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Senior Frontend Developer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Get AI Guidance</Button>
        </form>
      </Form>

      {guidance && (
        <Card className="mt-8 p-4">
          <p className="whitespace-pre-wrap">{guidance}</p>
        </Card>
      )}
    </div>
  )
} 