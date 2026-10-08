import type { ServiceDetail, ServiceSlug } from '@/types'

export const services: ServiceDetail[] = [
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    shortName: 'Cybersecurity',
    navLabel: 'Cybersecurity',
    href: '/services/cybersecurity',
    icon: 'Shield',
    summary:
      'Strengthen defenses, understand technology risk, and improve how your organization prepares for evolving threats.',
    overview:
      'Security challenges are rarely only technical. NRS helps leadership teams assess risk, improve controls, and build practical resilience without overstating what any single control can guarantee.',
    headline: 'Protect what your business cannot afford to lose',
    description:
      'Build stronger defenses, understand technology risk, and improve your organization\'s ability to respond to evolving threats.',
    challenges: [
      'Unclear visibility into technology and security risk exposure',
      'Policies and controls that lag behind how the business actually operates',
      'Limited preparedness for incidents and recovery scenarios',
      'Security decisions made late in delivery rather than by design',
    ],
    focusAreas: [
      'Cybersecurity risk assessments',
      'Security architecture advisory',
      'Security governance',
      'Compliance readiness',
      'Security policy and controls review',
      'Incident response planning',
      'Business continuity and resilience considerations',
      'Security improvement roadmaps',
    ],
    outcomes: [
      'Clearer understanding of priority security risks',
      'More coherent policies, controls, and accountability',
      'Practical improvement roadmaps leadership can act on',
      'Stronger preparedness for incident response and continuity',
    ],
    process: [
      {
        step: '01',
        title: 'Assess',
        description: 'Review current posture, priorities, and risk context with stakeholders.',
      },
      {
        step: '02',
        title: 'Prioritize',
        description: 'Identify the controls and governance improvements that matter most.',
      },
      {
        step: '03',
        title: 'Strengthen',
        description: 'Support practical security improvements aligned to business operations.',
      },
      {
        step: '04',
        title: 'Sustain',
        description: 'Help teams maintain ownership of security practices over time.',
      },
    ],
    relatedSlugs: ['managed-services', 'digital-transformation', 'strategic-planning'],
    image: '/images/services/cybersecurity.jpg',
    imageAlt: 'Cybersecurity specialist reviewing secure infrastructure monitors',
    heroVariant: 'split',
  },
  {
    slug: 'managed-services',
    name: 'Managed Services',
    shortName: 'Managed Services',
    navLabel: 'Managed Services',
    href: '/services/managed-services',
    icon: 'Server',
    summary:
      'Keep critical systems professionally managed while your teams focus on growth and core priorities.',
    overview:
      'NRS managed services help organizations maintain reliable technology operations with clear accountability. Coverage, response expectations, and support hours are defined by the agreed service arrangement.',
    headline: 'Reliable technology operations. Greater business focus.',
    description:
      'Keep critical systems professionally managed while your teams focus on growth, productivity, and core business priorities.',
    challenges: [
      'Internal teams stretched across day-to-day operations and strategic work',
      'Inconsistent monitoring and issue coordination',
      'Vendor relationships that lack clear operational ownership',
      'Technology administration that consumes leadership attention',
    ],
    focusAreas: [
      'IT operations support',
      'Infrastructure monitoring',
      'Technology administration',
      'Issue coordination',
      'Operational maintenance planning',
      'Vendor coordination',
      'IT service improvement',
      'Ongoing systems management',
    ],
    outcomes: [
      'More predictable day-to-day technology operations',
      'Clearer escalation and coordination pathways',
      'Reduced operational burden on internal teams',
      'Service expectations tailored to the agreed contract',
    ],
    process: [
      {
        step: '01',
        title: 'Understand',
        description: 'Map systems, stakeholders, and operational priorities.',
      },
      {
        step: '02',
        title: 'Define',
        description: 'Agree coverage, responsibilities, and service expectations.',
      },
      {
        step: '03',
        title: 'Operate',
        description: 'Support monitoring, administration, and issue coordination.',
      },
      {
        step: '04',
        title: 'Improve',
        description: 'Refine operations based on observed needs and service feedback.',
      },
    ],
    relatedSlugs: ['cybersecurity', 'business-automation', 'digital-transformation'],
    image: '/images/services/managed-services.jpg',
    imageAlt: 'Modern data center server racks with professional lighting',
    heroVariant: 'panel',
  },
  {
    slug: 'project-management-training',
    name: 'Project Management Training',
    shortName: 'PM Training',
    navLabel: 'Project Management Training',
    href: '/services/project-management-training',
    icon: 'ClipboardList',
    summary:
      'Practical training that strengthens planning, execution, communication, risk management, and accountability.',
    overview:
      'NRS training is guided by experienced practitioners and focused on real delivery challenges. Content is designed to build usable capability rather than abstract theory alone.',
    headline: 'Build teams that deliver with confidence',
    description:
      'Practical training designed to strengthen planning, execution, communication, risk management, and accountability.',
    challenges: [
      'Projects that start with ambition but lack delivery discipline',
      'Unclear ownership of scope, schedule, and risk',
      'Stakeholders who receive updates too late to intervene usefully',
      'Teams that need shared methods without rigid process theater',
    ],
    focusAreas: [
      'Project planning fundamentals',
      'Project governance',
      'Scope, schedule, and resource management',
      'Risk and issue management',
      'Stakeholder communication',
      'Delivery monitoring',
      'Agile and traditional approaches where relevant',
      'Leadership and practical delivery workshops',
    ],
    outcomes: [
      'Stronger shared language for planning and delivery',
      'Improved risk and issue handling practices',
      'Clearer stakeholder communication habits',
      'Teams better prepared to own execution',
    ],
    process: [
      {
        step: '01',
        title: 'Diagnose',
        description: 'Identify capability gaps and delivery challenges facing the team.',
      },
      {
        step: '02',
        title: 'Design',
        description: 'Shape training around practical scenarios relevant to your context.',
      },
      {
        step: '03',
        title: 'Facilitate',
        description: 'Deliver practitioner-led sessions that emphasize application.',
      },
      {
        step: '04',
        title: 'Reinforce',
        description: 'Support teams in transferring learning into ongoing work.',
      },
    ],
    relatedSlugs: ['strategic-planning', 'digital-transformation', 'ai-consulting'],
    image: '/images/services/project-management.jpg',
    imageAlt: 'Project manager facilitating a workshop with a professional team',
    heroVariant: 'editorial',
  },
  {
    slug: 'ai-consulting',
    name: 'AI Consulting & Implementation',
    shortName: 'AI Consulting',
    navLabel: 'AI Consulting & Implementation',
    href: '/services/ai-consulting',
    icon: 'Brain',
    summary:
      'Identify where responsible AI can improve operations, decision-making, and performance — then plan for adoption.',
    overview:
      'NRS helps organizations move beyond isolated experiments by assessing opportunity, readiness, governance, and practical implementation paths for AI initiatives.',
    headline: 'Turn AI potential into practical business value',
    description:
      'Move beyond isolated experiments and identify where responsible artificial intelligence can genuinely improve operations, decision-making, and performance.',
    challenges: [
      'Pilot projects that never translate into operational value',
      'Unclear data readiness and ownership for AI use cases',
      'Missing governance around risk, privacy, and accountability',
      'Workflows that are not prepared for meaningful AI integration',
    ],
    focusAreas: [
      'AI opportunity assessment',
      'Use-case prioritization',
      'Business readiness',
      'Data readiness',
      'AI governance',
      'Solution planning',
      'Workflow integration',
      'Practical implementation',
      'Adoption and capability development',
      'Responsible AI practices',
    ],
    outcomes: [
      'Prioritized use cases grounded in business value',
      'Clearer readiness and governance foundations',
      'Implementation plans that respect operational constraints',
      'Teams better prepared to adopt responsibly',
    ],
    process: [
      {
        step: '01',
        title: 'Explore',
        description: 'Identify opportunities where AI can create meaningful value.',
      },
      {
        step: '02',
        title: 'Evaluate',
        description: 'Assess data, process, and organizational readiness.',
      },
      {
        step: '03',
        title: 'Plan',
        description: 'Define governance, solution approach, and success criteria.',
      },
      {
        step: '04',
        title: 'Implement',
        description: 'Support practical delivery and adoption with accountability.',
      },
    ],
    relatedSlugs: ['business-automation', 'strategic-planning', 'digital-transformation'],
    image: '/images/services/ai-consulting.jpg',
    imageAlt: 'Technology professionals collaborating on AI implementation planning',
    heroVariant: 'split',
  },
  {
    slug: 'strategic-planning',
    name: 'Strategic Planning',
    shortName: 'Strategic Planning',
    navLabel: 'Strategic Planning',
    href: '/services/strategic-planning',
    icon: 'Compass',
    summary:
      'Turn business ambition into clear priorities, measurable initiatives, and practical technology roadmaps.',
    overview:
      'NRS helps leadership teams connect executive strategy with operational delivery so technology investments support priorities that can actually be executed.',
    headline: 'Strategy designed for execution',
    description:
      'Turn business ambition into clear priorities, measurable initiatives, and practical technology roadmaps.',
    challenges: [
      'Strategies that remain too abstract to guide investment decisions',
      'Technology roadmaps disconnected from business priorities',
      'Unclear ownership of initiatives and performance measures',
      'Operating models that cannot support intended change',
    ],
    focusAreas: [
      'Business and technology alignment',
      'Strategic assessments',
      'Technology investment priorities',
      'Operating model design',
      'Transformation planning',
      'Performance measures',
      'Implementation roadmaps',
      'Governance and accountability',
    ],
    outcomes: [
      'Clearer strategic priorities linked to executable initiatives',
      'Technology investment decisions with stronger business rationale',
      'Roadmaps that account for governance and delivery capacity',
      'Shared accountability for progress',
    ],
    process: [
      {
        step: '01',
        title: 'Clarify',
        description: 'Surface goals, constraints, and strategic questions with leadership.',
      },
      {
        step: '02',
        title: 'Align',
        description: 'Connect business priorities with technology and operating realities.',
      },
      {
        step: '03',
        title: 'Roadmap',
        description: 'Translate direction into initiatives, sequencing, and measures.',
      },
      {
        step: '04',
        title: 'Govern',
        description: 'Establish accountability for decisions and progress tracking.',
      },
    ],
    relatedSlugs: ['digital-transformation', 'project-management-training', 'ai-consulting'],
    image: '/images/services/strategic-planning.jpg',
    imageAlt: 'Leadership team in a strategic planning session',
    heroVariant: 'centered',
  },
  {
    slug: 'business-automation',
    name: 'Business Automation',
    shortName: 'Automation',
    navLabel: 'Business Automation',
    href: '/services/business-automation',
    icon: 'Workflow',
    summary:
      'Reduce repetitive work, improve process consistency, and connect systems through purposeful automation.',
    overview:
      'NRS approaches automation as a business improvement discipline — focused on operational efficiency, process clarity, and sustainable adoption rather than automation for its own sake.',
    headline: 'Simplify operations. Unlock productivity.',
    description:
      'Reduce repetitive work, improve process consistency, and connect systems through purposeful business automation.',
    challenges: [
      'Manual processes that consume time without adding judgment',
      'Approval workflows that create avoidable delays',
      'Systems that do not share information effectively',
      'Automation initiatives that digitize broken processes',
    ],
    focusAreas: [
      'Workflow analysis',
      'Process mapping',
      'Business process improvement',
      'Repetitive task automation',
      'Approval workflow automation',
      'Systems integration planning',
      'Operational reporting',
      'Internal productivity improvements',
    ],
    outcomes: [
      'Clearer understanding of high-friction workflows',
      'Automation opportunities prioritized by business value',
      'More consistent process handling and reporting',
      'Productivity gains grounded in improved operations',
    ],
    process: [
      {
        step: '01',
        title: 'Map',
        description: 'Analyze current workflows and identify friction points.',
      },
      {
        step: '02',
        title: 'Prioritize',
        description: 'Select automation opportunities with the strongest business case.',
      },
      {
        step: '03',
        title: 'Design',
        description: 'Define improved processes and integration requirements.',
      },
      {
        step: '04',
        title: 'Enable',
        description: 'Support implementation and help teams operate the new workflows.',
      },
    ],
    relatedSlugs: ['ai-consulting', 'managed-services', 'digital-transformation'],
    image: '/images/services/business-automation.jpg',
    imageAlt: 'Professionals reviewing business process workflows on screens',
    heroVariant: 'panel',
  },
  {
    slug: 'digital-transformation',
    name: 'Digital Transformation Advisory',
    shortName: 'Digital Transformation',
    navLabel: 'Digital Transformation',
    href: '/services/digital-transformation',
    icon: 'Sparkles',
    summary:
      'Navigate modernization through practical strategy, disciplined execution, and sustained organizational adoption.',
    overview:
      'NRS helps organizations modernize with purpose — aligning technology change to operating model improvement, adoption, and long-term capability rather than technology replacement alone.',
    headline: 'Modernize with purpose. Transform with confidence.',
    description:
      'Navigate business and technology change through practical modernization strategies, disciplined execution, and sustained organizational adoption.',
    challenges: [
      'Modernization efforts driven by tools rather than outcomes',
      'Change initiatives that overlook people and operating models',
      'Fragmented roadmaps without delivery oversight',
      'Adoption that fades after go-live',
    ],
    focusAreas: [
      'Digital maturity assessments',
      'Technology modernization roadmaps',
      'Transformation strategy',
      'Operating model improvement',
      'Change management considerations',
      'Technology adoption',
      'Delivery oversight',
      'Long-term capability development',
    ],
    outcomes: [
      'Modernization directions grounded in business purpose',
      'Roadmaps that account for people, process, and technology',
      'Clearer oversight of transformation delivery',
      'Stronger internal capability to sustain change',
    ],
    process: [
      {
        step: '01',
        title: 'Assess',
        description: 'Evaluate maturity, priorities, and transformation readiness.',
      },
      {
        step: '02',
        title: 'Define',
        description: 'Shape a practical modernization strategy and operating approach.',
      },
      {
        step: '03',
        title: 'Guide',
        description: 'Support delivery oversight and adoption considerations.',
      },
      {
        step: '04',
        title: 'Embed',
        description: 'Help develop the capability needed to sustain progress.',
      },
    ],
    relatedSlugs: ['strategic-planning', 'cybersecurity', 'ai-consulting'],
    image: '/images/services/digital-transformation.jpg',
    imageAlt: 'Modern corporate office representing digital transformation',
    heroVariant: 'editorial',
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug)
}

export function getRelatedServices(slugs: ServiceSlug[]): ServiceDetail[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is ServiceDetail => Boolean(service))
}

export const serviceInterestOptions = [
  ...services.map((service) => ({
    value: service.slug,
    label: service.name,
  })),
  { value: 'general', label: 'General Inquiry' },
] as const
