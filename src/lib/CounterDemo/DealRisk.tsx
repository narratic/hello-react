import {
    AlertTriangle,
    CheckCircle,
    ChevronDown,
    HelpCircle,
    Info,
    // MessageSquare,
    // ThumbsUp,
    // ThumbsDown,
    // Save,
    // X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogFooter,
// } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { Deal } from "@/types";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
// import { toast } from "sonner";

// export const RISK_LEVELS = ["high", "medium", "low"] as const;
// export type RiskLevel = (typeof RISK_LEVELS)[number];
// export type FeedbackReason = (typeof FEEDBACK_REASONS)[number];

// export interface DealRiskUpdate {
//     label: string;
//     newLevel: RiskLevel;
//     comment: string;
// }

// export const FEEDBACK_REASONS = [
//     "Incorrect information",
//     "Missing crucial details",
//     "Bad interpretation",
//     "Other",
// ] as const;

// interface DealRiskFeedback {
//     comment: string;
//     newLevel: string | null;
//     isHelpful?: boolean;
//     reasons?: string[];
// }

// export interface FeedbackContext {
//     dealId: string;
//     componentName: string;
//     dataContext: {
//         riskLevel: string;
//         riskDetails: string;
//         riskMetric: string;
//         riskImpact: string;
//     };
// }

// export interface RiskFeedbackSubmission {
//     riskLabel: string;
//     isHelpful: boolean;
//     reasons: FeedbackReason[];
//     comment: string;
//     context: FeedbackContext;
// }

interface DealRiskProps {
    deal: Deal;
    // onRiskUpdate?: (update: DealRiskUpdate) => void;
    // onFeedbackSubmit?: (feedback: RiskFeedbackSubmission) => void;
}

export function DealRisk({ deal }: DealRiskProps) {
    const [expandedRisks, setExpandedRisks] = useState<string[]>([]);
    // const [editingRisk, setEditingRisk] = useState<string | null>(null);
    // const [riskFeedback, setRiskFeedback] = useState<Record<string, DealRiskFeedback>>({});
    // const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);
    // const [feedbackReasons, setFeedbackReasons] = useState<FeedbackReason[]>([]);
    // const [feedbackComment, setFeedbackComment] = useState("");
    // const [currentRiskLabel, setCurrentRiskLabel] = useState<string>("");

    const sortedRiskFactors = useMemo(() => {
        return [...deal.riskFactors].sort((a, b) => {
            const levelOrder = { high: 0, medium: 1, low: 2 };
            return levelOrder[a.level] - levelOrder[b.level];
        });
    }, [deal.riskFactors]);

    const getRiskIcon = (level: string) => {
        switch (level) {
            case "high":
                return <AlertTriangle className="w-4 h-4" />;
            case "medium":
                return <Info className="w-4 h-4" />;
            case "low":
                return <CheckCircle className="w-4 h-4" />;
            default:
                return null;
        }
    };

    const getRiskColor = (level: string) => {
        switch (level) {
            case "high":
                return "bg-red-100 text-red-800 border-red-200";
            case "medium":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "low":
                return "bg-green-100 text-green-800 border-green-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    const toggleRiskExpansion = (label: string) => {
        setExpandedRisks((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
    };

    // const createFeedbackContext = (risk: Deal["riskFactors"][0]): FeedbackContext => {
    //     return {
    //         dealId: deal.dealId,
    //         componentName: "DealRisk",
    //         dataContext: {
    //             riskLevel: risk.level,
    //             riskDetails: risk.details,
    //             riskMetric: risk.metric,
    //             riskImpact: risk.impact,
    //         },
    //     };
    // };

    // const handleRiskFeedback = (label: string, isHelpful: boolean) => {
    //     if (riskFeedback[label]?.isHelpful === isHelpful) {
    //         return;
    //     }

    //     setRiskFeedback((prev) => ({
    //         ...prev,
    //         [label]: { ...prev[label], isHelpful },
    //     }));

    //     const risk = deal.riskFactors.find((r) => r.label === label);
    //     if (!risk) return;

    //     if (isHelpful) {
    //         onFeedbackSubmit?.({
    //             riskLabel: label,
    //             isHelpful: true,
    //             reasons: [],
    //             comment: "",
    //             context: createFeedbackContext(risk),
    //         });
    //         console.log(
    //             "Feedback submitted:",
    //             feedbackReasons,
    //             feedbackComment,
    //             isHelpful,
    //             createFeedbackContext(risk),
    //         );
    //         toast.success("Thank you for your feedback!");
    //     } else {
    //         setCurrentRiskLabel(label);
    //         setFeedbackDialogOpen(true);
    //     }
    // };

    // const handleFeedbackSubmit = () => {
    //     if (!currentRiskLabel) return;

    //     const risk = deal.riskFactors.find((r) => r.label === currentRiskLabel);
    //     if (!risk) return;

    //     onFeedbackSubmit?.({
    //         riskLabel: currentRiskLabel,
    //         isHelpful: false,
    //         reasons: feedbackReasons,
    //         comment: feedbackComment,
    //         context: createFeedbackContext(risk),
    //     });

    //     setFeedbackDialogOpen(false);
    //     setFeedbackReasons([]);
    //     setFeedbackComment("");
    //     setCurrentRiskLabel("");

    //     toast.success("Thank you for your detailed feedback!");
    // };

    // const handleFeedbackDialogClose = () => {
    //     if (!feedbackDialogOpen) return;

    //     setFeedbackDialogOpen(false);
    //     setFeedbackReasons([]);
    //     setFeedbackComment("");

    //     if (currentRiskLabel) {
    //         setRiskFeedback((prev) => ({
    //             ...prev,
    //             [currentRiskLabel]: { ...prev[currentRiskLabel], isHelpful: undefined },
    //         }));
    //         setCurrentRiskLabel("");
    //     }
    // };

    // const handleEditRisk = (label: string) => {
    //     setEditingRisk(label);
    //     if (!riskFeedback[label]) {
    //         setRiskFeedback((prev) => ({
    //             ...prev,
    //             [label]: { comment: "", newLevel: null },
    //         }));
    //     }
    // };

    // const handleSaveRiskFeedback = (label: string) => {
    //     const feedback = riskFeedback[label];
    //     if (feedback?.newLevel && onRiskUpdate) {
    //         onRiskUpdate({
    //             label,
    //             newLevel: feedback.newLevel as RiskLevel,
    //             comment: feedback.comment || "",
    //         });
    //     }
    //     toast.success("Information updated");
    //     setEditingRisk(null);
    //     setExpandedRisks((prev) => prev.filter((item) => item !== label));
    // };

    // const handleCancelRiskFeedback = (label: string) => {
    //     setEditingRisk(null);
    //     setRiskFeedback((prev) => ({
    //         ...prev,
    //         [label]: { comment: "", newLevel: null },
    //     }));
    // };

    return (
        <Card className="shadow-lg w-full max-w-3xl mx-auto my-8">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-800">Risk Assessment</CardTitle>
                </div>
                <p className="text-sm text-slate-500">Identify and assess potential obstacles in the deal process</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {sortedRiskFactors.map((risk, index) => (
                        <div key={index} className={`p-4 rounded-lg border ${getRiskColor(risk.level)}`}>
                            <div
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer space-y-2 sm:space-y-0"
                                onClick={() => toggleRiskExpansion(risk.label)}
                            >
                                <div className="flex items-center space-x-3">
                                    {getRiskIcon(risk.level)}
                                    <span className="font-semibold text-sm sm:text-base">{risk.label}</span>
                                </div>
                                <div className="flex items-center justify-between sm:justify-end space-x-4">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                                                    <span>{risk.lostDealFrequency} deals lost</span>
                                                    <HelpCircle className="w-3 h-3 text-muted-foreground" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="max-w-xs">
                                                <p>
                                                    This factor contributed to {risk.lostDealFrequency} lost deals in
                                                    the past. Addressing this early can help avoid the same outcome.
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                            expandedRisks.includes(risk.label) ? "transform rotate-180" : ""
                                        }`}
                                    />
                                </div>
                            </div>
                            {expandedRisks.includes(risk.label) && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 space-y-4"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Details</h4>
                                            <p className="text-sm text-slate-600">{risk.details}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Impact</h4>
                                            <p className="text-sm text-slate-600">{risk.impact}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Key Metric</h4>
                                        <p className="text-sm text-slate-600">{risk.metric}</p>
                                    </div>
                                    {/* <div className="flex items-center justify-between border-t pt-4 text-slate-600">
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm font-medium">Is this information helpful?</p>
                                            <div className="flex space-x-2">
                                                <Button
                                                    variant={
                                                        riskFeedback[risk.label]?.isHelpful === true
                                                            ? "default"
                                                            : "ghost"
                                                    }
                                                    size="sm"
                                                    onClick={() => handleRiskFeedback(risk.label, true)}
                                                >
                                                    <ThumbsUp className="w-4 h-4 mr-1" />
                                                    Yes
                                                </Button>
                                                <Button
                                                    variant={
                                                        riskFeedback[risk.label]?.isHelpful === false
                                                            ? "default"
                                                            : "ghost"
                                                    }
                                                    size="sm"
                                                    onClick={() => handleRiskFeedback(risk.label, false)}
                                                >
                                                    <ThumbsDown className="w-4 h-4 mr-1" />
                                                    No
                                                </Button>
                                            </div>
                                        </div>
                                        {editingRisk !== risk.label ? (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleEditRisk(risk.label)}
                                            >
                                                <MessageSquare className="w-4 h-4 mr-1" />
                                                Suggest Changes
                                            </Button>
                                        ) : (
                                            <div className="flex space-x-2 text-slate-600">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleSaveRiskFeedback(risk.label)}
                                                >
                                                    <Save className="w-4 h-4 mr-1" />
                                                    Save
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleCancelRiskFeedback(risk.label)}
                                                >
                                                    <X className="w-4 h-4 mr-1" />
                                                    Cancel
                                                </Button>
                                            </div>
                                        )}
                                    </div> */}
                                    {/* {editingRisk === risk.label && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-4 text-slate-600"
                                        >
                                            <div>
                                                <Label htmlFor={`comment-${risk.label}`}>Comment</Label>
                                                <Textarea
                                                    id={`comment-${risk.label}`}
                                                    placeholder="Add your thoughts on this risk assessment..."
                                                    className="bg-white"
                                                    value={riskFeedback[risk.label]?.comment || ""}
                                                    onChange={(e) =>
                                                        setRiskFeedback((prev) => ({
                                                            ...prev,
                                                            [risk.label]: {
                                                                ...prev[risk.label],
                                                                comment: e.target.value,
                                                            },
                                                        }))
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label>Suggested Risk Level</Label>
                                                <RadioGroup
                                                    value={riskFeedback[risk.label]?.newLevel || ""}
                                                    onValueChange={(value) =>
                                                        setRiskFeedback((prev) => ({
                                                            ...prev,
                                                            [risk.label]: {
                                                                ...prev[risk.label],
                                                                newLevel: value as RiskLevel,
                                                            },
                                                        }))
                                                    }
                                                >
                                                    {RISK_LEVELS.map((level) => (
                                                        <div key={level} className="flex items-center space-x-2">
                                                            <RadioGroupItem
                                                                value={level}
                                                                id={`${level}-${risk.label}`}
                                                            />
                                                            <Label
                                                                htmlFor={`${level}-${risk.label}`}
                                                                className="capitalize"
                                                            >
                                                                {level}
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </div>
                                        </motion.div>
                                    )} */}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>

            {/* <Dialog
                open={feedbackDialogOpen}
                onOpenChange={(open) => {
                    if (!open) {
                        handleFeedbackDialogClose();
                    }
                }}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Give feedback</DialogTitle>
                        <DialogDescription>
                            Provide additional feedback on this information. Select all that apply.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {FEEDBACK_REASONS.map((reason) => (
                            <div key={reason} className="flex items-center space-x-2">
                                <Checkbox
                                    id={reason}
                                    checked={feedbackReasons.includes(reason)}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            setFeedbackReasons((prev) => [...prev, reason]);
                                        } else {
                                            setFeedbackReasons((prev) => prev.filter((r) => r !== reason));
                                        }
                                    }}
                                />
                                <label htmlFor={reason}>{reason}</label>
                            </div>
                        ))}
                        <div>
                            <Label htmlFor="feedback-comment">How can we improve? (optional)</Label>
                            <Textarea
                                id="feedback-comment"
                                placeholder="Your feedback..."
                                value={feedbackComment}
                                onChange={(e) => setFeedbackComment(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={handleFeedbackDialogClose}>
                            Cancel
                        </Button>
                        <Button onClick={handleFeedbackSubmit} disabled={feedbackReasons.length === 0}>
                            Submit
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog> */}
        </Card>
    );
}
