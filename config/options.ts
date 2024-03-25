import { OptionMenuNavigation } from "@/types/global";

export const optionsMenuNavigation: OptionMenuNavigation[] = [
  {
    title: "Productos",
    subItems: [
      {
        title: "Productos",
        description: "Productos paginados",
        href: "/products",
      },
      {
        title: "Crear",
        description: "Crear producto",
        href: "/products/create",
      },
    ],
  },
];
