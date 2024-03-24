import Image from "next/image";
import HeroBg from "./assets/images/main_page_bg.png";
import Year from "./assets/images/28_years.png";
import CloudBg from "./assets/images/main_bg_2.png";
import Animations, { ContentAnimations } from "./shared/animations";
import Mustafa from "./assets/images/mustafa.png";
import Tahsken from "./assets/images/uzb_proj.png";
import Abroad from "./assets/images/abroad_proj.png";
import Link from "next/link";
import Card from "./shared/card";
import AnimatedSlide from "./components/animatedSlider";
export default function Home() {
  return (
    <div>
      {/* HERO */}
      <div className="relative">
        <Image className="object-cover w-full h-[90vh]" alt="bg" src={HeroBg} />
        <div className="bg-[#00000081] absolute top-0 left-0 right-0 w-full h-full"></div>
        <div className="right-0 left-0 m-auto absolute top-[30%] text-white flex flex-col items-center">
          <div className="flex flex-col">
            <ContentAnimations delay={0.5}>
              <p className="text-end text-[12px] sm:text-[16px] 2xl:text-[18px]">
                Измените <b>ландшафтный дизайн</b> вокруг себя - <br />
                подчеркните индивидуальность
              </p>
            </ContentAnimations>
            <ContentAnimations delay={0.6}>
              <p className="text-[40px] sm:text-[70px] md:text-[100px] text-nowrap text-center 2xl:text-[150px]">
                Natural Peyzaj
              </p>
            </ContentAnimations>
            <ContentAnimations delay={0.7}>
              <div>
                <button className="flex text-[12px] sm:text-[18px] rounded-full justify-start btn btn-ghost bg-transparent border border-white hover:bg-white hover:text-green">
                  Katalog
                </button>
              </div>
            </ContentAnimations>
          </div>
        </div>
      </div>
      {/* HERO END */}
      <div className="flex md:flex-row flex-col-reverse container m-auto justify-center items-center">
        <div>
          <p className="text-green mb-7 text-[25px] sm:text-[30px] md:text-[35px] mt-[-50px] md:mt-10">
            Профессиональные ландшафтные услуги более
          </p>
          <div className="flex flex-col gap-4 text-justify">
            <p>
              Natural Peyzaj входит в число компаний, которые формируют сектор с
              его завершенными и в настоящее время действующими зарубежными и
              отечественными проектами и приложениями для промышленности, дорог,
              туристических объектов, торговых центров, жилищного строительства.
            </p>
            <p>
              Основанная в 1996 году, наша компания предоставляет услуги в ландш
              афтном секторе с архитектурным офисом, теплицами и питомником,
              расположенными на 16 акрах в Эйюпе Кемербургазе.
            </p>
          </div>
          <button className="my-4 text-[12px] sm:text-[18px] rounded-full btn btn-ghost bg-transparent border border-green hover:bg-green hover:text-white">
            Узнать больше
          </button>
        </div>
        <div>
          <Image alt="year" src={Year} />
        </div>
      </div>
      <AnimatedSlide />
      {/* MUSTAFA */}
      <div className="flex md:flex-row flex-col justify-around gap-4 mb-4 items-center container m-auto">
        <div className="border border-[#0000007a] rounded-full p-4">
          <Image
            className="rounded-full border border-dashed border-[#0000007a] p-3"
            alt="Mustafa"
            src={Mustafa}
          />
        </div>
        <div>
          <p className="text-[25px] sm:text-[30px] md:text-[35px]">
            MUSTAFA FEDAİ ÖZASLAN
          </p>
          <div>
            <p>Региональный директор</p>
            <p>тел: +998 97 156 74 94</p>
            <p>email: mustafa@naturalpeyzaj.com.tr</p>
            <p>сайт: naturalpeyzaj.com.tr</p>
          </div>
        </div>
      </div>
      <div className="bg-green text-center text-white text-[20px] sm:text-[27px] mb-4 py-5">
        Наши профессиональные ландшафтные дизайны
      </div>
      {/* CARDS */}
      <div className="flex gap-6 md:gap-20 md:flex-row flex-col justify-center items-center py-5">
        <Link
          className="border relative border-[#0000007a] p-3 rounded-[60px]"
          href={"uzb-projects"}
        >
          <div className="border rounded-[60px] border-dashed border-[#0000007a] p-3">
            <Card
              caption="Проекты в Узбекистане"
              height={350}
              maxwidth={450}
              image={Tahsken}
            />
          </div>
        </Link>
        <Link
          className="border relative max-w-[450px] border-[#0000007a] p-3 rounded-[60px]"
          href={"abroad-projects"}
        >
          <div className="border rounded-[60px] border-dashed border-[#0000007a] p-3">
            <Card
              caption="Проекты за границей"
              height={350}
              maxwidth={450}
              image={Abroad}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
