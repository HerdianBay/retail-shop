import { useParams } from "react-router-dom";
import ProductDetailComp from "../components/ProductDetail/ProductDetailComp";
import { useEffect, useState } from "react";
import axios from "axios";
import type { productsDataAPI } from "../Model/ModelData";

export default function ProductDetailContainer() {
  const dataParams = useParams();
  const [detailProduct, setDetailProduct] = useState<productsDataAPI>(
    {} as productsDataAPI
  );

  useEffect(() => {
    const getData = async (id: string) => {
      try {
        const response = await axios.get<productsDataAPI>(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setDetailProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData(dataParams.id!);
  }, [dataParams.id]);
  if (!detailProduct.id) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  return <ProductDetailComp datas={detailProduct} />;
}
