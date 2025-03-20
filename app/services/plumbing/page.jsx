import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PortfolioItem from "@/components/portfolio-item"

export const metadata = {
  title: "خدمات لوله کشی ساختمان | بهروز کوشکی | متخصص لوله کشی در تهران",
  description:
    "بهروز کوشکی متخصص لوله کشی ساختمان با 15 سال سابقه در تهران. لوله کشی آب، فاضلاب و گاز با بهترین کیفیت و نازل‌ترین قیمت. خدمات شبانه روزی با ضمانت کیفیت.",
  keywords: [
    "بهروز کوشکی",
    "لوله کشی تهران",
    "لوله کشی ساختمان",
    "لوله کشی آب",
    "لوله کشی فاضلاب",
    "لوله کشی گاز",
    "تعمیر لوله",
  ],
}

export default function PlumbingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="خدمات لوله کشی ساختمان"
        description="ارائه انواع خدمات لوله کشی ساختمان شامل لوله کشی آب سرد و گرم، فاضلاب و گاز با بهترین کیفیت و نازل‌ترین قیمت توسط بهروز کوشکی"
        imageSrc="/lole4.jpg"
        primaryButtonText="درخواست مشاوره رایگان"
        primaryButtonLink="/contact"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">خدمات لوله کشی ساختمان بهروز کوشکی</h2>

              <p>
                بهروز کوشکی با بیش از 15 سال تجربه در زمینه لوله کشی ساختمان، خدمات متنوعی را در این حوزه ارائه می‌دهد.
                تخصص اصلی ایشان طراحی و اجرای سیستم‌های لوله کشی آب سرد و گرم، فاضلاب و گاز برای ساختمان‌های مسکونی و
                تجاری می‌باشد.
              </p>

              <p>
                با استفاده از بهترین متریال و تجهیزات روز دنیا، آقای کوشکی تضمین می‌کند که سیستم لوله کشی شما با بالاترین
                استانداردها و کیفیت اجرا شود. ایشان با درک اهمیت کیفیت در لوله کشی ساختمان، تمامی مراحل کار را با دقت و
                وسواس خاصی انجام می‌دهد.
              </p>

              <h3 className="text-2xl font-bold mt-8">انواع خدمات لوله کشی</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">لوله کشی آب سرد و گرم</h4>
                  <p>
                    طراحی و اجرای سیستم لوله کشی آب سرد و گرم با استفاده از لوله‌های استاندارد و با کیفیت. اجرای لوله کشی
                    توکار و روکار با ضمانت کیفیت.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">لوله کشی فاضلاب</h4>
                  <p>
                    اجرای سیستم لوله کشی فاضلاب با رعایت اصول فنی و استانداردهای لازم. استفاده از لوله‌های مرغوب برای
                    جلوگیری از نشتی و گرفتگی.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">لوله کشی گاز</h4>
                  <p>
                    اجرای لوله کشی گاز با رعایت کامل استانداردهای شرکت گاز و مقررات ملی ساختمان. اخذ تأییدیه و مجوزهای
                    لازم از سازمان‌های مربوطه.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">تعمیر و رفع نشتی لوله</h4>
                  <p>
                    تشخیص و رفع انواع نشتی در لوله‌ها و اتصالات با کمترین آسیب به ساختمان. استفاده از تجهیزات پیشرفته
                    برای تشخیص دقیق محل نشتی.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">تعویض لوله‌های فرسوده</h4>
                  <p>
                    بررسی وضعیت لوله‌های قدیمی و فرسوده و تعویض آن‌ها با لوله‌های جدید و استاندارد. جلوگیری از خسارات ناشی
                    از فرسودگی لوله‌ها.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">چرا بهروز کوشکی را انتخاب کنید؟</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>15 سال تجربه در زمینه لوله کشی ساختمان</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از بهترین متریال و تجهیزات</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>قیمت مناسب و منصفانه</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ضمانت کیفیت خدمات</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>خدمات شبانه روزی در تمامی نقاط تهران</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>مشاوره رایگان قبل از شروع کار</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">مناطق تحت پوشش خدمات لوله کشی</h3>
                <p>
                  بهروز کوشکی خدمات لوله کشی خود را در تمامی مناطق تهران ارائه می‌دهد. از شمال تا جنوب و از شرق تا غرب
                  تهران، در هر منطقه‌ای که باشید، می‌توانید از خدمات با کیفیت ایشان بهره‌مند شوید.
                </p>
                <p className="mt-2">
                  برخی از مناطق تحت پوشش: نیاوران، فرمانیه، زعفرانیه، الهیه، جردن، ونک، سعادت آباد، شهرک غرب، پونک،
                  تهرانپارس، پاسداران، میرداماد، شریعتی، ولیعصر، انقلاب، آزادی، یافت آباد، نازی آباد، افسریه و...
                </p>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">خدمات لوله کشی</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">لوله کشی آب سرد و گرم</li>
                  <li className="border-b pb-2">لوله کشی فاضلاب</li>
                  <li className="border-b pb-2">لوله کشی گاز</li>
                  <li className="border-b pb-2">تعمیر و رفع نشتی لوله</li>
                  <li className="border-b pb-2">تعویض لوله‌های فرسوده</li>
                  <li className="border-b pb-2">نصب شیرآلات</li>
                  <li className="border-b pb-2">رفع گرفتگی لوله و فاضلاب</li>
                  <li>مشاوره و طراحی سیستم لوله کشی</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
                <p className="mb-4">برای مشاوره رایگان و یا درخواست خدمات لوله کشی با ما تماس بگیرید:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">تلفن:</span>
                    <span>09128066569</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">ایمیل:</span>
                    <span>info@behroozkooshki.ir</span>
                  </div>
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/contact">درخواست مشاوره رایگان</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-badge">نمونه کارهای لوله کشی</div>
            <h2 className="section-title">پروژه‌های اخیر لوله کشی</h2>
            <p className="section-description">
              نگاهی به برخی از پروژه‌های اخیر لوله کشی انجام شده توسط بهروز کوشکی بیندازید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Plumbing+1"
              title="لوله کشی ساختمان مسکونی"
              description="لوله کشی کامل آب و فاضلاب یک ساختمان مسکونی در منطقه سعادت آباد"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Plumbing+2"
              title="لوله کشی گاز تجاری"
              description="اجرای لوله کشی گاز یک مجتمع تجاری در منطقه ونک با اخذ تأییدیه شرکت گاز"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Plumbing+3"
              title="تعویض لوله‌های فرسوده"
              description="تعویض لوله‌های فرسوده آب یک ساختمان قدیمی در منطقه نیاوران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Plumbing+4"
              title="رفع نشتی لوله"
              description="تشخیص و رفع نشتی لوله آب با کمترین تخریب در یک منزل مسکونی در منطقه پاسداران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Plumbing+5"
              title="لوله کشی موتورخانه"
              description="طراحی و اجرای لوله کشی موتورخانه یک مجتمع مسکونی در منطقه شهرک غرب"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Plumbing+6"
              title="لوله کشی استخر"
              description="اجرای لوله کشی استخر و سیستم تصفیه آب یک ویلا در لواسان"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">نیاز به خدمات لوله کشی اضطراری دارید؟</h2>
              <p className="mt-2">با بهروز کوشکی تماس بگیرید. خدمات ۲۴ ساعته در تمامی نقاط تهران.</p>
            </div>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="tel:09128066569">تماس اضطراری: 09128066569</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

