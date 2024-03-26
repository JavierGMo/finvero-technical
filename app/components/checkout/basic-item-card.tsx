import { Product } from "@/types/product";
import Image from "next/image";
import NoImage from "@/assets/images/no-image.jpg";

interface BasicItemCardProps extends Product {}

export const BasicItemCard = (props: BasicItemCardProps) => {
  return (
    <div className="flex">
      <div className="w-1/3 mr-2">
        <Image
          src={props.image ?? NoImage.src}
          alt="d"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="mx-1">
        <p className="font-semibold">{props.name}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
};
