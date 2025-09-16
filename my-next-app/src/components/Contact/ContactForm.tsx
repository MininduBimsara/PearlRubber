// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import FormField from "./FormField";

interface FormField {
  label: string;
  labelNote?: string;
  type: "text" | "email" | "tel" | "url" | "textarea";
  name: string;
  placeholder: string;
  required: boolean;
  rows?: number;
  gridPosition: "left" | "right" | "full";
}

interface ContactFormData {
  title: string;
  description: string[];
  email: {
    address: string;
    icon: string;
    displayText: string;
  };
  fields: FormField[];
  submitButton: {
    defaultText: string;
    submittingText: string;
    successText: string;
    successIcon: string;
  };
}

interface ContactFormProps {
  data: ContactFormData;
}

export default function ContactForm({ data }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initialData: Record<string, string> = {};
    data.fields.forEach((field) => {
      initialData[field.name] = "";
    });
    return initialData;
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
      const resetData: Record<string, string> = {};
      data.fields.forEach((field) => {
        resetData[field.name] = "";
      });
      setFormData(resetData);
    }, 2000);
  };

  // Group fields by grid position
  const leftFields = data.fields.filter(
    (field) => field.gridPosition === "left"
  );
  const rightFields = data.fields.filter(
    (field) => field.gridPosition === "right"
  );
  const fullFields = data.fields.filter(
    (field) => field.gridPosition === "full"
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">{data.title}</h2>

        <div className="space-y-1 text-gray-600">
          <p className="text-sm">{data.description[0]}</p>
          <p className="text-sm">
            {data.description[1]}{" "}
            <a
              href={`mailto:${data.email.address}`}
              className="text-black font-medium hover:underline inline-flex items-center gap-1"
            >
              <span>{data.email.icon}</span>
              <span>{data.email.displayText}</span>
            </a>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Two-column grid fields */}
        {(leftFields.length > 0 || rightFields.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {leftFields.map((field, index) => (
                <FormField
                  key={`left-${index}`}
                  label={field.label}
                  labelNote={field.labelNote}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required={field.required}
                  rows={field.rows}
                />
              ))}
            </div>
            <div className="space-y-6">
              {rightFields.map((field, index) => (
                <FormField
                  key={`right-${index}`}
                  label={field.label}
                  labelNote={field.labelNote}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required={field.required}
                  rows={field.rows}
                />
              ))}
            </div>
          </div>
        )}

        {/* Full-width fields */}
        {fullFields.map((field, index) => (
          <FormField
            key={`full-${index}`}
            label={field.label}
            labelNote={field.labelNote}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
            rows={field.rows}
          />
        ))}

        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className={`
    inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300
    ${
      isSubmitted
        ? "bg-green-500 text-white shadow-lg transform scale-105"
        : isSubmitting
        ? "bg-gray-400 text-white cursor-not-allowed"
        : "bg-yellow-400 hover:bg-yellow-500 text-black transform hover:scale-105 hover:shadow-lg"
    }
  `}
          >
            {isSubmitted
              ? data.submitButton.successText
              : isSubmitting
              ? data.submitButton.submittingText
              : data.submitButton.defaultText}
          </button>
        </div>
      </form>
    </div>
  );
}
