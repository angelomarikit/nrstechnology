import { company } from './company'
import type { FAQEntry } from '@/types'

export const faqEntries: FAQEntry[] = [
  {
    id: 'services-overview',
    question: 'What services does NRS offer?',
    answer:
      'NRS Technologies provides cybersecurity, managed services, project management training, AI consulting and implementation, strategic planning, business automation, and digital transformation advisory.',
    keywords: ['services', 'offer', 'provide', 'what do you do', 'capabilities', 'solutions'],
    relatedIds: ['cyber-help', 'managed-it', 'ai-implementation'],
    category: 'services',
  },
  {
    id: 'cyber-help',
    question: 'Can NRS help improve cybersecurity?',
    answer:
      'Yes. NRS supports organizations with cybersecurity risk assessment, security architecture, governance, compliance readiness, incident response planning, and related security improvement initiatives. Contact our team to discuss your specific requirements.',
    keywords: ['cybersecurity', 'security', 'cyber', 'breach', 'risk assessment', 'threat'],
    relatedIds: ['services-overview', 'incident-response', 'compliance'],
    category: 'cybersecurity',
  },
  {
    id: 'cyber-scope',
    question: 'Tell me about cybersecurity.',
    answer:
      'Our cybersecurity work helps organizations understand technology risk, strengthen defenses, improve governance, and prepare for incident response. We focus on practical improvement rather than promising that breaches can be prevented entirely.',
    keywords: ['tell me about cybersecurity', 'cybersecurity services', 'security services'],
    relatedIds: ['cyber-help', 'governance'],
    category: 'cybersecurity',
  },
  {
    id: 'incident-response',
    question: 'Do you help with incident response planning?',
    answer:
      'Yes. NRS can support incident response planning and related resilience considerations so teams are clearer about roles, escalation, and continuity expectations before an incident occurs.',
    keywords: ['incident', 'response', 'breach response', 'resilience', 'continuity'],
    relatedIds: ['cyber-help'],
    category: 'cybersecurity',
  },
  {
    id: 'compliance',
    question: 'Can you support compliance readiness?',
    answer:
      'Yes. NRS can help organizations review controls, policies, and readiness considerations related to compliance expectations. Specific obligations depend on your industry and regulatory context.',
    keywords: ['compliance', 'regulatory', 'policy', 'controls', 'audit readiness'],
    relatedIds: ['cyber-help', 'governance'],
    category: 'cybersecurity',
  },
  {
    id: 'managed-it',
    question: 'Do you offer managed IT services?',
    answer:
      'Yes. NRS provides managed services covering IT operations support, infrastructure monitoring, technology administration, issue coordination, vendor coordination, and related operational improvement. Actual support hours and service levels depend on the agreed contract.',
    keywords: ['managed', 'managed services', 'managed it', 'it support', 'operations', 'outsourcing'],
    relatedIds: ['managed-hours', 'services-overview'],
    category: 'managed-services',
  },
  {
    id: 'managed-hours',
    question: 'Do you provide 24/7 support?',
    answer:
      'Support hours and coverage depend on the service arrangement agreed with your organization. Please contact us to discuss the operational coverage that fits your requirements.',
    keywords: ['24/7', 'twenty four seven', 'always on', 'support hours', 'sla', 'coverage'],
    relatedIds: ['managed-it', 'business-hours'],
    category: 'managed-services',
  },
  {
    id: 'pm-training',
    question: 'Does NRS provide project management training?',
    answer:
      'Yes. NRS offers practical project management training focused on planning, governance, risk management, stakeholder coordination, and effective delivery practices. Training is guided by experienced practitioners.',
    keywords: ['project management', 'training', 'pm training', 'workshop', 'delivery training'],
    relatedIds: ['training-topics', 'services-overview'],
    category: 'training',
  },
  {
    id: 'training-topics',
    question: 'What topics does project management training cover?',
    answer:
      'Typical focus areas include project planning fundamentals, governance, scope and schedule management, risk and issue management, stakeholder communication, delivery monitoring, and practical leadership workshops. Content can be shaped around your team\'s needs.',
    keywords: ['training topics', 'curriculum', 'what do you teach', 'workshop topics'],
    relatedIds: ['pm-training'],
    category: 'training',
  },
  {
    id: 'ai-implementation',
    question: 'Does NRS provide AI implementation services?',
    answer:
      'Yes. NRS supports AI opportunity assessment, business readiness, governance, implementation planning, workflow integration, and adoption.',
    keywords: ['ai', 'artificial intelligence', 'implement ai', 'machine learning', 'llm'],
    relatedIds: ['ai-help', 'responsible-ai'],
    category: 'ai',
  },
  {
    id: 'ai-help',
    question: 'Can NRS help implement AI?',
    answer:
      'Yes. We help organizations identify where responsible AI can create practical value, assess readiness, plan governance, and support implementation and adoption.',
    keywords: ['help implement ai', 'ai consulting', 'ai services', 'use cases'],
    relatedIds: ['ai-implementation', 'automation-help'],
    category: 'ai',
  },
  {
    id: 'responsible-ai',
    question: 'Do you address responsible AI and governance?',
    answer:
      'Yes. AI governance, accountability, and responsible practices are part of how NRS approaches AI consulting and implementation planning.',
    keywords: ['responsible ai', 'ai governance', 'ethics', 'ai risk'],
    relatedIds: ['ai-implementation'],
    category: 'ai',
  },
  {
    id: 'strategy-help',
    question: 'Can NRS help with strategic planning?',
    answer:
      'Yes. NRS helps organizations align business and technology priorities, define investment direction, design operating approaches, and create implementation roadmaps that are designed for execution.',
    keywords: ['strategy', 'strategic planning', 'roadmap', 'priorities', 'planning'],
    relatedIds: ['transformation-help', 'services-overview'],
    category: 'strategy',
  },
  {
    id: 'automation-help',
    question: 'Can you automate our workflows?',
    answer:
      'Yes. NRS supports workflow analysis, process improvement, repetitive task automation, approval workflow automation, systems integration planning, and related productivity initiatives. We emphasize business value rather than automation for its own sake.',
    keywords: ['automate', 'automation', 'workflow', 'process', 'rpa', 'productivity'],
    relatedIds: ['ai-help', 'managed-it'],
    category: 'automation',
  },
  {
    id: 'transformation-help',
    question: 'Do you provide digital transformation advisory?',
    answer:
      'Yes. NRS helps organizations navigate modernization through digital maturity assessments, transformation strategy, technology roadmaps, operating model improvement, adoption support, and delivery oversight.',
    keywords: ['digital transformation', 'modernization', 'transform', 'digital maturity'],
    relatedIds: ['strategy-help', 'services-overview'],
    category: 'transformation',
  },
  {
    id: 'office-location',
    question: 'Where is your office?',
    answer: `Our office is at ${company.address}.`,
    keywords: ['office', 'address', 'location', 'where are you', 'visit', 'alabang', 'muntinlupa'],
    relatedIds: ['contact-how', 'directions'],
    category: 'contact',
  },
  {
    id: 'directions',
    question: 'How do I get directions to your office?',
    answer:
      'You can open Google Maps directions from our Contact Us page using the official office address in Filinvest City, Alabang, Muntinlupa City.',
    keywords: ['directions', 'map', 'google maps', 'how to get there'],
    relatedIds: ['office-location'],
    category: 'contact',
  },
  {
    id: 'business-hours',
    question: 'What are your office hours?',
    answer: `Our office hours are ${company.businessHours}.`,
    keywords: ['hours', 'business hours', 'office hours', 'open', 'when are you open'],
    relatedIds: ['contact-how'],
    category: 'contact',
  },
  {
    id: 'contact-how',
    question: 'How can I contact NRS?',
    answer: `Call ${company.phoneDisplay} or email ${company.email}. You can also visit our Contact Us page for additional information and an inquiry form.`,
    keywords: ['contact', 'reach', 'phone', 'email', 'call', 'get in touch'],
    relatedIds: ['consultation', 'business-hours'],
    category: 'contact',
  },
  {
    id: 'consultation',
    question: 'How do we request a consultation?',
    answer:
      'Visit the Contact Us page, complete the inquiry form, or email info@nrstechsolutions.com. Submitting the form opens your email application with a prepared message that you send to our team.',
    keywords: ['consultation', 'consult', 'request', 'meeting', 'talk', 'schedule', 'inquiry'],
    relatedIds: ['contact-how', 'pricing'],
    category: 'contact',
  },
  {
    id: 'pricing',
    question: 'How much do your services cost?',
    answer:
      'Service pricing depends on your organization\'s requirements and the scope of work. Please contact our team to discuss your needs.',
    keywords: ['price', 'pricing', 'cost', 'fee', 'rates', 'how much'],
    relatedIds: ['consultation', 'engagement'],
    category: 'general',
  },
  {
    id: 'engagement',
    question: 'How does an engagement typically start?',
    answer:
      'Engagements typically begin with a conversation to understand your goals and challenges, followed by assessment, planning, implementation support, and capability enablement as appropriate. The exact path depends on your requirements.',
    keywords: ['engagement', 'how do you work', 'process', 'approach', 'start'],
    relatedIds: ['consultation', 'why-nrs'],
    category: 'general',
  },
  {
    id: 'why-nrs',
    question: 'Why should we choose NRS?',
    answer:
      'Organizations work with NRS for practitioner-led expertise, strategy and execution under one roof, governance built into delivery, right-sized solutions, a focus on outcomes, and capability transfer to internal teams.',
    keywords: ['why nrs', 'why choose', 'differentiate', 'advantage', 'different'],
    relatedIds: ['governance', 'capability-transfer'],
    category: 'general',
  },
  {
    id: 'governance',
    question: 'How does NRS approach governance and security?',
    answer:
      'Security, risk, responsibility, and accountability are considered throughout the work rather than treated as afterthoughts. This is part of how NRS connects strategy, governance, security, and execution.',
    keywords: ['governance', 'security by default', 'accountability', 'risk'],
    relatedIds: ['cyber-help', 'why-nrs'],
    category: 'general',
  },
  {
    id: 'capability-transfer',
    question: 'Do you transfer knowledge to our team?',
    answer:
      'Yes. A core objective is to help clients become stronger and more capable rather than permanently dependent on external advisers. Capability transfer is built into how we approach engagements.',
    keywords: ['capability', 'knowledge transfer', 'training internal', 'dependency', 'enable'],
    relatedIds: ['why-nrs', 'pm-training'],
    category: 'general',
  },
  {
    id: 'philippines',
    question: 'Is NRS based in the Philippines?',
    answer: `Yes. ${company.legalName} is a Philippine-based technology and business services firm serving organizations across the country, with an office in Filinvest City, Alabang, Muntinlupa City.`,
    keywords: ['philippines', 'philippine', 'based', 'local', 'manila', 'alabang'],
    relatedIds: ['office-location', 'contact-how'],
    category: 'general',
  },
  {
    id: 'who-you-are',
    question: 'Who is NRS Technologies?',
    answer: `${company.legalName} is a Philippine-based technology and business solutions firm. Our tagline is "${company.tagline}." We help organizations connect strategy, governance, security, and execution through practical technology and business solutions.`,
    keywords: ['who are you', 'about', 'company', 'nrs technologies', 'what is nrs'],
    relatedIds: ['services-overview', 'why-nrs'],
    category: 'general',
  },
  {
    id: 'connected-capabilities',
    question: 'Do your services work together?',
    answer:
      'Yes. Cybersecurity, managed operations, AI, automation, governance, project delivery, and strategic planning often intersect. NRS helps organizations address connected challenges rather than isolated symptoms.',
    keywords: ['connected', 'together', 'intersect', 'whole picture', 'integrated'],
    relatedIds: ['services-overview', 'governance'],
    category: 'services',
  },
]

