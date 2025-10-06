import { ChevronLeft } from "lucide-react";
import type { productsProps } from "../../Model/ModelData";
import { useNavigate } from "react-router-dom";

export default function ProductDetailComp({ datas }: productsProps) {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-3">
      <div className="card bg-base-100 shadow-sm border border-gray-400 mt-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-xs gap-2 absolute border rounded-3xl border-gray-400 bg-base-300 px-4 py-2 right-2 top-2.5"
        >
          <ChevronLeft size={12} />
          Back
        </button>
        <figure className="mx-6 mt-6">
          <img src={`${datas.images[0]}`} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className="flex items-center justify-center mt-5 gap-5">
          {datas.images.map((image, index) => (
            <img
              src={`${image}`}
              alt=""
              className="w-14 rounded-xl"
              key={index}
            />
          ))}
        </div>
        <div className="card-body justify-between">
          <h2 className="font-semibold text-xl truncate w-full block">
            {datas.title}
          </h2>
          <p className="">{datas.description}</p>
          <div className="badge border-1 border-black font-semibold">
            {datas.category.name}
          </div>
          <div className="card-actions items-center justify-between">
            <div>
              <p className="text-xs">Price</p>
              <p className="font-semibold text-lg">$ {datas.price}</p>
            </div>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
