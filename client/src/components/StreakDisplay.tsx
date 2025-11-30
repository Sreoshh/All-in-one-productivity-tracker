import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakDisplayProps {
  count: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  animated?: boolean;
}

export default function StreakDisplay({
  count,
  size = "md",
  showLabel = true,
  animated = true
}: StreakDisplayProps) {
  const isActive = count > 0;
  const isMilestone = count > 0 && count % 7 === 0;

  const sizeClasses = {
    sm: "text-sm gap-1",
    md: "text-base gap-1.5",
    lg: "text-lg gap-2"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <div
      className={cn(
        "flex items-center font-medium",
        sizeClasses[size],
        isActive ? "text-[#FF6B3D]" : "text-muted-foreground"
      )}
      data-testid="streak-display"
    >
      <motion.div
        animate={animated && isMilestone ? {
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        } : {}}
        transition={{ duration: 0.5, repeat: isMilestone ? Infinity : 0, repeatDelay: 2 }}
      >
        <Flame
          className={cn(
            iconSizes[size],
            isActive && "fill-current"
          )}
        />
      </motion.div>
      <span>{count}</span>
      {showLabel && (
        <span className="text-muted-foreground ml-1">
          {count === 1 ? "day" : "days"}
        </span>
      )}
    </div>
  );
}
