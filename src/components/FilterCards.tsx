"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const filterTags: Array<{ name: string; size: "small" | "medium" | "large" }> =
  [
    { name: "Canadian", size: "small" },
    { name: "Cerohol free", size: "small" },
    { name: "cruelty free", size: "large" },
    { name: "oil free", size: "small" },
    { name: "purpickstClean", size: "small" },
    { name: "Chemical Free", size: "medium" },
    { name: "Dairy Free", size: "medium" },
    { name: "EWG Verified", size: "small" },
    { name: "EcoCert", size: "small" },
    { name: "Fair Trade", size: "large" },
    { name: "Gluten Free", size: "large" },
    { name: "Hypoallergenic", size: "large" },
    { name: "Natural", size: "large" },
    { name: "No Talc", size: "medium" },
    { name: "Non-GMO", size: "small" },
    { name: "Organic", size: "large" },
    { name: "Peanut Free Product", size: "small" },
    { name: "Sugar Free", size: "small" },
    { name: "USDA Organic", size: "small" },
    { name: "Vegan", size: "large" },
    { name: "alc", size: "small" },
    { name: "silicone free", size: "large" },
    { name: "water free", size: "medium" },
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
      <CardContent className="p-4 flex items-center justify-center h-full">
        <p
          className={`font-medium text-center ${
            size === "large" ? "text-xl" : "text-sm"
          }`}
        >
          {filter}
        </p>
      </CardContent>
    </Card>
  );
};

const FilterGridMosaic = ({ selectedFilters, setSelectedFilters }) => {
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Filter Options</h2>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-fr">
        {filterTags.map(({ name, size }) => (
          <FilterCard
            key={name}
            filter={name}
            size={size}
            isSelected={selectedFilters.includes(name)}
            onToggle={() => toggleFilter(name)}
          />
        ))}
      </div>
      {selectedFilters.length > 0 && (
        <div className="mt-6 p-4 bg-secondary rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Selected Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map((filter) => (
              <span
                key={filter}
                className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm cursor-pointer"
                onClick={() => toggleFilter(filter)}
              >
                {filter} ✕
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterGridMosaic;
