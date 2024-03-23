"use client";
import Image from "next/image";
import CloudBg from "../assets/images/main_bg_2.png";
import Cloud from "./cloud";
import Compas from "./compas";
import Chess from "./chess";
import { useState } from "react";
import {
  NextButton,
  PrevButton,
} from "../@core/footer/components/EmblaCarouselArrowButtons";

const AnimatedSlide = () => {
  const [carouselItems, setCarouselItems] = useState([
    "cloud",
    "compas",
    "chess",
  ]);

  function moveMiddleToFirst() {
    const middleIndex = Math.floor(carouselItems.length / 2);
    const middleItem = carouselItems[middleIndex];
    const newCarouselItems = [
      middleItem,
      ...carouselItems.slice(0, middleIndex),
      ...carouselItems.slice(middleIndex + 1),
    ];
    setCarouselItems(newCarouselItems);
  }

  function moveMiddleToLast() {
    const middleIndex = Math.floor(carouselItems.length / 2);
    const middleItem = carouselItems[middleIndex];
    const newCarouselItems = [
      ...carouselItems.slice(0, middleIndex),
      ...carouselItems.slice(middleIndex + 1),
      middleItem,
    ];
    setCarouselItems(newCarouselItems);
  }

  return (
    <div className="relative">
      <Image
        className="object-cover w-full h-screen sm:h-[70vh]"
        alt="bg"
        src={CloudBg}
      />
      <div className="bg-[#00000081] absolute top-0 left-0 right-0 w-full h-full"></div>
      <div className="right-0 left-0 m-auto absolute top-2 sm:top-[10%] text-white flex flex-col items-center">
        <div className="flex sm:flex-row flex-col justify-center items-center">
          <div className="dashed_border p-5 flex justify-center overflow-hidden carousel-item-container">
            {carouselItems[0] === "compas" && <Compas active={false} />}
            {carouselItems[0] === "cloud" && <Cloud active={false} />}
            {carouselItems[0] === "chess" && <Chess active={false} />}
          </div>
          <div className="cloud_image_holder p-5">
            <div className="dashed_border  flex justify-center carousel-item-container m-auto">
              <div className="ml-[-50px] sm:ml-[-45px]">
                <PrevButton onClick={moveMiddleToFirst} />
              </div>
              {carouselItems[1] === "compas" && <Compas active={true} />}
              {carouselItems[1] === "cloud" && <Cloud active={true} />}
              {carouselItems[1] === "chess" && <Chess active={true} />}
              <div className="mr-[-50px] sm:mr-[-45px]">
                <NextButton onClick={moveMiddleToLast} />
              </div>
            </div>
          </div>
          <div className="dashed_border p-5 flex justify-center overflow-hidden carousel-item-container">
            {carouselItems[2] === "compas" && <Compas active={false} />}
            {carouselItems[2] === "cloud" && <Cloud active={false} />}
            {carouselItems[2] === "chess" && <Chess active={false} />}
          </div>
        </div>
      </div>
      <div>
        {/* INFO WILL BE HERE */}
        {/* {carouselItems[2] === "compas" && <Compas active={false} />}
            {carouselItems[2] === "cloud" && <Cloud active={false} />}
            {carouselItems[2] === "chess" && <Chess active={false} />} */}
      </div>
    </div>
  );
};

export default AnimatedSlide;
