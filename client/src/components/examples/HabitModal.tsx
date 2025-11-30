import { useState } from "react";
import HabitModal from "../HabitModal";
import { Habit } from "../HabitItem";
import { Button } from "@/components/ui/button";

export default function HabitModalExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Morning meditation", completed: true, streak: 14, reminderTime: "7:00 AM", frequency: "daily" },
    { id: "2", name: "Read for 30 minutes", completed: false, streak: 7, frequency: "daily" },
  ]);

  const handleAddHabit = (habit: Omit<Habit, "id" | "completed" | "streak">) => {
    setHabits(prev => [...prev, {
      ...habit,
      id: Date.now().toString(),
      completed: false,
      streak: 0
    }]);
  };

  const handleToggle = (id: string) => {
    setHabits(prev => prev.map(h => 
      h.id === id ? { ...h, completed: !h.completed } : h
    ));
  };

  const handleEdit = (habit: Habit) => {
    setHabits(prev => prev.map(h => h.id === habit.id ? habit : h));
  };

  const handleDelete = (id: string) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  };

  return (
    <div className="p-4 bg-background">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <HabitModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        category="be-yourself"
        categoryTitle="Be Yourself"
        habits={habits}
        onAddHabit={handleAddHabit}
        onToggleHabit={handleToggle}
        onEditHabit={handleEdit}
        onDeleteHabit={handleDelete}
      />
    </div>
  );
}
