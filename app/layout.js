import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const geist = Geist({ subsets: ["latin"] })

export const metadata = {
  title: "Bilim Markazi",
  description: "Barcha fanlar bir joyda",
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}