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

interface ProductCardProps extends Product {}

export const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  const saveIncart = async () => {};
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
        <Button>Comprar</Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={() => {}}>
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
