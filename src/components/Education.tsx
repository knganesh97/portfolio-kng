'use client'
import React from 'react';
import Card from '@/components/ui/Card';
import CardContainer from '@/components/ui/CardContainer';
import { educationData } from '@/utils/Constants';

const Education: React.FC = () => {
  return (
    <div className="mb-12">
      <CardContainer>
        <div className="mb-8">
          <h2 className="text-4xl font-bold card-container-fg mb-4">Education</h2>
          <p className="text-lg card-container-fg opacity-80">
            Academic background and qualifications
          </p>
        </div>

        <div className="space-y-6">
        {educationData.map((education, index) => (
          <Card 
            key={index}
            className="hover:shadow-lg transition-all duration-300"
            body={
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {education.degree}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      {education.institution}
                    </p>
                    <p className="text-muted-foreground mb-2">
                      {education.location}
                    </p>
                    {education.grade && (
                      <p className="text-muted-foreground font-medium">
                        {education.grade}
                      </p>
                    )}
                  </div>
                  
                  <div className="lg:text-right mt-2 lg:mt-0">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      {education.startDate} - {education.endDate}
                    </span>
                  </div>
                </div>
                
                {education.description && (
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {education.description}
                  </p>
                )}
                
                {education.highlights && education.highlights.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {education.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1 text-xs">▸</span>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            }
          />
        ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default Education;