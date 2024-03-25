"use client";
import Link from "next/link";
import { AppUserSession } from "./app-user-session";
import { useContext } from "react";
import { AuthContext } from "@/providers/auth-provider";
import { AppAuthenticate } from "./app-authenticate";
import { AppOptions } from "./app-options";
import { Button } from "../ui/button";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { openSheet } from "@/store/features/cartCheckout/cartCheckoutSlice";

export const AppHeader = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header className="sticky flex top-0 z-50 w-full border-b bg-background justify-between py-2 px-5">
      <div className="self-center">
        <Link href="/">
          <p className="mx-2 text-lg font-medium leading-none">The Ecommerce</p>
        </Link>
      </div>

      <div className="self-center">
        <AppOptions />
      </div>
      <div className="self-center">
        <Button
          onClick={() => {
            dispatch(openSheet(true));
          }}
        >
          <ShoppingCartIcon />
        </Button>
      </div>
      <div className="self-center md:w-1/3 lg:w-1/3">
        {isAuthenticated ? <AppUserSession /> : <AppAuthenticate />}
      </div>
    </header>
  );
};
