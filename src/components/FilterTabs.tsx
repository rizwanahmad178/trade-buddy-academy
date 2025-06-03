
import { Link, useLocation } from "react-router-dom";

export const FilterTabs = () => {
  const location = useLocation();
  
  const filters = [
    { name: "Full Course", path: "/explore/full-course" },
    { name: "Mentorship Only", path: "/explore/mentorship" },
    { name: "One-on-One Session", path: "/explore/one-on-one" },
    { name: "Articles", path: "/explore/articles" }
  ];

  const isActive = (path: string) => {
    if (path === "/explore/full-course" && location.pathname === "/explore") {
      return true; // Default active tab
    }
    return location.pathname === path;
  };

  return (
    <div className="sticky top-16 z-40 bg-gray-50 py-4 border-b border-gray-200">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Link key={filter.name} to={filter.path}>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive(filter.path)
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              {filter.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
