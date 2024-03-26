import { Product } from "@/types/product";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Image from "next/image";
import noImage from "@/assets/images/no-image.jpg";
import { useContext } from "react";
import { AuthContext } from "@/providers/auth-provider";
import { checkoutProduct } from "@/services/products";
import { useToast } from "@/hooks/useToast";
import { useDispatch } from "react-redux";
import { saveItemsInCart } from "@/store/features/cartCheckout/cartCheckoutSlice";

interface ProductCardProps extends Product {}

export const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  const { toast } = useToast();
  const { session } = useContext(AuthContext);
  const dispatch = useDispatch();
  const saveIncart = async () => {
    console.log("session", session);

    Promise.resolve(
      checkoutProduct({
        userId: session.user?.id ?? 0,
        products: [
          {
            id: id,
            image: image,
            name: name,
            price: price,
          },
        ],
      })
    )
      .then((cretedProduct) => {
        toast({
          title: "Agregado al carrito",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <Image
          src={image ? image : noImage.src}
          alt={name ?? "-"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </CardHeader>
      <CardContent>
        <p className="font-medium">{name}</p>
        <p>${price}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => {
            saveIncart();
          }}
        >
          Comprar
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  dispatch(
                    saveItemsInCart({
                      id,
                      image,
                      name,
                      price,
                    })
                  );
                }}
              >
                <ShoppingCart />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Agregar al carrito</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};
