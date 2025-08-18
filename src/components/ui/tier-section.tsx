import { Crown, Medal, Award, Star, Zap } from "lucide-react";
import PlayerCard from "./player-card";
import { ReactNode } from "react";

interface Player {
  name: string;
  region: string;
  avatar?: string;
}

interface TierSectionProps {
  tier: number;
  title: string;
  players: Player[];
}

const getTierIcon = (tier: number): ReactNode => {
  switch (tier) {
    case 1:
      return <Crown className="h-5 w-5" />;
    case 2:
      return <Medal className="h-5 w-5" />;
    case 3:
      return <Award className="h-5 w-5" />;
    case 4:
      return <Star className="h-5 w-5" />;
    case 5:
      return <Zap className="h-5 w-5" />;
    default:
      return <Star className="h-5 w-5" />;
  }
};

const getTierColors = (tier: number) => {
  switch (tier) {
    case 1:
      return {
        bg: "bg-gradient-tier-1",
        text: "text-tier-1",
        border: "border-tier-1/20"
      };
    case 2:
      return {
        bg: "bg-gradient-tier-2",
        text: "text-tier-2",
        border: "border-tier-2/20"
      };
    case 3:
      return {
        bg: "bg-gradient-tier-3",
        text: "text-tier-3",
        border: "border-tier-3/20"
      };
    case 4:
      return {
        bg: "bg-gradient-primary",
        text: "text-tier-4",
        border: "border-tier-4/20"
      };
    case 5:
      return {
        bg: "bg-gradient-primary",
        text: "text-tier-5",
        border: "border-tier-5/20"
      };
    default:
      return {
        bg: "bg-gradient-primary",
        text: "text-primary",
        border: "border-primary/20"
      };
  }
};

const TierSection = ({ tier, title, players }: TierSectionProps) => {
  const colors = getTierColors(tier);
  
  return (
    <div className="space-y-4">
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${colors.bg} text-background font-bold text-lg shadow-lg`}>
        {getTierIcon(tier)}
        {title}
      </div>
      
      <div className="grid gap-2">
        {players.map((player, index) => (
          <PlayerCard
            key={`${player.name}-${index}`}
            name={player.name}
            region={player.region}
            avatar={player.avatar}
            className={`${colors.border} hover:${colors.border.replace('/20', '/40')}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TierSection;