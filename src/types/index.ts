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
        dealAge: number;
        meetingsScheduled: number;
        meetingsAttended: number;
        objectionsRaised: number;
        objectionsResolved: number;
        competitorMentions: number;
        decisionMakerEngaged: boolean;
    };
    meddpicc: {
        metrics: number;
        economicBuyer: number;
        decisionCriteria: number;
        decisionProcess: number;
        paperProcess: number;
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
    dealBreakers: DealBreakers;
    qualificationDetails: QualificationDetails;
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

export type MeddpiccCategory =
    | "metrics"
    | "economicBuyer"
    | "decisionCriteria"
    | "decisionProcess"
    | "paperProcess"
    | "implications"
    | "champion"
    | "competition";

export interface MeddpiccScores {
    metrics: number;
    economicBuyer: number;
    decisionCriteria: number;
    decisionProcess: number;
    paperProcess: number;
    implications: number;
    champion: number;
    competition: number;
}

export interface DealBreakers {
    metrics: string | null;
    economicBuyer: string | null;
    decisionCriteria: string | null;
    decisionProcess: string | null;
    paperProcess: string | null;
    implications: string | null;
    champion: string | null;
    competition: string | null;
}

export interface QualificationDetail {
    text: string;
    completed: boolean;
}

export interface QualificationDetails {
    metrics: QualificationDetail[];
    economicBuyer: QualificationDetail[];
    decisionCriteria: QualificationDetail[];
    decisionProcess: QualificationDetail[];
    paperProcess: QualificationDetail[];
    implications: QualificationDetail[];
    champion: QualificationDetail[];
    competition: QualificationDetail[];
}
