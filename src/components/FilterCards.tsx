"use client";

// import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const filterTags: Array<{
  name: string;
  id: string;
  size: "small" | "medium" | "large";
}> = [
  { name: "Canadian", id: "Canadian", size: "small" },
  { name: "Cerohol free", id: "Cerehol Free", size: "small" },
  { name: "cruelty free", id: "Cruelty Free", size: "large" },
  { name: "oil free", id: "Oil Free", size: "small" },
  { name: "purpickstClean", id: "Purpicks (Clean Beauty)", size: "small" },
  { name: "Chemical Free", id: "Chemical Free", size: "medium" },
  { name: "Dairy Free", id: "Dairy Free", size: "medium" },
  { name: "EWG Verified", id: " EWG Verfied", size: "small" },
  { name: "EcoCert", id: "Eco Certified", size: "small" },
  { name: "Fair Trade", id: "Fair Trade", size: "large" },
  { name: "Gluten Free", id: "Gluten Free", size: "large" },
  { name: "Hypoallergenic", id: "Hypoallergenic", size: "large" },
  { name: "Natural", id: "Natural", size: "large" },
  { name: "No Talc", id: "No Talc", size: "medium" },
  { name: "Non-GMO", id: "Non GMO", size: "small" },
  { name: "Organic", id: "Organic", size: "large" },
  { name: "Peanut Free Product", id: "Peanut Free", size: "small" },
  { name: "Sugar Free", id: "Sugar Free", size: "small" },
  { name: "USDA Organic", id: "USDA Organic", size: "small" },
  { name: "Vegan", id: "Vegan", size: "large" },
  { name: "alc", id: "Alcohol Free", size: "small" },
  { name: "silicone free", id: "Silicone Free", size: "large" },
  { name: "water free", id: "Water Free", size: "medium" },
];

const FilterCard = ({
  filter,
  size,
  isSelected,
  onToggle,
}: {
  filter: string;
  size: "small" | "medium" | "large";
  isSelected: boolean;
  onToggle: () => void;
}) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-2 row-span-1",
    large: "col-span-2 row-span-2",
  };

  return (
    <Card
      className={`${sizeClasses[size]} cursor-pointer transition-colors ${
        isSelected
          ? "bg-primary text-primary-foreground"
          : "bg-background hover:bg-secondary"
      }`}
      onClick={onToggle}
    >
      <CardContent
        className={`p-4 flex items-center justify-center h-full ${
          isSelected === true ? "text-gray-950 shadow-custom-glow-large" : null
        }`}
      >
        <p
          className={`font-medium text-center font-mono
            ${size === "large" ? "text-xl" : "text-sm"}
            `}
        >
          {filter}
        </p>
      </CardContent>
    </Card>
  );
};

const FilterGridMosaic = ({
  selectedFilters,
  setSelectedFilters,
}: {
  selectedFilters: string[]; // array of strings
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>; // state setter function
}) => {
  const toggleFilter = (filter: string) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(filter)
          ? prev.filter((f) => f !== filter) // Remove filter if already selected
          : [...prev, filter] // Add filter if not selected
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-1 ml-10">
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

      <div className="grid grid-cols-4 p-2 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-fr">
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
    </div>
  );
};

export default FilterGridMosaic;
