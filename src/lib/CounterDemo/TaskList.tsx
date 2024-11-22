import { useState } from 'react';
import { motion } from 'framer-motion';
import { Task, mockTasks, HubspotDialogState } from '../types/task';
import { TaskItem } from './TaskItem';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { HubspotDialog } from './HubspotDialog';

const initialDialogState: HubspotDialogState = {
  isOpen: false,
  taskId: null,
  taskTitle: '',
  taskType: 'to-do',
  dueDate: new Date().toISOString().split('T')[0],
  notes: '',
};

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [hubspotDialog, setHubspotDialog] = useState<HubspotDialogState>(initialDialogState);

  const handleAddToHubspot = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setHubspotDialog({
        ...initialDialogState,
        isOpen: true,
        taskId,
        taskTitle: task.title,
      });
    }
  };

  const handleHubspotDialogSubmit = () => {
    if (hubspotDialog.taskId) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === hubspotDialog.taskId ? { ...task, addedToHubspot: true } : task
        )
      );
    }
    setHubspotDialog(initialDialogState);
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      title: 'New task title',
      category: 'New',
      priority: 'medium',
      addedToHubspot: false,
    };
    setTasks([...tasks, newTask]);
    setHubspotDialog({
      ...initialDialogState,
      isOpen: true,
      taskId: newTask.id,
      taskTitle: newTask.title,
    });
  };

  return (
    <Card className="shadow-lg w-full max-w-3xl mx-auto my-4 bg-slate-50">
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
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onAddToHubspot={handleAddToHubspot} />
        ))}
        <Button 
          variant="ghost"
          onClick={handleAddTask}
          className="mt-2 text-slate-500 hover:text-slate-900"
          size="sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add task
        </Button>
      </motion.div>
      <HubspotDialog
        dialog={hubspotDialog}
        setDialog={setHubspotDialog}
        onSubmit={handleHubspotDialogSubmit}
      />
    </Card>
  );
}

