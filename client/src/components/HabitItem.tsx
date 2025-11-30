import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Clock, Bell } from "lucide-react";
import StreakDisplay from "./StreakDisplay";
import { cn } from "@/lib/utils";

export interface Habit {
  id: string;
  name: string;
  completed: boolean;
  streak: number;
  reminderTime?: string;
  frequency: "daily" | "weekly";
}

interface HabitItemProps {
  habit: Habit;
  onToggle: (id: string) => void;
  onEdit: (habit: Habit) => void;
  onDelete: (id: string) => void;
}

export default function HabitItem({ habit, onToggle, onEdit, onDelete }: HabitItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={cn(
        "flex items-center gap-3 p-3 md:p-4 rounded-xl",
        "bg-card border border-card-border",
        "group"
      )}
      data-testid={`habit-item-${habit.id}`}
    >
      <Checkbox
        checked={habit.completed}
        onCheckedChange={() => onToggle(habit.id)}
        className={cn(
          "w-5 h-5 rounded-md border-2",
          habit.completed && "bg-primary border-primary"
        )}
        data-testid={`checkbox-${habit.id}`}
      />

      <div className="flex-1 min-w-0">
        <p className={cn(
          "font-medium text-foreground truncate",
          habit.completed && "line-through text-muted-foreground"
        )}>
          {habit.name}
        </p>
        <div className="flex items-center gap-3 mt-1">
          {habit.reminderTime && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{habit.reminderTime}</span>
            </div>
          )}
          <span className="text-xs text-muted-foreground capitalize">
            {habit.frequency}
          </span>
        </div>
      </div>

      <StreakDisplay count={habit.streak} size="sm" showLabel={false} />

      <div className="flex items-center gap-1 visibility-hidden group-hover:visibility-visible opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(habit)}
          className="w-8 h-8"
          data-testid={`edit-${habit.id}`}
        >
          <Pencil className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(habit.id)}
          className="w-8 h-8 text-destructive"
          data-testid={`delete-${habit.id}`}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
