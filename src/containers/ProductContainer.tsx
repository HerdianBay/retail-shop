import axios from "axios";
import { useContext, useEffect, useState } from "react";
import type { productsDataAPI, rawDataProductsAPI } from "../Model/ModelData";
import Product from "../components/Products/Product";
import { CategoryContext } from "../store/CategoryContext";
import { SearchContext } from "../store/SearchContext";

export default function ProductsContainer() {
  const categoryContext = useContext(CategoryContext);
  const searchContext = useContext(SearchContext);
  if (!categoryContext || !searchContext) {
    throw new Error(
      "CategoriesContainer must be used within a CategoryProvider"
    );
  }
  const { selectedCategory } = categoryContext;
  const { searchValue } = searchContext;
  const [productData, setProductData] = useState<productsDataAPI[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        if (selectedCategory === 0) {
          const response = await axios.get<rawDataProductsAPI[]>(
            "https://api.escuelajs.co/api/v1/products"
          );
          const data: productsDataAPI[] = response.data.map((item) => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            price: item.price,
            description: item.description,
            category: item.category,
            images: item.images,
          }));
          setProductData(data);
        } else {
          const response = await axios.get<rawDataProductsAPI[]>(
            `https://api.escuelajs.co/api/v1/products/?categoryId=${selectedCategory}`
          );
          const data: productsDataAPI[] = response.data.map((item) => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            price: item.price,
            description: item.description,
            category: item.category,
            images: item.images,
          }));
          setProductData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCategory]);
  return (
    <>
      {productData.length === 0 ? (
        <div className="px-4 flex">
          <span className="loading loading-ring loading-xl md:w-11"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-14 gap-8 lg:p-0 xl:grid-cols-3">
          {searchValue === "" ? (
            <>
              {productData.map((data, index) => (
                <Product datas={data} key={index} />
              ))}
            </>
          ) : (
            <>
              {productData
                .filter((data) =>
                  data.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((data, index) => (
                  <Product datas={data} key={index} />
                ))}
            </>
          )}
        </div>
      )}
    </>
  );
}
