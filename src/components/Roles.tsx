import React from 'react';
import RoleCard from '@/components/RoleCard';
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

interface RolesProps {
  roles: RoleData[];
  title?: string;
  className?: string;
}

const Roles: React.FC<RolesProps> = ({ 
  roles, 
  title = "Work Experience",
  className = "" 
}) => {
  return (
    <div className="mb-12">
      <CardContainer className={className}>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-8 card-container-fg">
            {title}
          </h2>
          
          <div className="space-y-6">
            {roles.map((role, index) => (
              <RoleCard
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
    </div>
  );
};

export default Roles;