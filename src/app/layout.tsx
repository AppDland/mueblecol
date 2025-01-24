'use client';
import { useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import { LoadingProvider } from '@/context/Loading.context';

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
const cookieRegular = localFont({
    src: "./fonts/Cookie-Regular.ttf",
    variable: "--font-cookie",
    weight: "400"
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {
        // const savedTheme = localStorage.getItem('theme') || 'light';
        // document.documentElement.setAttribute('data-theme', savedTheme);
        document.documentElement.setAttribute('data-theme', 'light');
    }, []);


    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <title>Mueblecol</title>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} ${cookieRegular.variable} antialiased min-h-screen bg-base-100 text-base-content`}>
                <LoadingProvider>
                    <Header />
                    <div className="fixed top-4 right-4 z-50">
                        <ThemeToggle />
                    </div>
                    <main className='mt-16 sm:mt-20 md:mt-0'>
                        {children}
                    </main>
                    <Footer />
                </LoadingProvider>
            </body>
        </html>
    );
}
