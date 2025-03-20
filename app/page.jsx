import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import PortfolioItem from "@/components/portfolio-item"

export const metadata = {
  title: "بهروز کوشکی | متخصص خدمات ساختمانی در تهران | لوله کشی، کاشی کاری، تعمیرات",
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
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="بهروز کوشکی - متخصص خدمات ساختمانی"
        description="با بیش از ۱۵ سال تجربه در ارائه خدمات ساختمانی با کیفیت و حرفه‌ای شامل لوله کشی، کاشی کاری، رفع نم، تشخیص ترکیدگی لوله و تمامی خدمات ساختمانی در تهران"
        imageSrc="/serv.png"
        primaryButtonText="درخواست مشاوره رایگان"
        primaryButtonLink="/contact"
        secondaryButtonText="مشاهده خدمات"
        secondaryButtonLink="#services"
      />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="بهروز کوشکی - متخصص خدمات ساختمانی"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="section-badge">درباره بهروز کوشکی</div>
              <h2 className="section-title">متخصص حرفه‌ای خدمات ساختمانی</h2>
              <p className="text-muted-foreground">
                بهروز کوشکی با بیش از ۱۵ سال تجربه در صنعت خدمات ساختمانی، به ارائه خدمات با کیفیت و قابل اعتماد به
                مشتریان خود افتخار می‌کند. تخصص اصلی ایشان در زمینه لوله کشی، کاشی کاری، رفع نم، تشخیص ترکیدگی لوله و
                سایر خدمات ساختمانی می‌باشد. 
              </p>
              <p className="text-muted-foreground">
                آقای کوشکی با استفاده از جدیدترین تجهیزات و روش‌های نوین، خدمات خود را با بالاترین کیفیت و نازل‌ترین قیمت
                در تمامی نقاط تهران ارائه می‌دهد. ایشان با تکیه بر دانش فنی و تجربه ارزشمند خود، راه حل‌های مناسب و
                کارآمدی برای مشکلات ساختمانی مشتریان ارائه می‌کند.
              </p>
              <p className="text-muted-foreground">
                خدمات آقای کوشکی به صورت شبانه روزی و با ضمانت کیفیت ارائه می‌شود. ایشان با درک اهمیت زمان برای مشتریان،
                در کوتاه‌ترین زمان ممکن در محل حاضر شده و مشکل را برطرف می‌کند.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>۱۵ سال تجربه در خدمات ساختمانی</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از مواد و تجهیزات با کیفیت</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ضمانت کیفیت خدمات</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>قیمت‌گذاری شفاف و منصفانه</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>خدمات شبانه روزی در تمامی نقاط تهران</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">تماس با ما</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-badge">خدمات ما</div>
            <h2 className="section-title">خدمات ساختمانی حرفه‌ای</h2>
            <p className="section-description">
              بهروز کوشکی طیف گسترده‌ای از خدمات ساختمانی را برای مشتریان مسکونی و تجاری در تمامی نقاط تهران ارائه می‌دهد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="لوله کشی ساختمان"
              description="طراحی و اجرای سیستم‌های لوله کشی آب سرد و گرم، فاضلاب و گاز برای ساختمان‌های مسکونی و تجاری"
              icon="/lole1.png"
              link="/services/plumbing"
            />
            <ServiceCard
              title="تشخیص ترکیدگی لوله"
              description="تشخیص دقیق محل ترکیدگی لوله با استفاده از تجهیزات پیشرفته و رفع مشکل با کمترین تخریب"
               icon="/lole5.png"
              link="/services/leak-detection"
            />
            <ServiceCard
              title="نصب شیرآلات"
              description="نصب انواع شیرآلات، سینک، روشویی، توالت، وان و سایر تجهیزات بهداشتی با ضمانت کیفیت"
              icon="/shir2.png"
              link="/services/faucet-installation"
            />
            <ServiceCard
              title="نصب و تعمیر پکیج"
              description="نصب، سرویس و تعمیر انواع پکیج و سیستم‌های گرمایشی با قطعات اصلی و ضمانت"
              icon="/packg1.png"
              link="/services/boiler"
            />
            <ServiceCard
              title="کاشی کاری و نمای ساختمان"
              description="اجرای انواع کاشی کاری، سرامیک و نمای ساختمان با طرح‌های متنوع و کیفیت بالا"
              icon="/kashi1.png"
              link="/services/tiling"
            />
            <ServiceCard
              title="رفع نم و رطوبت"
              description="تشخیص علت نم و رطوبت و رفع اصولی آن با استفاده از روش‌های نوین و مواد با کیفیت"
                icon="/nam.png"
              link="/services/moisture-removal"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-badge">نمونه کارها</div>
            <h2 className="section-title">پروژه‌های اخیر ما</h2>
            <p className="section-description">
              نگاهی به برخی از پروژه‌های اخیر بهروز کوشکی بیندازید و کیفیت کار را ببینید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
       imageSrc="/lolekar6.png"
              title="لوله کشی ساختمان مسکونی"
              description="لوله کشی کامل آب و فاضلاب یک ساختمان مسکونی در منطقه سعادت آباد"
            />
            <PortfolioItem
              imageSrc="/lolekar3.png"
              title="تشخیص و رفع ترکیدگی لوله"
              description="تشخیص دقیق محل ترکیدگی لوله و تعمیر آن با کمترین تخریب در منطقه نیاوران"
            />
            <PortfolioItem
                   imageSrc="/lolekar2.png"
              
               title="بازسازی سرویس بهداشتی"
              description="بازسازی کامل سرویس بهداشتی شامل کاشی کاری و نصب شیرآلات در منطقه پاسداران"
            />
            <PortfolioItem
            imageSrc="/lolekar1.png"
                         
              title="نصب پکیج دیواری"
              description="نصب و راه اندازی پکیج دیواری و رادیاتور در یک واحد آپارتمانی در منطقه ونک"
            />
            <PortfolioItem
              imageSrc="/kashikar2.png"
              title="کاشی کاری آشپزخانه"
              description="اجرای کاشی کاری مدرن آشپزخانه در یک منزل مسکونی در منطقه جردن"
            />
            <PortfolioItem
              
              imageSrc="/nam.png"
              title="رفع نم دیوار"
              description="تشخیص علت نم دیوار و رفع اصولی آن در یک ساختمان اداری در منطقه میرداماد"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-badge">نظرات مشتریان</div>
            <h2 className="section-title">مشتریان ما چه می‌گویند</h2>
            <p className="section-description">نظرات برخی از مشتریان راضی ما درباره خدمات ساختمانی بهروز کوشکی</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="علی محمدی"
              role="صاحب منزل"
              comment="آقای کوشکی کار بسیار تمیز و حرفه‌ای انجام دادند. قیمت منصفانه و خدمات عالی. حتماً به دوستان و آشنایان معرفی خواهم کرد."
              rating={5}
            />
            <TestimonialCard
              name="سارا احمدی"
              role="مدیر ساختمان"
              comment="تیم آقای کوشکی بسیار حرفه‌ای و متعهد هستند. مشکل پیچیده لوله کشی ساختمان ما را در کوتاه‌ترین زمان ممکن حل کردند."
              rating={5}
            />
            <TestimonialCard
              name="محمد رضایی"
              role="صاحب رستوران"
              comment="خدمات لوله کشی عالی با قیمت مناسب. سرعت عمل و دقت در کار بسیار بالا بود. قطعاً برای کارهای آینده هم با ایشان کار خواهم کرد."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">نیاز به خدمات ساختمانی اضطراری دارید؟</h2>
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

