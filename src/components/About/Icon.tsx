import type { ReactElement, SVGProps } from "react";

type iconProps = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
};

export default function Icon({ icon }: iconProps) {
  return <>{icon}</>;
}
