export const landingData = {
  personal: {
    name: "Mykhailo",
    tagline: "Creative software engineer passionate about functional design.",
    location: "Poland",
    email: "misha_trunov@hotmail.com",
  },
  hero: {
    pronunciationLine1: "My name is pronounced as /mykhæɪlɒ/",
    pronunciationLine2: "Or simply Mike",
    photoMeta: "30 Apr 2021 · 13:33 · Odesa, UA",
    photo: {
      src: "/images/image.webp",
      alt: "Mykhailo",
      width: 2124,
      height: 2832,
    },
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/misha-trunov/",
  },
} as const;

export type LandingData = typeof landingData;