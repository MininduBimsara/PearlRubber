"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-md">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Lets create something amazing together.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-white/90 text-sm font-medium mb-2"
            >
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Gabriella Bonfirm"
              required
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-white/90 text-sm font-medium mb-2"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="gabriella@email.com"
              required
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white/90 text-sm font-medium mb-2"
            >
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Gabriella"
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed hover:scale-105 hover:shadow-xl"
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
}
