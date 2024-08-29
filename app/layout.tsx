import Script from 'next/script'
import './globals.css'

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gradient-to-r from-blue-700 to-black h-screen w-full bg-no-repeat">
                {children}
                <Script src="https://kit.fontawesome.com/ef289def54.js" crossOrigin="anonymous"></Script>
            </body>
        </html>
    )
}
