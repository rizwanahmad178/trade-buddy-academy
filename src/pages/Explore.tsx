import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { FilterTabs } from "@/components/FilterTabs";
import { TraderCard } from "@/components/TraderCard";
import { MentorProfileModal } from "@/components/MentorProfileModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState("full-course");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Mock data for all content types
  const fullCourseTraders = [
    {
      id: 1,
      name: "Rajesh Kumar",
      photo: "/placeholder.svg",
      rating: 4.9,
      languages: ["Hindi", "English"],
      qualification: "CFA, MBA Finance",
      sebiVerified: true,
      speciality: "Complete Trading Mastery",
      experience: "8+ years",
      studentsCount: 150
    },
    {
      id: 2,
      name: "Priya Sharma",
      photo: "/placeholder.svg",
      rating: 4.8,
      languages: ["English", "Tamil"],
      qualification: "CA, FRM",
      sebiVerified: true,
      speciality: "Comprehensive Market Analysis",
      experience: "6+ years",
      studentsCount: 200
    }
  ];

  const mentorshipTraders = [
    {
      id: 3,
      name: "Amit Gupta",
      photo: "/placeholder.svg",
      rating: 4.7,
      languages: ["Hindi", "English"],
      qualification: "CFA, NISM",
      sebiVerified: true,
      speciality: "Personal Trading Guidance",
      experience: "10+ years",
      studentsCount: 75
    },
    {
      id: 4,
      name: "Sneha Patel",
      photo: "/placeholder.svg",
      rating: 4.9,
      languages: ["English", "Gujarati"],
      qualification: "FRM, CFA",
      sebiVerified: true,
      speciality: "Risk Management Mentoring",
      experience: "7+ years",
      studentsCount: 120
    }
  ];

  const oneOnOneTraders = [
    {
      id: 5,
      name: "Vikram Singh",
      photo: "/placeholder.svg",
      rating: 4.8,
      languages: ["Hindi", "English"],
      qualification: "SEBI RA, CFA",
      sebiVerified: true,
      speciality: "Individual Trading Sessions",
      experience: "12+ years",
      studentsCount: 50
    },
    {
      id: 6,
      name: "Meera Joshi",
      photo: "/placeholder.svg",
      rating: 4.9,
      languages: ["English", "Marathi"],
      qualification: "FRM, NISM",
      sebiVerified: true,
      speciality: "Personal Strategy Development",
      experience: "9+ years",
      studentsCount: 85
    }
  ];

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

  const handleViewProfile = (mentor: any) => {
    setSelectedMentor(mentor);
    setIsProfileModalOpen(true);
  };

  const getFilteredContent = () => {
    switch (activeFilter) {
      case "full-course":
        return fullCourseTraders;
      case "mentorship":
        return mentorshipTraders;
      case "one-on-one":
        return oneOnOneTraders;
      case "articles":
        return articles;
      default:
        return fullCourseTraders;
    }
  };

  const getPageTitle = () => {
    switch (activeFilter) {
      case "full-course":
        return "Full Course Programs";
      case "mentorship":
        return "Mentorship Only";
      case "one-on-one":
        return "One-on-One Sessions";
      case "articles":
        return "Trading Articles";
      default:
        return "Full Course Programs";
    }
  };

  const getPageDescription = () => {
    switch (activeFilter) {
      case "full-course":
        return "Complete trading education with comprehensive curriculum";
      case "mentorship":
        return "Get personalized guidance from experienced mentors";
      case "one-on-one":
        return "Personalized trading sessions tailored to your needs";
      case "articles":
        return "Learn from expert insights and trading knowledge";
      default:
        return "Complete trading education with comprehensive curriculum";
    }
  };

  const renderContent = () => {
    const content = getFilteredContent();

    if (activeFilter === "articles") {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((trader) => (
          <TraderCard 
            key={trader.id} 
            trader={trader} 
            onViewProfile={() => handleViewProfile(trader)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{getPageTitle()}</h1>
          <p className="text-gray-600">{getPageDescription()}</p>
        </div>
        
        {renderContent()}
      </div>

      <MentorProfileModal
        mentor={selectedMentor}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
};

export default Explore;

}
