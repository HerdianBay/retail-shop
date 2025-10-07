import { useState } from "react";
import type { providerProps, searchContextType } from "../Model/ModelData";
import { SearchContext } from "./SearchContext";

export function SearchProvider({ children }: providerProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const value: searchContextType = { searchValue, setSearchValue };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
