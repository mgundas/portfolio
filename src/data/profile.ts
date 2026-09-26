export const profile = {
  name: "Mehmet Gündaş",
  firstName: "Mehmet",
  lastName: "Gündaş",
  initials: "MG",
  role: "GHL Platform Engineer",
  company: "Nevsah Institute",
  city: "Ankara",
  location: "Ankara, Türkiye",
  coordinates: "39.93° N, 32.86° E",
  timeZone: "Europe/Istanbul",
  image: "/profile.jpg",
  resume: "/resume.pdf",
  email: "mehmet@mehmetgundas.dev",
  intro:
    "Teacher turned engineer, based in Ankara. I help businesses sell, scale and stay sane with systems that quietly just work.",
  rotating: [
    "CRM platforms",
    "marketing automations",
    "full-stack web apps",
    "sales pipelines",
    "landing funnels",
  ],
};

export const socials = {
  github: "https://github.com/mgundas",
  linkedin: "https://www.linkedin.com/in/mehmet-gundas/",
  email: `mailto:${profile.email}`,
};

export const manifesto =
  "I studied how languages work: phonology, syntax, the hidden structure behind every sentence. Then I found a language with a *stricter grammar.* Now I use both to build *systems people actually understand.*";

export const stats = [
  { value: "2024", label: "Started shipping in tech" },
  { value: "4", label: "Roles, from classroom to CRM" },
  { value: "2", label: "Degrees from Anadolu University" },
  { value: "6", label: "Certificates, incl. Meta & LinkedIn" },
];

export const story = [
  {
    label: "Past",
    title: "Modding games, teaching English",
    body: "As a kid I tinkered with computers and built mods for the games I played. That's where the programming bug bit. Later I earned a degree in English Language Teaching, specialising in linguistics, and taught high school English in Eskişehir.",
  },
  {
    label: "Present",
    title: "Engineering growth platforms",
    body: "I'm a GHL Platform Engineer, building and maintaining CRM solutions, payment integrations, funnels and marketing automations. My goal is zero friction between a lead showing up and a deal closing.",
  },
  {
    label: "Future",
    title: "Building software that matters",
    body: "I want to keep growing as a developer, go deeper into full-stack engineering, contribute to open source, and create impactful software that makes a real difference in people's lives.",
  },
];

export const experience = [
  {
    period: "Oct 2025 — Now",
    role: "GHL Platform Engineer",
    company: "Nevsah Institute",
    location: "Remote",
    points: [
      "Lead administration of the GoHighLevel environment: CRM configuration, affiliate platform management and payment gateway integration.",
      "Design and deploy conversion-focused landing pages and sophisticated email marketing automations.",
      "Optimise sales pipelines and provide on-call technical support so the sales team never hits downtime while closing.",
      "Create social media graphics and imagery for campaigns and brand awareness.",
    ],
    tags: ["GoHighLevel", "CRM", "Payments", "Automation", "Funnels"],
  },
  {
    period: "Jan 2025 — Oct 2025",
    role: "Project Manager",
    company: "RTA Marketing Inc. & In30 Media",
    location: "Remote",
    points: [
      "Promoted to Project Manager. Rolled out EOS across the organisation to improve alignment, accountability and efficiency.",
      "Built ClickUp dashboards, moderated Level 10 meetings, introduced an SOP system and managed workload distribution.",
      "At In30 Media, wrote custom scraping scripts for lead generation and analysed the data to surface high-value prospects.",
      "Set up a new cold-email system on Instantly.ai to improve outreach, deliverability and engagement.",
    ],
    tags: ["EOS", "ClickUp", "Scraping", "Instantly.ai", "Leadership"],
  },
  {
    period: "Mar 2024 — Jan 2025",
    role: "Software Development & Support Specialist",
    company: "RTA Marketing Inc.",
    location: "Remote",
    points: [
      "Built end-to-end solutions with GoHighLevel, Mailgun, Twilio, Make and Google products for lead management and marketing automation.",
      "Customised workflows and automations that improved engagement and lead nurturing, and cut manual work.",
      "Tailored tools to client-specific needs and integrated them smoothly with existing systems.",
      "Provided ongoing support and training, and joined client meetings to drive adoption and conversion.",
    ],
    tags: ["Mailgun", "Twilio", "Make", "APIs", "Client success"],
  },
  {
    period: "Sep 2020 — Jun 2021",
    role: "English Teacher",
    company: "Prof. Orhan Oğuz Anadolu High School",
    location: "Eskişehir",
    points: [
      "Prepared curriculum, lesson plans and activities grounded in modern language-acquisition methods.",
      "Applied affective filter theory to lower barriers to learning like anxiety and low self-confidence.",
      "Built interactive lessons for varied learning styles, and worked with senior staff to evaluate progress.",
    ],
    tags: ["Curriculum design", "Communication", "Mentoring"],
  },
];

