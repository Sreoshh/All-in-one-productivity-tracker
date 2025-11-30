import ProgressBar from "../ProgressBar";

export default function ProgressBarExample() {
  return (
    <div className="space-y-6 p-6 bg-background">
      <ProgressBar value={75} label="Daily Progress" variant="default" />
      <ProgressBar value={45} label="Weekly Goals" variant="accent" />
      <ProgressBar value={90} label="Monthly Target" variant="gold" size="lg" />
      <ProgressBar value={30} showPercentage={true} size="sm" />
    </div>
  );
}
