import { Deal, ChartDataPoint } from '../types';

export const deals: Deal[] = [
  {
  id: 1,
  dealId: "18551702398",
  dealName: "Acme Corp",
  amount: 450000,
  probability: 90,
  company: "Acme Corp",
  contacts: "Jane Smith (IT Manager)",
  status: "Open",
  lastUpdated: "2023-10-15",
  dealStage: "Solution Validation",
  dealOwner: "Alice Green",
  dealLanguage: "en",
  nextInteraction: "2023-10-20",
  lastActivity: "2023-10-10",
  activityType: "Email",
  isStale: true,
  highProbability: false,
  metrics: {
    deal_age: 90,
    meetings_scheduled: 5,
    meetings_attended: 3,
    objections_raised: 0,
    objections_resolved: 0,
    competitor_mentions: 0,
    decision_maker_engaged: false,
  },
  meddpicc: {
    metrics: 2,
    economic_buyer: 1,
    decision_criteria: 3,
    decision_process: 1,
    paper_process: 1,
    implications: 4,
    champion: 1,
    competition: 3,
  },
  riskFactors: [
    {
      label: "Lack of Engagement with Decision Makers",
      level: "high",
      info: "No engagement with economic buyer",
      category: "stakeholder",
      details: "No meetings with CFO or other decision-makers.",
      impact: "High risk of deal stalling due to lack of executive buy-in.",
      metric: "0 meetings with economic buyer",
      lostDealFrequency: 45,
    },
    {
      label: "Undefined Decision Process",
      level: "medium",
      info: "Decision process not outlined",
      category: "process",
      details: "No clear understanding of the customer's decision-making process.",
      impact: "Potential delays and surprises in the sales cycle.",
      metric: "Decision process score: 1/5",
      lostDealFrequency: 30,
    },
    {
      label: "High Deal Age with Slow Progression",
      level: "high",
      info: "Deal has aged without significant progress",
      category: "progress",
      details: "Deal has been open for 90 days but remains in early stages.",
      impact: "Increased risk of deal becoming inactive or lost.",
      metric: "Deal age: 90 days, Stage: Qualification",
      lostDealFrequency: 35,
    },
  ],
  recommendedActions: [
    {
      text: "Engage with the CFO to establish executive sponsorship.",
      priority: "high",
      type: "meeting",
      completed: false,
      addedToHubspot: false,
    },
    {
      text: "Clarify the customer's decision-making process and timeline.",
      priority: "medium",
      type: "call",
      completed: false,
      addedToHubspot: false,
    },
    {
      text: "Accelerate deal progression by scheduling a product demo for additional stakeholders.",
      priority: "high",
      type: "event",
      completed: false,
      addedToHubspot: false,
    },
  ],
  keyStakeholders: [
    {
      name: "Jane Smith",
      role: "IT Manager",
      engagementLevel: "High",
      contactLink: "https://app.hubspot.com/contacts/123456/contact/1",
    },
  ],
  maturity: {
    requirements: true,
    budget: false,
    timeline: false,
    stakeholders: false,
  },
  riskScore: 8,
  hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-18551702398",
}
,
  {
  id: 2,
  dealId: "20079565168",
  dealName: "Beta Co.",
  amount: 700000,
  probability: 60,
  company: "Beta Co.",
  contacts: "Mark Davis (VP Finance)",
  status: "Open",
  lastUpdated: "2023-11-01",
  dealStage: "Discovery",
  dealOwner: "Sara Lee",
  dealLanguage: "en",
  nextInteraction: "2023-11-05",
  lastActivity: "2023-10-28",
  activityType: "Follow-up Call",
  isStale: false,
  highProbability: true,
  metrics: {
    deal_age: 60,
    meetings_scheduled: 4,
    meetings_attended: 4,
    objections_raised: 1,
    objections_resolved: 1,
    competitor_mentions: 2,
    decision_maker_engaged: true,
  },
  meddpicc: {
    metrics: 4,
    economic_buyer: 4,
    decision_criteria: 4,
    decision_process: 3,
    paper_process: 2,
    implications: 3,
    champion: 4,
    competition: 2,
  },
  riskFactors: [
    {
      label: "Pricing and Budget Constraints",
      level: "medium",
      info: "Budget concerns raised by VP Finance",
      category: "financial",
      details: "Customer indicated budget limitations for the current fiscal year.",
      impact: "Potential delay in approval or need for revised pricing.",
      metric: "1 budget concern raised",
      lostDealFrequency: 25,
    },
    {
      label: "Competitor Mentions",
      level: "medium",
      info: "Mention of alternative vendors",
      category: "competitive",
      details: "Customer evaluating 2 other solutions alongside ours.",
      impact: "Risk of losing deal if differentiation isn't clear.",
      metric: "2 competitor mentions",
      lostDealFrequency: 20,
    }
  ],
  recommendedActions: [
    {
      text: "Provide a revised pricing structure with flexible options to address budget concerns.",
      priority: "high",
      type: "document",
      completed: false,
      addedToHubspot: false,
    },
    {
      text: "Schedule an executive review to reinforce competitive advantages over other vendors.",
      priority: "medium",
      type: "meeting",
      completed: false,
      addedToHubspot: false,
    }
  ],
  keyStakeholders: [
    {
      name: "Mark Davis",
      role: "VP Finance",
      engagementLevel: "Medium",
      contactLink: "https://app.hubspot.com/contacts/123456/contact/2",
    }
  ],
  maturity: {
    requirements: true,
    budget: true,
    timeline: false,
    stakeholders: true,
  },
  riskScore: 6,
  hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-20079565168"
}
,
  {
  id: 3,
  dealId: "19929371719",
  dealName: "Gamma Industries",
  amount: 300000,
  probability: 40,
  company: "Gamma Industries",
  contacts: "Linda Brown (Operations Manager)",
  status: "Open",
  lastUpdated: "2023-09-20",
  dealStage: "Discovery",
  dealOwner: "Tommy Wright",
  dealLanguage: "en",
  nextInteraction: "2023-09-30",
  lastActivity: "2023-09-10",
  activityType: "Discovery Call",
  isStale: true,
  highProbability: false,
  metrics: {
    deal_age: 120,
    meetings_scheduled: 2,
    meetings_attended: 2,
    objections_raised: 3,
    objections_resolved: 1,
    competitor_mentions: 3,
    decision_maker_engaged: false,
  },
  meddpicc: {
    metrics: 2,
    economic_buyer: 1,
    decision_criteria: 2,
    decision_process: 1,
    paper_process: 1,
    implications: 2,
    champion: 2,
    competition: 3,
  },
  riskFactors: [
    {
      label: "Multiple Objections Unresolved",
      level: "high",
      info: "Customer raised objections without resolution",
      category: "objections",
      details: "Several objections from Operations remain unaddressed.",
      impact: "Deal is likely to stall without further engagement from the sales team.",
      metric: "3 unresolved objections",
      lostDealFrequency: 40,
    },
    {
      label: "High Competitor Mentions",
      level: "medium",
      info: "Multiple competitors considered by customer",
      category: "competitive",
      details: "Customer evaluating 3 competitors including incumbent provider.",
      impact: "Need to clearly communicate unique value proposition.",
      metric: "3 competitor mentions",
      lostDealFrequency: 32,
    }
  ],
  recommendedActions: [
    {
      text: "Hold a follow-up call to address unresolved objections with Operations Manager.",
      priority: "high",
      type: "call",
      completed: false,
      addedToHubspot: false,
    },
    {
      text: "Prepare a comparative analysis to highlight unique value against competitors.",
      priority: "medium",
      type: "document",
      completed: false,
      addedToHubspot: false,
    }
  ],
  keyStakeholders: [
    {
      name: "Linda Brown",
      role: "Operations Manager",
      engagementLevel: "Medium",
      contactLink: "https://app.hubspot.com/contacts/123456/contact/3",
    }
  ],
  maturity: {
    requirements: true,
    budget: false,
    timeline: false,
    stakeholders: true,
  },
  riskScore: 7,
  hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-19929371719"
}
];