export const projects = [
  {
    name: "Omni Zen",
    kind: "Personal project",
    url: "https://omnizen.space",
    image: "/projects/omnizen.jpg",
    tagline: "A bilingual wellness platform for mindful living.",
    description:
      "A calm, reader-first home for research-backed writing on sleep, nutrition and self-mastery. Built as a complete publication with English and Turkish editions, and designed to feel like a quiet corner of the internet.",
    features: [
      "English & Turkish editions with localised routes",
      "Blog, news and Zen Radyo podcast sections",
      "Site-wide search and weekly newsletter sign-up",
      "Auto-generated social share images",
      "Cookie consent and SEO metadata per locale",
    ],
    stack: ["Next.js", "React", "Vercel", "i18n"],
  },
];

export const skills: { group: string; items: string[]; learning?: string[]; note?: string; featured?: boolean }[] = [
  {
    group: "AI & Workflows",
    featured: true,
    note: "I use AI as a force multiplier: building and maintaining websites with it, and chaining multiple AI tools together into workflows that turn an idea into a finished result.",
    items: [
      "AI-assisted development",
      "Building sites with AI",
      "Maintaining sites with AI",
      "Multi-tool AI workflows",
      "Prompt engineering",
      "AI content pipelines",
    ],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Responsive design"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Express", "RESTful APIs", "MongoDB", "MySQL", "Redis"],
  },
  {
    group: "Automation & CRM",
    items: ["GoHighLevel", "n8n", "Make", "Zapier", "Twilio", "Mailgun", "Instantly.ai", "WordPress", "Divi"],
  },
  {
    group: "Tools & Media",
    items: ["Git", "Docker", "Linux", "Postman", "VS Code", "Canva"],
    learning: ["Premiere Pro"],
  },
  {
    group: "Ways of working",
    items: ["EOS", "ClickUp", "Slack", "Trello", "SOPs", "Leadership"],
  },
];

export const marquee = [
  "GoHighLevel",
  "Next.js",
  "TypeScript",
  "AI Workflows",
  "Automation",
  "Node.js",
  "CRM Architecture",
  "React",
  "Twilio",
  "MongoDB",
  "Funnels",
  "Docker",
  "Make",
  "n8n",
];

export const education = [
  {
    degree: "Associate's Degree, Computer Programming",
    school: "Anadolu University",
    period: "2021 — 2023",
    note: "OOP, applied algorithm design, databases and web development.",
  },
  {
    degree: "Bachelor's Degree, English Language Teaching",
    school: "Anadolu University",
    period: "2017 — 2021",
    note: "Specialised in linguistics, phonology and syntax.",
  },
];

export const certificates: { name: string; issuer: string; year: string; url?: string }[] = [
  {
    name: "Learning Docker",
    issuer: "LinkedIn Learning",
    year: "2026",
    url: "https://www.linkedin.com/learning/certificates/0b77b784fc06c675d50e5e384d1cac5766d56ee1d3f33ca6fbe38552ebf69178",
  },
  { name: "Introduction to Back-End Development", issuer: "Meta · Coursera", year: "2024", url: "https://www.coursera.org/account/accomplishments/verify/LPK7V8WKFU6U" },
  { name: "Introduction to Front-End Development", issuer: "Meta · Coursera", year: "2024", url: "https://www.coursera.org/account/accomplishments/verify/NLLPSHJVUPQ8" },
  { name: "Programming with JavaScript", issuer: "Meta · Coursera", year: "2024", url: "https://www.coursera.org/account/accomplishments/verify/JH5WG6RRFJV3" },
  { name: "Version Control", issuer: "Meta · Coursera", year: "2024", url: "https://www.coursera.org/account/accomplishments/verify/Q398GU25PUYG" },
  { name: "Diction Course", issuer: "ESMEK Eskişehir", year: "2018" },
];

export const values = [
  {
    name: "Integrity",
    body: "Honesty and transparency in every interaction. Trust is the real infrastructure.",
  },
  {
    name: "Humility",
    body: "A growth mindset and a willingness to learn from anyone in the room.",
  },
  {
    name: "Compassion",
    body: "Every challenge approached with empathy, for colleagues and clients alike.",
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
