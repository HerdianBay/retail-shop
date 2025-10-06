import { Link } from "react-router-dom";
import type { productsProps } from "../../Model/ModelData";

export default function Product({ datas }: productsProps) {
  return (
    <div className="card bg-base-100 shadow-sm border border-gray-400">
      <figure className="mx-6 mt-6">
        <Link to={`/products/${datas.id}`}>
          <img src={`${datas.images[0]}`} alt="Shoes" className="rounded-lg" />
        </Link>
      </figure>
      <div className="card-body justify-between">
        <h2 className="font-semibold text-xl truncate w-full block">
          {datas.title}
        </h2>
        <div className="flex items-center w-2/3 gap-1">
          <p className="truncate w-1/2 text-xs">{datas.description}</p>
          <a href="" className="text-xs font-semibold">
            Read More
          </a>
        </div>
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
  );
}
