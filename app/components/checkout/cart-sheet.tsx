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
import { openSheet } from "@/store/features/cartCheckout/cartCheckoutSlice";

export const CartSheet = () => {
  const open = useSelector((state: RootState) => state.cartCheckout.open);
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
          <p>adas</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Comprar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
