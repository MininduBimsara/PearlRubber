// components/contact/ContactHeader.tsx
"use client";

export default function ContactHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Let's Talk.
      </h1>

      <div className="mb-6 space-y-1">
        <p className="text-gray-600 text-base max-w-2xl">
          We have built more than 100 digital products for businesses and
          governments.
        </p>
        <p className="text-gray-600 text-base max-w-2xl">
          Call us or book a meeting to talk about how you can grow your business
          with technology.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 group">
          <span>📞</span>
          <span>+1 (415) 498-1730</span>
        </button>

        <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 group">
          <span>Book a free consultation</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
