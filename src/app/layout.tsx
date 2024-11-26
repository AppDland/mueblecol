'use client';
import { useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-base-100 text-base-content`}>
                <div className="fixed top-4 right-4 z-50">
                    <ThemeToggle />
                </div>
                {children}
            </body>
        </html>
    );
}
