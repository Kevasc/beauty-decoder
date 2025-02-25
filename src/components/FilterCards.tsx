"use client";

import { Card, CardContent } from "@/components/ui/card";

const filterTags: Array<{
  name: string;
  id: string;
  size: "small" | "medium";
}> = [
  { name: "Canadian", id: "Canadian", size: "small" },
  { name: "cruelty free", id: "Cruelty Free", size: "medium" },
  { name: "oil free", id: "Oil Free", size: "medium" },
  { name: "purpickstClean", id: "Purpicks", size: "small" },
  { name: "Chemical Free", id: "Chemical Free", size: "medium" },
  { name: "Fair Trade", id: "Fair Trade", size: "medium" },
  { name: "Gluten Free", id: "Gluten Free", size: "small" },
  { name: "Hypoallergenic", id: "Hypoallergenic", size: "medium" },
  { name: "Dairy Free", id: "Dairy Free", size: "medium" },
  { name: "Natural", id: "Natural", size: "small" },
  { name: "No Talc", id: "No Talc", size: "medium" },
  { name: "Organic", id: "Organic", size: "medium" },
  { name: "Sugar Free", id: "Sugar Free", size: "small" },
  { name: "USDA Organic", id: "USDA Organic", size: "medium" },
  { name: "Vegan", id: "Vegan", size: "medium" },
  { name: "silicone free", id: "Silicone Free", size: "small" },
  { name: "water free", id: "Water Free", size: "medium" },
  { name: "alc", id: "Alcohol Free", size: "medium" },
];

const FilterCard = ({
  filter,
  size,
  isSelected,
  onToggle,
}: {
  filter: string;
  size: "small" | "medium";
  isSelected: boolean;
  onToggle: () => void;
}) => {
  const sizeClasses = {
    small: "col-span-2 row-span-1",
    medium: "col-span-1 row-span-2",
  };

  return (
    <Card
      className={`${
        sizeClasses[size]
      } cursor-pointer hover:border-purple-950 transition-colors ${
        isSelected
          ? "bg-primary text-primary-foreground border-purple-950"
          : "bg-background hover:bg-purple-200 "
      }`}
      onClick={onToggle}
    >
      <CardContent
        className={`p-4 flex items-center justify-center h-full ${
          isSelected === true ? "text-gray-950 shadow-custom-glow-large" : null
        }`}
      >
        <p className="font-medium text-center font-mono">{filter}</p>
      </CardContent>
    </Card>
  );
};

const FilterGridMosaic = ({
  selectedFilters,
  toggleFilter,
}: {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-fr">
      {filterTags.map(({ id, size }) => (
        <FilterCard
          key={id}
          filter={id}
          size={size}
          isSelected={selectedFilters.includes(id)}
          onToggle={() => toggleFilter(id)}
        />
      ))}
    </div>
  );
};

export default FilterGridMosaic;
