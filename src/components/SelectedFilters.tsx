export const SelectedFilters = ({
  selectedFilters,
  toggleFilter,
}: {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
}) => {
  return (
    <div className="bg-secondary p-2 flex  bg-purple-50 w-[80rem] rounded-lg">
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
