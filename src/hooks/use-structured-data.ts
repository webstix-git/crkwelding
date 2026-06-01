import { useEffect } from "react";

const SITE_URL = "https://crkwelding.com";

const useStructuredData = (data: Record<string, unknown> | Record<string, unknown>[]) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    script.id = "structured-data-" + Math.random().toString(36).slice(2, 9);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
};

export const useLocalBusinessSchema = () => {
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "CRK Welding",
    description:
      "AWS certified mobile welding and fabrication services in Fair Play, Missouri. Structural steel, pipe welding, heavy equipment repair, and custom fabrication within a 100-mile radius.",
    url: SITE_URL,
    telephone: "+14173071017",
    email: "crkwelding@gmail.com",
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "7",
      addressLocality: "Fair Play",
      addressRegion: "MO",
      postalCode: "65649",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.6267,
      longitude: -93.5688,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.6267,
        longitude: -93.5688,
      },
      geoRadius: "160934", // 100 miles in meters
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        description: "Emergency call-out only",
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Check",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Welding Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Structural Welding",
            description: "AWS D1.1 & D1.2 certified structural steel welding for commercial buildings, barns, and frames.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heavy Equipment Repair",
            description: "Mobile on-site welding repair for heavy machinery, construction vehicles, and truck/trailer in steel and aluminum.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pipe Welding",
            description: "API 1104 certified pipe welding for tie-ins, new construction, and line repairs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Fabrication",
            description: "Custom metal fabrication including farm gates, aluminum frames, marine repair, and aerospace components.",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/people/CRK-Welding/61557723335753/",
      "https://www.instagram.com/crk.welding/",
    ],
  });
};

export const useFAQSchema = (faqs: { q: string; a: string }[]) => {
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  });
};

export const useServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => {
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "CRK Welding",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.6267,
        longitude: -93.5688,
      },
      geoRadius: "160934",
    },
    serviceType: "Welding",
  });
};

export const useBreadcrumbSchema = (items: { name: string; url?: string }[]) => {
  const allItems = [{ name: "Home", url: "/" }, ...items];
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  });
};

export default useStructuredData;
