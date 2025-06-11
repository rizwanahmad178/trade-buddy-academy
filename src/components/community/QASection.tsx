
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, CheckCircle, MessageSquare, ArrowUp } from "lucide-react";

export const QASection = () => {
  const questions = [
    {
      id: 1,
      title: "How to calculate position size for options trading?",
      author: "NewTrader",
      avatar: "/placeholder.svg",
      content: "I'm confused about position sizing in options. Can someone explain the 2% rule?",
      answers: 5,
      upvotes: 12,
      time: "30 minutes ago",
      status: "answered",
      category: "Options",
      bestAnswer: true
    },
    {
      id: 2,
      title: "What's the difference between market and limit orders?",
      author: "StudentX",
      avatar: "/placeholder.svg",
      content: "I keep hearing about market vs limit orders but don't understand when to use which.",
      answers: 8,
      upvotes: 15,
      time: "1 hour ago",
      status: "open",
      category: "Basics"
    }
  ];

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <Card key={question.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <img src={question.avatar} alt={question.author} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{question.title}</h3>
                    {question.bestAnswer && <CheckCircle className="w-5 h-5 text-green-600" />}
                  </div>
                  <p className="text-sm text-muted-foreground">by {question.author} • {question.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{question.category}</Badge>
                <Badge variant={question.status === "answered" ? "default" : "secondary"}>
                  {question.status}
                </Badge>
              </div>
            </div>
            
            <p className="text-foreground mb-4">{question.content}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ArrowUp className="w-4 h-4" />
                  {question.upvotes}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {question.answers} answers
                </Button>
              </div>
              <Button size="sm">Answer</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
