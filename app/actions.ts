"use server"

export async function submitContactForm(formData: FormData) {
  // In a real application, you would send this data to an email service or database
  // For now, we'll just simulate a successful submission with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Validate the form data
  if (!name || !email || !message) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  // Return success response
  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  }
}
