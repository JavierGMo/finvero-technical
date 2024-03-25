import { ReactNode } from "react";
import { Separator } from "../ui/separator";

interface PageHeaderProps {
  titlePage: string;
  children: ReactNode;
}

export const PageHeader = ({ children, titlePage }: PageHeaderProps) => {
  return (
    <div>
      <p className="text-3xl font-semibold mb-3">{titlePage}</p>
      <Separator />
      <div>{children}</div>
    </div>
  );
};
