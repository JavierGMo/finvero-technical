"use client";
import { Card, CardHeader } from "@/app/components/ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Icons } from "../icons";
import { ReactNode } from "react";

interface CardAuthProps {
  children: ReactNode;
}

/**
 *
 * @param children This params is to put inputs, button and so on of form
 * @returns JSX
 */

export const CardAuth = ({ children }: CardAuthProps) => {
  return (
    <Card className="sm:mx-auto w-full  sm:max-w-sm">
      <CardHeader className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <Avatar className="w-1/3 h-1/3">
            <AvatarFallback>
              <Icons.user className="w-full h-full" />
            </AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      {children}
    </Card>
  );
};
