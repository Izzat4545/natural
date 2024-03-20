import Link from "next/link";
import FooterLogo from "../assets/icons/footer_logo.svg";
import Image from "next/image";
import Telegram from "../assets/icons/telegram.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Instogram from "../assets/icons/instogram.svg";
import Facebook from "../assets/icons/facebook.svg";
const Footer = () => {
  return (
    <div className="bg-green text-white py-4">
      <div className="container m-auto">
        <div>CArousel</div>
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
