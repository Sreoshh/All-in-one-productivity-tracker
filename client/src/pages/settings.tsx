import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save } from "lucide-react";

export default function Settings() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("");
  const [dailyGoal, setDailyGoal] = useState("5");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setName(savedName);
    
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) setEmail(savedEmail);
    
    const savedGoal = localStorage.getItem("dailyGoal");
    if (savedGoal) setDailyGoal(savedGoal);
  }, []);

  const handleSave = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("dailyGoal", dailyGoal);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-6"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Settings</h1>

          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="font-serif text-2xl text-foreground mb-6">Profile</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full"
                    data-testid="input-email"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="font-serif text-2xl text-foreground mb-6">Preferences</h2>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Daily Goal (number of habits)
                </label>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={dailyGoal}
                  onChange={(e) => setDailyGoal(e.target.value)}
                  placeholder="5"
                  className="w-full"
                  data-testid="input-daily-goal"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Set your target number of habits to complete daily
                </p>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: saved ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {saved && (
                <div className="bg-[#C9A7D8]/20 border border-[#C9A7D8] rounded-lg p-4 text-sm text-foreground">
                  ✓ Settings saved successfully!
                </div>
              )}
            </motion.div>

            <Button
              onClick={handleSave}
              size="lg"
              className="w-full bg-[#C9A7D8] hover:bg-[#B894C7] text-white mt-4"
              data-testid="button-save-settings"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
