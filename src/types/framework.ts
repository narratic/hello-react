export interface Question {
    question: string;
    weighting: number;
    label: string;
}

export interface FrameworkSection {
    name: string;
    questions: Question[];
    dealBreaker?: string;
}

export interface Framework {
    name: string;
    sections: Record<string, FrameworkSection>;
    enabled: boolean;
    description?: string;
}

export interface FrameworkState {
    selectedFramework: string;
    frameworks: Record<string, Framework>;
}

export const BANT_DATA: Framework = {
    name: "BANT",
    enabled: true,
    description:
        "Budget, Authority, Need, Timeline - A fundamental qualification framework focused on key buying criteria.",
    sections: {
        B: {
            name: "Budget",
            questions: [
                {
                    question: "Has the prospect confirmed they have budget allocated for this solution?",
                    weighting: 5,
                    label: "Budget Confirmation",
                },
                {
                    question: "What is the available budget range for this project?",
                    weighting: 4,
                    label: "Budget Range",
                },
                {
                    question: "Is there a formal procurement process we need to follow?",
                    weighting: 3,
                    label: "Procurement Process",
                },
                {
                    question: "When does the fiscal year end and how does that impact the purchase timeline?",
                    weighting: 3,
                    label: "Fiscal Timing",
                },
            ],
        },
        A: {
            name: "Authority",
            questions: [
                {
                    question: "Have you identified the key decision maker?",
                    weighting: 5,
                    label: "Decision Maker",
                },
                {
                    question: "Who else needs to be involved in the decision-making process?",
                    weighting: 4,
                    label: "Stakeholders",
                },
                {
                    question: "What is the approval process for a purchase of this size?",
                    weighting: 4,
                    label: "Approval Process",
                },
                {
                    question: "Are there any external parties that need to be consulted?",
                    weighting: 3,
                    label: "External Input",
                },
            ],
        },
        N: {
            name: "Need",
            questions: [
                {
                    question: "What are the primary pain points driving this initiative?",
                    weighting: 5,
                    label: "Pain Points",
                },
                {
                    question: "What happens if these challenges aren't addressed?",
                    weighting: 4,
                    label: "Impact",
                },
                {
                    question: "How long have these issues been affecting the business?",
                    weighting: 3,
                    label: "Problem History",
                },
                {
                    question: "What solutions have been tried before?",
                    weighting: 3,
                    label: "Previous Solutions",
                },
            ],
        },
        T: {
            name: "Timeline",
            questions: [
                {
                    question: "Is there a defined timeline for implementation?",
                    weighting: 4,
                    label: "Implementation Timeline",
                },
                {
                    question: "What are the key milestones in your decision-making process?",
                    weighting: 4,
                    label: "Decision Milestones",
                },
                {
                    question: "Are there any external factors driving your timeline?",
                    weighting: 3,
                    label: "External Drivers",
                },
                {
                    question: "What needs to happen before a purchase decision can be made?",
                    weighting: 4,
                    label: "Prerequisites",
                },
            ],
        },
    },
};

export const CHALLENGER_SALE_DATA: Framework = {
    name: "Challenger Sale",
    enabled: true,
    description: "A framework focused on teaching, tailoring, and taking control of the sales conversation.",
    sections: {
        TC: {
            name: "Teaching for Differentiation",
            questions: [
                {
                    question: "Have you identified unique insights about their business?",
                    weighting: 5,
                    label: "Unique Insights",
                },
                {
                    question: "Can you articulate industry trends they may not be aware of?",
                    weighting: 4,
                    label: "Industry Trends",
                },
                {
                    question: "Have you prepared a compelling commercial insight?",
                    weighting: 5,
                    label: "Commercial Insight",
                },
            ],
        },
        TP: {
            name: "Tailoring the Message",
            questions: [
                {
                    question: "Have you adapted your message to different stakeholders?",
                    weighting: 4,
                    label: "Stakeholder Adaptation",
                },
                {
                    question: "Is your value proposition resonating with their specific situation?",
                    weighting: 5,
                    label: "Value Proposition Relevance",
                },
                {
                    question: "Have you connected your solution to their business outcomes?",
                    weighting: 4,
                    label: "Solution-Business Outcome Link",
                },
            ],
        },
        TC2: {
            name: "Taking Control",
            questions: [
                {
                    question: "Are you effectively managing and directing the sales conversation?",
                    weighting: 4,
                    label: "Conversation Control",
                },
                {
                    question: "Have you established yourself as a trusted advisor?",
                    weighting: 5,
                    label: "Trusted Advisor Status",
                },
                {
                    question: "Are you pushing back constructively when appropriate?",
                    weighting: 4,
                    label: "Constructive Pushback",
                },
            ],
        },
    },
};

