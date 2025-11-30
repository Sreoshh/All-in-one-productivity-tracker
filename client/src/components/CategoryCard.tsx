import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import cardImage from "@assets/1_1764510734535.png";

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

const HandIcon = () => (
  <svg viewBox="0 0 60 60" className="w-12 h-12 md:w-16 md:h-16 opacity-60">
    <path d="M30 10 C25 10 20 15 20 25 L20 35 C15 35 10 40 15 50 L45 50 C50 40 45 35 40 35 L40 25 C40 15 35 10 30 10Z" fill="currentColor"/>
    <path d="M22 20 L22 35" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <path d="M27 15 L27 35" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <path d="M33 15 L33 35" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <path d="M38 20 L38 35" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 60 60" className="w-12 h-12 md:w-16 md:h-16 opacity-60">
    <path d="M30 5 C30 5 15 20 15 35 C15 50 30 55 30 55 C30 55 45 50 45 35 C45 20 30 5 30 5Z" fill="currentColor"/>
    <path d="M30 15 L30 45" stroke="white" strokeWidth="2" opacity="0.5"/>
    <path d="M25 25 L30 30 L35 25" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M25 35 L30 40 L35 35" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
  </svg>
);

const CircleIcon = () => (
  <svg viewBox="0 0 60 60" className="w-12 h-12 md:w-16 md:h-16 opacity-60">
    <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

const FernIcon = () => (
  <svg viewBox="0 0 60 60" className="w-12 h-12 md:w-16 md:h-16 opacity-60">
    <path d="M30 50 L30 10" stroke="currentColor" strokeWidth="2"/>
    <path d="M30 15 L20 20 M30 20 L40 25 M30 25 L20 30 M30 30 L40 35 M30 35 L20 40 M30 40 L40 45" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 20 L15 22 M40 25 L45 27 M20 30 L15 32 M40 35 L45 37 M20 40 L15 42 M40 45 L45 47" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const StarburstIcon = () => (
  <svg viewBox="0 0 60 60" className="w-12 h-12 md:w-16 md:h-16 opacity-60">
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30) * Math.PI / 180;
      const x1 = 30 + Math.cos(angle) * 8;
      const y1 = 30 + Math.sin(angle) * 8;
      const x2 = 30 + Math.cos(angle) * 22;
      const y2 = 30 + Math.sin(angle) * 22;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2"/>;
    })}
  </svg>
);

const ArchIcon = () => (
  <svg viewBox="0 0 60 60" className="w-12 h-12 md:w-16 md:h-16 opacity-60">
    <path d="M15 50 C15 30 25 15 30 15 C35 15 45 30 45 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);

const categoryStyles: Record<CategoryType, { 
  bg: string; 
  iconComponent: () => JSX.Element;
  hasImage?: boolean;
}> = {
  "team-updates": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    iconComponent: () => <></>,
    hasImage: true
  },
  "be-yourself": {
    bg: "bg-[#C9A7D8] dark:bg-[#8B5A9B]",
    iconComponent: HandIcon
  },
  "daily-thoughts": {
    bg: "bg-[#D4A056] dark:bg-[#A67C3D]",
    iconComponent: LeafIcon
  },
  "work": {
    bg: "bg-[#FF6B3D] dark:bg-[#CC5530]",
    iconComponent: CircleIcon
  },
  "skills": {
    bg: "bg-[#FF6B3D] dark:bg-[#CC5530]",
    iconComponent: FernIcon
  },
  "checklist": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    iconComponent: StarburstIcon
  },
  "end-day": {
    bg: "bg-[#E8DCC8] dark:bg-[#8A7B5C]",
    iconComponent: ArchIcon
  },
  "reading": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    iconComponent: () => <></>,
    hasImage: true
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
  const IconComponent = style.iconComponent;
  const hasProgress = totalCount > 0;

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative w-full aspect-square rounded-2xl p-4 md:p-5 overflow-hidden",
        "flex flex-col justify-between text-left",
        "transition-shadow duration-200",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        style.bg
      )}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      data-testid={`card-${category}`}
    >
      {style.hasImage && (
        <div className="absolute inset-0 opacity-30">
          <img 
            src={cardImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start relative z-10">
        <div className="text-white">
          <IconComponent />
        </div>
        <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/20 flex items-center justify-center">
          <Plus className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
        </div>
      </div>

      <div className="relative z-10">
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
