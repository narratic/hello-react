import { Edit, HelpCircle, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { FrameworkSection } from "@/types/framework";

interface QuestionSectionProps {
    section: FrameworkSection;
    sectionKey: string;
    onEdit: (sectionKey: string, index: number) => void;
    onDelete: (sectionKey: string, index: number) => void;
    onAdd: () => void;
}

export function QuestionSection({ section, sectionKey, onEdit, onDelete, onAdd }: QuestionSectionProps) {
    return (
        <div>
            <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-6 flex items-center gap-1">
                    <h3 className="text-sm font-medium text-gray-700">Question</h3>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <HelpCircle className="w-3 h-3 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                                <p>
                                    A qualification question to help assess this deal's fit and potential. Customize
                                    these questions to ensure they reflect the key criteria for advancing deals in your
                                    sales process.
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="col-span-3 flex items-center gap-1">
                    <h3 className="text-sm font-medium text-gray-700">Label</h3>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <HelpCircle className="w-3 h-3 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>
                                    Labels give a quick summary of each question's focus, helping you navigate and
                                    understand key points faster.
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="col-span-1 text-center flex items-center justify-center gap-1">
                    <h3 className="text-sm font-medium text-gray-700">Weight</h3>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <HelpCircle className="w-3 h-3 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Higher value (1-5) means more important</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="col-span-2"></div>
            </div>

            <div className="space-y-2">
                {section.questions.map((question, index) => (
                    <div key={index} className="grid grid-cols-12 gap-4 items-center p-3 bg-slate-50 rounded-lg">
                        <div className="col-span-6">
                            <p className="text-sm font-medium line-clamp-2">{question.question}</p>
                        </div>
                        <div className="col-span-3">
                            <Badge variant="secondary" className="truncate max-w-full">
                                {question.label}
                            </Badge>
                        </div>
                        <div className="col-span-1 text-center">
                            <span className="text-sm font-medium">{question.weighting}</span>
                        </div>
                        <div className="col-span-2 flex items-center justify-end space-x-2">
                            <Button variant="ghost" size="sm" onClick={() => onEdit(sectionKey, index)}>
                                <Edit className="w-4 h-4 text-slate-500" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => onDelete(sectionKey, index)}>
                                <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                        </div>
                    </div>
                ))}
                <Button variant="ghost" size="sm" onClick={onAdd} className="w-full mt-4">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Question
                </Button>
            </div>
        </div>
    );
}