export const MEDDPICC_DATA: Framework = {
    name: "MEDDPICC",
    enabled: true,
    description:
        "Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Implications, Champion, Competition",
    sections: {
        M: {
            name: "Metrics",
            questions: [
                {
                    question:
                        "Have you identified the specific metrics or KPIs that are most important to your prospect?",
                    weighting: 5,
                    label: "Key Metrics Identified",
                },
                {
                    question: "Do you know the current performance levels of these metrics?",
                    weighting: 4,
                    label: "Current Performance",
                },
                {
                    question: "Are you aware of any benchmark or target metrics the prospect aims to achieve?",
                    weighting: 4,
                    label: "Benchmark Metrics",
                },
                {
                    question: "Have you confirmed how the prospect measures and tracks these metrics?",
                    weighting: 3,
                    label: "Metrics Tracking",
                },
                {
                    question:
                        "Do you understand the financial or business impact of improving these metrics for the prospect?",
                    weighting: 5,
                    label: "Impact of Improvement",
                },
                {
                    question: "Have you mapped your solution's benefits directly to the prospect's key metrics?",
                    weighting: 5,
                    label: "Solution-Metrics Mapping",
                },
                {
                    question: "Can you demonstrate how your solution will specifically improve these metrics?",
                    weighting: 5,
                    label: "Solution Impact",
                },
                {
                    question: "Have you discussed and agreed upon how success will be measured post-implementation?",
                    weighting: 4,
                    label: "Success Measurement",
                },
            ],
            dealBreaker:
                "If the prospect lacks quantifiable metrics or KPIs to improve, proceeding may not yield measurable results.",
        },
        E: {
            name: "Economic Buyer",
            questions: [
                {
                    question:
                        "Have you identified and engaged with the person who has the final purchasing authority (the economic buyer)?",
                    weighting: 5,
                    label: "Economic Buyer Identified",
                },
                {
                    question: "Do you understand the economic buyer's key priorities, motivations, and pain points?",
                    weighting: 4,
                    label: "Buyer Priorities",
                },
                {
                    question: "Are you aware of how the economic buyer evaluates ROI and measures success?",
                    weighting: 4,
                    label: "ROI Evaluation",
                },
                {
                    question: "Have you addressed any specific concerns or objections raised by the economic buyer?",
                    weighting: 3,
                    label: "Concerns Addressed",
                },
                {
                    question: "Do you know the economic buyer's budget and any financial constraints?",
                    weighting: 4,
                    label: "Budget Awareness",
                },
                {
                    question:
                        "Have you tailored your proposal to align with the economic buyer's specific needs and objectives?",
                    weighting: 5,
                    label: "Proposal Alignment",
                },
                {
                    question: "Have you established a strong relationship or rapport with the economic buyer?",
                    weighting: 3,
                    label: "Buyer Relationship",
                },
                {
                    question:
                        "Is the economic buyer fully aware of the unique value your solution offers over competitors?",
                    weighting: 4,
                    label: "Solution Value Awareness",
                },
                {
                    question: "Do you understand the economic buyer's decision-making process and timeline?",
                    weighting: 4,
                    label: "Decision Timeline",
                },
            ],
            dealBreaker:
                "Inability to engage with the economic buyer can significantly hinder the chance of closing the deal.",
        },
        D: {
            name: "Decision Criteria",
            questions: [
                {
                    question: "Have you identified all the key decision criteria the prospect will use?",
                    weighting: 5,
                    label: "Decision Criteria Identified",
                },
                {
                    question:
                        "Do you understand the relative importance or weighting of each decision criterion to the prospect?",
                    weighting: 4,
                    label: "Criteria Weighting",
                },
                {
                    question:
                        "Have you confirmed how your solution aligns with each of the prospect's decision criteria?",
                    weighting: 5,
                    label: "Solution Alignment",
                },
                {
                    question:
                        "Are there any areas where your solution does not meet the decision criteria, and have you addressed them?",
                    weighting: 4,
                    label: "Unmet Criteria Addressed",
                },
                {
                    question:
                        "Have you influenced or helped shape the prospect's decision criteria to favor your solution?",
                    weighting: 3,
                    label: "Influence Criteria",
                },
                {
                    question:
                        "Do you know if there are any compliance, regulatory, or legal requirements affecting the decision criteria?",
                    weighting: 3,
                    label: "Compliance Requirements",
                },
                {
                    question: "Are the decision criteria formally documented, and have you obtained a copy?",
                    weighting: 2,
                    label: "Criteria Documentation",
                },
                {
                    question:
                        "Do you understand the prospect's priorities among price, features, service, and other factors?",
                    weighting: 4,
                    label: "Priorities",
                },
                {
                    question:
                        "Have you ensured that your proposal addresses all the prospect's decision criteria comprehensively?",
                    weighting: 5,
                    label: "Proposal Coverage",
                },
            ],
            dealBreaker:
                "If your solution cannot meet the prospect's primary decision criteria, winning the deal may be impossible.",
        },
        P: {
            name: "Decision Process",
            questions: [
                {
                    question: "Have you thoroughly mapped out the prospect's entire decision-making process?",
                    weighting: 5,
                    label: "Process Mapping",
                },
                {
                    question: "Do you know all the steps and stages involved from evaluation to final decision?",
                    weighting: 4,
                    label: "Decision Stages",
                },
                {
                    question:
                        "Have you identified all the stakeholders involved in the decision process and their roles?",
                    weighting: 5,
                    label: "Stakeholder Roles",
                },
                {
                    question: "Do you understand the influence and concerns of each stakeholder?",
                    weighting: 4,
                    label: "Stakeholder Influence",
                },
                {
                    question:
                        "Are you aware of the timelines, deadlines, and key dates for each stage of the decision process?",
                    weighting: 4,
                    label: "Key Dates",
                },
                {
                    question: "Have you identified potential obstacles or bottlenecks that could delay the decision?",
                    weighting: 3,
                    label: "Potential Obstacles",
                },
                {
                    question: "Do you know what approvals are required and who grants them at each stage?",
                    weighting: 4,
                    label: "Approval Requirements",
                },
                {
                    question:
                        "Have you prepared and provided all necessary documentation and information required by the prospect?",
                    weighting: 5,
                    label: "Documentation Prepared",
                },
                {
                    question:
                        "Do you understand how decisions are communicated internally within the prospect's organization?",
                    weighting: 3,
                    label: "Internal Communication",
                },
                {
                    question:
                        "Have you planned and scheduled follow-ups and next steps in alignment with the prospect's decision process?",
                    weighting: 4,
                    label: "Follow-Up Planning",
                },
            ],
            dealBreaker: "An undefined or overly complex decision process can stall the deal indefinitely.",
        },
        PP: {
            name: "Paper Process",
            questions: [
                {
                    question: "Do you understand the prospect's procurement and contracting processes in detail?",
                    weighting: 5,
                    label: "Procurement Process",
                },
                {
                    question:
                        "Are you aware of all legal, compliance, or regulatory requirements affecting the contract?",
                    weighting: 4,
                    label: "Compliance Awareness",
                },
                {
                    question:
                        "Have you identified the individuals responsible for contract approvals within the prospect's organization?",
                    weighting: 4,
                    label: "Approval Contacts",
                },
                {
                    question: "Do you know the expected timelines for each step in the paper process?",
                    weighting: 4,
                    label: "Timeline for Paper Process",
                },
                {
                    question: "Have you prepared and submitted all necessary contractual documents and agreements?",
                    weighting: 5,
                    label: "Document Preparedness",
                },
                {
                    question:
                        "Are there any specific contract terms or clauses that are critical or non-negotiable for the prospect, and have you addressed them?",
                    weighting: 4,
                    label: "Non-Negotiable Terms",
                },
                {
                    question:
                        "Have you anticipated potential delays or bottlenecks in the paper process, and planned accordingly?",
                    weighting: 3,
                    label: "Delay Planning",
                },
                {
                    question:
                        "Do you understand the prospect's requirements for handling NDAs, MSAs, and other legal documents?",
                    weighting: 3,
                    label: "Legal Document Requirements",
                },
                {
                    question:
                        "Have you engaged directly with the prospect's legal and procurement teams to facilitate the process?",
                    weighting: 4,
                    label: "Direct Engagement",
                },
                {
                    question:
                        "Are you familiar with any required formats, systems, or platforms (e.g., electronic procurement portals) used by the prospect?",
                    weighting: 3,
                    label: "Format and System Familiarity",
                },
            ],
            dealBreaker:
                "Non-negotiable legal terms that conflict with your company's policies may prevent the deal from proceeding.",
        },
        I: {
            name: "Identify Pain",
            questions: [
                {
                    question:
                        "Have you clearly identified and understood the specific pain points or challenges the prospect is facing?",
                    weighting: 5,
                    label: "Pain Points Identified",
                },
                {
                    question: "Have you explored and understood the root causes of these pain points?",
                    weighting: 4,
                    label: "Root Cause Exploration",
                },
                {
                    question:
                        "Have you quantified the impact (financial, operational, etc.) of these pain points on the prospect's business?",
                    weighting: 5,
                    label: "Pain Point Impact",
                },
                {
                    question: "Do you know the urgency with which the prospect needs to address these pain points?",
                    weighting: 4,
                    label: "Pain Point Urgency",
                },
                {
                    question:
                        "Have you discussed the potential consequences or risks of not addressing these pain points with the prospect?",
                    weighting: 4,
                    label: "Risks of Inaction",
                },
                {
                    question:
                        "Are you aware of any previous solutions or attempts the prospect has made to resolve these issues, and why they failed?",
                    weighting: 3,
                    label: "Previous Solution Attempts",
                },
                {
                    question:
                        "Do you understand how these pain points affect the prospect's strategic goals, both short-term and long-term?",
                    weighting: 4,
                    label: "Strategic Impact",
                },
                {
                    question:
                        "Have you confirmed that your solution effectively addresses and solves these pain points?",
                    weighting: 5,
                    label: "Solution Validation",
                },
                {
                    question:
                        "Have you prioritized the pain points based on their impact and urgency for the prospect?",
                    weighting: 3,
                    label: "Pain Point Prioritization",
                },
                {
                    question:
                        "Do you know which stakeholders within the prospect's organization are most affected by these pain points?",
                    weighting: 3,
                    label: "Stakeholder Impact",
                },
            ],
            dealBreaker:
                "If the prospect does not acknowledge any pain points or lacks urgency, there may be no compelling reason to buy.",
        },
        C: {
            name: "Champion",
            questions: [
                {
                    question: "Have you identified and confirmed a champion within the prospect's organization?",
                    weighting: 5,
                    label: "Champion Identified",
                },
                {
                    question:
                        "Does the champion have significant influence and credibility among decision-makers and stakeholders?",
                    weighting: 4,
                    label: "Champion Influence",
                },
                {
                    question: "Is the champion actively advocating for your solution within their organization?",
                    weighting: 5,
                    label: "Champion Advocacy",
                },
                {
                    question: "Does the champion fully understand and believe in the value your solution provides?",
                    weighting: 4,
                    label: "Champion Solution Belief",
                },
                {
                    question:
                        "Has the champion assisted you in navigating the organization's structure and connecting with key stakeholders?",
                    weighting: 4,
                    label: "Champion Support",
                },
                {
                    question:
                        "Is the champion willing to share internal information and insights that can help your sales process?",
                    weighting: 3,
                    label: "Champion Information Sharing",
                },
                {
                    question:
                        "Have you provided the champion with the necessary tools, information, and support to promote your solution effectively?",
                    weighting: 4,
                    label: "Champion Enablement",
                },
                {
                    question: "Is the champion committed to helping you overcome internal objections or hurdles?",
                    weighting: 4,
                    label: "Champion Commitment",
                },
                {
                    question: "Do you maintain regular and open communication with the champion?",
                    weighting: 3,
                    label: "Champion Communication",
                },
                {
                    question:
                        "Has the champion provided feedback on internal perceptions and discussions about your solution?",
                    weighting: 3,
                    label: "Champion Feedback",
                },
            ],
            dealBreaker:
                "Without a strong internal champion, you may lack the necessary support to drive the deal forward.",
        },
        CC: {
            name: "Competition",
            questions: [
                {
                    question: "Are you aware of all the competitors the prospect is considering?",
                    weighting: 5,
                    label: "Competitor Awareness",
                },
                {
                    question:
                        "Do you understand the strengths and weaknesses of these competitors relative to your solution?",
                    weighting: 4,
                    label: "Competitor Comparison",
                },
                {
                    question:
                        "Have you objectively analyzed and compared your solution to the competition in key decision areas?",
                    weighting: 5,
                    label: "Solution Comparison",
                },
                {
                    question:
                        "Have you identified and communicated your competitive advantages and unique selling points?",
                    weighting: 5,
                    label: "Competitive Advantages",
                },
                {
                    question:
                        "Do you understand the strategies and tactics competitors are using to win the prospect's business?",
                    weighting: 4,
                    label: "Competitor Strategies",
                },
                {
                    question:
                        "Have you addressed any misconceptions or objections the prospect has related to competitors?",
                    weighting: 3,
                    label: "Objection Handling",
                },
                {
                    question:
                        "Are you prepared to counter competitive offers or tactics, such as pricing discounts or added features?",
                    weighting: 4,
                    label: "Competitive Countermeasures",
                },
                {
                    question:
                        "Do you know if the prospect has any biases or preferences toward a competitor, and have you addressed them?",
                    weighting: 3,
                    label: "Competitor Biases",
                },
                {
                    question:
                        "Have you emphasized your solution's unique value propositions that differentiate you from the competition?",
                    weighting: 5,
                    label: "Differentiation",
                },
                {
                    question:
                        "Are you actively monitoring changes in the competitive landscape throughout the sales process?",
                    weighting: 3,
                    label: "Competitor Monitoring",
                },
            ],
            dealBreaker:
                "An exclusive agreement between the prospect and a competitor can block your ability to win the deal.",
        },
    },
};

