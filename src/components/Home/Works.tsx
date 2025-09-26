import { getWorkCardsData } from "../../utils/StaticData";
import WorksCard from "./WorksCard";

const workCardsData = getWorkCardsData();

export default function Works() {
  return (
    <section className="relative">
      <div className="absolute left-0 right-0 top-1/2 bottom-0 bg-black -z-10"></div>
      <div className="px-4">
        <div className="py-12">
          <div className="text-center mb-12">
            <h4 className="mb-4">How Simple works</h4>
            <p className="text-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div>
            {workCardsData.map((data, index) => (
              <WorksCard
                key={index}
                title={data.title}
                description={data.description}
                icon={data.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
