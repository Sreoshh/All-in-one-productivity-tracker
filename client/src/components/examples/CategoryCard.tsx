import CategoryCard from "../CategoryCard";

export default function CategoryCardExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-background">
      <CategoryCard
        category="be-yourself"
        title="Be Yourself"
        completedCount={2}
        totalCount={5}
        onClick={() => console.log("Be Yourself clicked")}
      />
      <CategoryCard
        category="daily-thoughts"
        title="Daily Thoughts"
        onClick={() => console.log("Daily Thoughts clicked")}
      />
      <CategoryCard
        category="work"
        title="Work"
        completedCount={4}
        totalCount={6}
        onClick={() => console.log("Work clicked")}
      />
      <CategoryCard
        category="skills"
        title="Skills"
        onClick={() => console.log("Skills clicked")}
      />
    </div>
  );
}
