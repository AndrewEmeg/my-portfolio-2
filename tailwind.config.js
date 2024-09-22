/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      rubik: ["rubik", "JetBrains Mono"],
      jet: ["JetBrains Mono"],
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          100: "#1B2E3C",
          200: "#0C0C1E",
          300: "#4D0011",
          400: "#F3E3E2",
        },
      },
      // backgroundImage: {
      //   "tech-pattern": "url('/img/hero-pattern.svg')",
      //   "footer-texture": "url('/img/footer-texture.png')",
      // },
    },
  },
  plugins: [],
};