export const MEDDIC_DATA: Framework = {
    name: "MEDDIC",
    enabled: true,
    description:
        "Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion - A structured approach to enterprise sales.",
    sections: {
        M: {
            name: "Metrics",
            questions: [
                {
                    question: "Have you identified key performance indicators?",
                    weighting: 5,
                    label: "KPIs Identified",
                },
                {
                    question: "Can you quantify the business impact?",
                    weighting: 4,
                    label: "Business Impact Quantified",
                },
                {
                    question: "Have success metrics been defined?",
                    weighting: 4,
                    label: "Success Metrics Defined",
                },
            ],
        },
        E: {
            name: "Economic Buyer",
            questions: [
                {
                    question: "Have you identified the economic buyer?",
                    weighting: 5,
                    label: "Economic Buyer Identified",
                },
                {
                    question: "Do you understand their personal win?",
                    weighting: 4,
                    label: "Personal Win Understood",
                },
                {
                    question: "Have you established direct communication?",
                    weighting: 4,
                    label: "Direct Communication Established",
                },
            ],
        },
        D: {
            name: "Decision Criteria",
            questions: [
                {
                    question: "Do you understand their technical criteria?",
                    weighting: 4,
                    label: "Technical Criteria Understood",
                },
                {
                    question: "Have business criteria been defined?",
                    weighting: 4,
                    label: "Business Criteria Defined",
                },
                {
                    question: "Are you aligned with their success criteria?",
                    weighting: 5,
                    label: "Success Criteria Alignment",
                },
            ],
        },
        D2: {
            name: "Decision Process",
            questions: [
                {
                    question: "Have you mapped the decision process?",
                    weighting: 5,
                    label: "Decision Process Mapped",
                },
                {
                    question: "Do you know all decision makers?",
                    weighting: 4,
                    label: "Decision Makers Identified",
                },
                {
                    question: "Is the timeline understood?",
                    weighting: 4,
                    label: "Timeline Understood",
                },
            ],
        },
        I: {
            name: "Identify Pain",
            questions: [
                {
                    question: "Have you identified technical pain points?",
                    weighting: 4,
                    label: "Technical Pain Points Identified",
                },
                {
                    question: "Do you understand business impact?",
                    weighting: 5,
                    label: "Business Impact Understood",
                },
                {
                    question: "Have you quantified the cost of pain?",
                    weighting: 4,
                    label: "Cost of Pain Quantified",
                },
            ],
        },
        C: {
            name: "Champion",
            questions: [
                {
                    question: "Have you identified a strong champion?",
                    weighting: 5,
                    label: "Champion Identified",
                },
                {
                    question: "Is your champion influential?",
                    weighting: 4,
                    label: "Champion Influence",
                },
                {
                    question: "Does your champion understand your solution?",
                    weighting: 4,
                    label: "Champion Solution Understanding",
                },
            ],
        },
    },
};

