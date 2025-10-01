import type { aboutData } from "../../Model/ModelData";
import Icon from "./Icon";

export default function AboutSection({ title, description, icons }: aboutData) {
  return (
    <section className="mt-6 mb-8">
      <h2 className="mb-3 text-xl font-bold text-violet-500">{title}</h2>
      <p className="text-lg">{description}</p>
      <div className="flex my-8 justify-evenly">
        {icons.map((icon, index) => (
          <Icon icon={icon} key={index} />
        ))}
      </div>
    </section>
  );
}
