import { motion } from "framer-motion";
import { Plus } from "lucide-react";
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

const TeamUpdatesIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="15" y="25" width="25" height="35" rx="2" fill="#4A3F35" opacity="0.7"/>
    <rect x="18" y="28" width="19" height="2" fill="#E8DCC8"/>
    <rect x="18" y="33" width="19" height="2" fill="#E8DCC8"/>
    <rect x="18" y="38" width="12" height="2" fill="#E8DCC8"/>
    <rect x="45" y="20" width="28" height="40" rx="2" fill="#3D3428" opacity="0.8"/>
    <rect x="48" y="23" width="22" height="3" fill="#D4C9B4"/>
    <rect x="48" y="29" width="22" height="2" fill="#D4C9B4"/>
    <rect x="48" y="34" width="22" height="2" fill="#D4C9B4"/>
    <rect x="48" y="39" width="15" height="2" fill="#D4C9B4"/>
    <rect x="60" y="30" width="18" height="32" rx="2" fill="#5C4F3D" opacity="0.6"/>
    <circle cx="30" cy="72" r="8" fill="#4A3F35" opacity="0.3"/>
    <path d="M25 72 L30 68 L35 72 L30 76 Z" fill="#3D3428" opacity="0.5"/>
  </svg>
);

const BeYourselfIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M50 15 C40 15 30 25 30 40 L30 50 C20 52 15 60 20 75 L80 75 C85 60 80 52 70 50 L70 40 C70 25 60 15 50 15Z" fill="#4A3F35" opacity="0.6"/>
    <line x1="38" y1="30" x2="38" y2="50" stroke="#3D3428" strokeWidth="2" opacity="0.4"/>
    <line x1="46" y1="22" x2="46" y2="50" stroke="#3D3428" strokeWidth="2" opacity="0.4"/>
    <line x1="54" y1="22" x2="54" y2="50" stroke="#3D3428" strokeWidth="2" opacity="0.4"/>
    <line x1="62" y1="30" x2="62" y2="50" stroke="#3D3428" strokeWidth="2" opacity="0.4"/>
    <circle cx="50" cy="85" r="6" fill="#4A3F35" opacity="0.3"/>
  </svg>
);

const DailyThoughtsIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M50 10 C50 10 25 35 25 55 C25 80 50 90 50 90 C50 90 75 80 75 55 C75 35 50 10 50 10Z" fill="#4A3F35" opacity="0.5"/>
    <line x1="50" y1="25" x2="50" y2="75" stroke="#3D3428" strokeWidth="2" opacity="0.6"/>
    <path d="M40 40 L50 50 L60 40" stroke="#3D3428" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M40 55 L50 65 L60 55" stroke="#3D3428" strokeWidth="2" fill="none" opacity="0.5"/>
    <circle cx="25" cy="75" r="4" fill="#4A3F35" opacity="0.3"/>
    <circle cx="75" cy="75" r="3" fill="#4A3F35" opacity="0.25"/>
  </svg>
);

const WorkIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="30" fill="none" stroke="#4A3F35" strokeWidth="3" opacity="0.5"/>
    <circle cx="50" cy="50" r="20" fill="none" stroke="#3D3428" strokeWidth="2" opacity="0.4"/>
    <circle cx="50" cy="50" r="8" fill="#4A3F35" opacity="0.4"/>
    <line x1="50" y1="20" x2="50" y2="10" stroke="#4A3F35" strokeWidth="2" opacity="0.4"/>
    <line x1="50" y1="90" x2="50" y2="80" stroke="#4A3F35" strokeWidth="2" opacity="0.4"/>
    <line x1="20" y1="50" x2="10" y2="50" stroke="#4A3F35" strokeWidth="2" opacity="0.4"/>
    <line x1="90" y1="50" x2="80" y2="50" stroke="#4A3F35" strokeWidth="2" opacity="0.4"/>
  </svg>
);

const SkillsIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="50" y1="90" x2="50" y2="15" stroke="#4A3F35" strokeWidth="3" opacity="0.5"/>
    <path d="M50 20 L35 30 L30 28" stroke="#4A3F35" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M50 20 L65 30 L70 28" stroke="#4A3F35" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M50 35 L35 45 L28 42" stroke="#4A3F35" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M50 35 L65 45 L72 42" stroke="#4A3F35" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M50 50 L35 60 L25 56" stroke="#4A3F35" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M50 50 L65 60 L75 56" stroke="#4A3F35" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M50 65 L38 75 L30 72" stroke="#4A3F35" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M50 65 L62 75 L70 72" stroke="#4A3F35" strokeWidth="2" fill="none" opacity="0.5"/>
  </svg>
);

const ChecklistIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 22.5) * Math.PI / 180;
      const x1 = 50 + Math.cos(angle) * 15;
      const y1 = 50 + Math.sin(angle) * 15;
      const x2 = 50 + Math.cos(angle) * 35;
      const y2 = 50 + Math.sin(angle) * 35;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4A3F35" strokeWidth="2" opacity="0.5"/>;
    })}
    <circle cx="50" cy="50" r="10" fill="#4A3F35" opacity="0.4"/>
    <circle cx="50" cy="50" r="5" fill="#3D3428" opacity="0.5"/>
  </svg>
);

const EndDayIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M20 80 C20 45 35 20 50 20 C65 20 80 45 80 80" stroke="#4A3F35" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round"/>
    <path d="M30 80 C30 55 40 35 50 35 C60 35 70 55 70 80" stroke="#3D3428" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round"/>
    <circle cx="50" cy="65" r="6" fill="#4A3F35" opacity="0.4"/>
    <line x1="50" y1="59" x2="50" y2="45" stroke="#4A3F35" strokeWidth="2" opacity="0.4"/>
  </svg>
);

const ReadingIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M15 75 L15 25 Q50 15 50 25 L50 75 Q50 65 15 75Z" fill="#4A3F35" opacity="0.5"/>
    <path d="M85 75 L85 25 Q50 15 50 25 L50 75 Q50 65 85 75Z" fill="#3D3428" opacity="0.4"/>
    <line x1="22" y1="35" x2="43" y2="32" stroke="#E8DCC8" strokeWidth="1.5" opacity="0.6"/>
    <line x1="22" y1="42" x2="43" y2="39" stroke="#E8DCC8" strokeWidth="1.5" opacity="0.6"/>
    <line x1="22" y1="49" x2="43" y2="46" stroke="#E8DCC8" strokeWidth="1.5" opacity="0.6"/>
    <line x1="57" y1="32" x2="78" y2="35" stroke="#D4C9B4" strokeWidth="1.5" opacity="0.6"/>
    <line x1="57" y1="39" x2="78" y2="42" stroke="#D4C9B4" strokeWidth="1.5" opacity="0.6"/>
    <line x1="57" y1="46" x2="78" y2="49" stroke="#D4C9B4" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="50" cy="85" r="4" fill="#4A3F35" opacity="0.3"/>
  </svg>
);

const categoryStyles: Record<CategoryType, { 
  bg: string; 
  illustration: () => JSX.Element;
  textColor: string;
}> = {
  "team-updates": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    illustration: TeamUpdatesIllustration,
    textColor: "text-[#2D3748] dark:text-[#E8DCC8]"
  },
  "be-yourself": {
    bg: "bg-[#C9A7D8] dark:bg-[#8B5A9B]",
    illustration: BeYourselfIllustration,
    textColor: "text-[#2D3748] dark:text-[#E8DCC8]"
  },
  "daily-thoughts": {
    bg: "bg-[#D4A056] dark:bg-[#A67C3D]",
    illustration: DailyThoughtsIllustration,
    textColor: "text-[#2D3748] dark:text-[#E8DCC8]"
  },
  "work": {
    bg: "bg-[#FF6B3D] dark:bg-[#CC5530]",
    illustration: WorkIllustration,
    textColor: "text-[#2D3748] dark:text-[#F5E6D3]"
  },
  "skills": {
    bg: "bg-[#FF6B3D] dark:bg-[#CC5530]",
    illustration: SkillsIllustration,
    textColor: "text-[#2D3748] dark:text-[#F5E6D3]"
  },
  "checklist": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    illustration: ChecklistIllustration,
    textColor: "text-[#2D3748] dark:text-[#E8DCC8]"
  },
  "end-day": {
    bg: "bg-[#E8DCC8] dark:bg-[#8A7B5C]",
    illustration: EndDayIllustration,
    textColor: "text-[#2D3748] dark:text-[#F5E6D3]"
  },
  "reading": {
    bg: "bg-[#D4E7F5] dark:bg-[#4A6B8A]",
    illustration: ReadingIllustration,
    textColor: "text-[#2D3748] dark:text-[#E8DCC8]"
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
  const Illustration = style.illustration;
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
      <div className="absolute top-2 right-2 bottom-2 left-1/3 opacity-50">
        <Illustration />
      </div>
      
      <div className="flex justify-end items-start relative z-10">
        <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#4A3F35]/20 dark:bg-white/20 flex items-center justify-center">
          <Plus className={cn("w-3 h-3 md:w-4 md:h-4", style.textColor, "opacity-80")} />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className={cn("font-serif text-lg md:text-xl leading-tight mb-1 font-semibold", style.textColor)}>
          {title}
        </h3>
        {hasProgress && (
          <p className={cn("text-xs md:text-sm opacity-70", style.textColor)}>
            {completedCount}/{totalCount} completed
          </p>
        )}
      </div>
    </motion.button>
  );
}
