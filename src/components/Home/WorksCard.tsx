import type { cardProps } from "../../Model/ModelData";

export default function WorksCard({
  title,
  description,
  icon: Icon,
}: cardProps) {
  return (
    <div className="card bg-base-100 shadow-lg items-center mb-4">
      <div className="flex justify-center bg-primary w-14 h-14 items-center rounded-full mt-6">
        <Icon />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
