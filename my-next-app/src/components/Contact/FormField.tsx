// components/contact/FormField.tsx
"use client";

interface FormFieldProps {
  label: string;
  labelNote?: string;
  type: "text" | "email" | "tel" | "url" | "textarea";
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  rows?: number;
}

export default function FormField({
  label,
  labelNote,
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
}: FormFieldProps) {
  const baseClasses = `
    w-full px-0 py-2 text-base text-black placeholder-gray-400
    bg-transparent border-0 border-b-2 border-gray-300
    focus:border-black focus:outline-none focus:ring-0
    transition-colors duration-200
  `;

  return (
    <div className="space-y-1">
      <label className="block text-black font-semibold text-base">
        {label}
        {labelNote && (
          <span className="text-gray-500 font-normal ml-2 text-sm">
            {labelNote}
          </span>
        )}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
}
