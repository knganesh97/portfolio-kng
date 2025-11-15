import React from 'react';
import Card from '@/components/ui/Card';
import { SkillCategory } from '@/utils/Constants';

interface SkillCardProps {
  skillCategory: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillCategory }) => {
  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 hover:scale-105"
      header={
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-card-foreground">{skillCategory.category}</h3>
        </div>
      }
      body={
        <ul className="list-disc list-inside space-y-1 text-card-foreground opacity-90">
          {skillCategory.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      }
      footer={<div></div>}
    />
  );
};

export default SkillCard;