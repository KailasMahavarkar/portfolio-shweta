"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    )
}
