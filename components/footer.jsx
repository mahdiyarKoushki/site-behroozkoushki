import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">بهروز کوشکی</span>
            </div>
            <p className="text-muted-foreground">
              ارائه دهنده خدمات حرفه‌ای ساختمانی با بیش از ۱۵ سال تجربه در تمامی نقاط تهران
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="text-muted-foreground hover:text-primary">
                  لوله کشی
                </Link>
              </li>
              <li>
                <Link href="/services/leak-detection" className="text-muted-foreground hover:text-primary">
                  تشخیص ترکیدگی
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">خدمات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/plumbing" className="text-muted-foreground hover:text-primary">
                  لوله کشی ساختمان
                </Link>
              </li>
              <li>
                <Link href="/services/leak-detection" className="text-muted-foreground hover:text-primary">
                  تشخیص ترکیدگی لوله
                </Link>
              </li>
              <li>
                <Link href="/services/faucet-installation" className="text-muted-foreground hover:text-primary">
                  نصب شیرآلات
                </Link>
              </li>
              <li>
                <Link href="/services/boiler" className="text-muted-foreground hover:text-primary">
                  نصب و تعمیر پکیج
                </Link>
              </li>
              <li>
                <Link href="/services/tiling" className="text-muted-foreground hover:text-primary">
                  کاشی کاری و نمای ساختمان
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">09128066569</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@behroozkooshki.ir</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">تهران، خدمات در تمامی مناطق</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">خدمات شبانه روزی - ۲۴ ساعته</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} بهروز کوشکی - متخصص خدمات ساختمانی. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

