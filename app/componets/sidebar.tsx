import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../assets/icons/logo.svg";
import CloseIcon from "../assets/icons/menu_arrow.svg";
import Search from "../assets/icons/search.svg";
import Phone from "../assets/icons/phone.svg";
import Link from "next/link";
import Telegram from "../assets/icons/telegram.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Instogram from "../assets/icons/instogram.svg";
import Facebook from "../assets/icons/facebook.svg";
const Sidebar = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="absolute shadow-lg bg-base-100 w-full sm:w-[50%] top-0 bottom-0 left-0"
    >
      <div
        className="cursor-pointer flex justify-end mr-2 mt-5"
        onClick={() => close()}
      >
        <Image alt="Close" src={CloseIcon} />
      </div>
      <ul className="flex flex-col gap-2 items-center">
        <li>
          <Image alt="Logo" src={Logo} />
        </li>
        <li>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <Image alt="Serach" src={Search} />
          </label>
        </li>
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
        <li>+9989 78 777 77 22</li>
        <li className="flex gap-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm hover:bg-green text-white bg-green"
            >
              RU
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-0 shadow bg-base-100 rounded-box"
            >
              <li>
                <a>UZ</a>
              </li>
            </ul>
          </div>
          <Image alt="Logo" src={Phone} />
        </li>
        <li>
          <button className="uppercase border btn btn-ghost border-green p-3 rounded-full text-nowrap text-green hover:text-white hover:bg-green">
            Оставить заявку
          </button>
        </li>
        <li className="flex items-center justify-between gap-5">
          <Image
            className="cursor-pointer filter-green"
            alt="Telegram"
            src={Telegram}
          />
          <Image
            className="cursor-pointer filter-green"
            alt="Linkedin"
            src={LinkedIn}
          />
          <Image
            className="cursor-pointer filter-green"
            alt="Inkstogram"
            src={Instogram}
          />
          <Image
            className="cursor-pointer filter-green"
            alt="Facebook"
            src={Facebook}
          />
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
