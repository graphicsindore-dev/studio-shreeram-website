export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  coverImage: string;
  description: string;

  metrics: string[];

  challenge: string;
  strategy: string;
  execution: string;
  results: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "phonepe-truecaller-rapido-campaign",

    title: "PhonePe + Truecaller + Rapido Campaign",

    category: "New Digital Platforms",

    industry: "Fintech",

    coverImage: "/case-studies/digital.jpg",

    description:
      "Multi-platform awareness campaign leveraging PhonePe, Truecaller and Rapido advertising inventory.",

    metrics: [
      "9.5M Impressions",
      "4.2M Reach",
      "+37% Recall",
      "18 Cities",
    ],

    challenge:
      "Create high-frequency brand visibility across mobile-first audiences.",

    strategy:
      "Combined PhonePe, Truecaller and Rapido inventory to maximize daily consumer touchpoints.",

    execution:
      "Platform-specific creatives, geo-targeting and audience segmentation.",

    results:
      "Achieved strong awareness growth and measurable campaign engagement.",
  },

  {
    slug: "outdoor-billboard-domination",

    title: "Large Format Billboard Domination",

    category: "Outdoor Media",

    industry: "Outdoor Advertising",

    coverImage: "/case-studies/outdoor.jpg",

    description:
      "Large-scale outdoor visibility campaign across key urban locations.",

    metrics: [
      "12M Reach",
      "18 Cities",
      "+220% Visibility",
    ],

    challenge:
      "Increase top-of-mind awareness in highly competitive markets.",

    strategy:
      "Deploy premium billboard inventory across high-traffic corridors.",

    execution:
      "Creative adaptation and city-wise media planning.",

    results:
      "Delivered substantial visibility uplift and audience recall.",
  },
];