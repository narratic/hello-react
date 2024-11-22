export interface Deal {
    dealId: string;
    dealName: string;
    amount: number;
    probability: number;
    company: string;
    contacts: string;
    status: "Open" | "Won" | "Lost";
    lastUpdated: string;
    dealStage:
        | "Discovery"
        | "Solution Validation"
        | "Pricing Communicated"
        | "Contract Sent"
        | "Closed Won"
        | "Closed Lost";
    dealOwner: string;
    dealLanguage: string;
    nextInteraction: string | null;
    lastActivity: string;
    activityType: string;
    isStale: boolean;
    highProbability: boolean;
    metrics: {
        deal_age: number;
        meetings_scheduled: number;
        meetings_attended: number;
        objections_raised: number;
        objections_resolved: number;
        competitor_mentions: number;
        decision_maker_engaged: boolean;
    };
    meddpicc: {
        metrics: number;
        economic_buyer: number;
        decision_criteria: number;
        decision_process: number;
        paper_process: number;
        implications: number;
        champion: number;
        competition: number;
    };
    riskFactors: RiskFactor[];
    recommendedActions: RecommendedAction[];
    keyStakeholders: Stakeholder[];
    maturity: {
        requirements: boolean;
        budget: boolean;
        timeline: boolean;
        stakeholders: boolean;
    };
    riskScore: number;
    hubspotUrl: string;
}

export interface Stakeholder {
    name: string;
    role: string;
    engagementLevel: "Low" | "Medium" | "High";
    contactLink: string;
}

export interface RiskFactor {
    label: string;
    level: "low" | "medium" | "high";
    info: string;
    category: string;
    details: string;
    impact: string;
    metric: string;
    lostDealFrequency: number;
}

export interface RecommendedAction {
    text: string;
    priority: "low" | "medium" | "high";
    type: string;
    completed: boolean;
    addedToHubspot: boolean;
}

export interface FilterState {
    probability: string;
    amount: {
        min: string;
        max: string;
    };
    status: string;
}

export interface ChartDataPoint {
    name: string;
    value: number;
}

export interface QuestionWithLabel {
    question: string;
    weighting: number;
    label: string;
}
