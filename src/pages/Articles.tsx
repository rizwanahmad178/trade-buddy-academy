
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const Articles = () => {
  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Understanding Options Trading: A Beginner's Guide",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      category: "Options",
      excerpt: "Learn the fundamentals of options trading, including calls, puts, and basic strategies.",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Technical Analysis: Key Chart Patterns Every Trader Should Know",
      author: "Priya Sharma",
      date: "2024-01-10",
      category: "Technical Analysis",
      excerpt: "Master the essential chart patterns that can help you identify trading opportunities.",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Risk Management Strategies for Successful Trading",
      author: "Amit Gupta",
      date: "2024-01-05",
      category: "Risk Management",
      excerpt: "Discover proven risk management techniques to protect your trading capital.",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Trading Articles</h1>
          <p className="text-gray-600">Learn from expert insights and trading knowledge</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
