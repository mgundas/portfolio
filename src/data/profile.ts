/** Language-independent facts. Everything translatable lives in src/content. */
export const profile = {
  name: "Mehmet Gündaş",
  firstName: "Mehmet",
  lastName: "Gündaş",
  initials: "MG",
  coordinates: "39.93° N, 32.86° E",
  timeZone: "Europe/Istanbul",
  image: "/profile.jpg",
  resume: "/resume.pdf",
  email: "mehmet@mehmetgundas.dev",
};

export const socials = {
  github: "https://github.com/mgundas",
  linkedin: "https://www.linkedin.com/in/mehmet-gundas/",
  email: `mailto:${profile.email}`,
};

export const sectionIds = ["about", "experience", "work", "skills", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];

export const certificateLinks = {
  docker:
    "https://www.linkedin.com/learning/certificates/0b77b784fc06c675d50e5e384d1cac5766d56ee1d3f33ca6fbe38552ebf69178",
  backend: "https://www.coursera.org/account/accomplishments/verify/LPK7V8WKFU6U",
  frontend: "https://www.coursera.org/account/accomplishments/verify/NLLPSHJVUPQ8",
  javascript: "https://www.coursera.org/account/accomplishments/verify/JH5WG6RRFJV3",
  versionControl: "https://www.coursera.org/account/accomplishments/verify/Q398GU25PUYG",
};
