
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import FullCourse from "./pages/FullCourse";
import MentorshipOnly from "./pages/MentorshipOnly";
import OneOnOneSession from "./pages/OneOnOneSession";
import Articles from "./pages/Articles";
import TraderProfile from "./pages/TraderProfile";
import CourseDetails from "./pages/CourseDetails";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import FAQ from "./pages/FAQ";
import Checkout from "./pages/Checkout";
import Referral from "./pages/Referral";
import Community from "./pages/Community";
import TradingJournal from "./pages/TradingJournal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/full-course" element={<FullCourse />} />
          <Route path="/explore/mentorship" element={<MentorshipOnly />} />
          <Route path="/explore/one-on-one" element={<OneOnOneSession />} />
          <Route path="/explore/articles" element={<Articles />} />
          <Route path="/trader/:id" element={<TraderProfile />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/community" element={<Community />} />
          <Route path="/trading-journal" element={<TradingJournal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
