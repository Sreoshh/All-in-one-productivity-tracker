import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import CategoryCard, { CategoryType } from "./CategoryCard";
import HabitModal from "./HabitModal";
import WeeklyView from "./WeeklyView";
import StatsCard from "./StatsCard";
import MotivationalToast from "./MotivationalToast";
import { Habit } from "./HabitItem";
import { Target, Flame, CheckCircle, TrendingUp } from "lucide-react";

interface CategoryData {
  type: CategoryType;
  title: string;
  habits: Habit[];
}

const initialCategories: CategoryData[] = [
  { type: "be-yourself", title: "Be Yourself", habits: [] },
  { type: "daily-thoughts", title: "Daily Thoughts", habits: [] },
  { type: "work", title: "Work", habits: [] },
  { type: "skills", title: "Skills", habits: [] },
  { type: "checklist", title: "Checklist", habits: [] },
  { type: "end-day", title: "End Day Thoughts", habits: [] },
  { type: "team-updates", title: "Team Updates", habits: [] },
  { type: "reading", title: "Reading", habits: [] },
];

export default function Dashboard() {
  const [categories, setCategories] = useState<CategoryData[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);
  const [toast, setToast] = useState<{ visible: boolean; type: "streak" | "completion" | "milestone" | "encouragement"; message: string }>({
    visible: false,
    type: "completion",
    message: ""
  });

  const today = new Date();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + i);
    return {
      date,
      completed: i < today.getDay() && Math.random() > 0.3,
      partial: i < today.getDay() && Math.random() > 0.7
    };
  });

  const totalHabits = categories.reduce((acc, cat) => acc + cat.habits.length, 0);
  const completedHabits = categories.reduce((acc, cat) => 
    acc + cat.habits.filter(h => h.completed).length, 0);
  const totalStreak = Math.max(...categories.flatMap(c => c.habits.map(h => h.streak)), 0);
  const completionRate = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

  const showMotivation = useCallback((type: typeof toast.type, message: string) => {
    setToast({ visible: true, type, message });
  }, []);

  const handleAddHabit = useCallback((categoryType: CategoryType, habit: Omit<Habit, "id" | "completed" | "streak">) => {
    setCategories(prev => prev.map(cat => {
      if (cat.type === categoryType) {
        return {
          ...cat,
          habits: [...cat.habits, {
            ...habit,
            id: Date.now().toString(),
            completed: false,
            streak: 0
          }]
        };
      }
      return cat;
    }));
    showMotivation("encouragement", "New habit added! Let's build that streak!");
  }, [showMotivation]);

  const handleToggleHabit = useCallback((categoryType: CategoryType, habitId: string) => {
    setCategories(prev => prev.map(cat => {
      if (cat.type === categoryType) {
        const updatedHabits = cat.habits.map(h => {
          if (h.id === habitId) {
            const newCompleted = !h.completed;
            if (newCompleted) {
              const newStreak = h.streak + 1;
              if (newStreak % 7 === 0) {
                setTimeout(() => showMotivation("streak", `${newStreak}-day streak! You're on fire!`), 300);
              } else {
                setTimeout(() => showMotivation("completion", "Great job! Keep it up!"), 300);
              }
              return { ...h, completed: true, streak: newStreak };
            }
            return { ...h, completed: false };
          }
          return h;
        });
        return { ...cat, habits: updatedHabits };
      }
      return cat;
    }));
  }, [showMotivation]);

  const handleEditHabit = useCallback((categoryType: CategoryType, habit: Habit) => {
    setCategories(prev => prev.map(cat => {
      if (cat.type === categoryType) {
        return {
          ...cat,
          habits: cat.habits.map(h => h.id === habit.id ? habit : h)
        };
      }
      return cat;
    }));
  }, []);

  const handleDeleteHabit = useCallback((categoryType: CategoryType, habitId: string) => {
    setCategories(prev => prev.map(cat => {
      if (cat.type === categoryType) {
        return {
          ...cat,
          habits: cat.habits.filter(h => h.id !== habitId)
        };
      }
      return cat;
    }));
  }, []);

  const getCategoryStats = (cat: CategoryData) => ({
    completed: cat.habits.filter(h => h.completed).length,
    total: cat.habits.length
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 10 6 10 10C10 14 12 18 12 18C12 18 14 14 14 10C14 6 12 2 12 2Z" fill="currentColor" opacity="0.7"/>
                <path d="M8 6C8 6 6 9 6 12C6 15 8 18 8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 6C16 6 18 9 18 12C18 15 16 18 16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground">Hello There</h1>
          </div>
          <p className="text-muted-foreground">Let's make today productive</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          <StatsCard icon={Target} label="Total Goals" value={totalHabits} variant="purple" />
          <StatsCard icon={Flame} label="Best Streak" value={`${totalStreak} days`} variant="orange" />
          <StatsCard icon={CheckCircle} label="Completed" value={`${completionRate}%`} variant="gold" />
          <StatsCard icon={TrendingUp} label="Today" value={`${completedHabits}/${totalHabits}`} subtext="habits done" />
        </div>

        <div className="mb-8">
          <WeeklyView days={weekDays} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, index) => {
            const stats = getCategoryStats(cat);
            return (
              <motion.div
                key={cat.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <CategoryCard
                  category={cat.type}
                  title={cat.title}
                  completedCount={stats.completed}
                  totalCount={stats.total}
                  onClick={() => setSelectedCategory(cat)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedCategory && (
        <HabitModal
          isOpen={!!selectedCategory}
          onClose={() => setSelectedCategory(null)}
          category={selectedCategory.type}
          categoryTitle={selectedCategory.title}
          habits={selectedCategory.habits}
          onAddHabit={(habit) => handleAddHabit(selectedCategory.type, habit)}
          onToggleHabit={(id) => handleToggleHabit(selectedCategory.type, id)}
          onEditHabit={(habit) => handleEditHabit(selectedCategory.type, habit)}
          onDeleteHabit={(id) => handleDeleteHabit(selectedCategory.type, id)}
        />
      )}

      <MotivationalToast
        isVisible={toast.visible}
        onClose={() => setToast(prev => ({ ...prev, visible: false }))}
        type={toast.type}
        message={toast.message}
      />
    </div>
  );
}
