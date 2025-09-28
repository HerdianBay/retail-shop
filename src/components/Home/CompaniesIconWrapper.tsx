import type { ReactNode } from "react";

export default function CompaniesIconWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex justify-center items-center py-2 col-span-2 md:col-auto">
      {children}
    </div>
  );
}
