import { registerSchema } from "@/lib/validations/authenticate";
import { AuthenticatedUser } from "@/types/session";
import { infer as zodInfer } from "zod";

export const loginService = async (email: string, password: string) => {
  const req = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await req.json();
  if (!req.ok) throw new RequestError(data.error ?? "", req.status, data.meta);
  const parsedData: AuthenticatedUser = data;
  return parsedData;
};

export const registerUserService = async (
  values: zodInfer<typeof registerSchema>
) => {
  const req = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await req.json();
  if (!req.ok) throw new RequestError(data.error ?? "", req.status, data.meta);

  return data;
};
