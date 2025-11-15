import React from 'react';
import CardContainer from '@/components/ui/CardContainer';
import { Achievement, achievements } from '@/utils/Constants';
import AchievementCard from '@/components/AchievementCard';

const Achievements: React.FC = () => {
  return (
    <div className="mb-12">
      <CardContainer>
        <div className="mb-8">
          <h2 className="text-4xl font-bold card-container-fg mb-4">Achievements</h2>
          <p className="text-lg card-container-fg opacity-80">
            Notable accomplishments and recognitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement: Achievement, index: number) => (
          <AchievementCard key={index} achievement={achievement} />
        ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default Achievements;