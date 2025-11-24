import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Achievement } from '@/utils/Constants';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
    const header = (
        <div className="flex flex-col items-start gap-1">
        <h3 className="text-xl font-semibold text-card-foreground">{achievement.title}</h3>
        <Badge>{achievement.category}</Badge>
        </div>
    );

    const body = (
        <div className="space-y-4">
          {achievement.description && (
            <p className="text-card-foreground">{achievement.description}</p>
          )}
        </div>
    );

    const footer = (<div></div>);

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300"
      header={header}
      body={body}
      footer={footer}
    />
  );
};

export default AchievementCard;