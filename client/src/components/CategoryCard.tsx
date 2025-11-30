import { motion } from "framer-motion";
import { Plus, Leaf, Heart, Briefcase, Lightbulb, CheckSquare, Moon, Users, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export type CategoryType = 
  | "be-yourself" 
  | "daily-thoughts" 
  | "work" 
  | "skills" 
  | "checklist" 
  | "end-day" 
  | "team-updates"
  | "reading";

interface CategoryCardProps {
  category: CategoryType;
  title: string;
  completedCount?: number;
  totalCount?: number;
  onClick: () => void;
}

const categoryStyles: Record<CategoryType, { bg: string; icon: typeof Leaf; iconBg: string }> = {
  "be-yourself": {
    bg: "bg-[#C9A7D8] dark:bg-[#8B5A9B]",
    icon: Heart,
    iconBg: "bg-[#B894C7]/50"
  },
  "daily-thoughts": {
    bg: "bg-[#D4A056] dark:bg-[#A67C3D]",
    icon: Leaf,
    iconBg: "bg-[#C49046]/50"
  },
  "work": {
    bg: "bg-[#FF6B3D] dark:bg-[#CC5530]",
    icon: Briefcase,
    iconBg: "bg-white/20"
  },
  "skills": {
    bg: "bg-[#FF6B3D] dark:bg-[#CC5530]",
    icon: Lightbulb,
    iconBg: "bg-[#E85A2D]/50"
  },
  "checklist": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    icon: CheckSquare,
    iconBg: "bg-[#B8D4EB]/50"
  },
  "end-day": {
    bg: "bg-[#E8DCC8] dark:bg-[#8A7B5C]",
    icon: Moon,
    iconBg: "bg-[#D4C9B4]/50"
  },
  "team-updates": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    icon: Users,
    iconBg: "bg-[#B8D4EB]/50"
  },
  "reading": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    icon: BookOpen,
    iconBg: "bg-[#B8D4EB]/50"
  }
};

export default function CategoryCard({ 
  category, 
  title, 
  completedCount = 0, 
  totalCount = 0,
  onClick 
}: CategoryCardProps) {
  const style = categoryStyles[category];
  const Icon = style.icon;
  const hasProgress = totalCount > 0;

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative w-full aspect-square rounded-2xl p-4 md:p-5",
        "flex flex-col justify-between text-left",
        "transition-shadow duration-200",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        style.bg
      )}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      data-testid={`card-${category}`}
    >
      <div className="flex justify-between items-start">
        <div className={cn("p-2 md:p-3 rounded-xl", style.iconBg)}>
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
        </div>
        <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/20 flex items-center justify-center">
          <Plus className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg md:text-xl text-white leading-tight mb-1">
          {title}
        </h3>
        {hasProgress && (
          <p className="text-xs md:text-sm text-white/70">
            {completedCount}/{totalCount} completed
          </p>
        )}
      </div>
    </motion.button>
  );
}
