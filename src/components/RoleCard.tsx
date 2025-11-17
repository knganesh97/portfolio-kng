import React from 'react';
import Card from '@/components/ui/Card';

interface RoleCardProps {
  title: string;
  description: string;
  contributions: string[];
  startDate: string;
  endDate: string;
  companyName: string;
  techStack: string[];
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  contributions,
  startDate,
  endDate,
  companyName,
  techStack
}) => {
  const header = (
    <div className="flex flex-col items-start gap-1">
      <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
      <span className="text-lg font-medium text-card-foreground opacity-90">{companyName}</span>
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{startDate} - {endDate}</span>
    </div>
  );

  const body = (
    <div className="space-y-4">
      <p className="text-card-foreground">{description}</p>
      
      <div>
        <h4 className="text-sm font-semibold mb-2 text-card-foreground">Key Contributions:</h4>
        <ul className="list-disc list-inside space-y-1 text-card-foreground opacity-90">
          {contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const footer = (
    <div>
      <h4 className="text-sm font-semibold mb-2 text-card-foreground">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <Card 
      header={header}
      body={body}
      footer={footer}
      className="mb-6"
    />
  );
};

export default RoleCard;