
import { Navigation } from "@/components/Navigation";
import { TraderCard } from "@/components/TraderCard";

const OneOnOneSession = () => {
  // Mock data for one-on-one session traders
  const traders = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">One-on-One Sessions</h1>
          <p className="text-gray-600">Personalized trading sessions tailored to your needs</p>
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

export default OneOnOneSession;
