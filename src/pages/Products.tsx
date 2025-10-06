import Search from "../components/Products/Search";
import CategoriesContainer from "../containers/CategoriesContainer";
import ProductContainer from "../containers/ProductContainer";
import MainLayout from "../layouts/MainLayout";

export default function Products() {
  return (
    <MainLayout>
      <Search />
      <div className="lg:flex flex-row-reverse lg:px-14 gap-10">
        <div className="lg:w-[25%] xl:w-[20%]">
          <CategoriesContainer />
        </div>
        <div className="lg:w-[75%] xl:w-[80%] lg:flex justify-center">
          <ProductContainer />
        </div>
      </div>
    </MainLayout>
  );
}
