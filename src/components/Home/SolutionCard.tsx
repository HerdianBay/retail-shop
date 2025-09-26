import type { cardProps } from "../../Model/ModelData";

export default function SolutionCard({
  title,
  description,
  icon: Icon,
}: cardProps) {
  return (
    <div className="card border-4 border-white bg-base-200 card-md shadow-sm mb-3">
      <div className="card-body flex-row items-center">
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
        <div className="card-actions bg-base-300 rounded-full w-10 h-10 justify-center items-center">
          <Icon fill="black" />
        </div>
      </div>
    </div>
  );
}
