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
  icons: {
    icon: "https://cdn.tarhpik.com/5_Preview/1403/5/3/232951/Remote-photo-of-repair-logo-400.webp",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.jpg",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-icon.jpg",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var savedTheme = localStorage.getItem('selectedTheme');
                if (savedTheme) {
                  document.documentElement.setAttribute('data-theme', savedTheme);
                }
              } catch (e) {
                console.error('Error accessing localStorage:', e);
              }
            })();
          `,
          }}
        />
      </head>
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



import './globals.css'