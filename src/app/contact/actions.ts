"use server";

import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL || "ee@castson.com";

// Simple email format validator
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactFormState {
  success: boolean;
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

export async function sendContactEmail(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Honeypot check (anti-spam technique)
  const honeypot = formData.get("honeypot");
  if (honeypot && honeypot.toString().trim() !== "") {
    // Silently return success to mislead spambots
    return { success: true };
  }

  // 2. Extract fields
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const subject = formData.get("subject")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  // 3. Validation
  const fieldErrors: NonNullable<ContactFormState["fieldErrors"]> = {};

  if (!name) {
    fieldErrors.name = "Name is required.";
  } else if (name.length > 100) {
    fieldErrors.name = "Name must be less than 100 characters.";
  }

  if (!email) {
    fieldErrors.email = "Email address is required.";
  } else if (!EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  } else if (email.length > 254) {
    fieldErrors.email = "Email must be less than 254 characters.";
  }

  if (!subject) {
    fieldErrors.subject = "Subject / Context is required.";
  } else if (subject.length > 150) {
    fieldErrors.subject = "Subject must be less than 150 characters.";
  }

  if (!message) {
    fieldErrors.message = "Message is required.";
  } else if (message.length > 5000) {
    fieldErrors.message = "Message must be less than 5,000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  // 4. Check for Resend API key configuration
  if (!resendApiKey) {
    console.error("[Contact Action] Missing RESEND_API_KEY environment variable.");
    return {
      success: false,
      error: "Something went wrong and the message was not sent. Please try again later.",
    };
  }

  try {
    const resend = new Resend(resendApiKey);

    // Falls back to Resend sandbox sender onboarding@resend.dev if a custom sending domain isn't ready
    const sender = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const { error } = await resend.emails.send({
      from: `Castson Contact Form <${sender}>`,
      to: contactToEmail,
      subject: `New Inquiry: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[Contact Action] Resend API error:", error);
      return {
        success: false,
        error: "Something went wrong and the message was not sent. Please try again later.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("[Contact Action] Exception sending email:", err);
    return {
      success: false,
      error: "Something went wrong and the message was not sent. Please try again later.",
    };
  }
}
