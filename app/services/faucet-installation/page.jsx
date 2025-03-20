import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PortfolioItem from "@/components/portfolio-item"

export const metadata = {
  title: "نصب شیرآلات | بهروز کوشکی | متخصص نصب شیرآلات ساختمانی در تهران",
  description:
    "بهروز کوشکی متخصص نصب انواع شیرآلات ساختمانی با 15 سال سابقه در تهران. نصب شیرآلات، سینک، روشویی، توالت و سایر تجهیزات بهداشتی با بهترین کیفیت و قیمت مناسب.",
  keywords: ["بهروز کوشکی", "نصب شیرآلات", "نصب سینک", "نصب روشویی", "نصب توالت", "تعویض شیرآلات", "تهران"],
}

export default function FaucetInstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="نصب شیرآلات ساختمانی"
        description="نصب انواع شیرآلات، سینک، روشویی، توالت، وان و سایر تجهیزات بهداشتی با بهترین کیفیت و قیمت مناسب توسط بهروز کوشکی"
        imageSrc="/placeholder.svg?height=800&width=1600&text=Faucet+Installation"
        primaryButtonText="درخواست مشاوره رایگان"
        primaryButtonLink="/contact"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">خدمات نصب شیرآلات بهروز کوشکی</h2>

              <p>
                بهروز کوشکی با بیش از 15 سال تجربه در زمینه نصب شیرآلات ساختمانی، خدمات تخصصی و حرفه‌ای در این حوزه ارائه
                می‌دهد. ایشان با تسلط کامل بر انواع شیرآلات و تجهیزات بهداشتی، نصب و تعویض آن‌ها را با بالاترین کیفیت و
                دقت انجام می‌دهد.
              </p>

              <p>
                نصب صحیح شیرآلات و تجهیزات بهداشتی نقش مهمی در کارکرد درست و طول عمر آن‌ها دارد. آقای کوشکی با استفاده از
                ابزار مناسب و تکنیک‌های حرفه‌ای، نصب شیرآلات را به گونه‌ای انجام می‌دهد که از نشتی و مشکلات احتمالی در آینده
                جلوگیری شود.
              </p>

              <div className="my-8">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Faucet+Installation"
                  alt="نصب شیرآلات ساختمانی"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold mt-8">انواع خدمات نصب شیرآلات</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب شیرآلات حمام و دستشویی</h4>
                  <p>
                    نصب انواع شیرآلات حمام شامل شیر دوش، شیر توالت، شیر روشویی و شیر وان با ضمانت کیفیت و بدون نشتی.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب سینک آشپزخانه</h4>
                  <p>نصب انواع سینک آشپزخانه اعم از توکار، روکار و زیر کورین با دقت بالا و اتصالات استاندارد.</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب روشویی و کابینت روشویی</h4>
                  <p>نصب انواع روشویی پایه دار، دیواری و کابینت روشویی با رعایت اصول فنی و استانداردهای لازم.</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب توالت فرنگی و ایرانی</h4>
                  <p>نصب انواع توالت فرنگی و ایرانی با اتصالات استاندارد و آب‌بندی کامل برای جلوگیری از نشتی.</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نصب وان و جکوزی</h4>
                  <p>
                    نصب انواع وان و جکوزی با رعایت اصول فنی و استانداردهای لازم برای جلوگیری از نشتی و مشکلات احتمالی.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">تعویض شیرآلات قدیمی</h4>
                  <p>تعویض شیرآلات قدیمی و فرسوده با شیرآلات جدید و با کیفیت با کمترین آسیب به محیط اطراف.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">مزایای نصب شیرآلات توسط متخصص</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>جلوگیری از نشتی و هدر رفت آب</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>افزایش طول عمر شیرآلات</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>کارکرد بهتر و روان‌تر شیرآلات</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>جلوگیری از آسیب به شیرآلات در حین نصب</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>صرفه‌جویی در هزینه‌های تعمیر و نگهداری</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8">چرا بهروز کوشکی را انتخاب کنید؟</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>15 سال تجربه در زمینه نصب شیرآلات</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از ابزار مناسب و تخصصی</span>
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
                <h3 className="text-2xl font-bold mb-4">نکات مهم در انتخاب شیرآلات</h3>
                <p>
                  انتخاب شیرآلات مناسب نقش مهمی در زیبایی و کارایی فضای مورد نظر دارد. آقای کوشکی با تجربه ارزشمند خود،
                  می‌تواند شما را در انتخاب بهترین شیرآلات متناسب با نیاز و بودجه‌تان راهنمایی کند. برخی از نکات مهم در
                  انتخاب شیرآلات عبارتند از:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>کیفیت و جنس شیرآلات (برنج، استیل، کروم و...)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>طراحی و ظاهر متناسب با دکوراسیون</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>قابلیت‌های خاص (مثل شیرهای هوشمند، شیرهای لمسی و...)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>صرفه‌جویی در مصرف آب</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>سهولت استفاده و نگهداری</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">خدمات نصب شیرآلات</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">نصب شیرآلات حمام و دستشویی</li>
                  <li className="border-b pb-2">نصب سینک آشپزخانه</li>
                  <li className="border-b pb-2">نصب روشویی و کابینت روشویی</li>
                  <li className="border-b pb-2">نصب توالت فرنگی و ایرانی</li>
                  <li className="border-b pb-2">نصب وان و جکوزی</li>
                  <li className="border-b pb-2">تعویض شیرآلات قدیمی</li>
                  <li>مشاوره در انتخاب شیرآلات مناسب</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
                <p className="mb-4">برای مشاوره رایگان و یا درخواست خدمات نصب شیرآلات با ما تماس بگیرید:</p>
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
                <h3 className="text-xl font-bold mb-4">برندهای معتبر شیرآلات</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">شیرآلات اهرمی</li>
                  <li className="border-b pb-2">شیرآلات کلاسیک</li>
                  <li className="border-b pb-2">شیرآلات هوشمند</li>
                  <li className="border-b pb-2">شیرآلات توکار</li>
                  <li className="border-b pb-2">شیرآلات چشمی</li>
                  <li>شیرآلات پدالی</li>
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
            <div className="section-badge">نمونه کارهای نصب شیرآلات</div>
            <h2 className="section-title">پروژه‌های اخیر نصب شیرآلات</h2>
            <p className="section-description">
              نگاهی به برخی از پروژه‌های اخیر نصب شیرآلات انجام شده توسط بهروز کوشکی بیندازید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Faucet+1"
              title="نصب شیرآلات حمام"
              description="نصب کامل شیرآلات حمام شامل شیر دوش، شیر توالت و شیر روشویی در یک آپارتمان در منطقه نیاوران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Faucet+2"
              title="نصب سینک آشپزخانه"
              description="نصب سینک آشپزخانه و شیرآلات مربوطه در یک منزل مسکونی در منطقه سعادت آباد"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Faucet+3"
              title="نصب روشویی و کابینت"
              description="نصب روشویی، کابینت روشویی و شیرآلات مربوطه در یک واحد مسکونی در منطقه پاسداران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Faucet+4"
              title="نصب توالت فرنگی"
              description="نصب توالت فرنگی و شیرآلات مربوطه در یک آپارتمان در منطقه ونک"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Faucet+5"
              title="نصب وان و جکوزی"
              description="نصب وان، جکوزی و شیرآلات مربوطه در یک ویلا در لواسان"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Faucet+6"
              title="تعویض شیرآلات قدیمی"
              description="تعویض شیرآلات قدیمی با شیرآلات جدید و مدرن در یک منزل مسکونی در منطقه شهرک غرب"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">نیاز به نصب یا تعویض شیرآلات دارید؟</h2>
              <p className="mt-2">با بهروز کوشکی تماس بگیرید. نصب تخصصی انواع شیرآلات با ضمانت کیفیت.</p>
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

