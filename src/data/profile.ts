export type ProfileLink = {
  label: string;
  href: string;
};

export type ImpactMetric = {
  value: string;
  label: string;
  description: string;
};

export type FeaturedWork = {
  name: string;
  kicker: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type ExperienceRole = {
  title: string;
  period: string;
  highlights: string[];
};

export type Experience = {
  company: string;
  location: string;
  roles: ExperienceRole[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
};

export type PortfolioProfile = {
  personal: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    links: ProfileLink[];
  };
  hero: {
    headline: string;
    summary: string;
    focusAreas: string[];
  };
  metrics: ImpactMetric[];
  featuredWork: FeaturedWork[];
  experience: Experience[];
  skills: SkillGroup[];
  education: Education;
};

export const portfolioProfile: PortfolioProfile = {
  personal: {
    name: 'Nagendra Hegde',
    role: 'Principal Member of Technical Staff',
    location: 'Bengaluru, Karnataka',
    email: 'nagendrahegde4sdmcet@gmail.com',
    phone: '+91 8553856116',
    links: [
      {
        label: 'Email',
        href: 'mailto:nagendrahegde4sdmcet@gmail.com',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/nagendra-hegde',
      },
      {
        label: 'Portfolio',
        href: 'https://nagendrahegde.github.io',
      },
    ],
  },
  hero: {
    headline: 'Building reliable cloud systems and AI-assisted operations at OCI Compute.',
    summary:
      'Principal Software Engineer with 10+ years of experience in distributed systems and cloud infrastructure, currently leading critical OCI Compute initiatives across service reliability, operational efficiency, AI infrastructure, and modern administration systems.',
    focusAreas: [
      'AI infrastructure operations',
      'Distributed systems reliability',
      'Developer productivity with LLM workflows',
      'Cloud administration modernization',
    ],
  },
  metrics: [
    {
      value: '10+',
      label: 'Years of engineering experience',
      description: 'Across Oracle Cloud, Autodesk, SAP Labs, distributed systems, and cloud platforms.',
    },
    {
      value: '40%',
      label: 'Reduction in stuck instances',
      description:
        'Designed and led Fleet Consistency Daemon work for OCI Compute VM reconciliation.',
    },
    {
      value: '10%',
      label: 'MTTR reduction',
      description:
        'Modernized Compute Admin and Imaging Admin into C4PO to reduce operator context switching.',
    },
    {
      value: '80%+',
      label: 'Unit test coverage target',
      description:
        'Drove AI-assisted engineering adoption with Oracle Code Assist and Cline for new hires.',
    },
  ],
  featuredWork: [
    {
      name: 'Vuffi',
      kicker: 'OCI Compute AI Copilot',
      summary:
        "Co-defined the vision for OCI Compute's AI copilot for diagnostics and incident triage, led end-to-end Vuffi V1 delivery, and now help drive V2 through technical unblocking and incremental value planning with leadership.",
      highlights: [
        'Defined a practical AI-assisted incident triage experience for OCI Compute operations.',
        'Led delivery from vision to V1 while keeping leadership aligned on incremental value.',
        'Continue to unblock core technical challenges for V2.',
      ],
      tags: ['AI copilot', 'Incident triage', 'OCI Compute', 'Leadership'],
    },
    {
      name: 'GB200 Operations Framework',
      kicker: 'GPU AI Infrastructure',
      summary:
        "Authored the low-level design and co-developed a Java backend framework that maps APIs to nvos commands, executes them on target Nvidia GB200 devices, and returns real-time device output.",
      highlights: [
        'Mapped operational APIs to direct device command execution.',
        'Led critical operational API implementation and corresponding UI views.',
        'Delivered essential capabilities for GPU AI infrastructure operations.',
      ],
      tags: ['GB200', 'Java', 'GPU infrastructure', 'Operational APIs'],
    },
    {
      name: 'C4PO Modernization',
      kicker: 'Next-gen Admin Portal',
      summary:
        'Planned, led, and delivered C4PO enhancements while collaborating with support teams for $1B+ strategic accounts to improve large scale event and customer incident handling.',
      highlights: [
        'Moved legacy admin workflows into a React-based internal administration platform.',
        'Integrated compute administration with telemetry, Jira, and Lumberjack logging.',
        'Improved cross-service troubleshooting through a single pane of glass.',
      ],
      tags: ['React', 'Telemetry', 'Jira', 'Operational excellence'],
    },
  ],
  experience: [
    {
      company: 'Oracle India Pvt Ltd (OCI)',
      location: 'Bengaluru, Karnataka',
      roles: [
        {
          title: 'Principal Member of Technical Staff',
          period: 'October 2025 - Present',
          highlights: [
            "Co-defined the vision for Vuffi, OCI Compute's AI copilot for diagnostics and incident triage, led V1 delivery, and now help drive V2 planning and execution.",
            "Authored the low-level design and co-developed a Java framework that maps APIs to nvos commands for Nvidia GB200 devices and returns real-time output.",
            'Led critical operational APIs and corresponding UI views for GPU AI infrastructure operations.',
            'Delivered C4PO platform enhancements for operational excellence across large scale events and customer incidents for $1B+ strategic accounts.',
            'Guided new hires to use Oracle Code Assist and Cline to increase unit test coverage to 80%+.',
          ],
        },
        {
          title: 'Senior Software Development Engineer',
          period: 'January 2022 - October 2025',
          highlights: [
            'Designed and led Fleet Consistency Daemon, a reconciliation engine that detects and repairs VM instances stuck in transitional states, reducing the top customer issue by 40%.',
            'Led the IDC development team and collaborated with senior US architects on a high-visibility OCI Compute reliability project.',
            'Planned, designed, and executed migration of Compute Admin and Imaging Admin into C4PO with centralized telemetry, Jira, and Lumberjack logging.',
            'Reduced overall Mean Time to Resolve by 10% by streamlining cross-service troubleshooting.',
            'Attained Senior Key Interviewer status, conducting 40+ BarTender and 30+ technical loop interviews while mentoring engineering teams.',
          ],
        },
      ],
    },
    {
      company: 'Autodesk India Pvt Ltd',
      location: 'Bengaluru, Karnataka',
      roles: [
        {
          title: 'Senior Software Engineer',
          period: 'February 2021 - November 2021',
          highlights: [
            'Led the IDC team and collaborated globally on Storebox, a mission-critical platform for storing and distributing terabyte-scale software binaries.',
            "Supported Autodesk's CAD, graphics, and vision product ecosystem through reliable global binary distribution.",
          ],
        },
      ],
    },
    {
      company: 'SAP Labs India',
      location: 'Bengaluru, Karnataka',
      roles: [
        {
          title: 'Software Development Engineer',
          period: 'August 2018 - February 2021',
          highlights: [
            'Contributed to SAP Cloud Platform Integration as part of the Artifact Lifecycle Management team.',
            'Built lifecycle operations and high-availability reconciliation features for customer integration artifacts.',
            'Engineered core features for re-architecting SAP Cloud Platform Integration from VMs to a multi-cloud containerized environment across AWS, Azure, and AliCloud orchestrated by Cloud Foundry.',
          ],
        },
      ],
    },
    {
      company: 'Oracle India Pvt Ltd',
      location: 'Bengaluru, Karnataka',
      roles: [
        {
          title: 'Member of Technical Staff',
          period: 'July 2015 - March 2018',
          highlights: [
            'Developed features for Oracle Cloud Classic Load Balancer as a Service, gaining hands-on experience building scalable and reliable cloud infrastructure.',
          ],
        },
      ],
    },
  ],
  skills: [
    {
      category: 'Leadership & Strategy',
      items: [
        'Technical roadmap planning',
        'Cross-functional leadership',
        'Hiring and bar raising',
        'Operational excellence',
        'Stakeholder management',
      ],
    },
    {
      category: 'AI & Developer Productivity',
      items: [
        'AI-assisted engineering',
        'Cline',
        'Oracle Code Assist',
        'Model Context Protocol servers',
        'LLM-integrated workflows',
        'Automated unit test generation',
      ],
    },
    {
      category: 'Distributed Systems & Cloud',
      items: [
        'Oracle Cloud Infrastructure',
        'AWS',
        'Microservices architecture',
        'Event-driven architecture',
        'Kafka',
        'Cloud Foundry',
        'Docker',
      ],
    },
    {
      category: 'Languages, DBs & Observability',
      items: [
        'Java',
        'TypeScript',
        'JavaScript',
        'React.js',
        'SQL',
        'Oracle DB',
        'PostgreSQL',
        'NoSQL',
        'Kibana',
        'Lumberjack',
      ],
    },
  ],
  education: {
    degree: 'B.E, Computer Science',
    institution: 'SDM College of Engineering and Technology (VTU)',
    period: 'August 2011 - May 2015',
    gpa: '9.27',
  },
};
