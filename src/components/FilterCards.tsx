"use client";

// import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const filterTags: Array<{
  name: string;
  id: string;
  size: "small" | "medium";
}> = [
  { name: "CertClean", id: "Certified Clean", size: "small" },
  { name: "cruelty free", id: "Cruelty Free", size: "medium" },
  { name: "oil free", id: "Oil Free", size: "small" },
  { name: "purpickstClean", id: "Purpicks", size: "small" },
  { name: "Chemical Free", id: "Chemical Free", size: "medium" },
  { name: "Dairy Free", id: "Dairy Free", size: "medium" },
  { name: "EWG Verified", id: " EWG Verfied", size: "small" },
  { name: "EcoCert", id: "Eco Certified", size: "small" },
  { name: "Fair Trade", id: "Fair Trade", size: "medium" },
  { name: "Gluten Free", id: "Gluten Free", size: "small" },
  { name: "Hypoallergenic", id: "Hypoallergenic", size: "medium" },
  { name: "Natural", id: "Natural", size: "small" },
  { name: "No Talc", id: "No Talc", size: "medium" },
  { name: "Non-GMO", id: "Non GMO", size: "small" },
  { name: "Organic", id: "Organic", size: "small" },
  { name: "Vegan", id: "Vegan", size: "medium" },
  { name: "alc", id: "Alcohol Free", size: "small" },
  { name: "silicone free", id: "Silicone Free", size: "medium" },
  { name: "water free", id: "Water Free", size: "medium" },
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
        <p className="font-medium text-center font-mono">{filter}</p>
      </CardContent>
    </Card>
  );
};

const FilterGridMosaic = ({
  selectedFilters,
  toggleFilter,
}: {
  selectedFilters: string[]; // array of strings
  toggleFilter: (filter: string) => void;
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-1 ml-10">
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
