
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Share, TrendingUp, TrendingDown } from "lucide-react";

export const ChartSharingSection = () => {
  const charts = [
    {
      id: 1,
      title: "RELIANCE Breakout Pattern",
      author: "ChartMaster",
      avatar: "/placeholder.svg",
      image: "/placeholder.svg",
      description: "Clean breakout above resistance. Target 2800+",
      symbol: "RELIANCE",
      timeframe: "Daily",
      signal: "bullish",
      likes: 24,
      comments: 8,
      time: "1 hour ago"
    },
    {
      id: 2,
      title: "NIFTY Head & Shoulders",
      author: "TechnicalGuru",
      avatar: "/placeholder.svg",
      image: "/placeholder.svg",
      description: "Potential H&S pattern forming. Watch for breakdown",
      symbol: "NIFTY",
      timeframe: "4H",
      signal: "bearish",
      likes: 18,
      comments: 12,
      time: "3 hours ago"
    }
  ];

  return (
    <div className="space-y-4">
      {charts.map((chart) => (
        <Card key={chart.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img src={chart.avatar} alt={chart.author} className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="font-semibold text-lg">{chart.title}</h3>
                  <p className="text-sm text-muted-foreground">by {chart.author} • {chart.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{chart.symbol}</Badge>
                <Badge variant="outline">{chart.timeframe}</Badge>
                <Badge variant={chart.signal === "bullish" ? "default" : "destructive"} className="flex items-center gap-1">
                  {chart.signal === "bullish" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {chart.signal}
                </Badge>
              </div>
            </div>
            
            <div className="mb-4">
              <img src={chart.image} alt="Chart" className="w-full h-64 object-cover rounded-lg bg-muted" />
            </div>
            
            <p className="text-foreground mb-4">{chart.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {chart.likes}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {chart.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
