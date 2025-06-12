"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

console.log("API Key:", process.env.RESEND_API_KEY)


export async function submitContactForm(formData: FormData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    if (!name || !email || !message) {
        return {
            success: false,
            message: "All fields are required",
        }
    }

    try {
        await resend.emails.send({
            from: "Colin O'Neill <onboarding@resend.dev>", // or use a verified sender domain
            to: ["corlinoneill@gmail.com"],            // where you want to receive messages
            subject: "New Portfolio Contact Form Message",
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
        })

        return {
            success: true,
            message: "Thank you for your message! I'll get back to you soon.",
        }
    } catch (error) {
        console.error("Resend error:", error)
        return {
            success: false,
            message: "There was an error sending your message. Please try again later.",
        }
    }
}
