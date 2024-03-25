import { ExitIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Icons } from "../icons";

export const AppAuthenticate = () => {
  return (
    <>
      <div className="hidden md:flex lg:flex justify-around">
        <div>
          <Link
            href="/login"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Iniciar sesión
          </Link>
        </div>
        <div>
          <Link href="/register" className={buttonVariants({})}>
            Registrarse
          </Link>
        </div>
      </div>
      <div className="md:hidden lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarFallback>
                <Icons.user className="w-full h-full" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/login"
                className={buttonVariants({ variant: "outline" })}
              >
                Iniciar sesión
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/register" className={buttonVariants({})}>
                Registrarse
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
