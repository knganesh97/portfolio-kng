'use client'
import React from 'react';
import Card from '@/components/ui/Card';
import { skillCategories } from '@/utils/Constants';

const Skills: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        Skills
      </h2>
      
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
    </section>
  );
};

export default Skills;