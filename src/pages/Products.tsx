import CategoriesContainer from "../containers/CategoriesContainer";
import ProductContainer from "../containers/ProductContainer";
import SearchContainer from "../containers/SearchContainer";
import MainLayout from "../layouts/MainLayout";
import { CategoryProvider } from "../store/CategoryProvider";
import { SearchProvider } from "../store/SearchProvider";

export default function Products() {
  return (
    <MainLayout>
      <SearchProvider>
        <SearchContainer />
        <CategoryProvider>
          <div className="lg:flex flex-row-reverse lg:px-14 gap-10">
            <div className="lg:w-[25%] xl:w-[20%]">
              <CategoriesContainer />
            </div>
            <div className="lg:w-[75%] xl:w-[80%] lg:flex justify-center">
              <ProductContainer />
            </div>
          </div>
        </CategoryProvider>
      </SearchProvider>
    </MainLayout>
  );
}
