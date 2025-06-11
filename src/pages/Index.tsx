
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { NavigationCards } from "@/components/NavigationCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <Hero />
        <NavigationCards />
      </div>
    </div>
  );
};

export default Index;
