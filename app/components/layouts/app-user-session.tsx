"use client";
import { ExitIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useContext } from "react";
import { AuthContext } from "@/providers/auth-provider";

export const AppUserSession = () => {
  const { unsetSession, session } = useContext(AuthContext);
  console.log("sessdajhsd ", session);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <p>{session.user?.firstName?.charAt(0) ?? "-"}</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>
            <p>{session.user?.firstName ?? "--"}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <span
              className="cursor-pointer"
              onClick={() => {
                console.log("exit");
                unsetSession();
              }}
            >
              <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              Log out
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
