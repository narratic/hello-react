import { Calendar, Phone, Mail, ListTodo } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HubspotDialogState } from "../types/task"

interface HubspotDialogProps {
  dialog: HubspotDialogState;
  setDialog: (dialog: HubspotDialogState) => void;
  onSubmit: () => void;
}

export function HubspotDialog({ dialog, setDialog, onSubmit }: HubspotDialogProps) {
  return (
    <Dialog open={dialog.isOpen} onOpenChange={(open) => setDialog({ ...dialog, isOpen: open })}>
      <DialogContent className="sm:max-w-[425px]">
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
              value={dialog.taskTitle}
              onChange={(e) =>
                setDialog({ ...dialog, taskTitle: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="taskType">Task Type</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={dialog.taskType === 'call' ? 'default' : 'outline'}
                onClick={() => setDialog({ ...dialog, taskType: 'call' })}
                className="w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
              <Button
                variant={dialog.taskType === 'email' ? 'default' : 'outline'}
                onClick={() => setDialog({ ...dialog, taskType: 'email' })}
                className="w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button
                variant={dialog.taskType === 'to-do' ? 'default' : 'outline'}
                onClick={() => setDialog({ ...dialog, taskType: 'to-do' })}
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
              onChange={(e) =>
                setDialog({ ...dialog, dueDate: e.target.value })
              }
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
          <Button
            variant="outline"
            onClick={() => setDialog({ ...dialog, isOpen: false })}
          >
            Cancel
          </Button>
          <Button onClick={onSubmit}>Add to HubSpot</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

