import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-bold mt-4">صفحه مورد نظر یافت نشد</h2>
      <p className="mt-4 text-muted-foreground max-w-md">
        متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </Button>
    </div>
  )
}

