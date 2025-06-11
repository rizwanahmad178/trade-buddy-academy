
import { Navigation } from "@/components/Navigation";
import { TraderCard } from "@/components/TraderCard";

const FullCourse = () => {
  // Mock data for full course traders
  const traders = [
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Full Course Programs</h1>
          <p className="text-muted-foreground">Complete trading education with comprehensive curriculum</p>
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

export default FullCourse;
