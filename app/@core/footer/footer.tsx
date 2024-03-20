"use client";
import Link from "next/link";
import FooterLogo from "../../assets/icons/footer_logo.svg";
import Image from "next/image";
import Telegram from "../../assets/icons/telegram.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Instogram from "../../assets/icons/instogram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Partner1 from "../../assets/images/partner_1.png";
import Partner2 from "../../assets/images/partner_2.png";
import Partner3 from "../../assets/images/partner_3.png";
import Partner4 from "../../assets/images/partner_4.png";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./components/EmblaCarousel";
import "./components/styles/embla.css";
const Footer = () => {
  const OPTIONS: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };
  const SLIDES = [
    {
      id: 1,
      image: Partner1,
    },
    {
      id: 2,
      image: Partner2,
    },
    {
      id: 3,
      image: Partner3,
    },
    {
      id: 4,
      image: Partner4,
    },
    {
      id: 5,
      image: Partner1,
    },
  ];
  return (
    <div className="bg-green text-white py-4">
      <div className="container m-auto">
        <div className="flex justify-center">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 justify-between">
          <Image src={FooterLogo} alt="Logo" />
          <div className="flex justify-between gap-3 w-full flex-col">
            <ul className="flex text-center flex-col items-center gap-3 md:gap-0 md:flex-row justify-between">
              <li>
                <p>Наш номер телефона</p>
                <p>+9989 78 777 77 22</p>
              </li>
              <li>
                <p>Информация и жалобы</p>
                <p>info@naturalpeyzaj.uz</p>
              </li>
              <li>
                <p>
                  Узбекистан, г. Ташкент, <br /> Шайхантахурский район, <br />
                  улица Фуркат, 1 A
                </p>
              </li>
            </ul>
            <ul className="flex flex-wrap items-center justify-center gap-3 sm:justify-between w-full">
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/about-us">О нас</Link>
              </li>
              <li>
                <Link href="/contact">Контакт</Link>
              </li>
              <li>
                <Link href="/uzb-projects">Проекты</Link>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  className="cursor-pointer"
                  alt="Telegram"
                  src={Telegram}
                />
                <Image
                  className="cursor-pointer"
                  alt="Linkedin"
                  src={LinkedIn}
                />
                <Image
                  className="cursor-pointer"
                  alt="Instogram"
                  src={Instogram}
                />
                <Image
                  className="cursor-pointer"
                  alt="Facebook"
                  src={Facebook}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
