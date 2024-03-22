import Image, { StaticImageData } from "next/image";

const Card = ({
  image,
  caption,
  height,
  maxwidth,
  secondaryCaption,
}: {
  image: StaticImageData;
  caption: string;
  height?: number;
  maxwidth?: number;
  secondaryCaption?: string;
}) => {
  return (
    <div
      className="relative m-auto group"
      style={{ maxWidth: maxwidth + "px" }}
    >
      <Image
        className="object-cover rounded-[60px]"
        style={{ height: height + "px" }}
        src={image}
        alt="image"
      />
      {/* NEED TO ANIMATE */}
      <div className="absolute text-[18px] transition-all top-[80%] group-hover:top-0 flex flex-col items-center justify-center bottom-0 py-2 overflow-hidden right-0 left-0 m-auto bg-[#ffffffce]">
        <p>{caption}</p>
        <p className="text-[16px]">{secondaryCaption}</p>
      </div>
    </div>
  );
};

export default Card;
