import { ImageResponse } from "next/og"

 // Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "بهروز کوشکی - متخصص خدمات ساختمانی"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  // Font

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom, #3b82f6, #1d4ed8)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: "64px", marginBottom: "20px" }}>بهروز کوشکی</div>
      <div style={{ fontSize: "36px", marginBottom: "40px" }}>متخصص خدمات ساختمانی در تهران</div>
      <div style={{ fontSize: "24px", display: "flex", flexDirection: "row", gap: "20px" }}>
        <div>لوله کشی</div>
        <div>تشخیص ترکیدگی</div>
        <div>رفع نم</div>
        <div>لوله بازکنی</div>
      </div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    //   fonts: [
    //     {
    //       name: "Vazir",
    //       data:  vazirFont,
    //       style: "normal",
    //       weight: 700,
    //     },
    //   ],
    },
  )
}

