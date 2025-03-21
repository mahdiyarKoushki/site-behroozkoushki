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
  publisher: "بهروز کوشکی",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://behrooz.koushky.ir"),
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://behrooz.koushky.ir",
    title: "بهروز کوشکی | متخصص خدمات ساختمانی در تهران",
    description:
      "ارائه انواع خدمات ساختمانی شامل لوله کشی، کاشی کاری، رفع نم، تشخیص ترکیدگی لوله با 15 سال سابقه و تضمین کیفیت",
    siteName: "بهروز کوشکی",
    images: [
      {
        url: "https://behrooz.koushky.ir/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "بهروز کوشکی - متخصص خدمات ساختمانی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بهروز کوشکی | متخصص خدمات ساختمانی در تهران",
    description:
      "ارائه انواع خدمات ساختمانی شامل لوله کشی، کاشی کاری، رفع نم، تشخیص ترکیدگی لوله با 15 سال سابقه و تضمین کیفیت",
    images: ["https://behroozkooshki.ir/og-image.jpg"],
  },
  icons: {
    icon: "/repair-logo.jpg",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-icon.jpg",
    },
  },
  verification: {
    google: "8P_G3SLb8cE9-tFCk_JN0K_hYS5QUPEfVk1Y0d4KD80",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="8P_G3SLb8cE9-tFCk_JN0K_hYS5QUPEfVk1Y0d4KD80" />
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