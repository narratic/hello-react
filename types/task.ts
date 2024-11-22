export interface Task {
  id: string;
  title: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
  type: 'call' | 'email' | 'to-do';
  addedToHubspot: boolean;
}

export interface HubspotDialogState {
  isOpen: boolean;
  taskId: string | null;
  taskTitle: string;
  taskType: 'call' | 'email' | 'to-do';
  dueDate: string;
  notes: string;
}

export const mockTasks: Task[] = [
  { id: '1', title: 'Review and provide feedback on the new project proposal for the upcoming client meeting next week', category: 'Planning', priority: 'high', type: 'to-do', addedToHubspot: false },
  { id: '2', title: 'Update the client documentation with the latest changes to the API and include examples of common use cases', category: 'Documentation', priority: 'medium', type: 'email', addedToHubspot: false },
  { id: '3', title: 'Prepare a comprehensive agenda and gather all necessary materials for the upcoming quarterly team meeting', category: 'Meeting', priority: 'low', type: 'call', addedToHubspot: false },
  { id: '4', title: 'Investigate and resolve the persistent login issue affecting users on mobile devices running older operating systems', category: 'Development', priority: 'high', type: 'to-do', addedToHubspot: false },
  { id: '5', title: 'Create a set of engaging marketing assets for the new product launch, including social media graphics and email templates', category: 'Marketing', priority: 'medium', type: 'email', addedToHubspot: false },
];

