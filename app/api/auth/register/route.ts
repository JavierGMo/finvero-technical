import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  const prisma = new PrismaClient();
  try {
    const { fisrtName, lastName, email, password } = await req.json();
    const salt = Number(process.env.SALT_PASSWORD);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = await prisma.user.create({
      data: {
        fisrtName,
        lastName,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        fisrtName: true,
        lastName: true,
      },
    });
    return Response.json(createdUser);
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
