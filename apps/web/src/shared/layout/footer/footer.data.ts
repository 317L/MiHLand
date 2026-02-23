export type FooterLink = { href: string; label: string; external?: boolean };
export type FooterColumn = { title: string; links: FooterLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { href: "/services/custom-software-development", label: "Custom software development" },
      { href: "/services/devops-cloud-aws", label: "DevOps & cloud (AWS)" },
      { href: "/services/systems-data-integrations", label: "Systems & data integrations" },
      { href: "/services/ai-ai-development", label: "AI & AI development" },
      { href: "/services/cybersecurity", label: "Cybersecurity" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries/telecommunications-ftth", label: "Telecommunications & FTTH" },
      { href: "/industries/automotive-embedded", label: "Automotive & embedded" },
      { href: "/industries/finance-insurance", label: "Finance & insurance" },
      { href: "/industries/healthcare-ehealth", label: "Healthcare & eHealth" },
      { href: "/industries/professional-services-saas", label: "Professional services & SaaS" },
    ],
  },
  {
    title: "Technologies",
    links: [
      { href: "/technologies/aws", label: "AWS" },
      { href: "/technologies/microsoft-azure", label: "Microsoft Azure" },
      { href: "/technologies/otc", label: "Open Telekom Cloud (OTC)" },
      { href: "/technologies/atlassian", label: "Atlassian" },
    ],
  },
  {
    title: "Case studies",
    links: [
      { href: "/case-studies/digital-health-platform", label: "Digital health platform" },
      { href: "/case-studies/ehealth-interoperability", label: "eHealth interoperability" },
      { href: "/case-studies/fintech-ml-platform", label: "FinTech / AI/ML platform" },
      { href: "/case-studies/sap-programs-transformation", label: "SAP programs transformation" },
    ],
  },
  {
    title: "About us",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export type FooterLocationBlock = {
  title: string;
  lines: string[];
};

export const footerLocations: FooterLocationBlock = {
  title: "Headquarters & Locations",
  lines: [
    "Sarajevo",
    "Bosnia and Herzegovina",
    "Maglajska 1, 71000 Sarajevo",
    "",
    "Freiburg",
    "Germany",
    "Gewerbestraße 11, D-79112 Freiburg",
    "",
    "TORI Limited (Business Partner)",
    "United Kingdom",
    "Regis House, 45 King William Street, London EC4R 9AN",
  ],
};

export const footerSocial: FooterLink[] = [
  { href: "https://www.linkedin.com", label: "LinkedIn", external: true },
  { href: "https://x.com", label: "X", external: true },
  { href: "https://www.facebook.com", label: "Facebook", external: true },
  { href: "https://www.instagram.com", label: "Instagram", external: true },
];

export const footerLegalLinks: FooterLink[] = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookies Policy" },
];

export const footerCta = {
  title: "Let’s talk about your next big project",
  leadLines: [
    "Tell us about your timeline, stack, and goals.",
    "A lead engineer will outline the fastest path to value.",
  ],
  note:
    "As needed, we can also advise on AWS architecture and licensing as the only authorized AWS services reseller in Bosnia and Herzegovina, working closely with TD SYNNEX.",
  button: { href: "/contact", label: "Contact us" },
};

export const footerMeta = {
  brand: "mih",
  newsletterText: "Join our newsletter and get notified about new resources and job openings.",
  translationNotice:
    "Translation Notice: Some content may have been translated using AI to help serve our global community. While all of our content is reviewed by humans, occasionally pre-reviewed content may be live. If you have any questions, please do not hesitate to reach out to Square Support in your preferred language.",
  languageLabel: "United Kingdom (English)",
};
