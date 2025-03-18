import { Vazirmatn } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
})

export const metadata = {
  title: "بهروز کوشکی | متخصص خدمات ساختمانی | لوله کشی، کاشی کاری، تعمیرات",
  description:
    "بهروز کوشکی با 15 سال سابقه در ارائه خدمات ساختمانی شامل لوله کشی، کاشی کاری، رفع نم، تشخیص ترکیدگی لوله و تمامی خدمات ساختمانی در تهران با قیمت مناسب و تضمین کیفیت",
  keywords: [
    "بهروز کوشکی",
    "لوله کشی تهران",
    "کاشی کاری",
    "تعمیرات ساختمان",
    "رفع نم",
    "تشخیص ترکیدگی لوله",
    "نصب شیرآلات",
    "تعمیر پکیج",
    "خدمات ساختمانی",
  ],
  authors: [{ name: "بهروز کوشکی" }],
  creator: "بهروز کوشکی",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://behroozkooshki.ir",
    title: "بهروز کوشکی | متخصص خدمات ساختمانی در تهران",
    description:
      "ارائه انواع خدمات ساختمانی شامل لوله کشی، کاشی کاری، رفع نم، تشخیص ترکیدگی لوله با 15 سال سابقه و تضمین کیفیت",
    siteName: "بهروز کوشکی",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirmatn.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

