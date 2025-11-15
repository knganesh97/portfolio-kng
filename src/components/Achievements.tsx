'use client'
import React from 'react';
import Card from '@/components/ui/Card';
import { achievements } from '@/utils/Constants';

const categoryColors = {
  Professional: "bg-blue-100 text-blue-800 border-blue-200",
  Technical: "bg-green-100 text-green-800 border-green-200",
  Academic: "bg-purple-100 text-purple-800 border-purple-200",
  Leadership: "bg-orange-100 text-orange-800 border-orange-200"
};

const Achievements: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        Achievements
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card 
            key={index}
            className="hover:shadow-lg transition-all duration-300 hover:scale-105"
            body={
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {achievement.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full border ${categoryColors[achievement.category]}`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    {achievement.date && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.date}
                      </p>
                    )}
                    
                    {achievement.metrics && (
                      <p className="text-sm font-medium text-primary mb-3">
                        {achievement.metrics}
                      </p>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {achievement.description}
                </p>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;