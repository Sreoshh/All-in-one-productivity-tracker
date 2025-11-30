import StatsCard from "../StatsCard";
import { Target, Flame, CheckCircle, TrendingUp } from "lucide-react";

export default function StatsCardExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-background">
      <StatsCard icon={Target} label="Goals Set" value={12} variant="purple" />
      <StatsCard icon={Flame} label="Current Streak" value="21 days" variant="orange" />
      <StatsCard icon={CheckCircle} label="Completed" value="89%" variant="gold" />
      <StatsCard icon={TrendingUp} label="This Week" value="+15%" subtext="vs last week" />
    </div>
  );
}
