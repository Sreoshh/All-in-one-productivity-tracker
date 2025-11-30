import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Plus, Clock } from "lucide-react";
import HabitItem, { Habit } from "./HabitItem";
import ProgressBar from "./ProgressBar";
import { CategoryType } from "./CategoryCard";

interface HabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: CategoryType;
  categoryTitle: string;
  habits: Habit[];
  onAddHabit: (habit: Omit<Habit, "id" | "completed" | "streak">) => void;
  onToggleHabit: (id: string) => void;
  onEditHabit: (habit: Habit) => void;
  onDeleteHabit: (id: string) => void;
}

export default function HabitModal({
  isOpen,
  onClose,
  category,
  categoryTitle,
  habits,
  onAddHabit,
  onToggleHabit,
  onEditHabit,
  onDeleteHabit
}: HabitModalProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  const [hasReminder, setHasReminder] = useState(false);
  const [reminderTime, setReminderTime] = useState("09:00");

  const completedCount = habits.filter(h => h.completed).length;
  const progress = habits.length > 0 ? (completedCount / habits.length) * 100 : 0;

  useEffect(() => {
    if (editingHabit) {
      setName(editingHabit.name);
      setFrequency(editingHabit.frequency);
      setHasReminder(!!editingHabit.reminderTime);
      setReminderTime(editingHabit.reminderTime?.replace(" AM", "").replace(" PM", "") || "09:00");
      setShowForm(true);
    }
  }, [editingHabit]);

  const resetForm = () => {
    setName("");
    setFrequency("daily");
    setHasReminder(false);
    setReminderTime("09:00");
    setShowForm(false);
    setEditingHabit(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const formatTime = (time: string) => {
      const [hours, minutes] = time.split(":");
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 || 12;
      return `${formattedHour}:${minutes} ${ampm}`;
    };

    if (editingHabit) {
      onEditHabit({
        ...editingHabit,
        name,
        frequency,
        reminderTime: hasReminder ? formatTime(reminderTime) : undefined
      });
    } else {
      onAddHabit({
        name,
        frequency,
        reminderTime: hasReminder ? formatTime(reminderTime) : undefined
      });
    }
    resetForm();
  };

  const handleEdit = (habit: Habit) => {
    setEditingHabit(habit);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{categoryTitle}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {habits.length > 0 && (
            <ProgressBar
              value={completedCount}
              max={habits.length}
              label="Progress"
              variant="accent"
            />
          )}

          <AnimatePresence mode="popLayout">
            {habits.length > 0 ? (
              <motion.div className="space-y-3">
                {habits.map(habit => (
                  <HabitItem
                    key={habit.id}
                    habit={habit}
                    onToggle={onToggleHabit}
                    onEdit={handleEdit}
                    onDelete={onDeleteHabit}
                  />
                ))}
              </motion.div>
            ) : !showForm && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground py-8"
              >
                No habits yet. Add your first one!
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {showForm ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4 p-4 rounded-xl bg-muted/50"
              >
                <div className="space-y-2">
                  <Label htmlFor="habit-name">Habit Name</Label>
                  <Input
                    id="habit-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Morning meditation"
                    data-testid="input-habit-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select value={frequency} onValueChange={(v) => setFrequency(v as "daily" | "weekly")}>
                    <SelectTrigger data-testid="select-frequency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <Label htmlFor="reminder">Set Reminder</Label>
                  </div>
                  <Switch
                    id="reminder"
                    checked={hasReminder}
                    onCheckedChange={setHasReminder}
                    data-testid="switch-reminder"
                  />
                </div>

                {hasReminder && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-2"
                  >
                    <Label htmlFor="reminder-time">Reminder Time</Label>
                    <Input
                      id="reminder-time"
                      type="time"
                      value={reminderTime}
                      onChange={(e) => setReminderTime(e.target.value)}
                      data-testid="input-reminder-time"
                    />
                  </motion.div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    className="flex-1"
                    data-testid="button-cancel"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    data-testid="button-save"
                  >
                    {editingHabit ? "Save Changes" : "Add Habit"}
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="add-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  onClick={() => setShowForm(true)}
                  variant="outline"
                  className="w-full"
                  data-testid="button-add-habit"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Habit
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
