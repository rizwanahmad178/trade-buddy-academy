
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Heart, Share } from "lucide-react";

export const DiscussionSection = () => {
  const discussions = [
    {
      id: 1,
      title: "Best strategy for volatile markets?",
      author: "Student123",
      avatar: "/placeholder.svg",
      content: "I'm struggling with trading in these volatile conditions. Any suggestions?",
      replies: 15,
      likes: 8,
      time: "2 hours ago",
      category: "Strategy",
      tags: ["volatility", "strategy", "beginner"]
    },
    {
      id: 2,
      title: "NIFTY analysis for next week",
      author: "TraderPro",
      avatar: "/placeholder.svg",
      content: "Based on technical analysis, here's my outlook for NIFTY next week...",
      replies: 23,
      likes: 12,
      time: "4 hours ago",
      category: "Analysis",
      tags: ["nifty", "analysis", "weekly"]
    }
  ];

  return (
    <div className="space-y-4">
      {discussions.map((discussion) => (
        <Card key={discussion.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <img src={discussion.avatar} alt={discussion.author} className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="font-semibold text-lg">{discussion.title}</h3>
                  <p className="text-sm text-muted-foreground">by {discussion.author} • {discussion.time}</p>
                </div>
              </div>
              <Badge variant="secondary">{discussion.category}</Badge>
            </div>
            
            <p className="text-foreground mb-4">{discussion.content}</p>
            
            <div className="flex items-center gap-2 mb-4">
              {discussion.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {discussion.likes}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {discussion.replies}
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
