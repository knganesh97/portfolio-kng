import React from 'react';
import Card from '@/components/ui/Card';
import { EducationItem } from '@/utils/Constants';

interface EducationCardProps {
  education: EducationItem;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
    const header = (
        <div className="flex flex-col items-start gap-1">
        <h3 className="text-xl font-semibold text-card-foreground">{education.degree}</h3>
        <span className="text-lg font-medium text-card-foreground opacity-90">{education.institution}</span>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{education.startDate} - {education.endDate}</span>
        </div>
    );

    const body = (
        <div className="space-y-4">
          {education.description && (
            <p className="text-card-foreground">{education.description}</p>
          )}
          
          {education.highlights && education.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold mb-2 text-card-foreground">Key Highlights:</h4>
              <ul className="list-disc list-inside space-y-1 text-card-foreground opacity-90">
                {education.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
    );

    const footer = (<div></div>);

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300"
      header={header}
      body={body}
      footer={footer}
    />
  );
};

export default EducationCard;