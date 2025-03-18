import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PortfolioItem from "@/components/portfolio-item"

export const metadata = {
  title: "نصب و تعمیر پکیج | بهروز کوشکی | متخصص پکیج و سیستم گرمایشی در تهران",
  description:
    "بهروز کوشکی متخصص نصب و تعمیر انواع پکیج و سیستم‌های گرمایشی با 15 سال سابقه در تهران. خدمات نصب، سرویس و تعمیر پکیج با قطعات اصلی و ضمانت کیفیت.",
  keywords: ["بهروز کوشکی", "نصب پکیج", "تعمیر پکیج", "سرویس پکیج", "نصب رادیاتور", "سیستم گرمایشی", "تهران"],
}

export default function BoilerPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="نصب و تعمیر پکیج"
        description="نصب، سرویس و تعمیر انواع پکیج و سیستم‌های گرمایشی با قطعات اصلی و ضمانت کیفیت توسط بهروز کوشکی"
        imageSrc="/placeholder.svg?height=800&width=1600&text=Boiler+Installation"
        primaryButtonText="درخواست مشاوره رایگان"
        primaryButtonLink="/contact"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">خدمات نصب و تعمیر پکیج بهروز کوشکی</h2>

              <p>
                بهروز کوشکی با بیش از 15 سال تجربه در زمینه نصب و تعمیر پکیج، خدمات تخصصی و حرفه‌ای در این حوزه ارائه
                می‌دهد. ایشان با تسلط کامل بر انواع پکیج‌های دیواری و زمینی، نصب، سرویس و تعمیر آن‌ها را با بالاترین کیفیت
                و دقت انجام می‌دهد.
              </p>

              <p>
                پکیج یکی از مهم‌ترین تجهیزات ساختمانی است که نقش اساسی در تأمین آب گرم و گرمایش ساختمان دارد. نصب و تعمیر
                اصولی پکیج نه تنها باعث افزایش طول عمر آن می‌شود، بلکه در کاهش مصرف انرژی و هزینه‌های نگهداری نیز تأثیر
                بسزایی دارد.
              </p>

              <div className="my-8">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Boiler+Installation"
                  alt="نصب و تعمیر پکیج"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold mt-8">انواع خدمات پکیج</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب پکیج دیواری</h4>
                  <p>
                    نصب انواع پکیج دیواری با رعایت اصول فنی و استانداردهای لازم. اتصال صحیح به سیستم لوله کشی، برق و
                    دودکش با ضمانت کیفیت.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب پکیج زمینی</h4>
                  <p>
                    نصب انواع پکیج زمینی و موتورخانه‌ای با رعایت اصول فنی و استانداردهای لازم. طراحی و اجرای سیستم لوله
                    کشی مناسب.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">سرویس دوره‌ای پکیج</h4>
                  <p>
                    سرویس دوره‌ای پکیج شامل شستشوی مبدل، تمیز کردن برنر، بررسی اتصالات و شیرآلات، تنظیم فشار آب و گاز و
                    بررسی سیستم ایمنی.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">تعمیر پکیج</h4>
                  <p>
                    تعمیر انواع پکیج و رفع عیوب و مشکلات آن شامل تعویض قطعات معیوب، رفع نشتی، تعمیر برد الکترونیکی و رفع
                    خطاهای سیستم.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب رادیاتور</h4>
                  <p>
                    نصب انواع رادیاتور شامل رادیاتور آلومینیومی، پنلی و قرنیزی با رعایت اصول فنی و استانداردهای لازم.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب گرمایش از کف</h4>
                  <p>
                    طراحی و اجرای سیستم گرمایش از کف با استفاده از لوله‌های مرغوب و استاندارد. اتصال صحیح به پکیج و تنظیم
                    دمای مناسب.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">مزایای نصب و تعمیر پکیج توسط متخصص</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>افزایش طول عمر پکیج</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>کاهش مصرف انرژی و صرفه‌جویی در هزینه‌ها</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>کارکرد بهتر و بدون نقص پکیج</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>جلوگیری از خطرات احتمالی مانند نشت گاز</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>تضمین ایمنی و سلامت ساکنین ساختمان</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8">چرا بهروز کوشکی را انتخاب کنید؟</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>15 سال تجربه در زمینه نصب و تعمیر پکیج</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از قطعات اصلی و با کیفیت</span>
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
                <h3 className="text-2xl font-bold mb-4">نکات مهم در انتخاب پکیج</h3>
                <p>
                  انتخاب پکیج مناسب نقش مهمی در تأمین نیازهای گرمایشی ساختمان و کاهش هزینه‌های مصرف انرژی دارد. آقای
                  کوشکی با تجربه ارزشمند خود، می‌تواند شما را در انتخاب بهترین پکیج متناسب با نیاز و بودجه‌تان راهنمایی
                  کند. برخی از نکات مهم در انتخاب پکیج عبارتند از:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>ظرفیت پکیج متناسب با متراژ ساختمان</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>نوع پکیج (چگالشی، فن‌دار، معمولی)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>برند و کیفیت پکیج</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>میزان مصرف انرژی و رده انرژی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>خدمات پس از فروش و در دسترس بودن قطعات</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">خدمات پکیج و سیستم گرمایشی</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">نصب پکیج دیواری</li>
                  <li className="border-b pb-2">نصب پکیج زمینی</li>
                  <li className="border-b pb-2">سرویس دوره‌ای پکیج</li>
                  <li className="border-b pb-2">تعمیر پکیج</li>
                  <li className="border-b pb-2">نصب رادیاتور</li>
                  <li className="border-b pb-2">نصب گرمایش از کف</li>
                  <li>مشاوره در انتخاب پکیج مناسب</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
                <p className="mb-4">برای مشاوره رایگان و یا درخواست خدمات نصب و تعمیر پکیج با ما تماس بگیرید:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">تلفن:</span>
                    <span>۰۹۱۲۳۴۵۶۷۸۹</span>
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
                <h3 className="text-xl font-bold mb-4">برندهای معتبر پکیج</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">ایران رادیاتور</li>
                  <li className="border-b pb-2">بوتان</li>
                  <li className="border-b pb-2">آریستون</li>
                  <li className="border-b pb-2">بوش</li>
                  <li className="border-b pb-2">ایساتیس</li>
                  <li>سایر برندهای معتبر</li>
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
            <div className="section-badge">نمونه کارهای نصب و تعمیر پکیج</div>
            <h2 className="section-title">پروژه‌های اخیر نصب و تعمیر پکیج</h2>
            <p className="section-description">
              نگاهی به برخی از پروژه‌های اخیر نصب و تعمیر پکیج انجام شده توسط بهروز کوشکی بیندازید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Boiler+1"
              title="نصب پکیج دیواری"
              description="نصب پکیج دیواری ایران رادیاتور در یک آپارتمان در منطقه نیاوران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Boiler+2"
              title="تعمیر پکیج"
              description="تعمیر و رفع عیب پکیج بوتان در یک منزل مسکونی در منطقه سعادت آباد"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Boiler+3"
              title="نصب رادیاتور"
              description="نصب رادیاتور پنلی در یک واحد مسکونی در منطقه پاسداران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Boiler+4"
              title="سرویس پکیج"
              description="سرویس دوره‌ای پکیج آریستون در یک آپارتمان در منطقه ونک"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Boiler+5"
              title="نصب گرمایش از کف"
              description="اجرای سیستم گرمایش از کف در یک ویلا در لواسان"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Boiler+6"
              title="نصب پکیج زمینی"
              description="نصب پکیج زمینی و موتورخانه در یک مجتمع مسکونی در منطقه شهرک غرب"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">نیاز به نصب یا تعمیر پکیج دارید؟</h2>
              <p className="mt-2">با بهروز کوشکی تماس بگیرید. نصب و تعمیر تخصصی انواع پکیج با ضمانت کیفیت.</p>
            </div>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="tel:09123456789">تماس اضطراری: ۰۹۱۲۳۴۵۶۷۸۹</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

