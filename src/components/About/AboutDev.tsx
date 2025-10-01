import type { aboutProps } from "../../Model/ModelData";
import AboutSection from "./AboutSection";

export default function AboutDev({ datas }: aboutProps) {
  return (
    <main>
      <article className="mt-16 pt-32 w-2/3 mx-auto">
        <h1 className="text-3xl font-bold text-violet-500 mb-3">
          About Developer
        </h1>
        <p className="text-lg">
          Hello there! I'm{" "}
          <span className="font-bold text-violet-500">
            Mohammad Herdian Bayu Pratama
          </span>
          , an Information Technology graduate from Brawijaya University with a
          strong interest in web and mobile application development. I have a
          keen interest in web and mobile technology, particularly in the field
          of frontend development. I strive to keep up with the latest trends,
          frameworks, and tools in order to build modern, responsive, and
          user-friendly application interfaces. This allows me to create user
          experiences that are relevant to current needs and keep pace with
          developments in the technology industry.
        </p>

        {datas.map((data, index) => (
          <AboutSection
            key={index}
            title={data.title}
            description={data.description}
            icons={data.icons}
            clickable={data.clickable}
          />
        ))}
      </article>
    </main>
  );
}
