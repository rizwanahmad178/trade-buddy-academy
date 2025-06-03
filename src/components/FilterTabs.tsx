
interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  const filters = [
    { name: "Full Course", value: "full-course" },
    { name: "Mentorship Only", value: "mentorship" },
    { name: "One-on-One Session", value: "one-on-one" },
    { name: "Articles", value: "articles" }
  ];

  return (
    <div className="sticky top-16 z-40 bg-gray-50 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
