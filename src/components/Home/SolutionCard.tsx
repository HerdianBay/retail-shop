import type { solutionCardProps } from "../../Model/ModelData";

export default function SolutionCard({
  title,
  description,
  icon: Icon,
  active,
  onClick,
}: solutionCardProps) {
  return (
    <button className="hover:cursor-pointer" onClick={onClick}>
      <div
        className={`card border-4 card-md shadow-sm mb-3 transition duration-400 ease-in-out ${
          active
            ? "bg-black border border-violet-600"
            : "border-white bg-base-200"
        }`}
      >
        <div className="card-body flex-row items-center">
          <div className="flex flex-col gap-2 flex-1">
            <h2
              className={`card-title ${active ? "text-white" : "text-black"}`}
            >
              {title}
            </h2>
            <p
              className={`text-lg md:tracking-tight text-start ${
                active ? "text-gray-300" : "text-black"
              }`}
            >
              {description}
            </p>
          </div>
          <div className="card-actions bg-base-300 rounded-full w-8 h-8 justify-center items-center">
            <Icon fill="black" size={18} />
          </div>
        </div>
      </div>
    </button>
  );
}
