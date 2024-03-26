import { PrismaClient, Product } from "@prisma/client";
import { NextRequest } from "next/server";

interface DataRequest {
  userId: number;
  products: Product[];
}

export const POST = async (req: NextRequest) => {
  const prisma = new PrismaClient();
  try {
    const { userId, products }: DataRequest = await req.json();
    let total = 0;
    products.forEach((product) => {
      const price = product.price;
      total += price;
    });
    const productIds = products.map((product) => ({
      total,
      userFk: userId,
      productFk: product.id,
    }));
    console.log("products", productIds);

    const checkoutedProducts = await prisma.checkoutProduct.createMany({
      data: productIds,
    });
    return Response.json(checkoutedProducts);
  } catch (error) {
    console.error("error in checkout", error);

    return Response.json(
      {
        message: "Internal server error",
        meta: {
          error,
        },
      },
      {
        status: 500,
      }
    );
  }
};
