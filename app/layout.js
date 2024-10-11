import { JetBrains_Mono } from "next/font/google"; // For Google Fonts
import localFont from "next/font/local"; // For Local Fonts
import "./globals.css";
import Script from "next/script";

// Use JetBrains Mono from Google Fonts
const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap", // Optimizes font loading
});

// Import Local Fonts
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900", // Variable weight
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900", // Variable weight
});

export const metadata = {
    title: "Andrew Emeghebo",
    description: "This is Andrew's personal portfolio.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={jetBrainsMono.className}>
            <body
                className={`${jetBrainsMono.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Script
                    type="module"
                    src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
                ></Script>
                <Script
                    nomodule
                    src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
                ></Script>
            </body>
        </html>
    );
}
