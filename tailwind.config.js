/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: ["JetBrains Mono", "ui-sans-serif", "system-ui"], // Make JetBrains Mono the default sans font
            serif: ["ui-serif", "Georgia"],
            mono: ["JetBrains Mono", "SFMono-Regular"], // Keep it under mono for any code blocks or monospaced needs
            display: ["Oswald"],
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
                    500: "#C5C5E8",
                },
            },
            boxShadow: {
                "custom-inset": "inset 0 0 0 2px rgb(77, 0, 17)",
            },
            // backgroundImage: {
            //   "tech-pattern": "url('/img/hero-pattern.svg')",
            //   "footer-texture": "url('/img/footer-texture.png')",
            // },
        },
    },
    plugins: [],
};
