export default function sitemap() {
    const baseUrl = "https://behrooz.koushky.ir"
  

    const lastModified = new Date().toISOString()
  
  
    const routes = [
      {
        url: `${baseUrl}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: `${baseUrl}/services/plumbing`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/leak-detection`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/faucet-installation`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/moisture-removal`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/drain-cleaning`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ]
  
    return routes
  }
  
  