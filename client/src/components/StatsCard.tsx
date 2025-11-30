import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  subtext?: string;
  variant?: "default" | "purple" | "orange" | "gold";
}

export default function StatsCard({
  icon: Icon,
  label,
  value,
  subtext,
  variant = "default"
}: StatsCardProps) {
  const variantStyles = {
    default: "bg-card",
    purple: "bg-primary/10",
    orange: "bg-[#FF6B3D]/10",
    gold: "bg-[#D4A056]/10"
  };

  const iconStyles = {
    default: "text-foreground",
    purple: "text-primary",
    orange: "text-[#FF6B3D]",
    gold: "text-[#D4A056]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-xl p-4 border border-card-border",
        variantStyles[variant]
      )}
      data-testid={`stats-card-${label.toLowerCase().replace(/\s/g, "-")}`}
    >
      <div className="flex items-start justify-between mb-3">
        <Icon className={cn("w-5 h-5", iconStyles[variant])} />
      </div>
      <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
      {subtext && (
        <p className="text-xs text-muted-foreground mt-1">{subtext}</p>
      )}
    </motion.div>
  );
}