export const SOLUTION_SELLING_DATA: Framework = {
    name: "Solution Selling",
    enabled: true,
    description: "A problem-led selling approach focusing on the buyer's pain points and desired outcomes.",
    sections: {
        PP: {
            name: "Pain Points",
            questions: [
                {
                    question: "Have you identified their critical business issues?",
                    weighting: 5,
                    label: "Critical Business Issues",
                },
                {
                    question: "Can you quantify the impact of their current challenges?",
                    weighting: 4,
                    label: "Challenge Impact Quantified",
                },
                {
                    question: "Have you documented their pain points in their own words?",
                    weighting: 4,
                    label: "Pain Points Documented",
                },
            ],
        },
        PS: {
            name: "Power Sponsor",
            questions: [
                {
                    question: "Have you identified a power sponsor?",
                    weighting: 5,
                    label: "Power Sponsor Identified",
                },
                {
                    question: "Is your sponsor actively supporting the solution?",
                    weighting: 4,
                    label: "Sponsor Support",
                },
                {
                    question: "Does your sponsor have budget authority?",
                    weighting: 4,
                    label: "Sponsor Budget Authority",
                },
            ],
        },
        VS: {
            name: "Vision of Solution",
            questions: [
                {
                    question: "Have you co-created a vision of the solution?",
                    weighting: 5,
                    label: "Solution Vision Co-Creation",
                },
                {
                    question: "Is there agreement on success criteria?",
                    weighting: 4,
                    label: "Success Criteria Agreement",
                },
                {
                    question: "Have you documented the expected ROI?",
                    weighting: 4,
                    label: "Expected ROI Documented",
                },
            ],
        },
    },
};

