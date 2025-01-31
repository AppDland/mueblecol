import { Inter, Roboto_Mono, Cookie, Athiti } from 'next/font/google';
import classNames from 'classnames';
import "./globals.css";

// Configure font weights and subsets
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter' // CSS variable for use in Tailwind
});

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-roboto-mono'
});

const cookie = Cookie({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-cookie'
});

const h2Font = Athiti({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-athiti'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // useEffect(() => {
    // const savedTheme = localStorage.getItem('theme') || 'light';
    // document.documentElement.setAttribute('data-theme', savedTheme);
    // document.documentElement.setAttribute('data-theme', 'light');
    // }, []);


    return (
        <html lang="es">
            <head>
                <title>Mueblecol</title>
                <meta name="description" content="Gran variedad de muebles calidad-precio, financiación propia para facilita..." />
                <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
            </head>
            <body className={classNames(
                inter.variable,
                robotoMono.variable,
                cookie.variable,
                h2Font.variable,
                'antialiased min-h-screen bg-base-100 text-base-content'
            )}>
                {children}
            </body>
        </html>
    );
}
