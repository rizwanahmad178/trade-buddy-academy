
import { Navigation } from "@/components/Navigation";
import { TraderCard } from "@/components/TraderCard";

const MentorshipOnly = () => {
  // Mock data for mentorship only traders
  const traders = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentorship Only</h1>
          <p className="text-gray-600">Get personalized guidance from experienced mentors</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traders.map((trader) => (
            <TraderCard key={trader.id} trader={trader} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorshipOnly;
