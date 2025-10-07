import { useContext, useEffect, useState } from "react";
import Categories from "../components/Products/Categories";
import type {
  categoriesDataAPI,
  rawDataCategoriesAPI,
} from "../Model/ModelData";
import axios from "axios";
import { CategoryContext } from "../store/CategoryContext";

export default function CategoriesContainer() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "CategoriesContainer must be used within a CategoryProvider"
    );
  }
  const { selectedCategory, setSelectedCategory } = context;
  const [categoriesData, setCategoriesData] = useState<categoriesDataAPI[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<rawDataCategoriesAPI[]>(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const data: categoriesDataAPI[] = response.data
          .map((item) => ({
            id: item.id,
            name: item.name,
            slug: item.slug,
          }))
          .slice(0, 5);
        const fixData: categoriesDataAPI[] = [
          { id: 0, name: "All", slug: "All" },
          ...data,
        ];
        setCategoriesData(fixData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getData();
  }, []);

  return (
    <Categories
      dataCategories={categoriesData}
      activeCategory={selectedCategory}
      onClick={setSelectedCategory}
    />
  );
}
