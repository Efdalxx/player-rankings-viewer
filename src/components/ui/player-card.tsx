import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface PlayerCardProps {
  name: string;
  region: string;
  avatar?: string;
  className?: string;
}

const PlayerCard = ({ name, region, avatar, className = "" }: PlayerCardProps) => {
  return (
    <div className={`group relative flex items-center gap-3 p-3 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 hover:shadow-card hover:scale-[1.02] cursor-pointer ${className}`}>
      <Avatar className="h-10 w-10 ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300">
        <AvatarImage src={avatar} alt={`${name}'s avatar`} />
        <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
          {name.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs px-2 py-0 font-medium bg-muted/50">
            {region}
          </Badge>
        </div>
        <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 truncate">
          {name}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;