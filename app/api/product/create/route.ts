import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";

export const POST = async (req: NextRequest) => {
  const prisma = new PrismaClient();
  try {
    const data = await req.formData();
    const file = data.get("image") as any;
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    await writeFile(
      path.join(process.cwd(), `public/uploads/${filename}`),
      buffer
    );
    const createdProduct = await prisma.product.create({
      data: {
        name: data.get("name")?.toString() ?? "",
        image: `/uploads/${filename}`,
        price: data.get("price") ? Number(data.get("price")?.toString()) : 0,
      },
      select: {
        id: true,
        name: true,
        price: true,
      },
    });
    return Response.json(createdProduct);
  } catch (error) {
    console.error(error);

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
