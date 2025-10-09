import React from 'react';
import Role from '@/components/Role';
import CardContainer from '@/components/ui/CardContainer';

interface RoleData {
  title: string;
  description: string;
  contributions: string[];
  startDate: string;
  endDate: string;
  companyName: string;
  techStack: string[];
}

interface RolesListProps {
  roles: RoleData[];
  title?: string;
  className?: string;
}

const RolesList: React.FC<RolesListProps> = ({ 
  roles, 
  title = "Work Experience",
  className = "" 
}) => {
  return (
    <CardContainer className={className}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {title}
        </h2>
        
        <div className="space-y-6">
          {roles.map((role, index) => (
            <Role
              key={index}
              title={role.title}
              description={role.description}
              contributions={role.contributions}
              startDate={role.startDate}
              endDate={role.endDate}
              companyName={role.companyName}
              techStack={role.techStack}
            />
          ))}
        </div>
      </div>
    </CardContainer>
  );
};

export default RolesList;