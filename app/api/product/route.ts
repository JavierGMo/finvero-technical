import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const prisma = new PrismaClient();
  try {
    const params = req.nextUrl.searchParams;
    const perPage = params.get("perPage") ? Number(params.get("perPage")) : 10;
    const page = params.get("page") ? Number(params.get("page")) : 1;
    const skip = page === 1 ? 0 : page * perPage - (perPage - 1) - 1;
    console.log("rake===>", skip);

    const products = await prisma.product.findMany({
      take: perPage,
      skip,
      select: {
        id: true,
        name: true,
        image: true,
        price: true,
      },
    });
    const countProducts = await prisma.product.count();
    const hasNext = products.length !== 0;
    const pages = Math.ceil(countProducts / perPage);
    return Response.json({
      products: products.flat(),
      count: countProducts,
      pages,
      hasNext,
    });
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
