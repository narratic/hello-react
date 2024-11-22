import type { FC } from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import type { Deal, QualificationDetails } from "@/types";
import { HelpCircle, ChevronDown, Check, X, AlertTriangle, Lightbulb, Settings } from "lucide-react";
import { getMEDDPICCIcon } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
type QualificationAnalysisProps = {
    deal: Deal;
    onNavigate?: (path: string) => void;
};

export const DealQualification: FC<QualificationAnalysisProps> = ({ deal, onNavigate }) => {
    const [expandedSections, setExpandedSections] = useState<string[]>([]);
    const [showScoreDialog, setShowScoreDialog] = useState(false);

    const toggleSection = (key: string) => {
        setExpandedSections((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
    };

    const formatName = (name: string) => {
        return name
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const getIcon = (key: string) => {
        if (key === "implications") {
            return Lightbulb;
        }
        return getMEDDPICCIcon(key);
    };

    return (
        <>
            <Card className="shadow-lg w-full max-w-3xl mx-auto my-8">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="space-y-1.5">
                        {/* Space must be manually added for constency with other card headers*/}
                        <CardTitle className="">Deal Qualification</CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Assess this deal's qualification strength according to MEDDPICC.
                            {/* Draft explanation when making it interactive again */}
                            {/* You can adjust each criterion
                        to refine the prediction based on your knowledge. */}
                        </p>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => onNavigate?.("/deals/qualification-framework")}
                                >
                                    <Settings className="w-3 h-3" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Configure qualification framework</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-muted-foreground">Criteria</span>
                            <div className="flex items-center space-x-1">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex items-center space-x-1 text-sm text-muted-foreground cursor-help">
                                                <span className="text-sm font-medium">Score</span>
                                                <HelpCircle className="w-3 h-3" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="w-80">
                                            <div className="space-y-4">
                                                <p className="text-sm">
                                                    This score (0-5) indicates your progress in addressing key sales
                                                    qualification criteria. You can expand each category to view
                                                    details.{" "}
                                                    <button
                                                        className="h-auto p-0"
                                                        onClick={() => setShowScoreDialog(true)}
                                                    >
                                                        Learn more
                                                    </button>
                                                </p>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>

                        {Object.entries(deal.meddpicc).map(([key, value], index) => {
                            const Icon = getIcon(key);
                            const isExpanded = expandedSections.includes(key);
                            const dealBreaker = deal.dealBreakers[key as keyof typeof deal.dealBreakers];

                            return (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-48 flex items-center space-x-2">
                                            {Icon && <Icon className="w-5 h-5" />}
                                            <span>{formatName(key)}</span>
                                            {dealBreaker && <AlertTriangle className="w-4 h-4 text-red-500" />}
                                        </div>
                                        <div className="flex-1 flex items-center space-x-4">
                                            <div className="flex-1">
                                                <Progress value={(value * 100) / 5} />
                                            </div>
                                            <div className="w-12 text-center">
                                                <span className="text-sm font-medium">{value}/5</span>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="p-0"
                                                onClick={() => toggleSection(key)}
                                            >
                                                <ChevronDown
                                                    className={`h-4 w-4 transform transition-transform duration-200 ${
                                                        isExpanded ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </Button>
                                        </div>
                                    </div>

                                    {isExpanded && (
                                        <div className="ml-12 pl-4 border-l border-slate-200">
                                            {dealBreaker && (
                                                <div className="inline-flex items-center space-x-2 py-2 text-red-600 bg-red-50 px-3 rounded-md mb-2">
                                                    <AlertTriangle className="w-4 h-4 shrink-0" />
                                                    <span className="text-sm font-medium">{dealBreaker}</span>
                                                </div>
                                            )}
                                            <div className="space-y-2">
                                                {[...deal.qualificationDetails[key as keyof QualificationDetails]]
                                                    .sort((a, b) =>
                                                        b.completed === a.completed ? 0 : b.completed ? 1 : -1,
                                                    )
                                                    .map((detail, index) => (
                                                        <div key={index} className="flex items-center space-x-2">
                                                            {detail.completed ? (
                                                                <Check className="h-4 w-4 text-green-500" />
                                                            ) : (
                                                                <X className="h-4 w-4 text-muted-foreground" />
                                                            )}
                                                            <span
                                                                className={
                                                                    detail.completed
                                                                        ? "text-slate-600"
                                                                        : "text-muted-foreground"
                                                                }
                                                            >
                                                                {detail.text}
                                                            </span>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Dialog open={showScoreDialog} onOpenChange={setShowScoreDialog}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Qualification Score</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <p className="font-medium mb-2">What the score means</p>
                            <p className="text-sm text-muted-foreground">
                                The score (0-5) reflects your progress in qualifying an opportunity across key criteria
                                of the framework you have selected.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium mb-2">Score interpretation</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>
                                    <strong>0</strong> = No progress
                                </li>
                                <li>
                                    <strong>1-2</strong> = Limited progress
                                </li>
                                <li>
                                    <strong>3</strong> = Moderate progress
                                </li>
                                <li>
                                    <strong>4</strong> = Strong progress
                                </li>
                                <li>
                                    <strong>5</strong> = Full progress
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium mb-2">How the score is calculated</p>
                            <p className="text-sm text-muted-foreground">
                                Each component's score depends on how many weighted conditions are met. Meeting more
                                conditions increases the score.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium mb-2">What are deal breakers?</p>
                            <p className="text-sm text-muted-foreground">
                                Any flagged deal breakers are critical issues that may block the deal and need immediate
                                attention.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <p className="font-medium mb-2">Adjust the framework</p>

                            <p className="text-sm text-muted-foreground">
                                You can adjust the qualification questions and weights here{" "}
                                <button
                                    className="h-auto p-0"
                                    onClick={() => onNavigate?.("/deals/qualification-framework")}
                                >
                                    qualification framework
                                </button>
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => onNavigate?.("/deals/qualification-framework")} variant="outline">
                            Configure framework
                            <Settings className="w-3 h-3 ml-1" />
                        </Button>
                        <Button onClick={() => setShowScoreDialog(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
