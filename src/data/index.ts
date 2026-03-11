import type { Product, Pillar, PortfolioItem } from './types.ts';

export const products: Product[] = [
    {
        id: 'accord',
        number: '01',
        nameStart: 'a',
        nameEnd: 'ccord crm',
        category: 'general',
        tagline: 'unified conversations, intelligent knowledge',
        description: 'Your customers deserve consistency. Accord CRM unifies every communication channel — chat, email, and voice — into a single intelligent platform, so your team always has the full context to deliver excellence.',
        bullets: [
            'Omnichannel inbox with unified customer history',
            'Living knowledge base that grows with every interaction',
            'Seamless handoffs between chat, email, and voice'
        ],
        wide: true,
        iconType: 1
    },
    {
        id: 'acuity',
        number: '02',
        nameStart: 'a',
        nameEnd: 'cuity analytics',
        category: 'general',
        tagline: 'data becomes direction',
        description: 'Excellence begins with clarity. Acuity Analytics transforms your financial and sales data into sharp strategic intelligence — empowering your leadership to move with confidence, not guesswork.',
        bullets: [
            'Real-time financial & sales performance dashboards',
            'Predictive trend forecasting to stay ahead'
        ],
        iconType: 2
    },
    {
        id: 'align',
        number: '03',
        nameStart: 'a',
        nameEnd: 'lign reconcile',
        category: 'general',
        tagline: 'accuracy, automatically',
        description: 'Financial excellence demands precision. Align eliminates discrepancies across your systems automatically — so your team spends less time reconciling and more time driving results.',
        bullets: [
            'Automated cross-system reconciliation engine',
            'Always audit-ready, with zero manual overhead'
        ],
        iconType: 3
    },
    {
        id: 'aptitude',
        number: '04',
        nameStart: 'a',
        nameEnd: 'ptitude assess',
        category: 'general',
        tagline: 'hire with confidence, at scale',
        description: 'Your people define your excellence. Aptitude brings AI-driven precision to every stage of hiring — from screening hundreds of candidates to conducting structured video interviews that reveal true potential.',
        bullets: [
            'Intelligent CV screening that scales with your ambition',
            'Structured video interviews for consistent, fair evaluation'
        ],
        iconType: 4
    },
    {
        id: 'annals',
        number: '05',
        nameStart: 'a',
        nameEnd: 'nnals chronicle',
        category: 'general',
        tagline: 'every meeting becomes a decision record',
        description: 'Great decisions deserve great documentation. Annals captures every meeting automatically — turning conversations into structured records, action items, and shared accountability across your organization.',
        bullets: [
            'Automatic meeting notes and action item assignment',
            'Real-time collaborative workspace for your team'
        ],
        iconType: 5
    },
    {
        id: 'advance',
        number: '06',
        nameStart: 'a',
        nameEnd: 'dvance pipeline',
        category: 'general',
        tagline: 'deals flow, predictably',
        description: 'Revenue excellence requires visibility. Advance gives your sales team intelligent, real-time pipeline management — so deals move forward with purpose and every forecast is built on facts, not intuition.',
        bullets: [
            'Real-time pipeline visibility across every deal stage',
            'AI-powered revenue forecasting you can trust'
        ],
        iconType: 6
    },
    {
        id: 'altitude',
        number: '07',
        nameStart: 'a',
        nameEnd: 'ltitude viability',
        category: 'general',
        tagline: 'strategy tested, risks measured',
        description: 'Ambitious decisions require rigorous analysis. Altitude gives your leadership the tools to evaluate investments and business opportunities with the depth and confidence that drives strategic excellence.',
        bullets: [
            'Investment and business feasibility modeling',
            'Instant what-if scenario analysis for smarter decisions'
        ],
        iconType: 7
    },
    {
        id: 'array',
        number: '08',
        nameStart: 'a',
        nameEnd: 'rray portfolio',
        category: 'general',
        tagline: 'all assets, one view, aligned',
        description: 'Portfolio excellence demands complete visibility. Array brings all your holdings into a single, intelligent view — with AI-driven rebalancing recommendations that keep your wealth aligned to your goals.',
        bullets: [
            'Consolidated view across all asset classes',
            'Intelligent rebalancing and optimization guidance'
        ],
        iconType: 8
    },
    {
        id: 'audit',
        number: '09',
        nameStart: 'a',
        nameEnd: 'udit comply',
        category: 'general',
        tagline: 'compliance becomes automatic',
        description: 'Regulatory compliance is non-negotiable. Audit Comply takes it off your plate — automatically tracking requirements, generating precise reports, and keeping your organization perpetually audit-ready.',
        bullets: [
            'Automated generation of regulatory reports',
            'Continuous compliance monitoring and alerts'
        ],
        iconType: 9
    },
    {
        id: 'affluence',
        number: '10',
        nameStart: 'a',
        nameEnd: 'ffluence personal',
        category: 'financial',
        tagline: 'your money, smarter managed',
        description: 'Personal financial excellence is within reach. Affluence gives individuals the AI-powered clarity to manage budgets intelligently, track investments with ease, and turn financial goals into structured, achievable plans.',
        bullets: [
            'AI-driven budget insights tailored to your lifestyle',
            'Goal-based financial planning that adapts as you grow'
        ],
        iconType: 10
    },
    {
        id: 'ancestry',
        number: '11',
        nameStart: 'a',
        nameEnd: 'ncestry legacy',
        category: 'financial',
        tagline: 'what you build, protected and passed on',
        description: 'The greatest expression of excellence is what endures. Ancestry helps families protect, grow, and transfer wealth across generations — with estate planning that is intelligently structured, deeply intentional, and built to last beyond a lifetime.',
        bullets: [
            'Multi-generational estate structure and succession planning',
            'AI-guided family wealth protection and growth strategies',
            'Legacy planning built with clarity, care, and intention'
        ],
        wide: true,
        iconType: 11
    }
];