export const SPICED_DATA: Framework = {
    name: "SPICED",
    enabled: true,
    description:
        "Situation, Pain, Impact, Critical Event, Decision - A framework for understanding and qualifying opportunities.",
    sections: {
        S: {
            name: "Situation",
            questions: [
                {
                    question: "Do you understand their current business situation?",
                    weighting: 4,
                    label: "Business Situation",
                },
                {
                    question: "Have you mapped their organizational structure?",
                    weighting: 3,
                    label: "Organizational Structure",
                },
                {
                    question: "Do you know their market position?",
                    weighting: 4,
                    label: "Market Position",
                },
            ],
        },
        P: {
            name: "Pain",
            questions: [
                {
                    question: "Have you identified their key pain points?",
                    weighting: 5,
                    label: "Key Pain Points",
                },
                {
                    question: "Can you quantify the cost of their pain?",
                    weighting: 4,
                    label: "Cost of Pain",
                },
                {
                    question: "Do you understand who is affected by these issues?",
                    weighting: 4,
                    label: "Affected Stakeholders",
                },
            ],
        },
        I: {
            name: "Impact",
            questions: [
                {
                    question: "Have you calculated the financial impact?",
                    weighting: 5,
                    label: "Financial Impact",
                },
                {
                    question: "Do you understand the operational impact?",
                    weighting: 4,
                    label: "Operational Impact",
                },
                {
                    question: "Have you identified the strategic impact?",
                    weighting: 4,
                    label: "Strategic Impact",
                },
            ],
        },
        C: {
            name: "Critical Event",
            questions: [
                {
                    question: "Is there a compelling event driving action?",
                    weighting: 5,
                    label: "Compelling Event",
                },
                {
                    question: "Do you understand their sense of urgency?",
                    weighting: 4,
                    label: "Sense of Urgency",
                },
                {
                    question: "Have key deadlines been identified?",
                    weighting: 4,
                    label: "Key Deadlines",
                },
            ],
        },
        D: {
            name: "Decision",
            questions: [
                {
                    question: "Do you understand their decision process?",
                    weighting: 5,
                    label: "Decision Process",
                },
                {
                    question: "Have all decision makers been identified?",
                    weighting: 4,
                    label: "Decision Makers Identified",
                },
                {
                    question: "Is there a clear timeline for decision?",
                    weighting: 4,
                    label: "Decision Timeline",
                },
            ],
        },
    },
};

