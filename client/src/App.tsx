import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WelcomeScreen from "@/components/WelcomeScreen";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import NotFound from "@/pages/not-found";

function MainApp() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [totalStreak, setTotalStreak] = useState(0);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowWelcome(false);
    }
    
    const savedStreak = localStorage.getItem("totalStreak");
    if (savedStreak) {
      setTotalStreak(parseInt(savedStreak, 10));
    }
  }, []);

  const handleGetStarted = () => {
    localStorage.setItem("hasVisited", "true");
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <WelcomeScreen onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header totalStreak={totalStreak} userName="User" />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={MainApp} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
