import { useState } from "react";
import Solution from "../components/Home/Solution";
import type { staticCard } from "../Model/ModelData";
import { getSolutionCardsData } from "../utils/StaticData";

export default function SolutionContainer() {
  const solutionCardsData: staticCard[] = getSolutionCardsData();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Solution
      datas={solutionCardsData}
      activeIndex={activeIndex}
      setActiveIndex={changeActiveIndex}
    />
  );
}
