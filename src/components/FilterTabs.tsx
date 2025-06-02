
interface FilterTabsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const FilterTabs = ({ activeFilter, setActiveFilter }: FilterTabsProps) => {
  const filters = ["Full Course", "Mentorship Only", "One-on-One Session", "Articles"];

  return (
    <div className="sticky top-16 z-40 bg-gray-50 py-4 border-b border-gray-200">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};
