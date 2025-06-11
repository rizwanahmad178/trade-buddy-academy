
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CommunityTabs } from "@/components/CommunityTabs";
import { DiscussionSection } from "@/components/community/DiscussionSection";
import { ChartSharingSection } from "@/components/community/ChartSharingSection";
import { QASection } from "@/components/community/QASection";
import { MentorTradesSection } from "@/components/community/MentorTradesSection";
import { AnnouncementsSection } from "@/components/community/AnnouncementsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, TrendingUp, MessageSquare, Plus, Search } from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("discussions");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "discussions":
        return <DiscussionSection />;
      case "charts":
        return <ChartSharingSection />;
      case "doubts":
        return <QASection />;
      case "mentor-trades":
        return <MentorTradesSection />;
      case "announcements":
        return <AnnouncementsSection />;
      default:
        return <DiscussionSection />;
    }
  };

  const getCreateButtonText = () => {
    switch (activeTab) {
      case "discussions":
        return "Start Discussion";
      case "charts":
        return "Share Chart";
      case "doubts":
        return "Ask Question";
      case "mentor-trades":
        return "Share Trade";
      case "announcements":
        return "Make Announcement";
      default:
        return "Create Post";
    }
  };

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CommunityTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Community</h1>
          <p className="text-muted-foreground">Connect with fellow traders, share insights, and learn together</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Create */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                  <Button className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    {getCreateButtonText()}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dynamic Content */}
            {renderActiveSection()}
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
                  <span className="text-muted-foreground">Total Members</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Traders</span>
                  <span className="font-semibold">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Online Now</span>
                  <span className="font-semibold text-green-600">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Daily Posts</span>
                  <span className="font-semibold">156</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {traders.map((trader) => (
                  <div key={trader.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={trader.avatar} />
                        <AvatarFallback>{trader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                        trader.status === 'online' ? 'bg-green-500' : 'bg-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{trader.name}</p>
                      <p className="text-xs text-muted-foreground">{trader.expertise}</p>
                      <p className="text-xs text-green-600">Win Rate: {trader.winRate}</p>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>• Be respectful and constructive in discussions</p>
                <p>• Share knowledge and help fellow traders</p>
                <p>• No spam or promotional content</p>
                <p>• Verify information before sharing</p>
                <p>• Use appropriate tags for better discovery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
