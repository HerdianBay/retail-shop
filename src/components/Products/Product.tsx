import type { productsProps } from "../../Model/ModelData";

export default function Product({ datas }: productsProps) {
  return (
    <div className="card bg-base-100 shadow-sm border border-gray-400">
      <figure className="mx-6 mt-6">
        <img src={`${datas.images[0]}`} alt="Shoes" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{datas.title}</h2>
        <p className="truncate w-1/2 text-xs">{datas.description}</p>
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
