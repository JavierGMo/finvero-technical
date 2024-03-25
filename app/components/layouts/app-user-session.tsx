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

export const AppUserSession = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <p>J</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>
            <p>Javier</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <span
              className="cursor-pointer"
              onClick={() => {
                console.log("exit");
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
