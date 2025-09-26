import {
  Camera,
  Component,
  Disc2,
  Frame,
  MessageCircle,
  Moon,
  Send,
  Split,
  Zap,
} from "lucide-react";
import type { staticCard } from "../Model/ModelData";

const solutionStaticCards: staticCard[] = [
  {
    id: 1,
    title: "Simple shopping ecosystem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sit culpa distinctio.",
    icon: Zap,
  },
  {
    id: 2,
    title: "Simple shopping ecosystem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sit culpa distinctio.",
    icon: Send,
  },
  {
    id: 3,
    title: "Simple shopping ecosystem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sit culpa distinctio.",
    icon: Moon,
  },
];

const workStaticCards: staticCard[] = [
  {
    id: 1,
    title: "Initial Contact",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: Split,
  },
  {
    id: 2,
    title: "Discovery Session",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: Disc2,
  },
  {
    id: 3,
    title: "Contracting",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Fast Prototyping",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: Camera,
  },
  {
    id: 5,
    title: "Design Phase",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: Frame,
  },
  {
    id: 6,
    title: "Develop & Listing for Sale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sit culpa distinctio.",
    icon: Component,
  },
];

export function getSolutionCardsData(): staticCard[] {
  return solutionStaticCards;
}

export function getWorkCardsData(): staticCard[] {
  return workStaticCards;
}
