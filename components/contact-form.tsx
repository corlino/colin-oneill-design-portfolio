"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" size="lg" className="bg-gray-900 hover:bg-gray-800 w-full" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export function ContactForm() {
  const [formState, setFormState] = useState<{
    message?: string
    success?: boolean
  }>({})

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setFormState(result)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form action={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input id="name" name="name" type="text" required className="w-full" placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="w-full"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="w-full min-h-[150px]"
            placeholder="How can I help you?"
          />
        </div>

        <SubmitButton />

        {formState.message && (
          <div
            className={`p-4 rounded-md ${formState.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {formState.message}
          </div>
        )}
      </form>
    </div>
  )
}
