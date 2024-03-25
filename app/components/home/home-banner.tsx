import Image from "next/image";
import secondSlideImage from "@/assets/images/second-slide.jpg";

export const HomeBanner = () => {
  return (
    <div className="w-full h-full">
      <Image
        src={secondSlideImage.src}
        alt="d"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
