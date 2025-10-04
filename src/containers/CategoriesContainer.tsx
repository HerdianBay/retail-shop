import { useEffect, useState } from "react";
import Categories from "../components/Products/Categories";
import type {
  categoriesDataAPI,
  rawDataCategoriesAPI,
} from "../Model/ModelData";
import axios from "axios";

export default function CategoriesContainer() {
  const [activeNumber, setActiveNumber] = useState<number>(0);
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
      activeNumber={activeNumber}
      onClick={setActiveNumber}
    />
  );
}
