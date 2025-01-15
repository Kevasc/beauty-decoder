"use client";

// import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const filterTags: Array<{
  name: string;
  id: string;
  size: "small" | "medium";
}> = [
  // { name: "CertClean", id: "Certified Clean", size: "small" },
  { name: "cruelty free", id: "Cruelty Free", size: "medium" },
  { name: "oil free", id: "Oil Free", size: "small" },
  { name: "purpickstClean", id: "Purpicks", size: "medium" },
  { name: "Chemical Free", id: "Chemical Free", size: "small" },
  // { name: "EWG Verified", id: " EWG Verfied", size: "small" },
  // { name: "EcoCert", id: "Eco Certified", size: "small" },
  { name: "Fair Trade", id: "Fair Trade", size: "small" },
  { name: "Gluten Free", id: "Gluten Free", size: "small" },
  { name: "Hypoallergenic", id: "Hypoallergenic", size: "medium" },
  { name: "Dairy Free", id: "Dairy Free", size: "medium" },
  { name: "Natural", id: "Natural", size: "medium" },
  { name: "No Talc", id: "No Talc", size: "medium" },
  // { name: "Non-GMO", id: "Non GMO", size: "medium" },
  { name: "Organic", id: "Organic", size: "small" },
  { name: "Vegan", id: "Vegan", size: "small" },
  { name: "silicone free", id: "Silicone Free", size: "medium" },
  { name: "water free", id: "Water Free", size: "small" },
  { name: "alc", id: "Alcohol Free", size: "small" },
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
    small: "col-span-1 row-span-2",
    medium: "col-span-2 row-span-1",
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
    <div className="grid grid-cols-6 gap-6 auto-rows-fr">
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
