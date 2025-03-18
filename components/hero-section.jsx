import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const HeroSection = ({
  title,
  description,
  imageSrc,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover brightness-50" priority />
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center text-white md:py-32">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-200">{description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button size="lg" variant="outline" className="h-12 px-8 bg-white/10 backdrop-blur-sm" asChild>
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