export const faqSuggestions = [
  'What services do you offer?',
  'Tell me about cybersecurity.',
  'Do you offer managed IT services?',
  'Can NRS help implement AI?',
  'Do you provide project management training?',
  'Can you automate our workflows?',
  'Where is your office?',
  'What are your business hours?',
  'How do we request a consultation?',
] as const

export const faqIntro =
  'Welcome to NRS Technologies! How can we help you today? Explore our services, ask a common question, or contact our team.'

export const faqFallback =
  'I may not have that information yet. You can contact our team for a more specific answer.'

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s+]/g, ' ').replace(/\s+/g, ' ').trim()
}

export function matchFaq(query: string): FAQEntry | null {
  const normalized = normalize(query)
  if (!normalized) return null

  let best: { entry: FAQEntry; score: number } | null = null

  for (const entry of faqEntries) {
    let score = 0
    const questionNorm = normalize(entry.question)

    if (normalized === questionNorm) score += 100
    if (questionNorm.includes(normalized) || normalized.includes(questionNorm)) score += 40

    for (const keyword of entry.keywords) {
      const key = normalize(keyword)
      if (!key) continue
      if (normalized.includes(key)) score += key.split(' ').length > 1 ? 18 : 10
      if (key.includes(normalized) && normalized.length > 4) score += 8
    }

    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score }
    }
  }

  return best && best.score >= 10 ? best.entry : null
}

export function getRelatedFaq(entry: FAQEntry): FAQEntry[] {
  if (!entry.relatedIds?.length) return []
  return entry.relatedIds
    .map((id) => faqEntries.find((item) => item.id === id))
    .filter((item): item is FAQEntry => Boolean(item))
}
