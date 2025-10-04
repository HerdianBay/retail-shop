import type { solutionProps } from "../../Model/ModelData";
import SolutionCard from "./SolutionCard";

export default function Solution({
  datas,
  activeIndex,
  setActiveIndex,
}: solutionProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-base-300 mb-16 -z-10"></div>
      <div className="px-4 z-10 md:px-6 xl:max-w-6xl xl:mx-auto">
        <div className="pt-12">
          <div className="text-center mb-12 lg:max-w-3xl lg:mx-auto">
            <h4 className="mb-4">Explore the solutions</h4>
            <p className="text-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="mb-8 md:col-span-7 md:mb-0" data-aos="fade-right">
              <h4 className="mb-3">Powerful suite of tools</h4>
              <p className="text-xl mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa.
              </p>
              <div className="mb-8 md:mb-0">
                {datas.map((data, index) => (
                  <SolutionCard
                    key={index}
                    title={data.title}
                    description={data.description}
                    icon={data.icon}
                    active={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
            <div className="md:col-span-5 flex" data-aos="zoom-y-out">
              <img src="/illu1.svg" alt="" className="mb-8 md:mb-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
