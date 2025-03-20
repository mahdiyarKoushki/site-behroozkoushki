import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Image style={{borderRadius:"50%" , aspectRatio:"1/1"}} src={icon || "/placeholder.svg"} alt={title} width={100} height={100} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" asChild className="mt-auto">
          <Link href={link}>اطلاعات بیشتر</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default ServiceCard

