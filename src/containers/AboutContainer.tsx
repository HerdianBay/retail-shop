import AboutDev from "../components/About/AboutDev";
import type { aboutData } from "../Model/ModelData";
import { getAboutData } from "../utils/StaticData";

export default function AboutContainer() {
  const aboutData: aboutData[] = getAboutData();

  return <AboutDev datas={aboutData} />;
}
