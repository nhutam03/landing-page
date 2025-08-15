export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maxius",
    "description": "Innovative solutions for the modern startup ecosystem",
    "url": "https://maxius.io",
    "logo": "https://maxius.io/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8900",
      "contactType": "Customer Service",
      "email": "hello@maxius.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/maxius",
      "https://linkedin.com/company/maxius",
      "https://instagram.com/maxius"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Startup solutions and technology consulting services"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}