import type { LucideIcon } from "lucide-react";
import type { ReactElement, SVGProps } from "react";

export interface staticCard {
  id?: number;
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

export interface categoriesProps {
  dataCategories: categoriesDataAPI[];
  activeNumber: number | null;
  onClick: (id: number) => void;
}

export interface categoriesDataAPI {
  id: number;
  name: string;
  slug: string;
}

export interface rawDataCategoriesAPI {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface categoriesListProps {
  id: number;
  name: string;
  activeNumber: number | null;
  onClick: (id: number) => void;
}

export interface rawDataProductsAPI {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: categoriesDataAPI;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface productsDataAPI {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: categoriesDataAPI;
  images: string[];
}

export interface productsProps {
  datas: productsDataAPI;
}
