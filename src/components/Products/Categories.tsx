import { LayoutGrid } from "lucide-react";
import type { categoriesProps } from "../../Model/ModelData";
import CategoriesList from "./CategoriesList";

export default function Categories({
  dataCategories,
  activeCategory,
  onClick,
}: categoriesProps) {
  return (
    <div className="px-4 mb-10 md:px-14 lg:p-0 lg:mb-0">
      <div className="flex items-center gap-2 mb-5 lg:hidden">
        <LayoutGrid color="#7f22fe" size={18} />
        <p>Categories</p>
      </div>
      <div className="border border-gray-400 pt-5 rounded-xl">
        <div className="flex items-center gap-2 ps-2">
          <LayoutGrid color="#7f22fe" size={18} />
          <p className="text-xl font-medium">Categories :</p>
        </div>
        <ul className="text-lg">
          {dataCategories.length === 0 ? (
            <div className="w-full flex justify-center py-2">
              <span className="loading loading-dots loading-xl bg-violet-600"></span>
            </div>
          ) : (
            dataCategories.map((data, index) => (
              <CategoriesList
                id={data.id}
                name={data.name}
                key={index}
                activeCategory={activeCategory}
                onClick={onClick}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
