import { createContext } from "react";
import type { searchContextType } from "../Model/ModelData";

export const SearchContext = createContext<searchContextType | undefined>(
  undefined
);
