import { useState, useMemo } from "react";
import NavigationTabs from "@/components/navigation-tabs";
import TierSection from "@/components/ui/tier-section";
import SearchBar from "@/components/search-bar";
import ServerInfo from "@/components/server-info";

// Sample data - you can replace this with your database data
const samplePlayers = {
  vanilla: [
    // Tier 1
    { name: "Marlowww", region: "NA", tier: 1 },
    { name: "GalleryWalk", region: "NA", tier: 1 },
    
    // Tier 2
    { name: "Dwggo", region: "NA", tier: 2 },
    { name: "Legertje08", region: "EU", tier: 2 },
    { name: "egoistic", region: "NA", tier: 2 },
    { name: "Replaqing", region: "EU", tier: 2 },
    { name: "2SAP", region: "NA", tier: 2 },
    { name: "kalefan89", region: "EU", tier: 2 },
    { name: "Wraxps", region: "NA", tier: 2 },
    { name: "lAlekz", region: "EU", tier: 2 },
    { name: "Demonmcc", region: "NA", tier: 2 },
    { name: "q9v", region: "EU", tier: 2 },
    { name: "Rxtu2", region: "NA", tier: 2 },
    { name: "YkHakes", region: "EU", tier: 2 },
    { name: "dPower", region: "NA", tier: 2 },
    { name: "vitrix1", region: "EU", tier: 2 },
    { name: "zFay", region: "NA", tier: 2 },
    { name: "SkibidiBaksik69", region: "EU", tier: 2 },
    { name: "Cowarted", region: "NA", tier: 2 },
    { name: "Keptra", region: "EU", tier: 2 },
    
    // Tier 3
    { name: "SharpOrganic985", region: "NA", tier: 3 },
    { name: "zesolution", region: "EU", tier: 3 },
    { name: "Zathot", region: "NA", tier: 3 },
    { name: "K1RBE", region: "EU", tier: 3 },
    { name: "Scraxie", region: "NA", tier: 3 },
    { name: "FatalDose", region: "EU", tier: 3 },
    { name: "Drakolover20", region: "NA", tier: 3 },
    { name: "qull", region: "EU", tier: 3 },
    { name: "Telegenic", region: "NA", tier: 3 },
    { name: "zvrdy", region: "EU", tier: 3 },
    { name: "Lxende", region: "NA", tier: 3 },
    { name: "MacePVPGreatAgai", region: "EU", tier: 3 },
    { name: "NickofPlayzYT", region: "NA", tier: 3 },
    { name: "UmFrost", region: "EU", tier: 3 },
    { name: "FltNlSH", region: "NA", tier: 3 },
    { name: "Tier2Soon", region: "EU", tier: 3 },
    { name: "otbkibble", region: "NA", tier: 3 },
    { name: "Rvssia", region: "EU", tier: 3 },
    
    // Tier 4
    { name: "TheNetherLordFan", region: "NA", tier: 4 },
    { name: "inxtant", region: "EU", tier: 4 },
    { name: "waiallis", region: "NA", tier: 4 },
    { name: "Dlanaaaa", region: "EU", tier: 4 },
    { name: "vampcel", region: "NA", tier: 4 },
    { name: "Vertez22", region: "EU", tier: 4 },
    { name: "venom301", region: "NA", tier: 4 },
    { name: "Dead_Seraphim", region: "EU", tier: 4 },
    { name: "OutOfOrd3r", region: "NA", tier: 4 },
    { name: "Svarta_Erik", region: "EU", tier: 4 },
    { name: "kBestWW", region: "NA", tier: 4 },
    { name: "JelleFi_", region: "EU", tier: 4 },
    { name: "Mal_Elvwob", region: "NA", tier: 4 },
    { name: "SoGuy", region: "EU", tier: 4 },
    
    // Tier 5
    { name: "monkey_bannana", region: "NA", tier: 5 },
    { name: "qMaxy", region: "EU", tier: 5 },
    { name: "BotZoruto", region: "NA", tier: 5 },
    { name: "Splashy_2", region: "EU", tier: 5 },
    { name: "spoconaSTOPA", region: "NA", tier: 5 },
    { name: "ItzDinika", region: "EU", tier: 5 },
    { name: "Leo_Epicos", region: "NA", tier: 5 },
    { name: "___0AceO___", region: "EU", tier: 5 },
    { name: "UniformRiver369", region: "NA", tier: 5 },
    { name: "veecube", region: "EU", tier: 5 },
    { name: "Stiy_Omega29", region: "NA", tier: 5 },
    { name: "tev_was_taken", region: "EU", tier: 5 },
    { name: "_KroNuM_", region: "NA", tier: 5 },
  ],
  overall: [
    { name: "OverallChamp1", region: "NA", tier: 1 },
    { name: "OverallChamp2", region: "EU", tier: 1 },
  ],
  // Add more categories as needed
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map(tierNum => {
                const players = playersByTier[tierNum] || [];
                if (players.length === 0) return null;
                
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
