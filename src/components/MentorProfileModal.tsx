
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, Users, TrendingUp, BookOpen, Calendar, Award, Phone, MessageSquare } from "lucide-react";

interface MentorProfileModalProps {
  mentor: any;
  isOpen: boolean;
  onClose: () => void;
}

export const MentorProfileModal = ({ mentor, isOpen, onClose }: MentorProfileModalProps) => {
  if (!mentor) return null;

  // Mock additional data for mentor profile
  const tradeRecords = [
    { date: "2024-01-15", stock: "RELIANCE", action: "BUY", price: "₹2,450", profit: "+₹15,000", percentage: "+8.2%" },
    { date: "2024-01-10", stock: "TCS", action: "SELL", price: "₹3,680", profit: "+₹22,000", percentage: "+12.1%" },
    { date: "2024-01-05", stock: "HDFC BANK", action: "BUY", price: "₹1,580", profit: "+₹8,500", percentage: "+5.4%" }
  ];

  const blogs = [
    { title: "Market Analysis: Tech Stocks in 2024", date: "2024-01-12", readTime: "5 min", category: "Market Analysis" },
    { title: "Options Strategy for Volatile Markets", date: "2024-01-08", readTime: "8 min", category: "Options Trading" },
    { title: "Risk Management Essentials", date: "2024-01-03", readTime: "6 min", category: "Risk Management" }
  ];

  const achievements = [
    "Top Performer 2023",
    "Best Risk Management Award",
    "Student Choice Award",
    "Consistent Profit Maker"
  ];

  const stats = {
    totalTrades: 247,
    successRate: 78,
    avgMonthlyReturn: 12.5,
    totalStudents: mentor.studentsCount || 150,
    yearsExperience: 8
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Mentor Profile</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h2 className="text-2xl font-bold">{mentor.name}</h2>
                {mentor.sebiVerified && (
                  <Badge className="bg-green-100 text-green-800">
                    <Check className="w-3 h-3 mr-1" />
                    SEBI Verified
                  </Badge>
                )}
              </div>
              <p className="text-lg text-blue-600 font-semibold mb-2">{mentor.speciality}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{mentor.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{stats.totalStudents} students</span>
                </div>
                <span>{mentor.experience}</span>
              </div>
              <div className="flex gap-2 justify-center md:justify-start">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Mentor
                </Button>
                <Button variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Quick Call
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-6 h-6 mx-auto text-green-600 mb-2" />
                <p className="text-2xl font-bold text-green-600">{stats.successRate}%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                <p className="text-2xl font-bold">{stats.totalTrades}</p>
                <p className="text-sm text-gray-600">Total Trades</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-6 h-6 mx-auto text-purple-600 mb-2" />
                <p className="text-2xl font-bold">{stats.avgMonthlyReturn}%</p>
                <p className="text-sm text-gray-600">Avg Monthly Return</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="w-6 h-6 mx-auto text-orange-600 mb-2" />
                <p className="text-2xl font-bold">{stats.totalStudents}</p>
                <p className="text-sm text-gray-600">Students Taught</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Award className="w-6 h-6 mx-auto text-yellow-600 mb-2" />
                <p className="text-2xl font-bold">{stats.yearsExperience}</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trades">Trade Records</TabsTrigger>
              <TabsTrigger value="blogs">Blogs & Articles</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {mentor.name} is an experienced trader with {mentor.experience} in the Indian stock market. 
                    Specializing in {mentor.speciality.toLowerCase()}, they have helped over {stats.totalStudents} students 
                    achieve their trading goals through systematic approaches and risk management techniques.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Qualifications</h4>
                      <p className="text-gray-600">{mentor.qualification}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Languages</h4>
                      <p className="text-gray-600">{mentor.languages?.join(", ")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="trades" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Trade Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tradeRecords.map((trade, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="font-semibold">{trade.stock}</p>
                            <p className="text-sm text-gray-600">{trade.date}</p>
                          </div>
                          <Badge variant={trade.action === "BUY" ? "default" : "secondary"}>
                            {trade.action}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{trade.price}</p>
                          <p className="text-sm text-green-600">{trade.profit} ({trade.percentage})</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="blogs" className="space-y-4">
              <div className="grid gap-4">
                {blogs.map((blog, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">{blog.category}</Badge>
                        <span className="text-sm text-gray-500">{blog.readTime}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{blog.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Awards & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                        <Award className="w-6 h-6 text-yellow-600" />
                        <span className="font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
