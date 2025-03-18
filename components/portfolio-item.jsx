import Image from "next/image"

const PortfolioItem = ({ imageSrc, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-200 mt-2">{description}</p>
      </div>
    </div>
  )
}

export default PortfolioItem

