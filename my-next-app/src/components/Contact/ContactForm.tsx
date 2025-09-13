// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import FormField from "./FormField";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyWebsite: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        companyWebsite: "",
        phone: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">
          Send us a message
        </h2>

        <div className="space-y-1 text-gray-600">
          <p className="text-sm">
            You can send us a message here about what you are planning to build.
          </p>
          <p className="text-sm">
            Alternatively you can send us a mail at{" "}
            <a
              href="mailto:hello@rootcode.io"
              className="text-black font-medium hover:underline inline-flex items-center gap-1"
            >
              <span>📧</span>
              <span>hello@PearlRubber.io</span>
            </a>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Name"
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <FormField
            label="Your Company website"
            type="url"
            name="companyWebsite"
            placeholder="Enter company website link"
            value={formData.companyWebsite}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="E-mail"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FormField
            label="Phone"
            labelNote="(Optional)"
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <FormField
          label="Message"
          type="textarea"
          name="message"
          placeholder="Tell us about your project or what you're planning to build..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />

        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className={`
              px-6 py-3 rounded-full font-semibold text-base transition-all duration-200
              ${
                isSubmitted
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                  : isSubmitting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-green-400 to-amber-400 text-white hover:shadow-xl hover:shadow-green-400/25 hover:scale-105"
              }
            `}
          >
            {isSubmitted
              ? "Message Sent! ✓"
              : isSubmitting
              ? "Sending..."
              : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
