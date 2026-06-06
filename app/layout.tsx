import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreeramcommunications.com"),

  title: {
    default: "Shreeram Communications",
    template: "%s | Shreeram Communications",
  },

  description:
    "Shreeram Communications is a full-service advertising agency delivering Digital Marketing, New Digital Platforms, OOH, DOOH, TV, Radio, Cinema, Print Media, Branding and Integrated Campaign Solutions across India.",

  keywords: [
    "Advertising Agency",
    "Digital Marketing Agency",
    "Media Planning",
    "Outdoor Advertising",
    "OOH Advertising",
    "DOOH Advertising",
    "TV Advertising",
    "Radio Advertising",
    "Cinema Advertising",
    "Print Advertising",
    "Brand Strategy",
    "Advertising Agency India",
    "Advertising Agency Indore",
    "Advertising Agency Bhopal",
    "Shreeram Communications",
  ],

  authors: [
    {
      name: "Shreeram Communications",
    },
  ],

  creator: "Shreeram Communications",

  openGraph: {
    title: "Shreeram Communications",
    description:
      "Integrated advertising, branding and media solutions across India since 2002.",
    url: "https://www.shreeramcommunications.com",
    siteName: "Shreeram Communications",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shreeram Communications",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shreeram Communications",
    description:
      "Integrated advertising, branding and media solutions across India.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AdvertisingAgency",

      name: "Shreeram Communications",

      url: "https://www.https://www.shreeramcommunications.com/",

      logo:
        "https://www.https://www.shreeramcommunications.com//logo/shreeram-logo.png",

      telephone: "+91-755-4231220",

      email: "contact@shreeramadvertising.com",

      areaServed: "India",

      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "Shreeram Tower, Z-7, Near Miracles Hospital, Zone-I, Maharana Pratap Nagar",
          addressLocality: "Bhopal",
          addressRegion: "Madhya Pradesh",
          postalCode: "462011",
          addressCountry: "IN",
        },

        {
          "@type": "PostalAddress",
          streetAddress:
            "317, AB Rd, Opposite Raghunath Prasad Petrol Pump, Vijay Nagar, Scheme 54 PU4",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          postalCode: "452010",
          addressCountry: "IN",
        },
      ],

      sameAs: [],
    }),
  }}
/>

  {children}
</body>
    </html>
  );
}