import type { ReactElement, SVGProps } from "react";

type iconProps = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  clickable: boolean;
  href: string | undefined;
};

export default function Icon({ href, icon, clickable }: iconProps) {
  return (
    <>
      {clickable ? (
        <a href={href} target="blank">
          {icon}
        </a>
      ) : (
        icon
      )}
    </>
  );
}