export const pillars: Pillar[] = [
    {
        number: '01',
        title: 'Intelligence',
        description: 'AI that understands the full context of your business — not just the data, but the decisions behind it.'
    },
    {
        number: '02',
        title: 'Integration',
        description: 'Designed to work alongside your existing operations — enhancing what works, not replacing it.'
    },
    {
        number: '03',
        title: 'Impact',
        description: 'We measure success in business outcomes. Real, quantifiable results — not vanity metrics or feature counts.'
    },
    {
        number: '04',
        title: 'Integrity',
        description: 'Compliance, security, and trust are foundational — never secondary — to everything we build.'
    },
    {
        number: '05',
        title: 'Intention',
        description: 'Crafted with deep purpose for the ambition and complexity of Indonesian enterprise.'
    }
];

export const portfolio: PortfolioItem[] = [
    {
        id: 'finalytics',
        domain: 'finalytics.id',
        nameStart: 'Finalytics',
        nameEnd: '.id',
        category: 'Business Finance',
        description: 'A comprehensive business financial analysis platform that gives companies the intelligence to truly understand their financial health — tracking performance, identifying risks, and enabling leadership to make decisions with clarity and conviction.',
        tags: ['Financial Analysis', 'Business Intelligence', 'Dashboard'],
        url: 'https://finalytics.id',
        icon: '📊',
        colorClass: 'fin-color'
    },
    {
        id: 'sahabattravel',
        domain: 'sahabattravel.id',
        nameStart: 'SahabatTravel',
        nameEnd: '.id',
        category: 'Travel · B2B',
        description: "A B2B platform purpose-built for the Umrah travel industry — connecting travel agents with pilgrims through intelligent booking, itinerary management, and group coordination tools that bring operational excellence to one of Indonesia's most meaningful journeys.",
        tags: ['Umrah', 'B2B Platform', 'Travel Management'],
        url: 'https://sahabattravel.id',
        icon: '🕌',
        colorClass: 'travel-color'
    },
    {
        id: 'anakemas',
        domain: 'anakemas.id',
        nameStart: 'AnakEmas',
        nameEnd: '.id',
        category: 'Parenting · EdTech',
        description: 'An AI-powered child development assistant that guides parents through every milestone with personalized, evidence-based recommendations — from nutrition and motor skills to cognitive development — so every child has the support they need to truly thrive.',
        tags: ['Child Development', 'AI Assistant', 'Parenting'],
        url: 'https://anakemas.id',
        icon: '⭐',
        colorClass: 'child-color'
    },
    {
        id: 'aira',
        domain: 'aira.id',
        nameStart: 'Aira',
        nameEnd: '.id',
        category: 'AI · CRM',
        description: 'An AI-based reassuring assistance platform redefining customer relationship management. Aira blends empathetic conversational AI with intelligent CRM workflows — helping businesses build relationships that feel genuinely human, at enterprise scale.',
        tags: ['AI-Powered', 'CRM', 'Conversational AI', 'Customer Success'],
        url: 'https://aira.id',
        icon: '🤖',
        colorClass: 'ai-color'
    }
];
