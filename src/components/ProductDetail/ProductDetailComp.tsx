import { ChevronLeft } from "lucide-react";
import type { productDetailProps } from "../../Model/ModelData";

export default function ProductDetailComp({
  datas,
  activeImage,
  setActiveImage,
  navigate,
}: productDetailProps) {
  return (
    <div className="px-4 py-6 mt-16 max-w-7xl mx-auto lg:px-14 xl:mt-0">
      <div className="card bg-base-100 shadow-sm border border-gray-400 lg:flex-row lg:p-10 xl:p-14">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-xs cursor-pointer gap-2 absolute border rounded-3xl border-gray-400 bg-base-300 px-4 py-2 right-2 top-2.5 xl:text-lg"
        >
          <ChevronLeft className="lg:w-3 lg:h-3 xl:w-[18px] xl:h-[18px]" />
          Back
        </button>
        <div className="lg:flex lg:flex-row-reverse lg:gap-8 xl:gap-12 lg:items-center lg:w-1/2">
          <div className="mx-6 mt-6 lg:m-0 lg:w-4/5">
            <img
              src={`${datas.images[activeImage]}`}
              alt="Shoes"
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center mt-5 gap-5 lg:flex-col lg:w-1/5 lg:mt-0">
            {datas.images.map((image, index) => (
              <button onClick={() => setActiveImage(index)}>
                <img
                  src={`${image}`}
                  alt=""
                  className={`w-14 md:w-20 lg:w-fit rounded-xl ${
                    activeImage === index ? "opacity-30" : "opacity-100"
                  }`}
                  key={index}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="card-body justify-between lg:w-1/2">
          <h2 className="font-semibold text-xl truncate w-full block lg:text-2xl xl:text-3xl">
            {datas.title}
          </h2>
          <p className="xl:text-xl">{datas.description}</p>
          <div className="badge border-1 border-black font-semibold lg:badge-md xl:badge-xl">
            {datas.category.name}
          </div>
          <div className="card-actions items-center justify-between">
            <div>
              <p className="text-xs lg:text-base xl:text-xl">Price</p>
              <p className="font-semibold text-lg lg:text-xl xl:text-2xl">
                $ {datas.price}
              </p>
            </div>
            <button className="btn btn-primary xl:btn-xl">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
