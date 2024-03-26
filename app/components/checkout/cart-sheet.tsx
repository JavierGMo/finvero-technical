"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { RootState } from "@/store/store";
import {
  openSheet,
  removeItemsInCart,
} from "@/store/features/cartCheckout/cartCheckoutSlice";
import { BasicItemCard } from "./basic-item-card";

export const CartSheet = () => {
  const open = useSelector((state: RootState) => state.cartCheckout.open);
  const products = useSelector(
    (state: RootState) => state.cartCheckout.products
  );
  const dispatch = useDispatch();
  return (
    <Sheet
      open={open}
      onOpenChange={() => {
        dispatch(openSheet(!open));
      }}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tu carrito</SheetTitle>
          <Separator />
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {products.map((product, idx) => (
            <BasicItemCard key={`${product.id}-${idx}`} {...product} />
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={() => {
                dispatch(removeItemsInCart());
              }}
            >
              Vaciar carrito
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit">Comprar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
