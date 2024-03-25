"use client";
import { ReactNode, useState } from "react";
import { AppHeader } from "./app-header";
import { usePathname } from "next/navigation";

interface MainNavProps {
  children: ReactNode;
}

export const MainNav = ({ children }: MainNavProps) => {
  const path = usePathname();
  const [isHome] = useState(path === "/");
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <div className={`w-full items-start ${isHome ? "" : "px-3"}`}>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  );
};
