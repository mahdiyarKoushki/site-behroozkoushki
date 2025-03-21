import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PortfolioItem from "@/components/portfolio-item"

export const metadata = {
  title: "رفع نم و رطوبت | بهروز کوشکی | متخصص رفع نم و رطوبت در تهران",
  description:
    "بهروز کوشکی متخصص رفع نم و رطوبت با 15 سال سابقه در تهران. تشخیص علت نم و رطوبت و رفع اصولی آن با استفاده از روش‌های نوین و مواد با کیفیت. خدمات شبانه روزی با ضمانت کیفیت.",
  keywords: ["بهروز کوشکی", "رفع نم", "رفع رطوبت", "نم زدگی دیوار", "رطوبت ساختمان", "عایق رطوبتی", "تهران"],
}

export default function MoistureRemovalPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="رفع نم و رطوبت ساختمان"
        description="تشخیص علت نم و رطوبت و رفع اصولی آن با استفاده از روش‌های نوین و مواد با کیفیت توسط بهروز کوشکی"
        imageSrc="/placeholder.svg?height=800&width=1600&text=Moisture+Removal"
        primaryButtonText="درخواست مشاوره رایگان"
        primaryButtonLink="/contact"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">خدمات رفع نم و رطوبت بهروز کوشکی</h2>

              <p>
                بهروز کوشکی با بیش از 15 سال تجربه در زمینه رفع نم و رطوبت ساختمان، خدمات تخصصی و حرفه‌ای در این حوزه
                ارائه می‌دهد. ایشان با تشخیص دقیق علت نم و رطوبت و استفاده از روش‌های نوین و مواد با کیفیت، مشکل را به
                صورت اصولی و ریشه‌ای برطرف می‌کند.
              </p>

              <p>
                نم و رطوبت یکی از مشکلات رایج در ساختمان‌ها است که علاوه بر ایجاد ظاهری نامناسب، می‌تواند باعث آسیب‌های جدی
                به سازه ساختمان، مشکلات تنفسی و آلرژی، رشد قارچ و کپک و کاهش عمر مفید ساختمان شود. آقای کوشکی با درک
                اهمیت این موضوع، خدمات خود را به صورت شبانه روزی و در تمامی نقاط تهران ارائه می‌دهد.
              </p>

              <div className="my-8">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Moisture+Removal"
                  alt="رفع نم و رطوبت ساختمان"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold mt-8">علل نم و رطوبت در ساختمان</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نشت لوله‌های آب و فاضلاب</h4>
                  <p>
                    نشت لوله‌های آب و فاضلاب یکی از رایج‌ترین علل نم و رطوبت در ساختمان است. این نشتی‌ها می‌توانند در
                    دیوارها، سقف یا کف ساختمان رخ دهند و باعث ایجاد نم و رطوبت شوند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">رطوبت صعودی از پی ساختمان</h4>
                  <p>
                    رطوبت صعودی زمانی رخ می‌دهد که آب از طریق خاصیت مویینگی از زمین به دیوارها و کف ساختمان نفوذ می‌کند.
                    این مشکل معمولاً در ساختمان‌های قدیمی که فاقد عایق رطوبتی مناسب هستند، بیشتر دیده می‌شود.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">نفوذ آب باران و برف</h4>
                  <p>
                    نفوذ آب باران و برف از طریق ترک‌ها و درزهای موجود در نما، سقف یا پنجره‌ها می‌تواند باعث ایجاد نم و
                    رطوبت در ساختمان شود. این مشکل معمولاً در فصول بارندگی بیشتر نمایان می‌شود.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">میعان و تعریق</h4>
                  <p>
                    میعان زمانی رخ می‌دهد که هوای گرم و مرطوب داخل ساختمان با سطوح سرد مانند دیوارهای خارجی یا پنجره‌ها
                    برخورد می‌کند و باعث تشکیل قطرات آب می‌شود. این مشکل معمولاً در فصل زمستان و در مناطق با اختلاف دمای
                    زیاد بین داخل و خارج ساختمان بیشتر دیده می‌شود.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">عایق‌کاری نامناسب</h4>
                  <p>
                    عایق‌کاری نامناسب یا فرسوده شدن عایق‌های رطوبتی می‌تواند باعث نفوذ آب و ایجاد نم و رطوبت در ساختمان
                    شود. این مشکل معمولاً در سرویس‌های بهداشتی، آشپزخانه و پشت بام بیشتر دیده می‌شود.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">روش‌های رفع نم و رطوبت</h3>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">تشخیص دقیق علت نم و رطوبت</h4>
                  <p>
                    اولین و مهم‌ترین قدم در رفع نم و رطوبت، تشخیص دقیق علت آن است. آقای کوشکی با استفاده از تجهیزات
                    پیشرفته و تجربه ارزشمند خود، علت اصلی نم و رطوبت را به دقت تشخیص می‌دهد.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">رفع نشتی لوله‌ها</h4>
                  <p>
                    در صورتی که علت نم و رطوبت، نشتی لوله‌های آب یا فاضلاب باشد، آقای کوشکی با استفاده از تجهیزات
                    پیشرفته، محل دقیق نشتی را تشخیص داده و با کمترین تخریب، نشتی را برطرف می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">عایق‌کاری رطوبتی</h4>
                  <p>
                    عایق‌کاری رطوبتی یکی از موثرترین روش‌های رفع نم و رطوبت است. آقای کوشکی با استفاده از مواد عایق با
                    کیفیت و روش‌های نوین، سطوح مختلف ساختمان را در برابر نفوذ آب و رطوبت عایق‌بندی می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">ایزولاسیون و آب‌بندی</h4>
                  <p>
                    ایزولاسیون و آب‌بندی سرویس‌های بهداشتی، آشپزخانه، پشت بام و سایر نقاط حساس ساختمان، از دیگر خدمات آقای
                    کوشکی در زمینه رفع نم و رطوبت است. این کار با استفاده از مواد ایزولاسیون با کیفیت و روش‌های استاندارد
                    انجام می‌شود.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">زهکشی و هدایت آب‌های سطحی</h4>
                  <p>
                    در مواردی که علت نم و رطوبت، تجمع آب‌های سطحی در اطراف ساختمان است، آقای کوشکی با طراحی و اجرای سیستم
                    زهکشی مناسب، آب‌های سطحی را از ساختمان دور می‌کند.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold text-lg">بازسازی و ترمیم سطوح آسیب دیده</h4>
                  <p>
                    پس از رفع علت نم و رطوبت، آقای کوشکی سطوح آسیب دیده را بازسازی و ترمیم می‌کند. این کار شامل گچ‌کاری،
                    رنگ‌آمیزی، کاشی‌کاری و سایر کارهای ترمیمی است.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">مزایای رفع اصولی نم و رطوبت</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>جلوگیری از آسیب به سازه ساختمان</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>افزایش عمر مفید ساختمان</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>بهبود کیفیت هوای داخل ساختمان</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>جلوگیری از رشد قارچ و کپک</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>کاهش هزینه‌های تعمیر و نگهداری</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>زیبایی و طراوت محیط زندگی</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8">چرا بهروز کوشکی را انتخاب کنید؟</h3>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>15 سال تجربه در زمینه رفع نم و رطوبت</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از روش‌های نوین و مواد با کیفیت</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>تشخیص دقیق علت نم و رطوبت</span>
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

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">خدمات رفع نم و رطوبت</h3>
                <ul className="space-y-2">
                  <li className="border-b pb-2">تشخیص علت نم و رطوبت</li>
                  <li className="border-b pb-2">رفع نشتی لوله‌ها</li>
                  <li className="border-b pb-2">عایق‌کاری رطوبتی</li>
                  <li className="border-b pb-2">ایزولاسیون و آب‌بندی</li>
                  <li className="border-b pb-2">زهکشی و هدایت آب‌های سطحی</li>
                  <li className="border-b pb-2">بازسازی و ترمیم سطوح آسیب دیده</li>
                  <li>مشاوره در زمینه جلوگیری از نم و رطوبت</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
                <p className="mb-4">برای مشاوره رایگان و یا درخواست خدمات رفع نم و رطوبت با ما تماس بگیرید:</p>
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
                <p className="mb-4">خدمات رفع نم و رطوبت در تمامی مناطق تهران:</p>
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
            <div className="section-badge">نمونه کارهای رفع نم و رطوبت</div>
            <h2 className="section-title">پروژه‌های اخیر رفع نم و رطوبت</h2>
            <p className="section-description">
              نگاهی به برخی از پروژه‌های اخیر رفع نم و رطوبت انجام شده توسط بهروز کوشکی بیندازید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Moisture+1"
              title="رفع نم دیوار"
              description="تشخیص و رفع نم دیوار ناشی از نشتی لوله در یک آپارتمان در منطقه نیاوران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Moisture+2"
              title="عایق‌کاری سرویس بهداشتی"
              description="عایق‌کاری و آب‌بندی کامل سرویس بهداشتی در یک منزل مسکونی در منطقه سعادت آباد"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Moisture+3"
              title="رفع رطوبت زیرزمین"
              description="تشخیص و رفع رطوبت صعودی در زیرزمین یک ساختمان در منطقه پاسداران"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Moisture+4"
              title="ایزولاسیون پشت بام"
              description="ایزولاسیون و آب‌بندی کامل پشت بام یک ساختمان مسکونی در منطقه ونک"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Moisture+5"
              title="رفع نم سقف"
              description="تشخیص و رفع نم سقف ناشی از نشتی لوله در یک آپارتمان در منطقه شهرک غرب"
            />
            <PortfolioItem
              imageSrc="/placeholder.svg?height=400&width=600&text=Moisture+6"
              title="زهکشی محوطه"
              description="طراحی و اجرای سیستم زهکشی محوطه یک ویلا در لواسان"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">مشکل نم و رطوبت دارید؟</h2>
              <p className="mt-2">با بهروز کوشکی تماس بگیرید. تشخیص دقیق علت نم و رطوبت و رفع اصولی آن.</p>
            </div>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="tel:09128066569۹">تماس اضطراری: 09128066569۹</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

