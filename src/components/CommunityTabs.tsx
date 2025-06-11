
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, HelpCircle, BarChart3, Megaphone } from "lucide-react";

interface CommunityTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const CommunityTabs = ({ activeTab, onTabChange }: CommunityTabsProps) => {
  const tabs = [
    { id: "discussions", label: "Discussions", icon: MessageSquare },
    { id: "charts", label: "Chart Sharing", icon: BarChart3 },
    { id: "doubts", label: "Q&A", icon: HelpCircle },
    { id: "mentor-trades", label: "Mentor Trades", icon: TrendingUp },
    { id: "announcements", label: "Announcements", icon: Megaphone }
  ];

  return (
    <div className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className="flex items-center gap-2 whitespace-nowrap"
                onClick={() => onTabChange(tab.id)}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
