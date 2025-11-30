import WeeklyView from "../WeeklyView";

export default function WeeklyViewExample() {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + i);
    return {
      date,
      completed: i < 4 && i !== 2,
      partial: i === 2
    };
  });

  return (
    <div className="p-4 bg-background max-w-md">
      <WeeklyView days={days} />
    </div>
  );
}
