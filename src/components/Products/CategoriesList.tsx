import type { categoriesListProps } from "../../Model/ModelData";

export default function CategoriesList({
  id,
  name,
  activeCategory,
  onClick,
}: categoriesListProps) {
  return (
    <li
      onClick={() => onClick(id)}
      className={`my-3 ps-2 py-1 cursor-pointer bg-gradient-to-r from-zinc-200 to-transparent ${
        activeCategory === id ? "border-l-2 border-violet-600" : ""
      }`}
    >
      {name}
    </li>
  );
}
