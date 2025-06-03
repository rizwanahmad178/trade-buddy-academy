
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, MessageSquare, TrendingUp, Gift, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const NavigationCards = () => {
  const cards = [
    {
      icon: Users,
      title: "Explore Mentors",
      description: "Browse verified trading experts and find your perfect mentor",
      link: "/explore",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Student Community",
      description: "Connect with fellow traders and share insights",
      link: "/community",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Trading Journal",
      description: "Track your trades and analyze your performance",
      link: "/trading-journal",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Gift,
      title: "Referral Program",
      description: "Earn rewards by referring friends to our platform",
      link: "/referral",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: BookOpen,
      title: "Student Dashboard",
      description: "Access your courses, schedule, and progress",
      link: "/student-dashboard",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Find answers to frequently asked questions",
      link: "/faq",
      color: "bg-gray-100 text-gray-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Platform</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover all the features and tools available to help you succeed in your trading journey
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <Link to={card.link}>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
