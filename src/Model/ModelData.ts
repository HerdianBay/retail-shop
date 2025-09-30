import type { LucideIcon } from "lucide-react";

export interface staticCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface solutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
}

export interface solutionProps {
  datas: staticCard[];
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
}
