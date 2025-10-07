import { createContext } from "react";
import type { CategoryContextType } from "../Model/ModelData";

export const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);
