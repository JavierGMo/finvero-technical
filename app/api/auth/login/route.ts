import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  const prisma = new PrismaClient();
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findFirstOrThrow({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        fisrtName: true,
        lastName: true,
        password: true,
      },
    });

    const matchedPassword = await bcrypt.compare(password, user.password);
    const privateKey = process.env.PRIVATE_KEY ?? "hello";
    if (!matchedPassword) {
      return Response.json(
        {
          message: "Correo o contraseña invalidos",
        },
        {
          status: 401,
        }
      );
    }
    const { password: _, ...restUser } = user;
    const token = jwt.sign(restUser, privateKey);
    return Response.json({
      user: restUser,
      token,
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
