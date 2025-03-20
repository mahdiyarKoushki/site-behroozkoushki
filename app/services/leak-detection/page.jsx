import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PortfolioItem from "@/components/portfolio-item"

export const metadata = {
  title: "تشخیص ترکیدگی لوله | بهروز کوشکی | متخصص تشخیص نشتی در تهران",
  description:
    "بهروز کوشکی متخصص تشخیص ترکیدگی لوله با 15 سال سابقه در تهران. تشخیص دقیق محل نشتی با کمترین تخریب و هزینه. خدمات شبانه روزی با ضمانت کیفیت.",
  keywords: ["بهروز کوشکی", "تشخیص ترکیدگی لوله", "تشخیص نشتی", "رفع نشتی لوله", "تعمیر لوله", "نشت یابی", "تهران"],
}

export default function LeakDetectionPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="تشخیص ترکیدگی لوله"
        description="تشخیص دقیق محل ترکیدگی و نشتی لوله با استفاده از تجهیزات پیشرفته و رفع مشکل با کمترین تخریب توسط بهروز کوشکی"
       imageSrc="/lole5.png"
        primaryButtonText="درخواست مشاوره رایگان"
        primaryButtonLink="/contact"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">خدمات تشخیص ترکیدگی لوله بهروز کوشکی</h2>

              <p>
                بهروز کوشکی با بیش از 15 سال تجربه در زمینه تشخیص ترکیدگی لوله، خدمات تخصصی و حرفه‌ای در این حوزه ارائه
                می‌دهد. ایشان با استفاده از تجهیزات پیشرفته و روش‌های نوین، محل دقیق نشتی و ترکیدگی لوله را با کمترین
                تخریب تشخیص داده و در کوتاه‌ترین زمان ممکن مشکل را برطرف می‌کند.
              </p>

              <p>
                نشتی و ترکیدگی لوله یکی از مشکلات رایج در ساختمان‌ها است که در صورت عدم تشخیص و رفع به موقع، می‌تواند
                خسارات جبران‌ناپذیری به ساختمان وارد کند. آقای کوشکی با درک اهمیت این موضوع، خدمات خود را به صورت شبانه
                روزی و در تمامی نقاط تهران ارائه می‌دهد.
              </p>

              <div className="my-8">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Leak+Detection+Equipment"
                  alt="تجهیزات تشخیص ترکیدگی لوله"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold mt-8">روش‌های تشخیص ترکیدگی لوله</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">دستگاه نشت یاب صوتی</h4>
                  <p>
                    استفاده از دستگاه‌های پیشرفته نشت یاب صوتی که قادر به تشخیص صدای نشت آب از لوله‌ها هستند. این روش بدون
                    نیاز به تخریب، محل دقیق نشتی را مشخص می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">دستگاه ترموگرافی</h4>
                  <p>
                    استفاده از دوربین‌های حرارتی برای تشخیص تغییرات دما در دیوارها و کف که نشان‌دهنده نشتی آب است. این روش
                    بسیار دقیق بوده و بدون هیچگونه تخریب انجام می‌شود.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">دستگاه رطوبت سنج</h4>
                  <p>
                    اندازه‌گیری میزان رطوبت دیوارها و کف برای تشخیص نشتی آب. این روش برای تشخیص نشتی‌های پنهان که هنوز
                    علائم ظاهری ندارند، بسیار مؤثر است.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">دوربین بازرسی لوله</h4>
                  <p>
                    استفاده از دوربین‌های مخصوص برای بازرسی داخل لوله‌ها و تشخیص ترکیدگی، شکستگی یا گرفتگی. این روش برای
                    تشخیص مشکلات داخلی لوله‌ها بسیار کارآمد است.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">مراحل تشخیص و رفع ترکیدگی لوله</h3>

              <ol className="space-y-2 list-decimal list-inside">
                <li className="p-2">بازدید اولیه و بررسی علائم نشتی</li>
                <li className="p-2">استفاده از تجهیزات پیشرفته برای تشخیص دقیق محل نشتی</li>
                <li className="p-2">ارائه راهکار مناسب برای رفع مشکل با کمترین تخریب</li>
                <li className="p-2">تعمیر یا تعویض قسمت آسیب دیده لوله</li>
                <li className="p-2">تست نهایی و اطمینان از رفع کامل مشکل</li>
                <li className="p-2">بازسازی محل تخریب شده (در صورت نیاز)</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8">علائم ترکیدگی و نشتی لوله</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>افزایش غیرعادی قبض آب</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>صدای جریان آب در زمانی که شیرها بسته هستند</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>رطوبت و نم در دیوارها یا کف</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>کاهش فشار آب</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>بوی نامطبوع ناشی از رشد قارچ و کپک</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ترک خوردگی دیوارها یا کف</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">چرا بهروز کوشکی را انتخاب کنید؟</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>15 سال تجربه در زمینه تشخیص و رفع ترکیدگی لوله</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>استفاده از تجهیزات پیشرفته و روش‌های نوین</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>تشخیص دقیق محل نشتی با کمترین تخریب</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>قیمت مناسب و منصفانه</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>خدمات شبانه روزی در تمامی نقاط تهران</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>ضمانت کیفیت خدمات</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">خدمات تشخیص ترکیدگی</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">تشخیص نشتی لوله آب</li>
                  <li className="border-b pb-2">تشخیص نشتی لوله فاضلاب</li>
                  <li className="border-b pb-2">تشخیص نشتی لوله گاز</li>
                  <li className="border-b pb-2">رفع نشتی با کمترین تخریب</li>
                  <li className="border-b pb-2">تعمیر لوله‌های آسیب دیده</li>
                  <li className="border-b pb-2">تعویض لوله‌های فرسوده</li>
                  <li>بازسازی محل تخریب شده</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
                <p className="mb-4">برای مشاوره رایگان و یا درخواست خدمات تشخیص ترکیدگی لوله با ما تماس بگیرید:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">تلفن:</span>
                    <span>09128066569۹</span>
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
                <h3 className="text-xl font-bold mb-4">مناطق تحت پوشش</h3>
                <p className="mb-4">خدمات تشخیص ترکیدگی لوله در تمامی مناطق تهران:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>پیروزی</span>
                  <span>نیاوران</span>
                  <span>فرمانیه</span>
                  <span>زعفرانیه</span>
                  <span>الهیه</span>
                  <span>جردن</span>
                  <span>ونک</span>
                  <span>سعادت آباد</span>
                  <span>شهرک غرب</span>
                  <span>پونک</span>
                  <span>تهرانپارس</span>
                  <span>پاسداران</span>
                  <span>میرداماد</span>
                  <span>شریعتی</span>
                  <span>ولیعصر</span>
                  <span>انقلاب</span>
                  <span>آزادی</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-badge">نمونه کارهای تشخیص ترکیدگی</div>
            <h2 className="section-title">پروژه‌های اخیر تشخیص و رفع نشتی</h2>
            <p className="section-description">
              نگاهی به برخی از پروژه‌های اخیر تشخیص و رفع ترکیدگی لوله انجام شده توسط بهروز کوشکی بیندازید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Leak+1"
              title="تشخیص نشتی لوله آب"
              description="تشخیص دقیق محل نشتی لوله آب با استفاده از دستگاه نشت یاب صوتی در منطقه نیاوران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Leak+2"
              title="رفع ترکیدگی لوله"
              description="تشخیص و رفع ترکیدگی لوله آب با کمترین تخریب در یک آپارتمان در منطقه سعادت آباد"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Leak+3"
              title="تشخیص نشتی کف حمام"
              description="تشخیص نشتی آب از کف حمام با استفاده از دستگاه ترموگرافی در منطقه پاسداران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Leak+4"
              title="رفع نشتی لوله فاضلاب"
              description="تشخیص و رفع نشتی لوله فاضلاب با استفاده از دوربین بازرسی در منطقه ونک"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Leak+5"
              title="تشخیص نشتی دیوار"
              description="تشخیص نشتی آب از دیوار با استفاده از دستگاه رطوبت سنج در منطقه شهرک غرب"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Leak+6"
              title="رفع نشتی لوله زیر کف"
              description="تشخیص و رفع نشتی لوله زیر کف با کمترین تخریب در یک ویلا در لواسان"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">نشتی لوله دارید؟</h2>
              <p className="mt-2">با بهروز کوشکی تماس بگیرید. تشخیص دقیق محل نشتی با کمترین تخریب.</p>
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

