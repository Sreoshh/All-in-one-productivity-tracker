import StreakDisplay from "../StreakDisplay";

export default function StreakDisplayExample() {
  return (
    <div className="flex flex-wrap gap-6 p-6 bg-background">
      <StreakDisplay count={14} size="lg" />
      <StreakDisplay count={7} size="md" />
      <StreakDisplay count={3} size="sm" />
      <StreakDisplay count={0} showLabel={false} />
    </div>
  );
}
