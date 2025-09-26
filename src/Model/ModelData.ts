import type { LucideIcon } from "lucide-react";

export interface staticCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface cardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}
