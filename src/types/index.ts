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
        identifyPain: number;
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
    id: string;
    title: string;
    category: string;
    priority: "low" | "medium" | "high";
    type: "call" | "email" | "to-do";
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
    | "identifyPain"
    | "champion"
    | "competition";

export interface MeddpiccScores {
    metrics: number;
    economicBuyer: number;
    decisionCriteria: number;
    decisionProcess: number;
    paperProcess: number;
    identifyPain: number;
    champion: number;
    competition: number;
}

export interface DealBreakers {
    metrics: string | null;
    economicBuyer: string | null;
    decisionCriteria: string | null;
    decisionProcess: string | null;
    paperProcess: string | null;
    identifyPain: string | null;
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
    identifyPain: QualificationDetail[];
    champion: QualificationDetail[];
    competition: QualificationDetail[];
}

export interface Task {
    id: string;
    title: string;
    category: string;
    priority: "low" | "medium" | "high";
    type: "call" | "email" | "to-do";
    addedToHubspot: boolean;
}

export interface HubspotTask {
    dealId: string;
    taskId: string;
    taskTitle: string;
    taskType: "call" | "email" | "to-do";
    dueDate: string;
    notes: string;
    isOpen?: boolean;
}
