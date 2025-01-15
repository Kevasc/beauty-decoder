export const SelectedFilters = ({
  selectedFilters,
  toggleFilter,
}: {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
}) => {
  return (
    <div className="mt-6 bg-secondary flex max-w-7xl bg-purple-50 rounded-lg">
      <h3 className="text-lg font-semibold font-mono p-2">Selected Filters:</h3>
      <div className="flex flex-wrap items-center font-mono gap-2">
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
