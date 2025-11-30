import HabitItem, { Habit } from "../HabitItem";
import { useState } from "react";

export default function HabitItemExample() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Morning meditation", completed: true, streak: 14, reminderTime: "7:00 AM", frequency: "daily" },
    { id: "2", name: "Read for 30 minutes", completed: false, streak: 7, frequency: "daily" },
    { id: "3", name: "Weekly review", completed: false, streak: 3, reminderTime: "6:00 PM", frequency: "weekly" },
  ]);

  const handleToggle = (id: string) => {
    setHabits(prev => prev.map(h => 
      h.id === id ? { ...h, completed: !h.completed } : h
    ));
  };

  return (
    <div className="space-y-3 p-4 bg-background max-w-md">
      {habits.map(habit => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggle={handleToggle}
          onEdit={(h) => console.log("Edit:", h)}
          onDelete={(id) => console.log("Delete:", id)}
        />
      ))}
    </div>
  );
}
