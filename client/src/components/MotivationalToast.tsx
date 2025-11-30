import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Flame, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type ToastType = "streak" | "completion" | "milestone" | "encouragement";

interface MotivationalToastProps {
  isVisible: boolean;
  onClose: () => void;
  type: ToastType;
  message: string;
  autoClose?: boolean;
  duration?: number;
}

const toastStyles: Record<ToastType, { icon: typeof Sparkles; bgClass: string }> = {
  streak: { icon: Flame, bgClass: "bg-[#FF6B3D]" },
  completion: { icon: Star, bgClass: "bg-primary" },
  milestone: { icon: Trophy, bgClass: "bg-[#D4A056]" },
  encouragement: { icon: Sparkles, bgClass: "bg-primary" }
};

export default function MotivationalToast({
  isVisible,
  onClose,
  type,
  message,
  autoClose = true,
  duration = 4000
}: MotivationalToastProps) {
  const style = toastStyles[type];
  const Icon = style.icon;

  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
          data-testid="motivational-toast"
        >
          <div className={`${style.bgClass} text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-[280px] max-w-md`}>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
            </motion.div>
            <p className="flex-1 font-medium text-sm">{message}</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="w-6 h-6 text-white/80 hover:text-white hover:bg-white/20"
              data-testid="button-close-toast"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
