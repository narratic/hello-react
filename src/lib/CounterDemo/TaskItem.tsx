import { motion } from 'framer-motion';
import { Task } from '../types/task';
import { Button } from '@/components/ui/button';
import { Check, Phone, Mail, ListTodo } from 'lucide-react';

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
      return <Phone className="w-4 h-4 text-slate-500" />;
    case "email":
      return <Mail className="w-4 h-4 text-slate-500" />;
    case "to-do":
      return <ListTodo className="w-4 h-4 text-slate-500" />;
    default:
      return <ListTodo className="w-4 h-4 text-slate-500" />;
  }
};

interface TaskItemProps {
  task: Task;
  onAddToHubspot: (taskId: string) => void;
}

export function TaskItem({ task, onAddToHubspot }: TaskItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start p-4 bg-slate-100 rounded-lg mb-2 hover:bg-slate-200 transition-colors"
    >
      <div className="flex items-start">
        <div className="mr-3 mt-1">{getTaskTypeIcon(task.type)}</div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs ${getPriorityColor(task.priority)}`}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
            <span className="text-xs text-slate-500">{task.category}</span>
          </div>
          <p className="text-slate-900 leading-snug">{task.title}</p>
        </div>
      </div>
      <div className="ml-auto">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAddToHubspot(task.id)}
          disabled={task.addedToHubspot}
          className={`text-slate-600 hover:bg-slate-300 hover:text-slate-900 transition-colors ${
            task.addedToHubspot ? 'text-green-600' : ''
          }`}
        >
          {task.addedToHubspot ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Added to Hubspot
            </>
          ) : (
            'Add to Hubspot'
          )}
        </Button>
      </div>
    </motion.div>
  );
}

