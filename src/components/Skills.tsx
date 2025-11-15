import React from 'react';
import CardContainer from '@/components/ui/CardContainer';
import SkillCard from '@/components/SkillCard';
import { skillCategories } from '@/utils/Constants';

const Skills: React.FC = () => {
  return (
    <div className="mb-12">
      <CardContainer>
        <div className="mb-8">
          <h2 className="text-4xl font-bold card-container-fg mb-4">Skills</h2>
          <p className="text-lg card-container-fg opacity-80">
            Technical skills and expertise across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard 
              key={category.category} 
              skillCategory={category}
            />
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default Skills;