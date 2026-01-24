export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SMOKIES Digital Smoke",
    "image": "https://smokies.it/logo.png",
    "description": "Il punto di riferimento per lo svapo in Liguria. 3 sedi: Voltri, Bolzaneto e Savona. Dispositivi, liquidi certificati e consulenza professionale.",
    "url": "https://smokies.it",
    "telephone": "+393123456789",
    "email": "info@smokies.it",
    "priceRange": "€€",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Via Roma 123",
        "addressLocality": "Genova",
        "addressRegion": "Liguria",
        "postalCode": "16158",
        "addressCountry": "IT"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Via Milano 45",
        "addressLocality": "Genova",
        "addressRegion": "Liguria",
        "postalCode": "16162",
        "addressCountry": "IT"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Corso Italia 78",
        "addressLocality": "Savona",
        "addressRegion": "Liguria",
        "postalCode": "17100",
        "addressCountry": "IT"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.4297,
      "longitude": 8.7658
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:30"
      }
    ],
    "sameAs": [
      "https://instagram.com/smokies",
      "https://facebook.com/smokies"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
