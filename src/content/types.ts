import type { SectionId } from "@/data/profile";

/**
 * Shape of every translatable string on the site.
 * Text wrapped in *asterisks* is rendered as emphasis.
 */
export type Content = {
  meta: { title: string; description: string };
  nav: {
    sections: Record<SectionId, string>;
    backToTop: string;
    menu: string;
    openMenu: string;
    switchLanguage: string;
  };
  command: {
    placeholder: string;
    noResults: string;
    groups: { navigate: string; actions: string; elsewhere: string; language: string };
    copyEmail: string;
    sendEmail: string;
    openResume: string;
    switchTo: string;
    copied: string;
    hints: string;
  };
  hero: {
    role: string;
    company: string;
    currently: string;
    at: string;
    buildPrefix: string;
    buildSuffix: string;
    rotating: string[];
    intro: string;
    talk: string;
    resume: string;
    scroll: string;
    portraitAlt: string;
    city: string;
    badgeFrom: string;
    badgeTo: string;
  };
  marquee: string[];
  about: {
    eyebrow: string;
    title: string;
    manifesto: string;
    story: { label: string; title: string; body: string }[];
    stats: { value: string; label: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    aside: string;
    at: string;
    jobs: { period: string; role: string; company: string; location: string; points: string[]; tags: string[] }[];
  };
  work: {
    eyebrow: string;
    title: string;
    aside: string;
    live: string;
    visit: string;
    homepageAlt: string;
    open: string;
    projects: {
      name: string;
      kind: string;
      url: string;
      image: string;
      tagline: string;
      description: string;
      features: string[];
      stack: string[];
    }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    aside: string;
    featured: string;
    learning: string;
    learningTitle: string;
    groups: { group: string; items: string[]; learning?: string[]; note?: string; featured?: boolean }[];
  };
  credentials: {
    education: string;
    certificates: string;
    values: string;
    degrees: { degree: string; school: string; period: string; note: string }[];
    certs: { name: string; issuer: string; year: string; url?: string }[];
    valueItems: { name: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    hello: string;
    copyEmail: string;
    resume: string;
    /** Contains a {time} token where the live clock is rendered. */
    clock: string;
  };
  footer: { credit: string; backToTop: string };
};
