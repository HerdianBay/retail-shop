import Search from "../components/Products/Search";
import CategoriesContainer from "../containers/CategoriesContainer";
import ProductsContainer from "../containers/ProductsContainer";
import MainLayout from "../layouts/MainLayout";

export default function Products() {
  return (
    <MainLayout>
      <Search />
      <div className="lg:flex flex-row-reverse lg:px-14 gap-10">
        <div className="flex-1">
          <CategoriesContainer />
        </div>
        <div className="lg:max-w-[70%]">
          <ProductsContainer />
        </div>
      </div>
    </MainLayout>
  );
}
