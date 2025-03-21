"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/services/plumbing", label: "لوله کشی" },
    { href: "/services/leak-detection", label: "تشخیص ترکیدگی" },
    { href: "/services/faucet-installation", label: "نصب شیرآلات" },
    { href: "/services/moisture-removal", label: "رفع نم" },
    { href: "/services/drain-cleaning", label: "لوله باز کنی" },
    { href: "/contact", label: "تماس با ما" },
  ]
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-primary">
            بهروز کوشکی
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* <Button asChild className="hidden md:flex">
            <Link href="tel:09123456789">
              <Phone className="ml-2 h-4 w-4" />
              تماس سریع
            </Link>
          </Button> */}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">منو</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary py-2 border-b transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* <Button asChild className="mt-4">
                  <Link href="tel:09123456789">
                    <Phone className="ml-2 h-4 w-4" />
                    تماس سریع
                  </Link>
                </Button> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header

