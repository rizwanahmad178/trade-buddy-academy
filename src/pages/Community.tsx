
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, TrendingUp, Users, Search } from "lucide-react";

const Community = () => {
  const traders = [
    {
      id: 1,
      name: "Rajesh Kumar",
      expertise: "Options Trading",
      experience: "5 years",
      followers: 1250,
      winRate: "78%",
      avatar: "/placeholder.svg",
      status: "online",
      lastTrade: "NIFTY 19500 CE - Profit ₹2,500"
    },
    {
      id: 2,
      name: "Priya Sharma",
      expertise: "Swing Trading",
      experience: "3 years",
      followers: 890,
      winRate: "72%",
      avatar: "/placeholder.svg",
      status: "offline",
      lastTrade: "RELIANCE - Profit ₹1,800"
    },
    {
      id: 3,
      name: "Amit Patel",
      expertise: "Intraday Trading",
      experience: "7 years",
      followers: 2100,
      winRate: "85%",
      avatar: "/placeholder.svg",
      status: "online",
      lastTrade: "TCS - Profit ₹3,200"
    }
  ];

  const discussions = [
    {
      title: "Best strategy for volatile markets?",
      author: "Student123",
      replies: 15,
      likes: 8,
      time: "2 hours ago",
      category: "Strategy"
    },
    {
      title: "NIFTY analysis for next week",
      author: "TraderPro",
      replies: 23,
      likes: 12,
      time: "4 hours ago",
      category: "Analysis"
    },
    {
      title: "Risk management tips for beginners",
      author: "RiskExpert",
      replies: 31,
      likes: 18,
      time: "6 hours ago",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Community</h1>
          <p className="text-gray-600">Connect with fellow traders, share insights, and learn together</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input placeholder="Search discussions..." className="pl-10" />
                  </div>
                  <Button variant="outline">Latest</Button>
                  <Button variant="outline">Popular</Button>
                </div>
              </CardContent>
            </Card>

            {/* Discussions */}
            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{discussion.title}</h3>
                      <Badge variant="secondary">{discussion.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                        <span>by {discussion.author}</span>
                        <span>{discussion.time}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {discussion.replies}
                        </span>
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Members</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Traders</span>
                  <span className="font-semibold">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Online Now</span>
                  <span className="font-semibold text-green-600">89</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Traders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Top Traders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {traders.map((trader) => (
                  <div key={trader.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={trader.avatar} />
                        <AvatarFallback>{trader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        trader.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{trader.name}</p>
                      <p className="text-xs text-gray-600">{trader.expertise}</p>
                      <p className="text-xs text-green-600">Win Rate: {trader.winRate}</p>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
