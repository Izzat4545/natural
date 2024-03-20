import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import CarouselHolder from "../../../assets/icons/carousel_holder.svg";
import Image, { StaticImageData } from "next/image";
type PropType = {
  slides: {
    id: number;
    image: StaticImageData;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className="main_container">
      <div className="flex button_wrapper mr-[-25px] justify-between z-20">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="w-[40px] h-[60px] bg-green mr-[-15px] z-10 rounded-[100%]"></div>
      <div className="embla_carusel_bg">
        <div className="text-[18px] sm:text-[30px] text-center mb-2">
          Партнеры:
        </div>
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((data) => (
                <div className="embla__slide" key={data.id}>
                  <div className="embla__slide__image">
                    <Image
                      className="w-100 h-100"
                      alt="parters"
                      src={data.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="w-[40px] h-[60px] bg-green ml-[-15px] z-10 rounded-[100%]"></div>
      <div className="flex button_wrapper justify-between ml-[-25px] z-20">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
