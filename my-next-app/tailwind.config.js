/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"],
      },
      colors: {
        green: {
          100: "#dcfce7", // Missing - used in hover:bg-green-100/20
          700: "#318162",
          800: "#267549",
        },
        amber: {
          400: "#F9B75D",
        },
        cream: {
          50: "#FEF8F0",
        },
        slate: {
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
        },
      },
      animation: {
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
