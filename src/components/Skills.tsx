'use client'
import React from 'react';
import Card from '@/components/ui/Card';
import CardContainer from '@/components/ui/CardContainer';
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
            <Card 
              key={category.category} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              body={
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default Skills;