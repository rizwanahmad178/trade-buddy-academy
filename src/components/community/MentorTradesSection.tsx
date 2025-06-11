
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Twitter, Copy, Heart } from "lucide-react";

export const MentorTradesSection = () => {
  const trades = [
    {
      id: 1,
      mentor: "Rajesh Kumar",
      avatar: "/placeholder.svg",
      verified: true,
      trade: {
        symbol: "RELIANCE",
        action: "BUY",
        price: "2750",
        quantity: "100",
        type: "swing",
        target: "2900",
        stopLoss: "2650",
        reason: "Breakout above resistance with volume"
      },
      pnl: "+5.2%",
      status: "profit",
      time: "2 hours ago",
      source: "twitter",
      likes: 34
    },
    {
      id: 2,
      mentor: "Priya Sharma",
      avatar: "/placeholder.svg",
      verified: true,
      trade: {
        symbol: "NIFTY 19500 CE",
        action: "SELL",
        price: "45",
        quantity: "50",
        type: "options",
        target: "25",
        stopLoss: "65",
        reason: "Theta decay play, expecting sideways movement"
      },
      pnl: "+12.8%",
      status: "profit",
      time: "4 hours ago",
      source: "direct",
      likes: 28
    }
  ];

  return (
    <div className="space-y-4">
      {trades.map((trade) => (
        <Card key={trade.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img src={trade.avatar} alt={trade.mentor} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{trade.mentor}</h3>
                    {trade.verified && <Badge variant="secondary" className="text-xs">Verified</Badge>}
                    {trade.source === "twitter" && <Twitter className="w-4 h-4 text-blue-500" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{trade.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={trade.status === "profit" ? "default" : "destructive"} className="flex items-center gap-1">
                  {trade.status === "profit" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {trade.pnl}
                </Badge>
                <Badge variant="outline">{trade.trade.type}</Badge>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Symbol</p>
                  <p className="font-semibold">{trade.trade.symbol}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Action</p>
                  <p className={`font-semibold ${trade.trade.action === "BUY" ? "text-green-600" : "text-red-600"}`}>
                    {trade.trade.action}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Price</p>
                  <p className="font-semibold">₹{trade.trade.price}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Quantity</p>
                  <p className="font-semibold">{trade.trade.quantity}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Target: <span className="font-semibold text-green-600">₹{trade.trade.target}</span></p>
                </div>
                <div>
                  <p className="text-muted-foreground">Stop Loss: <span className="font-semibold text-red-600">₹{trade.trade.stopLoss}</span></p>
                </div>
              </div>
            </div>
            
            <p className="text-foreground mb-4"><strong>Analysis:</strong> {trade.trade.reason}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {trade.likes}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Copy className="w-4 h-4" />
                  Copy Trade
                </Button>
              </div>
              <Button size="sm">Follow</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
