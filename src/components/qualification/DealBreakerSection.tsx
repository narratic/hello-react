import { Edit, HelpCircle, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface DealBreakerSectionProps {
    dealBreaker?: string;
    onEdit: () => void;
    onDelete: () => void;
}

export function DealBreakerSection({ dealBreaker, onEdit, onDelete }: DealBreakerSectionProps) {
    return (
        <div>
            <div className="flex items-center gap-1 mb-4">
                <h3 className="text-sm font-medium text-gray-700">Deal Breaker</h3>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <HelpCircle className="w-3 h-3 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                            <p>
                                A critical factor that, if unmet, may prevent the deal from progressing. Use these to
                                flag make-or-break criteria that should be carefully monitored throughout the sales
                                process.
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            {dealBreaker ? (
                <div className="bg-red-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-red-700">{dealBreaker}</p>
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" onClick={onEdit}>
                                <Edit className="w-4 h-4 text-slate-500" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={onDelete}>
                                <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <Button variant="ghost" size="sm" onClick={onEdit} className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Deal Breaker
                </Button>
            )}
        </div>
    );
}
