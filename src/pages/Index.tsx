import { useState, useMemo } from "react";
import NavigationTabs from "@/components/navigation-tabs";
import TierSection from "@/components/ui/tier-section";
import SearchBar from "@/components/search-bar";
import ServerInfo from "@/components/server-info";

// Sample data structure - you can replace this with your database data
const samplePlayers = {
  vanilla: [],
  overall: [],
  ltms: [],
  uhc: [],
  pot: [],
  nethop: [],
  smp: [],
  sword: [],
  axe: [],
  mace: [],
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("vanilla");
  const [searchTerm, setSearchTerm] = useState("");

  const currentPlayers = samplePlayers[activeTab as keyof typeof samplePlayers] || [];
  
  const filteredPlayers = useMemo(() => {
    if (!searchTerm) return currentPlayers;
    return currentPlayers.filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [currentPlayers, searchTerm]);

  const playersByTier = useMemo(() => {
    const tiers: { [key: number]: typeof currentPlayers } = {};
    filteredPlayers.forEach(player => {
      if (!tiers[player.tier]) {
        tiers[player.tier] = [];
      }
      tiers[player.tier].push(player);
    });
    return tiers;
  }, [filteredPlayers]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MC TIERS
            </h1>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Player Rankings */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(tierNum => {
                const players = playersByTier[tierNum] || [];
                
                return (
                  <TierSection
                    key={tierNum}
                    tier={tierNum}
                    title={`Tier ${tierNum}`}
                    players={players}
                  />
                );
              })}
            </div>
            
            {filteredPlayers.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No players found matching "{searchTerm}"
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ServerInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
