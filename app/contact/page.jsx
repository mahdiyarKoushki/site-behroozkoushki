import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "تماس با بهروز کوشکی | متخصص خدمات ساختمانی در تهران",
  description:
    "برای دریافت مشاوره رایگان و یا درخواست خدمات ساختمانی با بهروز کوشکی تماس بگیرید. خدمات شبانه روزی در تمامی نقاط تهران.",
  keywords: ["بهروز کوشکی", "تماس با بهروز کوشکی", "خدمات ساختمانی تهران", "لوله کشی", "تشخیص ترکیدگی", "کاشی کاری"],
}

export default function ContactPage() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-badge">تماس با ما</div>
          <h1 className="section-title">ارتباط با بهروز کوشکی</h1>
          <p className="section-description">
            برای دریافت مشاوره رایگان، درخواست خدمات یا هرگونه سوال با ما تماس بگیرید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                بهروز کوشکی با بیش از 15 سال تجربه در زمینه خدمات ساختمانی، آماده ارائه مشاوره و خدمات به شما عزیزان
                است. برای درخواست خدمات یا کسب اطلاعات بیشتر، از طریق راه‌های ارتباطی زیر با ما در تماس باشید.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">شماره تماس</h3>
                    <p className="text-muted-foreground">09128066569</p>
                    {/* <p className="text-muted-foreground">۰۲۱-۸۸۷۶۵۴۳۲</p> */}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">ایمیل</h3>
                    <p className="text-muted-foreground">info@behroozkooshki.ir</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">محدوده خدمات</h3>
                    <p className="text-muted-foreground">تهران، خدمات در تمامی مناطق</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">ساعات کاری</h3>
                    <p className="text-muted-foreground">خدمات شبانه روزی - ۲۴ ساعته</p>
                    <p className="text-muted-foreground">۷ روز هفته</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">مناطق تحت پوشش خدمات</h3>
                <p className="text-muted-foreground mb-4">
                  بهروز کوشکی خدمات ساختمانی خود را در تمامی مناطق تهران ارائه می‌دهد:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <span className="bg-muted p-2 rounded">پیروزی</span>
                  <span className="bg-muted p-2 rounded">نیاوران</span>
                  <span className="bg-muted p-2 rounded">فرمانیه</span>
                  <span className="bg-muted p-2 rounded">زعفرانیه</span>
                  <span className="bg-muted p-2 rounded">الهیه</span>
                  <span className="bg-muted p-2 rounded">جردن</span>
                  <span className="bg-muted p-2 rounded">ونک</span>
                  <span className="bg-muted p-2 rounded">سعادت آباد</span>
                  <span className="bg-muted p-2 rounded">شهرک غرب</span>
                  <span className="bg-muted p-2 rounded">پونک</span>
                  <span className="bg-muted p-2 rounded">تهرانپارس</span>
                  <span className="bg-muted p-2 rounded">پاسداران</span>
                  <span className="bg-muted p-2 rounded">میرداماد</span>
                  <span className="bg-muted p-2 rounded">شریعتی</span>
                  <span className="bg-muted p-2 rounded">ولیعصر</span>
                  <span className="bg-muted p-2 rounded">انقلاب</span>
                  <span className="bg-muted p-2 rounded">آزادی</span>
                  <span className="bg-muted p-2 rounded">یافت آباد</span>
                  <span className="bg-muted p-2 rounded">نازی آباد</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6">ارسال پیام</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    نام و نام خانوادگی
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    شماره تماس
                  </label>
                  <input
                    id="phone"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="شماره تماس خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  ایمیل
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  نوع خدمات
                </label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="plumbing">لوله کشی ساختمان</option>
                  <option value="leak">تشخیص ترکیدگی لوله</option>
                  <option value="faucet">نصب شیرآلات</option>
                  <option value="boiler">نصب و تعمیر پکیج</option>
                  <option value="tiling">کاشی کاری و نمای ساختمان</option>
                  <option value="moisture">رفع نم و رطوبت</option>
                  <option value="other">سایر خدمات</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium">
                  آدرس
                </label>
                <input
                  id="address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="آدرس خود را وارد کنید"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  پیام
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="پیام خود را بنویسید"
                />
              </div>
              <Button className="w-full">ارسال پیام</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

