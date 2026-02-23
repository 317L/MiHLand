export type Collection = 'services' | 'industries' | 'technologies' | 'case-studies';

export const collections: Record<Collection, string[]> = {
  services: [
    'custom-software-development',
    'devops-cloud-aws',
    'systems-data-integrations',
    'ai-ai-development',
    'cybersecurity',
  ],
  industries: [
    'telecommunications-ftth',
    'automotive-embedded',
    'finance-insurance',
    'healthcare-ehealth',
    'professional-services-saas',
  ],
  technologies: ['aws', 'azure', 'otc', 'atlassian'],
  'case-studies': [
    'digital-health-platform',
    'ehealth-interoperability',
    'fintech-aml-platform',
    'sap-programs',
  ],
};
