
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Share2, Copy, Users, Gift, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Referral = () => {
  const [referralCode] = useState("TRADE2024XYZ");
  const [referralLink] = useState(`https://tradementor.com/ref/${referralCode}`);
  const { toast } = useToast();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  const referralStats = [
    { label: "Total Referrals", value: "12", icon: Users },
    { label: "Successful Conversions", value: "8", icon: Gift },
    { label: "Earnings", value: "₹2,400", icon: IndianRupee },
  ];

  const recentReferrals = [
    { name: "Priya S.", status: "Converted", date: "2 days ago", earning: "₹300" },
    { name: "Rahul K.", status: "Pending", date: "5 days ago", earning: "₹0" },
    { name: "Amit T.", status: "Converted", date: "1 week ago", earning: "₹300" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Referral Program</h1>
          <p className="text-gray-600">Earn ₹300 for every successful referral when someone purchases a course</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {referralStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Your Referral Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Referral Code</label>
                <div className="flex gap-2 mt-1">
                  <Input value={referralCode} readOnly />
                  <Button onClick={handleCopyCode} variant="outline" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Referral Link</label>
                <div className="flex gap-2 mt-1">
                  <Input value={referralLink} readOnly className="text-sm" />
                  <Button onClick={handleCopyLink} variant="outline" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">How it works:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Share your referral code or link</li>
                  <li>• Friend signs up and purchases a course</li>
                  <li>• You earn ₹300 commission</li>
                  <li>• Your friend gets 10% discount</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Referrals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReferrals.map((referral, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{referral.name}</p>
                      <p className="text-sm text-gray-600">{referral.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={referral.status === "Converted" ? "default" : "secondary"}>
                        {referral.status}
                      </Badge>
                      <p className="text-sm font-medium mt-1">{referral.earning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Referral;
