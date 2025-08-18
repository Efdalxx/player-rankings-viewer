import { Server, Copy, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ServerInfo = () => {
  const { toast } = useToast();

  const openDiscord = () => {
    window.open("https://discord.gg/hititler", "_blank");
  };

  return (
    <Card className="bg-card/50 border-border shadow-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Info className="h-5 w-5 text-primary" />
          Discord Sunucumuz
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg">
          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
            <Server className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h3 className="font-semibold text-foreground">Discord Server</h3>
          <div className="flex items-center gap-2 justify-center">
            <Badge 
              variant="outline" 
              className="font-mono text-sm px-3 py-1 cursor-pointer hover:bg-primary/20"
              onClick={openDiscord}
            >
              discord.gg/hititler
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServerInfo;