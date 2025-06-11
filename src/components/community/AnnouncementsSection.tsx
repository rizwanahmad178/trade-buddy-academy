
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Pin, Calendar } from "lucide-react";

export const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "New Feature: AI-Powered Trade Alerts",
      content: "We're excited to announce our new AI-powered trade alert system that will help you identify potential trading opportunities in real-time.",
      author: "TradeMentor Team",
      type: "feature",
      pinned: true,
      date: "2024-01-15",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "Market Holiday Schedule - January 2024",
      content: "Please note the upcoming market holidays and plan your trades accordingly. Markets will be closed on January 26th for Republic Day.",
      author: "Admin",
      type: "important",
      pinned: false,
      date: "2024-01-10",
      time: "2 days ago"
    },
    {
      id: 3,
      title: "Weekly Webinar: Options Strategies for Volatile Markets",
      content: "Join our expert mentors this Friday at 7 PM IST for an exclusive webinar on options strategies that work best in volatile market conditions.",
      author: "Education Team",
      type: "event",
      pinned: false,
      date: "2024-01-08",
      time: "4 days ago"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature": return "bg-blue-100 text-blue-800";
      case "important": return "bg-red-100 text-red-800";
      case "event": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <Card key={announcement.id} className={`hover:shadow-md transition-shadow ${announcement.pinned ? 'border-primary' : ''}`}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {announcement.pinned ? (
                    <Pin className="w-5 h-5 text-primary" />
                  ) : (
                    <Megaphone className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{announcement.title}</h3>
                    {announcement.pinned && <Badge variant="default" className="text-xs">Pinned</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    by {announcement.author} • {announcement.time}
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className={getTypeColor(announcement.type)}>
                {announcement.type}
              </Badge>
            </div>
            
            <p className="text-foreground mb-4">{announcement.content}</p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{new Date(announcement.date).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
