import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { Deal } from "@/types";

interface StakeholdersProps {
    deal: Deal;
}

export function Stakeholders({ deal }: StakeholdersProps) {
    const getEngagementLevelColor = (level: string) => {
        switch (level.toLowerCase()) {
            case "high":
                return "bg-green-100 text-green-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "low":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <Card className="bg-white shadow-sm border-slate-200">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-800">Key Stakeholders</CardTitle>
                </div>
                <p className="text-sm text-slate-500">Engagement levels and relationships</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {deal.keyStakeholders.map((stakeholder, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">{stakeholder.name}</p>
                                <p className="text-sm text-slate-500">{stakeholder.role}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Badge className={getEngagementLevelColor(stakeholder.engagementLevel)}>
                                    {stakeholder.engagementLevel} Engagement
                                </Badge>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className=""
                                                onClick={() => window.open(stakeholder.contactLink, "_blank")}
                                            >
                                                <ExternalLink className="w-4 h-4 text-slate-500" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View contact in CRM</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
