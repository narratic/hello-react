import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Phone, Mail, ListTodo, Plus } from "lucide-react";
import type { Deal, Task, HubspotTask } from "@/types";

interface ActionPlanProps {
    deal: Deal;
    onHubspotTaskAdd?: (task: HubspotTask) => void;
}

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "high":
            return "text-red-600";
        case "medium":
            return "text-yellow-600";
        case "low":
            return "text-slate-600";
        default:
            return "text-slate-600";
    }
};

const getTaskTypeIcon = (type: string) => {
    switch (type) {
        case "call":
            return <Phone className="w-3 h-3 text-slate-500" />;
        case "email":
            return <Mail className="w-3 h-3 text-slate-500" />;
        case "to-do":
            return <ListTodo className="w-3 h-3 text-slate-500" />;
        default:
            return <ListTodo className="w-3 h-3 text-slate-500" />;
    }
};

function TaskItem({ task, onAddToHubspot }: { task: Task; onAddToHubspot: (taskId: string) => void }) {
    console.log(task);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-start p-4 bg-slate-100 rounded-lg mb-2 hover:bg-slate-200 transition-colors"
        >
            <div className="flex items-start">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div>{getTaskTypeIcon(task.type)}</div>
                        <span className={`text-xs ${getPriorityColor(task.priority)}`}>
                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                        </span>
                        <span className="text-xs text-slate-500">{task.category}</span>
                    </div>
                    <p className="text-slate-900 leading-snug">{task.title}</p>
                </div>
            </div>
            <div className="ml-auto min-w-[144px] flex justify-end">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onAddToHubspot(task.id)}
                    disabled={task.addedToHubspot}
                    className={`text-slate-600 hover:bg-slate-300 hover:text-slate-900 transition-colors ${
                        task.addedToHubspot ? "text-green-600" : ""
                    }`}
                >
                    {task.addedToHubspot ? (
                        <>
                            <Check className="w-4 h-4 mr-1" />
                            Added
                        </>
                    ) : (
                        "Add to Hubspot"
                    )}
                </Button>
            </div>
        </motion.div>
    );
}

function HubspotDialog({
    dialog,
    setDialog,
    onSubmit,
}: {
    dialog: HubspotTask;
    setDialog: (dialog: HubspotTask) => void;
    onSubmit: () => void;
}) {
    return (
        <Dialog open={dialog.isOpen} onOpenChange={(open) => setDialog({ ...dialog, isOpen: open })}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task to HubSpot</DialogTitle>
                    <DialogDescription>Configure the task details before adding it to HubSpot</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="taskTitle">Task Title</Label>
                        <Input
                            id="taskTitle"
                            value={dialog.taskTitle}
                            onChange={(e) => setDialog({ ...dialog, taskTitle: e.target.value })}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="taskType">Task Type</Label>
                        <div className="grid grid-cols-3 gap-2">
                            <Button
                                variant={dialog.taskType === "call" ? "default" : "outline"}
                                onClick={() => setDialog({ ...dialog, taskType: "call" })}
                                className="w-full"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Call
                            </Button>
                            <Button
                                variant={dialog.taskType === "email" ? "default" : "outline"}
                                onClick={() => setDialog({ ...dialog, taskType: "email" })}
                                className="w-full"
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                Email
                            </Button>
                            <Button
                                variant={dialog.taskType === "to-do" ? "default" : "outline"}
                                onClick={() => setDialog({ ...dialog, taskType: "to-do" })}
                                className="w-full"
                            >
                                <ListTodo className="w-4 h-4 mr-2" />
                                To-Do
                            </Button>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="dueDate">Due Date</Label>
                        <Input
                            id="dueDate"
                            type="date"
                            value={dialog.dueDate}
                            onChange={(e) => setDialog({ ...dialog, dueDate: e.target.value })}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea
                            id="notes"
                            value={dialog.notes}
                            onChange={(e) => setDialog({ ...dialog, notes: e.target.value })}
                            placeholder="Add any additional notes..."
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-between">
                    <Button variant="outline" onClick={() => setDialog({ ...dialog, isOpen: false })}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit}>Add to HubSpot</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export function ActionPlan({ deal, onHubspotTaskAdd }: ActionPlanProps) {
    const [hubspotDialog, setHubspotDialog] = useState<HubspotTask>({
        dealId: deal.dealId,
        taskId: "",
        taskTitle: "",
        taskType: "to-do",
        dueDate: new Date().toISOString().split("T")[0],
        notes: "",
        isOpen: false,
    });

    const handleAddToHubspot = (taskId: string) => {
        const task = deal.recommendedActions.find((t) => t.id === taskId);
        if (task) {
            setHubspotDialog({
                dealId: deal.dealId,
                taskId,
                taskTitle: task.title,
                taskType: task.type,
                dueDate: new Date().toISOString().split("T")[0],
                notes: "",
                isOpen: true,
            });
        }
    };

    const handleHubspotDialogSubmit = () => {
        if (hubspotDialog.taskId) {
            onHubspotTaskAdd?.({ ...hubspotDialog, isOpen: false });
            setHubspotDialog((prev) => ({ ...prev, isOpen: false }));
        }
    };

    const handleAddTask = () => {
        setHubspotDialog({
            dealId: deal.dealId,
            taskId: "",
            taskTitle: "",
            taskType: "to-do",
            dueDate: new Date().toISOString().split("T")[0],
            notes: "",
            isOpen: false,
        });
    };

    return (
        <Card className="shadow-lg w-full max-w-3xl mx-auto my-4">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Action Plan</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">Recommended actions to drive the deal forward</p>
            </CardHeader>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-6"
            >
                {deal.recommendedActions.map((task) => (
                    <TaskItem key={task.id} task={task} onAddToHubspot={handleAddToHubspot} />
                ))}
                <Button
                    variant="ghost"
                    onClick={handleAddTask}
                    className="mt-2 text-slate-500 hover:text-slate-900"
                    size="sm"
                >
                    <Plus className="w-4 h-4 mr-1" />
                    Add task
                </Button>
            </motion.div>
            <HubspotDialog dialog={hubspotDialog} setDialog={setHubspotDialog} onSubmit={handleHubspotDialogSubmit} />
        </Card>
    );
}