export const VALUE_BASED_SELLING_DATA: Framework = {
    name: "Value-Based Selling",
    enabled: true,
    description: "A framework focused on communicating and delivering value aligned with customer needs.",
    sections: {
        VD: {
            name: "Value Discovery",
            questions: [
                {
                    question: "Have you identified their key value drivers?",
                    weighting: 5,
                    label: "Key Value Drivers",
                },
                {
                    question: "Do you understand their success metrics?",
                    weighting: 4,
                    label: "Success Metrics",
                },
                {
                    question: "Have you quantified potential value creation?",
                    weighting: 5,
                    label: "Value Creation Quantified",
                },
            ],
        },
        VA: {
            name: "Value Alignment",
            questions: [
                {
                    question: "Is your solution aligned with their value drivers?",
                    weighting: 4,
                    label: "Solution Alignment",
                },
                {
                    question: "Have you demonstrated clear ROI?",
                    weighting: 5,
                    label: "ROI Demonstration",
                },
                {
                    question: "Can you articulate a unique value proposition?",
                    weighting: 4,
                    label: "Unique Value Proposition",
                },
            ],
        },
        VP: {
            name: "Value Proof",
            questions: [
                {
                    question: "Do you have relevant case studies?",
                    weighting: 4,
                    label: "Relevant Case Studies",
                },
                {
                    question: "Can you provide references?",
                    weighting: 3,
                    label: "References",
                },
                {
                    question: "Have you demonstrated proven results?",
                    weighting: 5,
                    label: "Proven Results",
                },
            ],
        },
    },
};

export const AVAILABLE_FRAMEWORKS: Framework[] = [
    BANT_DATA,
    CHALLENGER_SALE_DATA,
    MEDDIC_DATA,
    MEDDPICC_DATA,
    SOLUTION_SELLING_DATA,
    SPICED_DATA,
    VALUE_BASED_SELLING_DATA,
    {
        name: "Custom Framework",
        enabled: false,
        sections: {},
        description: "Create your own custom sales qualification framework.",
    },
];
