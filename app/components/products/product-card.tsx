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

interface ProductCardProps extends Product {}

export const ProductCard = ({ id, title, price }: ProductCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <p className="font-medium">{title}</p>
      </CardHeader>
      <CardContent>
        <p>${price}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Comprar</Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
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
