import React from 'react';
import { Framework } from '@/types/framework';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';

interface FrameworkQuestionsProps {
  framework: Framework;
}

export const FrameworkQuestions: React.FC<FrameworkQuestionsProps> = ({ framework }) => {
  return (
    <div className="space-y-6">
      {Object.entries(framework.sections).map(([key, section]) => (
        <Card key={key}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{section.name}</span>
              <Progress value={33} className="w-32" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {section.questions.map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox id={`${key}-${index}`} />
                  <label
                    htmlFor={`${key}-${index}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {question.question}
                    <span className="ml-2 text-xs text-gray-500">
                      (Weight: {question.weighting})
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};