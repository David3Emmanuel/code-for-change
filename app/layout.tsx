import Script from 'next/script'
import './globals.css'

import { Poppins } from 'next/font/google'
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})


export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={poppins.className}>
            <body>
                {children}
                <Script src="https://kit.fontawesome.com/ef289def54.js" crossOrigin="anonymous"></Script>
            </body>
        </html>
    )
}
