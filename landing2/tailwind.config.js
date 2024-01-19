/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#B8A9EF",
          200: "#AA98EC",
          300: "#9C86E9",
          400: "#8d75e6",
          DEFAULT: "#8d75e6",
        },
        light: "#d1cec5",
        dark: "#6956a8",
        orange: { 100: "#F0B194", DEFAULT: "#b74d1a" },
        pink: { 100: "#D39CB9", DEFAULT: "#a54b7a" },
        green: {
          100: "#8DE2C1",
          DEFAULT: "#1f7a57",
        },
      },
    },
  },
  plugins: [],
};
