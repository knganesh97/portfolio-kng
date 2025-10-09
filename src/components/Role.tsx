import React from 'react';
import Card from '@/components/ui/Card';

interface RoleProps {
  title: string;
  description: string;
  contributions: string[];
  startDate: string;
  endDate: string;
  companyName: string;
  techStack: string[];
}

const Role: React.FC<RoleProps> = ({
  title,
  description,
  contributions,
  startDate,
  endDate,
  companyName,
  techStack
}) => {
  const header = (
    <div className="flex flex-col gap-1">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <span className="text-lg font-medium text-blue-600 dark:text-blue-400">{companyName}</span>
      <span className="text-sm text-gray-600 dark:text-gray-400">{startDate} - {endDate}</span>
    </div>
  );

  const body = (
    <div className="space-y-4">
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Contributions:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const footer = (
    <div>
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
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

export default Role;