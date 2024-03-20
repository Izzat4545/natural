"use client";
import Image from "next/image";
import Logo from "../assets/icons/logo.svg";
import Phone from "../assets/icons/phone.svg";
import Menu from "../assets/icons/menu.svg";
import Link from "next/link";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  function close() {
    setOpen(false);
  }
  const path = usePathname();
  useEffect(() => {
    close();
  }, [path]);
  return (
    <div className="container m-auto">
      {/* LINKS */}
      <ul className="text-green flex justify-between items-center gap-2">
        <li>
          <Link href="/">
            <Image alt="Logo" src={Logo} />
          </Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/" className="text-nowrap">
            Главная
          </Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/about-us" className="text-nowrap">
            О нас
          </Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/contact" className="text-nowrap">
            Контакт
          </Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/uzb-projects" className="text-nowrap">
            Проекты
          </Link>
        </li>
        <li className="hidden lg:block">
          <button className="uppercase border btn btn-ghost border-green p-3 rounded-full text-nowrap text-green hover:text-white hover:bg-green">
            Оставить заявку
          </button>
        </li>
        {/* LANGUAGE */}
        <li className="hidden lg:block">
          <div className="flex items-center gap-2">
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
            <div className="text-green flex items-center gap-1">
              <Image alt="Logo" src={Phone} />
              <div className="text-nowrap">+9989 78 777 77 22</div>
            </div>
          </div>
        </li>
        {/* MENU */}
        <li
          onClick={() => setOpen(!open)}
          className="block cursor-pointer lg:hidden"
        >
          <Image alt="Logo" src={Menu} />
        </li>
      </ul>
      <Sidebar close={close} isOpen={open} />
    </div>
  );
};

export default Header;
