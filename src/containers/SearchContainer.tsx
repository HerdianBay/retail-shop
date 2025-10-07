import { useContext } from "react";
import Search from "../components/Products/Search";
import { SearchContext } from "../store/SearchContext";

export default function SearchContainer() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "CategoriesContainer must be used within a CategoryProvider"
    );
  }
  const { searchValue, setSearchValue } = context;
  return <Search value={searchValue} onChange={setSearchValue} />;
}
