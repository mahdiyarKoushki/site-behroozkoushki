import { Card, CardContent } from "@/components/ui/card"

const TestimonialCard = ({ name, role, comment, rating }) => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6 mt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">{name.charAt(0)}</span>
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <p className="text-muted-foreground">{comment}</p>
        <div className="flex mt-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={i < rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={i < rating ? "text-yellow-500" : "text-gray-300"}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard

