export const SelectedFilters = ({
  selectedFilters,
  toggleFilter,
}: {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
}) => {
  return (
    <div className="mt-6 p-4 bg-secondary bg-purple-50 mb-4 rounded-lg">
      <h3 className="text-lg font-semibold font-mono mb-2 p-2">
        Selected Filters:
      </h3>
      <div className="flex flex-wrap font-mono gap-2">
        {selectedFilters.map((filter) => (
          <span
            key={filter}
            className="px-3 py-1 bg-primary rounded-full text-sm cursor-pointer"
            onClick={() => toggleFilter(filter)}
          >
            {filter} ✕
          </span>
        ))}
      </div>
    </div>
  );
};
