import type { aboutData } from "../../Model/ModelData";
import Icon from "./Icon";

export default function AboutSection({
  title,
  description,
  icons,
  clickable,
}: aboutData) {
  return (
    <section className="mt-6 mb-8">
      <h2 className="mb-3 text-xl font-bold text-violet-500 lg:text-2xl">
        {title}
      </h2>
      <p className="text-lg lg:text-xl">{description}</p>
      <div className="flex my-8 justify-evenly items-center" data-aos="zoom-in">
        {icons.map((icon, index) => (
          <Icon
            icon={icon.icon}
            href={icon.href}
            key={index}
            clickable={clickable}
          />
        ))}
      </div>
    </section>
  );
}
