"use client";
import Cloud from "./cloud";
import Compas from "./compas";
import Chess from "./chess";
import { useState } from "react";
import {
  NextButton,
  PrevButton,
} from "../@core/footer/components/EmblaCarouselArrowButtons";
import SlideAnimations from "../shared/animations";

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
    <div className="animated_slider py-10">
      <div className="text-white flex flex-col items-center">
        <div className="flex sm:flex-row flex-col max-sm:gap-3 justify-center items-center">
          <div className="dashed_border  p-16 flex justify-center overflow-hidden carousel-item-container">
            {carouselItems[0] === "compas" && (
              <SlideAnimations>
                <Compas active={false} />
              </SlideAnimations>
            )}
            {carouselItems[0] === "cloud" && (
              <SlideAnimations>
                <Cloud active={false} />
              </SlideAnimations>
            )}
            {carouselItems[0] === "chess" && (
              <SlideAnimations>
                <Chess active={false} />
              </SlideAnimations>
            )}
          </div>
          <div className="cloud_image_holder flex justify-center items-center p-5">
            <div className="mr-[20px] mt-1 sm:mr-[5px] md:mr-[-20px] lg:mr-[-50px]">
              <PrevButton onClick={moveMiddleToFirst} />
            </div>
            <div className="activeElement flex justify-center carousel-item-container m-auto">
              {carouselItems[1] === "compas" && (
                <div className="rounded-full">
                  <SlideAnimations>
                    <Compas active={true} />
                  </SlideAnimations>
                </div>
              )}
              {carouselItems[1] === "cloud" && (
                <SlideAnimations>
                  <Cloud active={true} />
                </SlideAnimations>
              )}
              {carouselItems[1] === "chess" && (
                <SlideAnimations>
                  <Chess active={true} />
                </SlideAnimations>
              )}
            </div>
            <div className="ml-[20px] mt-1 sm:ml-[5px] md:ml-[-20px] lg:ml-[-50px]">
              <NextButton onClick={moveMiddleToLast} />
            </div>
          </div>
          <div className="dashed_border p-16 flex justify-center overflow-hidden carousel-item-container">
            {carouselItems[2] === "compas" && (
              <SlideAnimations>
                <Compas active={false} />
              </SlideAnimations>
            )}
            {carouselItems[2] === "cloud" && (
              <SlideAnimations>
                <Cloud active={false} />
              </SlideAnimations>
            )}
            {carouselItems[2] === "chess" && (
              <SlideAnimations>
                <Chess active={false} />
              </SlideAnimations>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col mt-3 items-center text-white">
        {carouselItems[1] === "compas" && (
          <SlideAnimations>
            <div className="text-center text-[25px]">
              Ландшафтное проектирование:
            </div>
            <div>
              <p>-Дендроплан</p>
              <p>-Подробная схема посадки</p>
              <p>-Разработка цветников</p>
              <p>-Разработка цветников</p>
              <p>-Ассортиментная ведомость всех растений</p>
            </div>
          </SlideAnimations>
        )}
        {carouselItems[1] === "cloud" && (
          <SlideAnimations>
            <div className="text-center text-[25px]">Озеленение:</div>
            <div className="flex justify-center gap-10">
              <div className="">
                <p>-Разработка растительного грунта</p>
                <p>-Система полива</p>
                <p>-Система грунтового дренажа</p>
                <p>-Система кровельного дренажа</p>
                <p>-Посадка деревьев</p>
              </div>
              <div>
                <p>-Посадка кустарников</p>
                <p>-Установка рулонного газона</p>
                <p>-Установка Гидропосева</p>
                <p>-Укладка декоративного камня</p>
                <p>-Установка разделителей</p>
              </div>
            </div>
          </SlideAnimations>
        )}
        {carouselItems[1] === "chess" && (
          <SlideAnimations>
            <div className="text-center text-[25px]">Мошение:</div>
            <div>
              <p>-Подготовка основания для бетонных работ (ГПС+Щебень)</p>
              <p>-Работа по подготовочным бетонам</p>
              <p>-Укладка бетонных или каменных бордюров</p>
              <p>-Укладка бетонной или каменной брусчатки</p>
              <p>-Установка бетона с декоративной поверхности</p>
            </div>
          </SlideAnimations>
        )}
      </div>
    </div>
  );
};

export default AnimatedSlide;
