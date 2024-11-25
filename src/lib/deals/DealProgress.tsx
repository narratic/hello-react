import type { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { Deal } from "@/types";

const dealStages = [
    "Discovery",
    "Solution Validation",
    "Pricing Communicated",
    "Contract Sent",
    "Closed Won",
    "Closed Lost",
] as const;

type DealStage = (typeof dealStages)[number];

interface DealProgressProps {
    deal: Deal;
}

export const DealProgress: FC<DealProgressProps> = ({ deal }) => {
    const progressionLikelihood: Record<DealStage, number> = {
        Discovery: 75,
        "Solution Validation": 65,
        "Pricing Communicated": 55,
        "Contract Sent": 85,
        "Closed Won": 100,
        "Closed Lost": 0,
    };

    const currentStage = dealStages.includes(deal.dealStage as DealStage)
        ? (deal.dealStage as DealStage)
        : dealStages[0];

    const currentLikelihood = progressionLikelihood[currentStage] || 0;

    return (
        <Card className="shadow-lg w-full max-w-3xl mx-auto my-8">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-800">Deal Progress</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">Current stage and overall progress</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex flex-wrap justify-between text-xs sm:text-sm text-slate-600">
                            {dealStages.map((stage) => (
                                <span key={stage} className={`mb-2 ${currentStage === stage ? "font-bold" : ""}`}>
                                    {stage}
                                </span>
                            ))}
                        </div>
                        <Progress
                            value={((dealStages.indexOf(currentStage) + 1) / dealStages.length) * 100}
                            className="h-2"
                        />
                        <div className="flex justify-between text-xs text-slate-500">
                            <span>0%</span>
                            <span>100%</span>
                        </div>
                    </div>

                    <div className="pt-4 border-t">
                        <div className="flex items-center space-x-1 mb-4">
                            <h3 className="text-sm font-medium text-slate-700">Outlook</h3>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <HelpCircle className="w-3 h-3 text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-xs">
                                        <p>
                                            Predictions based on deal qualification status and comparison with
                                            historical deals at the same stage
                                        </p>
                                        <a href="">
                                            <button>Learn more</button>
                                        </a>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-sm font-medium text-muted-foreground mb-1">Win Probability</div>
                                <div className="text-2xl font-bold text-slate-800">{deal.probability}%</div>
                            </div>

                            <div>
                                <div className="text-sm font-medium text-muted-foreground mb-1 space-x-1">
                                    Next Stage Probability{" "}
                                </div>
                                <div className="text-2xl font-bold text-slate-800">{currentLikelihood}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
