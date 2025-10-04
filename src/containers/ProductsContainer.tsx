import axios from "axios";
import { useEffect, useState } from "react";
import type { productsDataAPI, rawDataProductsAPI } from "../Model/ModelData";
import Product from "../components/Products/Product";

export default function ProductsContainer() {
  const [productData, setProductData] = useState<productsDataAPI[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
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
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-14 gap-8 lg:p-0 xl:grid-cols-3">
      {productData.map((data, index) => (
        <Product datas={data} key={index} />
      ))}
    </div>
  );
}
