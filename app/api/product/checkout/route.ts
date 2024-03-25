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

    const checkoutedProducts = await prisma.checkoutProduct.create({
      data: {
        total,
        userFk: userId,
        products: {
          connect: products,
        },
      },
      select: {
        products: true,
        user: {
          select: {
            id: true,
            fisrtName: true,
          },
        },
      },
    });
    return Response.json(checkoutedProducts);
  } catch (error) {
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