export const chartData: ChartDataPoint[] = [
  { name: '0-50k', value: 30 },
  { name: '50k-100k', value: 45 },
  { name: '100k-200k', value: 25 },
  { name: '200k+', value: 15 },
];

export const dealData = deals[0];

export const closedDealsAnalysis = {
  wonReasons: [
    { reason: 'Superior Product Features', count: 15 },
    { reason: 'Competitive Pricing', count: 12 },
    { reason: 'Strong Relationship', count: 10 },
    { reason: 'Implementation Timeline', count: 8 },
    { reason: 'Integration Capabilities', count: 7 }
  ],
  lostReasons: [
    { reason: 'Budget Constraints', count: 18 },
    { reason: 'Competitor Selection', count: 14 },
    { reason: 'Timeline Mismatch', count: 9 },
    { reason: 'Feature Gaps', count: 7 },
    { reason: 'Internal Decision', count: 6 }
  ],
  averageDealCycle: {
    won: 75,
    lost: 45
  },
  stageDropoff: [
    { stage: 'Discovery', dropoffRate: 20 },
    { stage: 'Solution Validation', dropoffRate: 15 },
    { stage: 'Proposal', dropoffRate: 25 },
    { stage: 'Negotiation', dropoffRate: 15 },
    { stage: 'Contract', dropoffRate: 5 }
  ]
};