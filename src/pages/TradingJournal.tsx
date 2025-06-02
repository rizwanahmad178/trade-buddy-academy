
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, TrendingUp, TrendingDown, Calendar, IndianRupee } from "lucide-react";

const TradingJournal = () => {
  const [trades, setTrades] = useState([
    {
      id: 1,
      symbol: "RELIANCE",
      type: "Buy",
      quantity: 100,
      entryPrice: 2450,
      exitPrice: 2520,
      pnl: 7000,
      date: "2024-01-15",
      strategy: "Swing Trading",
      notes: "Strong quarterly results expected"
    },
    {
      id: 2,
      symbol: "NIFTY 19500 CE",
      type: "Buy",
      quantity: 50,
      entryPrice: 85,
      exitPrice: 120,
      pnl: 1750,
      date: "2024-01-14",
      strategy: "Options Trading",
      notes: "Market bullish trend"
    },
    {
      id: 3,
      symbol: "TCS",
      type: "Buy",
      quantity: 25,
      entryPrice: 3800,
      exitPrice: 3750,
      pnl: -1250,
      date: "2024-01-12",
      strategy: "Intraday",
      notes: "Stop loss hit"
    }
  ]);

  const totalPnL = trades.reduce((sum, trade) => sum + trade.pnl, 0);
  const winningTrades = trades.filter(trade => trade.pnl > 0).length;
  const losingTrades = trades.filter(trade => trade.pnl < 0).length;
  const winRate = trades.length > 0 ? (winningTrades / trades.length * 100).toFixed(1) : 0;

  const stats = [
    { label: "Total P&L", value: `₹${totalPnL.toLocaleString()}`, icon: IndianRupee, color: totalPnL >= 0 ? "text-green-600" : "text-red-600" },
    { label: "Win Rate", value: `${winRate}%`, icon: TrendingUp, color: "text-blue-600" },
    { label: "Total Trades", value: trades.length, icon: Calendar, color: "text-gray-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Trading Journal</h1>
            <p className="text-gray-600">Track your trades and analyze your performance</p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Add Trade
          </Button>
        </div>

        {/* Performance Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="trades" className="space-y-6">
          <TabsList>
            <TabsTrigger value="trades">All Trades</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="strategies">Strategies</TabsTrigger>
          </TabsList>

          <TabsContent value="trades">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Trade History</CardTitle>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="buy">Buy Only</SelectItem>
                        <SelectItem value="sell">Sell Only</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Search symbol..." className="w-40" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Symbol</th>
                        <th className="text-left py-3 px-4">Type</th>
                        <th className="text-left py-3 px-4">Quantity</th>
                        <th className="text-left py-3 px-4">Entry</th>
                        <th className="text-left py-3 px-4">Exit</th>
                        <th className="text-left py-3 px-4">P&L</th>
                        <th className="text-left py-3 px-4">Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trades.map((trade) => (
                        <tr key={trade.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{trade.date}</td>
                          <td className="py-3 px-4 font-medium">{trade.symbol}</td>
                          <td className="py-3 px-4">
                            <Badge variant={trade.type === "Buy" ? "default" : "secondary"}>
                              {trade.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">{trade.quantity}</td>
                          <td className="py-3 px-4">₹{trade.entryPrice}</td>
                          <td className="py-3 px-4">₹{trade.exitPrice}</td>
                          <td className="py-3 px-4">
                            <span className={`font-semibold flex items-center gap-1 ${
                              trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {trade.pnl >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                              ₹{Math.abs(trade.pnl).toLocaleString()}
                            </span>
                          </td>
                          <td className="py-3 px-4">{trade.strategy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Winning Trades</span>
                    <span className="font-semibold text-green-600">{winningTrades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Losing Trades</span>
                    <span className="font-semibold text-red-600">{losingTrades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Win</span>
                    <span className="font-semibold">₹{winningTrades > 0 ? (trades.filter(t => t.pnl > 0).reduce((sum, t) => sum + t.pnl, 0) / winningTrades).toFixed(0) : 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Loss</span>
                    <span className="font-semibold">₹{losingTrades > 0 ? Math.abs(trades.filter(t => t.pnl < 0).reduce((sum, t) => sum + t.pnl, 0) / losingTrades).toFixed(0) : 0}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strategy Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["Swing Trading", "Options Trading", "Intraday"].map((strategy) => {
                    const strategyTrades = trades.filter(t => t.strategy === strategy);
                    const strategyPnL = strategyTrades.reduce((sum, t) => sum + t.pnl, 0);
                    return (
                      <div key={strategy} className="flex justify-between items-center">
                        <span>{strategy}</span>
                        <div className="text-right">
                          <div className={`font-semibold ${strategyPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{strategyPnL.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">{strategyTrades.length} trades</div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="strategies">
            <Card>
              <CardHeader>
                <CardTitle>Trading Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Swing Trading", "Options Trading", "Intraday", "Positional", "Scalping", "Momentum"].map((strategy) => (
                    <div key={strategy} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <h4 className="font-semibold mb-2">{strategy}</h4>
                      <p className="text-sm text-gray-600 mb-3">Click to view detailed analysis and rules for this strategy.</p>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TradingJournal;
