import MainLayout from "../layouts/MainLayout";
import ProductDetailContainer from "../containers/ProductDetailContainer";

export default function ProductDetail() {
  return (
    <MainLayout>
      <ProductDetailContainer />
      <div className="divider px-4 mt-28 mb-0 md:px-6 xl:max-w-6xl xl:mx-auto"></div>
    </MainLayout>
  );
}
