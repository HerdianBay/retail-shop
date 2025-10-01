import type { LucideIcon } from "lucide-react";
import type { ReactElement, SVGProps } from "react";

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

export interface aboutData {
  title: string;
  description: string;
  icons: aboutIcon[];
  clickable: boolean;
}

export interface aboutIcon {
  href?: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}

export interface aboutProps {
  datas: aboutData[];
}
