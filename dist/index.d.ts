import { FC } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { Toaster } from 'sonner';

export declare function ActionPlan({ deal, onHubspotTaskAdd }: ActionPlanProps_2): JSX_2.Element;

declare interface ActionPlanProps {
    deal: Deal;
}

declare interface ActionPlanProps_2 {
    deal: Deal;
    onHubspotTaskAdd?: (task: HubspotTask) => void;
}

export declare const Counter: FC<Props>;

declare interface Deal {
    dealId: string;
    dealName: string;
    amount: number;
    probability: number;
    company: string;
    contacts: string;
    status: "Open" | "Won" | "Lost";
    lastUpdated: string;
    dealStage: "Discovery" | "Solution Validation" | "Pricing Communicated" | "Contract Sent" | "Closed Won" | "Closed Lost";
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

export declare function DealActions({ deal }: ActionPlanProps): JSX_2.Element;

declare interface DealBreakers {
    metrics: string | null;
    economicBuyer: string | null;
    decisionCriteria: string | null;
    decisionProcess: string | null;
    paperProcess: string | null;
    identifyPain: string | null;
    champion: string | null;
    competition: string | null;
}

export declare function DealHeader({ deal, onDealChange, availableDeals }: DealHeaderProps): JSX_2.Element;

declare interface DealHeaderProps {
    deal: Deal;
    onDealChange: (dealId: string) => void;
    availableDeals: DealMapping[];
}

declare interface DealMapping {
    dealId: string;
    dealName: string;
    company: string;
}

export declare const DealProgress: FC<DealProgressProps>;

declare interface DealProgressProps {
    deal: Deal;
}

export declare const DealQualification: FC<QualificationAnalysisProps>;

export declare function DealRisk({ deal }: DealRiskProps): JSX_2.Element;

declare interface DealRiskProps {
    deal: Deal;
}

export declare function DealStakeholders({ deal }: DealStakeholdersProps): JSX_2.Element;

declare interface DealStakeholdersProps {
    deal: Deal;
}

declare interface HubspotTask {
    dealId: string;
    taskId: string;
    taskTitle: string;
    taskType: "call" | "email" | "to-do";
    dueDate: string;
    notes: string;
    isOpen?: boolean;
}

declare type Props = {
    /** Set initial value */
    initialValue?: number;
};

declare type QualificationAnalysisProps = {
    deal: Deal;
    onNavigate?: (path: string) => void;
};

declare interface QualificationDetail {
    text: string;
    completed: boolean;
}

declare interface QualificationDetails {
    metrics: QualificationDetail[];
    economicBuyer: QualificationDetail[];
    decisionCriteria: QualificationDetail[];
    decisionProcess: QualificationDetail[];
    paperProcess: QualificationDetail[];
    identifyPain: QualificationDetail[];
    champion: QualificationDetail[];
    competition: QualificationDetail[];
}

declare interface RecommendedAction {
    id: string;
    title: string;
    category: string;
    priority: "low" | "medium" | "high";
    type: "call" | "email" | "to-do";
    addedToHubspot: boolean;
}

declare interface RiskFactor {
    label: string;
    level: "low" | "medium" | "high";
    info: string;
    category: string;
    details: string;
    impact: string;
    metric: string;
    lostDealFrequency: number;
}

declare interface Stakeholder {
    name: string;
    role: string;
    engagementLevel: "Low" | "Medium" | "High";
    contactLink: string;
}

declare type ToasterProps = React.ComponentProps<typeof Toaster>;

export declare const Toastie2: ({ ...props }: ToasterProps) => JSX_2.Element;

export { }
