import React from 'react';
import CardContainer from '@/components/ui/CardContainer';
import EducationCard from '@/components/EducationCard';
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
            <EducationCard 
              key={index}
              education={education}
            />
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default Education;