import { useState } from "react";
import MotivationalToast from "../MotivationalToast";
import { Button } from "@/components/ui/button";

export default function MotivationalToastExample() {
  const [toastType, setToastType] = useState<"streak" | "completion" | "milestone" | "encouragement">("streak");
  const [isVisible, setIsVisible] = useState(true);

  const messages = {
    streak: "7-day streak! You're on fire!",
    completion: "Great job completing your daily habits!",
    milestone: "You've reached 100 completions!",
    encouragement: "Keep going, you're doing amazing!"
  };

  return (
    <div className="space-y-4 p-4 bg-background">
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => { setToastType("streak"); setIsVisible(true); }}>Streak</Button>
        <Button onClick={() => { setToastType("completion"); setIsVisible(true); }}>Completion</Button>
        <Button onClick={() => { setToastType("milestone"); setIsVisible(true); }}>Milestone</Button>
        <Button onClick={() => { setToastType("encouragement"); setIsVisible(true); }}>Encouragement</Button>
      </div>
      <MotivationalToast
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        type={toastType}
        message={messages[toastType]}
        autoClose={false}
      />
    </div>
  );
}
