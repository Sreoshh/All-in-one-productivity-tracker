import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DayStatus {
  date: Date;
  completed: boolean;
  partial?: boolean;
}

interface WeeklyViewProps {
  days: DayStatus[];
}

export default function WeeklyView({ days }: WeeklyViewProps) {
  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 border border-card-border" data-testid="weekly-view">
      <h3 className="font-medium text-foreground mb-4">This Week</h3>
      <div className="flex justify-between gap-1 md:gap-2">
        {days.map((day, index) => {
          const dayDate = new Date(day.date);
          dayDate.setHours(0, 0, 0, 0);
          const isToday = dayDate.getTime() === today.getTime();
          const isPast = dayDate < today;

          return (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center gap-2"
            >
              <span className={cn(
                "text-xs font-medium",
                isToday ? "text-primary" : "text-muted-foreground"
              )}>
                {dayNames[dayDate.getDay()]}
              </span>
              <div className={cn(
                "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center",
                "transition-colors duration-200",
                day.completed && "bg-[#FF6B3D] text-white",
                day.partial && !day.completed && "bg-[#D4A056]/50",
                !day.completed && !day.partial && isPast && "bg-muted",
                !day.completed && !day.partial && !isPast && "bg-muted/50",
                isToday && !day.completed && "ring-2 ring-primary"
              )}>
                {day.completed ? (
                  <Check className="w-4 h-4 md:w-5 md:h-5" />
                ) : (
                  <span className={cn(
                    "text-xs md:text-sm",
                    isToday ? "text-primary font-medium" : "text-muted-foreground"
                  )}>
                    {dayDate.getDate()}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
