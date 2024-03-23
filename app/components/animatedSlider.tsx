"use client";
import Image from "next/image";
import CloudBg from "../assets/images/main_bg_2.png";
import Cloud from "./cloud";
import Compas from "./compas";
import Chess from "./chess";
import { useState } from "react";

const CarouselItems = ["nice1", "nice2", "nice3"];
const AnimatedSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const moveRight = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % CarouselItems.length);
  };

  const moveLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? CarouselItems.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative">
      <Image className="object-cover w-full h-[70vh]" alt="bg" src={CloudBg} />
      <div className="bg-[#00000081] absolute top-0 left-0 right-0 w-full h-full"></div>
      <div className="right-0 left-0 m-auto absolute top-[10%] text-white flex flex-col items-center">
        <div className="flex items-center">
          <Cloud active={false} />
          <div className="cloud_image_holder p-7">
            <div className="border flex justify-center border-white border-dashed rounded-full px-1 py-20">
              <Compas active={true} />
            </div>
          </div>
          <Chess active={false} />
        </div>
      </div>
    </div>
  );
};

export default AnimatedSlide;
