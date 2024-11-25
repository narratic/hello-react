import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { useState, useEffect } from 'react';

interface EditQuestionDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: {
    questionIndex: number | null;
    question: string;
    label: string;
    weighting: number;
  };
  onSave: (updatedData: { question: string; label: string; weighting: number }) => void;
}

interface DealBreakerDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  dealBreaker: string;
  onChange: (value: string) => void;
  onSave: () => void;
}

export function EditQuestionDialog({ isOpen, onOpenChange, data, onSave }: EditQuestionDialogProps) {
  const [formData, setFormData] = useState({
    question: '',
    label: '',
    weighting: 3
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        question: data.question,
        label: data.label,
        weighting: data.weighting
      });
    }
  }, [isOpen, data]);

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {data.questionIndex !== null ? 'Edit Question' : 'Add Question'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Question</label>
            <Input
              value={formData.question}
              onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
              placeholder="Enter question..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Label</label>
            <Input
              value={formData.label}
              onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
              placeholder="Enter label..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Weight (1-5)</label>
            <Input
              type="number"
              min={1}
              max={5}
              value={formData.weighting}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                weighting: Math.min(5, Math.max(1, parseInt(e.target.value) || 1))
              }))}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSave}
            disabled={!formData.question.trim() || !formData.label.trim()}
          >
            {data.questionIndex !== null ? 'Save Changes' : 'Add Question'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DealBreakerDialog({ isOpen, onOpenChange, dealBreaker, onChange, onSave }: DealBreakerDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deal Breaker</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={dealBreaker}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Enter deal breaker description..."
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={onSave}
            disabled={!dealBreaker.trim()}
          >
            Save Deal Breaker
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}