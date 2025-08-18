import { Trophy, Swords, Heart, Shield, Sparkles, Hammer, Axe, Crown, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "overall", label: "Overall", icon: Trophy },
  { id: "ltms", label: "LTMs", icon: Sparkles },
  { id: "vanilla", label: "Vanilla", icon: Heart },
  { id: "uhc", label: "UHC", icon: Shield },
  { id: "pot", label: "Pot", icon: Target },
  { id: "nethop", label: "NethOP", icon: Crown },
  { id: "smp", label: "SMP", icon: Hammer },
  { id: "sword", label: "Sword", icon: Swords },
  { id: "axe", label: "Axe", icon: Axe },
  { id: "mace", label: "Mace", icon: Zap },
];

const NavigationTabs = ({ activeTab, onTabChange }: NavigationTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-card/50 rounded-lg border border-border">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <Button
            key={tab.id}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 transition-all duration-300 ${
              isActive 
                ? "bg-primary text-primary-foreground shadow-glow" 
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
};

export default NavigationTabs;