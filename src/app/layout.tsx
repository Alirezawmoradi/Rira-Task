import "./globals.css";
import {Header} from "@/app/_components/header/header";
import {Figtree} from 'next/font/google';

const figtree = Figtree({
    display: 'swap',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-figtree'
})


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${figtree.variable}`}>
        <body className='min-h-screen grid grid-rows-[80px_1fr_auto] text-gray-900 bg-wall-pattern font-semibold'>
        <Header/>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
