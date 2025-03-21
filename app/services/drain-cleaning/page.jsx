import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PortfolioItem from "@/components/portfolio-item"
import JsonLd from "@/components/json-ld"

export const metadata = {
  title: "لوله بازکنی | بهروز کوشکی | متخصص لوله بازکنی در تهران",
  description:
    "بهروز کوشکی متخصص لوله بازکنی با 15 سال سابقه در تهران. رفع گرفتگی انواع لوله و فاضلاب با استفاده از تجهیزات پیشرفته و روش‌های نوین. خدمات شبانه روزی با ضمانت کیفیت.",
  keywords: ["بهروز کوشکی", "لوله بازکنی", "رفع گرفتگی لوله", "تخلیه چاه", "لایروبی فاضلاب", "گرفتگی سینک", "تهران"],
  alternates: {
    canonical: "https://behrooz.koushky.ir/services/drain-cleaning",
  },
}

export default function DrainCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "لوله بازکنی",
    serviceType: "لوله بازکنی و رفع گرفتگی",
    provider: {
      "@type": "LocalBusiness",
      name: "بهروز کوشکی - خدمات ساختمانی",
      image: "https://behrooz.koushky.ir/logo.png",
      url: "https://behrooz.koushky.ir",
      telephone: "09128066569",
      priceRange: "$$",
    },
    areaServed: {
      "@type": "City",
      name: "تهران",
    },
    description:
      "بهروز کوشکی متخصص لوله بازکنی با 15 سال سابقه در تهران. رفع گرفتگی انواع لوله و فاضلاب با استفاده از تجهیزات پیشرفته و روش‌های نوین. خدمات شبانه روزی با ضمانت کیفیت.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "IRR",
      },
    },
  }

  return (
    <>
     <JsonLd data={jsonLd} />
      {/* Hero Section */}
      <HeroSection
        title="خدمات لوله بازکنی"
        description="رفع گرفتگی انواع لوله و فاضلاب با استفاده از تجهیزات پیشرفته و روش‌های نوین توسط بهروز کوشکی"
        imageSrc="/placeholder.svg?height=800&width=1600&text=Drain+Cleaning"
        primaryButtonText="درخواست مشاوره رایگان"
        primaryButtonLink="/contact"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">خدمات لوله بازکنی بهروز کوشکی</h2>

              <p>
                بهروز کوشکی با بیش از 15 سال تجربه در زمینه لوله بازکنی، خدمات تخصصی و حرفه‌ای در این حوزه ارائه می‌دهد.
                ایشان با استفاده از تجهیزات پیشرفته و روش‌های نوین، گرفتگی انواع لوله و فاضلاب را در کوتاه‌ترین زمان ممکن
                و با بالاترین کیفیت برطرف می‌کند.
              </p>

              <p>
                گرفتگی لوله و فاضلاب یکی از مشکلات رایج در ساختمان‌ها است که می‌تواند باعث ایجاد مشکلات بهداشتی، بوی
                نامطبوع، نشت آب و حتی آسیب به ساختمان شود. آقای کوشکی با درک اهمیت این موضوع، خدمات خود را به صورت شبانه
                روزی و در تمامی نقاط تهران ارائه می‌دهد.
              </p>

              <div className="my-8">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Drain+Cleaning"
                  alt="لوله بازکنی"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold mt-8">انواع خدمات لوله بازکنی</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">رفع گرفتگی سینک آشپزخانه</h4>
                  <p>
                    سینک آشپزخانه یکی از نقاطی است که به دلیل ورود چربی، مواد غذایی و سایر مواد، معمولاً دچار گرفتگی
                    می‌شود. آقای کوشکی با استفاده از روش‌های مناسب و تجهیزات پیشرفته، گرفتگی سینک آشپزخانه را به سرعت و به
                    صورت اصولی برطرف می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">رفع گرفتگی سرویس بهداشتی</h4>
                  <p>
                    گرفتگی توالت، روشویی و کفشور سرویس بهداشتی از دیگر مشکلات رایج در ساختمان‌ها است. آقای کوشکی با
                    استفاده از تجهیزات مخصوص و روش‌های استاندارد، این گرفتگی‌ها را به سرعت و بدون آسیب به لوله‌ها برطرف
                    می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">رفع گرفتگی لوله‌های فاضلاب</h4>
                  <p>
                    گرفتگی لوله‌های فاضلاب می‌تواند باعث پس زدن فاضلاب، بوی نامطبوع و مشکلات بهداشتی شود. آقای کوشکی با
                    استفاده از فنر مخصوص و دستگاه‌های پیشرفته، گرفتگی لوله‌های فاضلاب را برطرف کرده و جریان فاضلاب را به
                    حالت عادی برمی‌گرداند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">تخلیه چاه و لایروبی</h4>
                  <p>
                    تخلیه چاه و لایروبی فاضلاب از دیگر خدمات آقای کوشکی است. ایشان با استفاده از تجهیزات مخصوص، چاه‌های
                    پر شده را تخلیه کرده و لایروبی فاضلاب را انجام می‌دهد تا از گرفتگی‌های بعدی جلوگیری شود.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">رفع بوی بد فاضلاب</h4>
                  <p>
                    بوی بد فاضلاب می‌تواند ناشی از گرفتگی، نشت یا مشکلات دیگر در سیستم فاضلاب باشد. آقای کوشکی با تشخیص
                    دقیق علت بوی بد، آن را به صورت اصولی برطرف می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">بازرسی لوله با دوربین</h4>
                  <p>
                    در مواردی که تش��یص دقیق محل گرفتگی یا مشکل لوله دشوار است، آقای کوشکی با استفاده از دوربین مخصوص،
                    داخل لوله را بازرسی کرده و محل دقیق مشکل را تشخیص می‌دهد.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">روش‌های لوله بازکنی</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">استفاده از فنر مخصوص</h4>
                  <p>
                    فنر مخصوص لوله بازکنی یکی از رایج‌ترین و موثرترین ابزارها برای رفع گرفتگی لوله‌ها است. آقای کوشکی با
                    استفاده از فنرهای مختلف با طول و قطر متناسب با نوع لوله، گرفتگی را برطرف می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">استفاده از دستگاه تراکم هوا</h4>
                  <p>
                    دستگاه تراکم هوا با ایجاد فشار هوای زیاد، باعث باز شدن گرفتگی لوله می‌شود. این روش برای گرفتگی‌های سبک
                    و متوسط بسیار موثر است.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">استفاده از مواد شیمیایی</h4>
                  <p>
                    در برخی موارد، استفاده از مواد شیمیایی مخصوص لوله بازکنی می‌تواند به رفع گرفتگی کمک کند. آقای کوشکی
                    با توجه به نوع گرفتگی و جنس لوله، از مواد مناسب استفاده می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">استفاده از دستگاه واترجت</h4>
                  <p>
                    دستگاه واترجت با ایجاد فشار آب زیاد، باعث شستشوی کامل لوله و رفع گرفتگی می‌شود. این روش برای لایروبی
                    و رفع گرفتگی‌های سخت بسیار موثر است.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">علل گرفتگی لوله‌ها</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ورود چربی و مواد غذایی به سینک آشپزخانه</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ورود مو و مواد بهداشتی به لوله‌های سرویس بهداشتی</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ورود اشیاء خارجی به لوله‌ها</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>رسوب املاح آب در لوله‌ها</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ریشه درختان در لوله‌های فاضلاب</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>فرسودگی و شکستگی لوله‌ها</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8">چرا بهروز کوشکی را انتخاب کنید؟</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>15 سال تجربه در زمینه لوله بازکنی</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از تجهیزات پیشرفته و روش‌های نوین</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>رفع گرفتگی بدون آسیب به لوله‌ها</span>
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

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">راهکارهای پیشگیری از گرفتگی لوله‌ها</h3>
                <p>
                  پیشگیری از گرفتگی لوله‌ها بهتر از درمان آن است. آقای کوشکی توصیه‌های زیر را برای جلوگیری از گرفتگی
                  لوله‌ها ارائه می‌دهد:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>از ریختن چربی و مواد غذایی در سینک آشپزخانه خودداری کنید</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>از توری مخصوص برای جلوگیری از ورود مو و اشیاء به لوله‌ها استفاده کنید</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>از ریختن دستمال کاغذی، دستمال مرطوب و سایر اشیاء در توالت خودداری کنید</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>به صورت دوره‌ای از مواد لوله بازکن خانگی استفاده کنید</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>در صورت مشاهده کندی در تخلیه آب، سریعاً اقدام کنید</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">خدمات لوله بازکنی</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">رفع گرفتگی سینک آشپزخانه</li>
                  <li className="border-b pb-2">رفع گرفتگی سرویس بهداشتی</li>
                  <li className="border-b pb-2">رفع گرفتگی لوله‌های فاضلاب</li>
                  <li className="border-b pb-2">تخلیه چاه و لایروبی</li>
                  <li className="border-b pb-2">رفع بوی بد فاضلاب</li>
                  <li className="border-b pb-2">بازرسی لوله با دوربین</li>
                  <li>مشاوره در زمینه پیشگیری از گرفتگی لوله‌ها</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
                <p className="mb-4">برای مشاوره رایگان و یا درخواست خدمات لوله بازکنی با ما تماس بگیرید:</p>
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
                <h3 className="text-xl font-bold mb-4">مناطق تحت پوشش</h3>
                <p className="mb-4">خدمات لوله بازکنی در تمامی مناطق تهران:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
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
            <div className="section-badge">نمونه کارهای لوله بازکنی</div>
            <h2 className="section-title">پروژه‌های اخیر لوله بازکنی</h2>
            <p className="section-description">
              نگاهی به برخی از پروژه‌های اخیر لوله بازکنی انجام شده توسط بهروز کوشکی بیندازید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Drain+1"
              title="رفع گرفتگی سینک آشپزخانه"
              description="رفع گرفتگی سینک آشپزخانه با استفاده از فنر مخصوص در یک آپارتمان در منطقه نیاوران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Drain+2"
              title="رفع گرفتگی توالت"
              description="رفع گرفتگی توالت با استفاده از دستگاه تراکم هوا در یک منزل مسکونی در منطقه سعادت آباد"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Drain+3"
              title="لایروبی فاضلاب"
              description="لایروبی کامل سیستم فاضلاب یک ساختمان مسکونی در منطقه پاسداران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Drain+4"
              title="رفع گرفتگی کفشور"
              description="رفع گرفتگی کفشور حمام با استفاده از فنر مخصوص در یک آپارتمان در منطقه ونک"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Drain+5"
              title="تخلیه چاه"
              description="تخلیه چاه یک ساختمان مسکونی در منطقه شهرک غرب"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Drain+6"
              title="بازرسی لوله با دوربین"
              description="بازرسی لوله با دوربین و تشخیص محل دقیق گرفتگی در یک ویلا در لواسان"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">گرفتگی لوله دارید؟</h2>
              <p className="mt-2">با بهروز کوشکی تماس بگیرید. رفع انواع گرفتگی لوله و فاضلاب در کوتاه‌ترین زمان ممکن.</p>
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

