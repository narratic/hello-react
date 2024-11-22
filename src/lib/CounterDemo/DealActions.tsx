import { useState } from "react";
import { motion } from "framer-motion";
import { Edit2, Trash2, Plus, Check, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Deal } from "@/types";

interface ActionPlanProps {
    deal: Deal;
}

interface HubspotDialogState {
    isOpen: boolean;
    taskTitle: string;
    notes: string;
    taskType: "call" | "email" | "to-do";
    dueDate: string;
    actionIndex: number | null;
}

const priorityOrder = {
    high: 0,
    medium: 1,
    low: 2,
};

export function DealActions({ deal }: ActionPlanProps) {
    const [recommendedActions, setRecommendedActions] = useState(() =>
        [...deal.recommendedActions].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]),
    );
    const [editingAction, setEditingAction] = useState<number | null>(null);
    const [newAction, setNewAction] = useState("");
    const [newActionPriority, setNewActionPriority] = useState<"high" | "medium" | "low">("medium");
    const [hubspotDialog, setHubspotDialog] = useState<HubspotDialogState>({
        isOpen: false,
        taskTitle: "",
        notes: "",
        taskType: "to-do",
        dueDate: new Date().toISOString().split("T")[0],
        actionIndex: null,
    });

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high":
                return "bg-red-100 text-red-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "low":
                return "bg-slate-100 text-slate-800";
            default:
                return "bg-slate-100 text-slate-800";
        }
    };

    const sortActions = (actions: typeof recommendedActions) => {
        return [...actions].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    };

    const handleEditAction = (index: number) => {
        setEditingAction(index);
    };

    const handleSaveAction = (index: number, newText: string) => {
        const updatedActions = [...recommendedActions];
        updatedActions[index] = { ...updatedActions[index], text: newText };
        setRecommendedActions(sortActions(updatedActions));
        setEditingAction(null);
    };

    const handleDeleteAction = (index: number) => {
        const updatedActions = recommendedActions.filter((_, i) => i !== index);
        setRecommendedActions(sortActions(updatedActions));
    };

    const handleAddAction = () => {
        if (newAction.trim()) {
            const updatedActions = [
                ...recommendedActions,
                {
                    text: newAction.trim(),
                    priority: newActionPriority,
                    type: "document",
                    completed: false,
                    addedToHubspot: false,
                },
            ];
            setRecommendedActions(sortActions(updatedActions));
            setNewAction("");
        }
    };

    const handleAddToHubspot = (index: number) => {
        const action = recommendedActions[index];
        setHubspotDialog({
            isOpen: true,
            taskTitle: action.text,
            notes: "",
            taskType: "to-do",
            dueDate: new Date().toISOString().split("T")[0],
            actionIndex: index,
        });
    };

    const handleHubspotDialogSubmit = () => {
        if (hubspotDialog.actionIndex !== null) {
            const updatedActions = [...recommendedActions];
            updatedActions[hubspotDialog.actionIndex] = {
                ...updatedActions[hubspotDialog.actionIndex],
                addedToHubspot: true,
            };
            setRecommendedActions(sortActions(updatedActions));

            // Here you would typically make an API call to HubSpot
            console.log("Creating HubSpot task:", {
                title: hubspotDialog.taskTitle,
                notes: hubspotDialog.notes,
                type: hubspotDialog.taskType,
                dueDate: hubspotDialog.dueDate,
            });

            setHubspotDialog((prev) => ({ ...prev, isOpen: false }));
        }
    };

    const handleAddAllToHubspot = () => {
        const updatedActions = recommendedActions.map((action) => ({
            ...action,
            addedToHubspot: true,
        }));
        setRecommendedActions(sortActions(updatedActions));
    };

    return (
        <Card className="shadow-lg w-full max-w-3xl mx-auto my-8">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Action Plan</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">Recommended actions to drive the deal forward</p>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {recommendedActions.map((action, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50"
                        >
                            <Checkbox
                                id={`action-${index}`}
                                checked={action.completed}
                                onCheckedChange={(checked) => {
                                    const updatedActions = [...recommendedActions];
                                    updatedActions[index] = {
                                        ...action,
                                        completed: checked as boolean,
                                    };
                                    setRecommendedActions(sortActions(updatedActions));
                                }}
                            />
                            {editingAction === index ? (
                                <div className="flex-1 flex items-center space-x-2">
                                    <Input
                                        value={action.text}
                                        onChange={(e) => handleSaveAction(index, e.target.value)}
                                        className="flex-1"
                                    />
                                    <Button onClick={() => setEditingAction(null)} size="sm">
                                        Save
                                    </Button>
                                </div>
                            ) : (
                                <div className="flex-1 flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <label
                                            htmlFor={`action-${index}`}
                                            className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                                                action.completed ? "line-through text-slate-400" : "text-slate-900"
                                            }`}
                                        >
                                            {action.text}
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={
                                                action.addedToHubspot
                                                    ? "flex items-center opacity-100"
                                                    : "flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
                                            }
                                        >
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleEditAction(index)}
                                                className={action.addedToHubspot ? "hidden" : ""}
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleDeleteAction(index)}
                                                className={action.addedToHubspot ? "hidden" : ""}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleAddToHubspot(index)}
                                                disabled={action.addedToHubspot}
                                            >
                                                {action.addedToHubspot ? (
                                                    <span className="flex items-center space-x-1">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        <span className="text-xs text-green-500">Added to HubSpot</span>
                                                    </span>
                                                ) : (
                                                    "Add HubSpot Task"
                                                )}
                                            </Button>
                                        </div>
                                        <Badge className={`${getPriorityColor(action.priority)} capitalize`}>
                                            {action.priority}
                                        </Badge>
                                    </div>
                                </div>
                            )}
                        </motion.li>
                    ))}
                </ul>
                <div className="mt-4 flex items-center space-x-2">
                    <Input
                        value={newAction}
                        onChange={(e) => setNewAction(e.target.value)}
                        placeholder="Add a new action..."
                        className="flex-1"
                    />
                    <Select
                        value={newActionPriority}
                        onValueChange={(value) => setNewActionPriority(value as "high" | "medium" | "low")}
                    >
                        <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={handleAddAction}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add
                    </Button>
                </div>
                <div className="mt-4 flex justify-end">
                    <Button variant="secondary" onClick={handleAddAllToHubspot}>
                        Add All as HubSpot Tasks
                    </Button>
                </div>

                <Dialog
                    open={hubspotDialog.isOpen}
                    onOpenChange={(open) => setHubspotDialog((prev) => ({ ...prev, isOpen: open }))}
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add Task to HubSpot</DialogTitle>
                            <DialogDescription>
                                Configure the task details before adding it to HubSpot
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="taskTitle">Task Title</Label>
                                <Input
                                    id="taskTitle"
                                    value={hubspotDialog.taskTitle}
                                    onChange={(e) =>
                                        setHubspotDialog((prev) => ({ ...prev, taskTitle: e.target.value }))
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="taskType">Task Type</Label>
                                <Select
                                    value={hubspotDialog.taskType}
                                    onValueChange={(value: "call" | "email" | "to-do") =>
                                        setHubspotDialog((prev) => ({ ...prev, taskType: value }))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select task type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="call">Call</SelectItem>
                                        <SelectItem value="email">Email</SelectItem>
                                        <SelectItem value="to-do">To-Do</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="dueDate">Due Date</Label>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        id="dueDate"
                                        type="date"
                                        value={hubspotDialog.dueDate}
                                        onChange={(e) =>
                                            setHubspotDialog((prev) => ({ ...prev, dueDate: e.target.value }))
                                        }
                                    />
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() =>
                                            setHubspotDialog((prev) => ({
                                                ...prev,
                                                dueDate: new Date().toISOString().split("T")[0],
                                            }))
                                        }
                                    >
                                        <Calendar className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="notes">Notes</Label>
                                <Textarea
                                    id="notes"
                                    value={hubspotDialog.notes}
                                    onChange={(e) => setHubspotDialog((prev) => ({ ...prev, notes: e.target.value }))}
                                    placeholder="Add any additional notes..."
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setHubspotDialog((prev) => ({ ...prev, isOpen: false }))}
                            >
                                Cancel
                            </Button>
                            <Button onClick={handleHubspotDialogSubmit}>Add to HubSpot</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
