import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AVAILABLE_FRAMEWORKS, type Framework } from "@/types/framework";
import { QuestionSection } from "./QuestionSection";
import { DealBreakerSection } from "./DealBreakerSection";
import { EditQuestionDialog, DealBreakerDialog } from "./DialogComponents";

interface EditDialogState {
    isOpen: boolean;
    sectionKey: string;
    questionIndex: number | null;
    question: string;
    label: string;
    weighting: number;
}

interface DealBreakerDialogState {
    isOpen: boolean;
    sectionKey: string;
    dealBreaker: string;
}

export function QualificationFramework() {
    const [selectedFramework, setSelectedFramework] = useState<Framework>(AVAILABLE_FRAMEWORKS[0]);
    const [editDialog, setEditDialog] = useState<EditDialogState>({
        isOpen: false,
        sectionKey: "",
        questionIndex: null,
        question: "",
        label: "",
        weighting: 3,
    });
    const [dealBreakerDialog, setDealBreakerDialog] = useState<DealBreakerDialogState>({
        isOpen: false,
        sectionKey: "",
        dealBreaker: "",
    });

    const handleFrameworkChange = (frameworkName: string) => {
        const framework = AVAILABLE_FRAMEWORKS.find((f: Framework) => f.name === frameworkName);
        if (framework) {
            setSelectedFramework(framework);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Qualification Framework</h1>
                    <p className="text-gray-600">Customize and manage your sales qualification criteria</p>
                </div>
                <Select value={selectedFramework.name} onValueChange={handleFrameworkChange}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select framework" />
                    </SelectTrigger>
                    <SelectContent>
                        {AVAILABLE_FRAMEWORKS.map((framework: Framework) => (
                            <SelectItem key={framework.name} value={framework.name} disabled={!framework.enabled}>
                                {framework.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-6">
                {Object.entries(selectedFramework.sections).map(([key, section]) => (
                    <Card key={key}>
                        <CardHeader>
                            <CardTitle>{section.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <QuestionSection
                                section={section}
                                sectionKey={key}
                                onEdit={(sectionKey, index) => {
                                    const question = section.questions[index];
                                    setEditDialog({
                                        isOpen: true,
                                        sectionKey,
                                        questionIndex: index,
                                        question: question.question,
                                        label: question.label,
                                        weighting: question.weighting,
                                    });
                                }}
                                onDelete={(sectionKey, index) => {
                                    // Handle delete
                                }}
                                onAdd={() => {
                                    setEditDialog({
                                        isOpen: true,
                                        sectionKey: key,
                                        questionIndex: null,
                                        question: "",
                                        label: "",
                                        weighting: 3,
                                    });
                                }}
                            />
                            <DealBreakerSection
                                dealBreaker={section.dealBreaker}
                                onEdit={() => {
                                    setDealBreakerDialog({
                                        isOpen: true,
                                        sectionKey: key,
                                        dealBreaker: section.deal_breaker || "",
                                    });
                                }}
                                onDelete={() => {
                                    // Handle delete
                                }}
                            />
                        </CardContent>
                    </Card>
                ))}
            </div>

            <EditQuestionDialog
                isOpen={editDialog.isOpen}
                onOpenChange={(open) => setEditDialog((prev) => ({ ...prev, isOpen: open }))}
                data={editDialog}
                onSave={(updatedData) => {
                    // Handle save
                }}
            />

            <DealBreakerDialog
                isOpen={dealBreakerDialog.isOpen}
                onOpenChange={(open) => setDealBreakerDialog((prev) => ({ ...prev, isOpen: open }))}
                dealBreaker={dealBreakerDialog.dealBreaker}
                onChange={(value) => setDealBreakerDialog((prev) => ({ ...prev, dealBreaker: value }))}
                onSave={() => {
                    // Handle save
                }}
            />
        </div>
    );
}
