import { useState } from "react";
import type { CategoryContextType, providerProps } from "../Model/ModelData";
import { CategoryContext } from "./CategoryContext";

export function CategoryProvider({ children }: providerProps) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const value: CategoryContextType = { selectedCategory, setSelectedCategory };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
