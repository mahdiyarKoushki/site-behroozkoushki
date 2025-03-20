import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PortfolioItem from "@/components/portfolio-item"

export const metadata = {
  title: "کاشی کاری و نمای ساختمان | بهروز کوشکی | متخصص کاشی کاری در تهران",
  description:
    "بهروز کوشکی متخصص کاشی کاری و نمای ساختمان با 15 سال سابقه در تهران. اجرای انواع کاشی کاری، سرامیک و نمای ساختمان با طرح‌های متنوع و کیفیت بالا.",
  keywords: [
    "بهروز کوشکی",
    "کاشی کاری",
    "سرامیک کاری",
    "نمای ساختمان",
    "کاشی کاری حمام",
    "کاشی کاری آشپزخانه",
    "تهران",
  ],
}

export default function TilingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="کاشی کاری و نمای ساختمان"
        description="اجرای انواع کاشی کاری، سرامیک و نمای ساختمان با طرح‌های متنوع و کیفیت بالا توسط بهروز کوشکی"
 imageSrc="/kashi2.png"
        primaryButtonText="درخواست مشاوره رایگان"
        primaryButtonLink="/contact"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">خدمات کاشی کاری بهروز کوشکی</h2>

              <p>
                بهروز کوشکی با بیش از 15 سال تجربه در زمینه کاشی کاری و نمای ساختمان، خدمات تخصصی و حرفه‌ای در این حوزه
                ارائه می‌دهد. ایشان با تسلط کامل بر انواع روش‌های کاشی کاری و استفاده از بهترین متریال، اجرای کاشی کاری را
                با بالاترین کیفیت و دقت انجام می‌دهد.
              </p>

              <p>
                کاشی کاری یکی از مهم‌ترین بخش‌های ساختمان است که علاوه بر زیبایی، در محافظت از سطوح در برابر رطوبت و
                آسیب‌های محیطی نیز نقش مهمی دارد. اجرای صحیح و اصولی کاشی کاری نه تنها باعث افزایش زیبایی فضا می‌شود، بلکه
                در افزایش طول عمر و دوام آن نیز تأثیر بسزایی دارد.
              </p>

              <div className="my-8">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Tiling"
                  alt="کاشی کاری و نمای ساختمان"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold mt-8">انواع خدمات کاشی کاری</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">کاشی کاری حمام و سرویس بهداشتی</h4>
                  <p>
                    اجرای کاشی کاری حمام و سرویس بهداشتی با رعایت اصول فنی و استانداردهای لازم. استفاده از کاشی‌های ضد آب
                    و مقاوم در برابر رطوبت.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">کاشی کاری آشپزخانه</h4>
                  <p>
                    اجرای کاشی کاری آشپزخانه با طرح‌های متنوع و زیبا. استفاده از کاشی‌های مقاوم در برابر حرارت و مواد
                    شیمیایی.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">سرامیک کاری کف</h4>
                  <p>
                    اجرای سرامیک کاری کف با رعایت اصول فنی و استانداردهای لازم. تراز کردن دقیق کف و استفاده از بهترین
                    چسب‌ها و ملات‌ها.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نمای ساختمان</h4>
                  <p>
                    اجرای نمای ساختمان با استفاده از انواع سنگ، آجر، سرامیک و سایر متریال‌ها. طراحی و اجرای نمای مدرن و
                    کلاسیک.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">موزاییک کاری</h4>
                  <p>
                    اجرای موزاییک کاری با طرح‌های متنوع و زیبا. استفاده از موزاییک‌های با کیفیت و مقاوم در برابر سایش.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">بازسازی و ترمیم کاشی کاری</h4>
                  <p>بازسازی و ترمیم کاشی کاری قدیمی و آسیب دیده. تعویض کاشی‌های شکسته و ترک خورده با کمترین تخریب.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">مزایای کاشی کاری توسط متخصص</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>اجرای دقیق و حرفه‌ای</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از بهترین متریال و چسب‌ها</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>تراز و هم‌سطح بودن کاشی‌ها</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>بندکشی اصولی و تمیز</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>افزایش طول عمر و دوام کاشی کاری</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8">چرا بهروز کوشکی را انتخاب کنید؟</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>15 سال تجربه در زمینه کاشی کاری</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از بهترین متریال و ابزار</span>
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
                  <span>خدمات در تمامی نقاط تهران</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>مشاوره رایگان قبل از شروع کار</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">نکات مهم در انتخاب کاشی</h3>
                <p>
                  انتخاب کاشی مناسب نقش مهمی در زیبایی و دوام کاشی کاری دارد. آقای کوشکی با تجربه ارزشمند خود، می‌تواند
                  شما را در انتخاب بهترین کاشی متناسب با نیاز و بودجه‌تان راهنمایی کند. برخی از نکات مهم در انتخاب کاشی
                  عبارتند از:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>جنس و کیفیت کاشی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>ابعاد و اندازه کاشی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>طرح و رنگ متناسب با دکوراسیون</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>مقاومت در برابر رطوبت و سایش</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>سهولت نظافت و نگهداری</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">خدمات کاشی کاری</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">کاشی کاری حمام و سرویس بهداشتی</li>
                  <li className="border-b pb-2">کاشی کاری آشپزخانه</li>
                  <li className="border-b pb-2">سرامیک کاری کف</li>
                  <li className="border-b pb-2">نمای ساختمان</li>
                  <li className="border-b pb-2">موزاییک کاری</li>
                  <li className="border-b pb-2">بازسازی و ترمیم کاشی کاری</li>
                  <li>مشاوره در انتخاب کاشی مناسب</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
                <p className="mb-4">برای مشاوره رایگان و یا درخواست خدمات کاشی کاری با ما تماس بگیرید:</p>
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

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">انواع کاشی</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">کاشی سرامیکی</li>
                  <li className="border-b pb-2">کاشی پرسلان</li>
                  <li className="border-b pb-2">کاشی موزاییکی</li>
                  <li className="border-b pb-2">کاشی شیشه‌ای</li>
                  <li className="border-b pb-2">کاشی سنگی</li>
                  <li>کاشی متالیک</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-badge">نمونه کارهای کاشی کاری</div>
            <h2 className="section-title">پروژه‌های اخیر کاشی کاری</h2>
            <p className="section-description">
              نگاهی به برخی از پروژه‌های اخیر کاشی کاری انجام شده توسط بهروز کوشکی بیندازید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Tiling+1"
              title="کاشی کاری حمام"
              description="اجرای کاشی کاری حمام با طرح مدرن در یک آپارتمان در منطقه نیاوران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Tiling+2"
              title="کاشی کاری آشپزخانه"
              description="اجرای کاشی کاری آشپزخانه با طرح کلاسیک در یک منزل مسکونی در منطقه سعادت آباد"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Tiling+3"
              title="سرامیک کاری کف"
              description="اجرای سرامیک کاری کف با طرح چوب در یک واحد مسکونی در منطقه پاسداران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Tiling+4"
              title="نمای ساختمان"
              description="اجرای نمای ساختمان با سنگ و سرامیک در یک ویلا در لواسان"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Tiling+5"
              title="موزاییک کاری"
              description="اجرای موزاییک کاری با طرح سنتی در یک رستوران در منطقه ونک"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Tiling+6"
              title="بازسازی کاشی کاری"
              description="بازسازی و ترمیم کاشی کاری حمام و سرویس بهداشتی در یک آپارتمان در منطقه شهرک غرب"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">نیاز به خدمات کاشی کاری دارید؟</h2>
              <p className="mt-2">با بهروز کوشکی تماس بگیرید. اجرای تخصصی انواع کاشی کاری با ضمانت کیفیت.</p>
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

