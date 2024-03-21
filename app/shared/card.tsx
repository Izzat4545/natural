import Image, { StaticImageData } from "next/image";

const Card = ({
  image,
  caption,
  height,
  maxwidth,
}: {
  image: StaticImageData;
  caption: string;
  height?: number;
  maxwidth?: number;
}) => {
  return (
    <div className="relative" style={{ maxWidth: maxwidth + "px" }}>
      <Image
        className="object-cover rounded-[60px]"
        style={{ height: height + "px" }}
        src={image}
        alt="image"
      />
      <div className="absolute text-[18px] flex justify-center rounded-b-[60px] bottom-0 h-12 right-0 left-0 m-auto bg-[#ffffffce]">
        {caption}
      </div>
    </div>
  );
};

export default Card;
