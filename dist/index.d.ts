import { FC } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { toast } from 'sonner';
import { Toaster as Toaster_2 } from 'sonner';

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
    dealBreakers: DealBreakers;
    qualificationDetails: QualificationDetails;
}

declare interface DealBreakers {
    metrics: string | null;
    economic_buyer: string | null;
    decision_criteria: string | null;
    decision_process: string | null;
    paper_process: string | null;
    implications: string | null;
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
    economic_buyer: QualificationDetail[];
    decision_criteria: QualificationDetail[];
    decision_process: QualificationDetail[];
    paper_process: QualificationDetail[];
    implications: QualificationDetail[];
    champion: QualificationDetail[];
    competition: QualificationDetail[];
}

declare interface RecommendedAction {
    text: string;
    priority: "low" | "medium" | "high";
    type: string;
    completed: boolean;
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

export { toast }

export declare const Toaster: ({ ...props }: ToasterProps) => JSX_2.Element;

declare type ToasterProps = React.ComponentProps<typeof Toaster_2>;

export { }
