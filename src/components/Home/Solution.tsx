import { getSolutionCardsData } from "../../utils/StaticData";
import SolutionCard from "./SolutionCard";

const solutionCardsData = getSolutionCardsData();

export default function Solution() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-base-300 mb-16 -z-10"></div>
      <div className="px-4 z-10">
        <div className="pt-12">
          <div className="text-center mb-12">
            <h4 className="mb-4">Explore the solutions</h4>
            <p className="text-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <h4 className="mb-3">Powerful suite of tools</h4>
              <p className="text-xl">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa.
              </p>
            </div>
            <div className="mb-8">
              {solutionCardsData.map((data, index) => (
                <SolutionCard
                  key={index}
                  title={data.title}
                  description={data.description}
                  icon={data.icon}
                />
              ))}
            </div>
            <div>
              <img src="/illu1.svg" alt="" className="mb-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
