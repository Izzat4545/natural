import Image from "next/image";
import Hero from "../assets/images/about_us_bg.png";
import Leaves from "../assets/images/leaves.svg";
import Workers from "../assets/images/workers.png";
import Street from "../assets/images/about_us_street.png";
import Certificate1 from "../assets/images/certificate1.jpg";
import Certificate2 from "../assets/images/certificate2.jpg";
import Certificate3 from "../assets/images/certificate3.jpg";
import Certificate4 from "../assets/images/certificate4.jpg";
import Certificate5 from "../assets/images/certificate5.jpg";
import Certificate6 from "../assets/images/certificate6.jpg";
import { ContentAnimations } from "../shared/animations";
const AboutUs = () => {
  const certificates = [
    Certificate1,
    Certificate2,
    Certificate3,
    Certificate4,
    Certificate5,
    Certificate6,
  ];
  return (
    <div>
      <div className="relative">
        <Image className="object-cover w-full h-[90vh]" alt="bg" src={Hero} />
        <div className="bg-[#00000081] absolute top-0 left-0 right-0 w-full h-full"></div>
        <div className="right-0 left-0 m-auto absolute top-[30%] text-white flex flex-col items-center">
          <div className="flex flex-col">
            <ContentAnimations delay={0.5}>
              <p className="text-[40px] sm:text-[50px] md:text-[60px] text-center 2xl:text-[70px]">
                О Нашей Компании
              </p>
            </ContentAnimations>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="container py-10 flex lg:flex-row gap-5 flex-col items-center justify-around m-auto">
          <div className="z-10 flex flex-col gap-4 lg:w-[50%]">
            <p>
              <b>Natural Peyzaj </b>
              входит в число компаний, которые формируют сектор с его
              завершенными и в настоящее время действующими зарубежными и
              отечественными проектами и приложениями для промышленности, дорог,
              туристических объектов, торговых центров, жилищного строительства.
            </p>
            <p>
              Основанная в 1996 году, наша компания предоставляет услуги в
              ландшафтном секторе с архитектурным офисом, теплицами и
              питомником, расположенными на 16 акрах в Эйюпе Кемербургазе.
            </p>
            <p>
              Наш опытный технический персонал предоставляет услуги по
              проектированию и внедрению в различных масштабах в стране и за
              рубежом, от городского до жилого, а также услуги по техническому
              обслуживанию после внедрения.
            </p>
            <p>
              Помимо нашего питомника, расположенного в Кемербургазе, у нас есть
              завод по производству саженцев площадью 220 000 м2 в Биледжик
              Османели. Кроме того, в нашем бизнесе за рубежом активно октябре
              продолжается наше партнерство с отраслевыми компаниями.
            </p>
            <p>
              Наша компания также импортирует саженцы из Испании, Италии,
              Франции, Бельгии, Германии и Нидерландов, а также экспортирует
              растения в Узбекистан, Туркменистан, Азербайджан и Северный Ирак.
            </p>
            <p>
              В этом контексте природный ландшафт входит в число компаний,
              которые руководят промышленными, дорожными, туристическими
              объектами, торговыми центрами, жилыми проектами и приложениями за
              рубежом и внутри страны декоммунизации, которые были завершены и
              уже ведутся.
            </p>
          </div>
          <div className="z-10 m-auto max-sm:w-[70%]">
            <Image
              className="p-3 border border-dashed rounded-full border-[#00000094]"
              alt="image"
              src={Workers}
            />
            <Image
              className="p-3 mt-[-100px] ml-[-70px] lg:ml-[-100px] border border-dashed rounded-full border-[#00000094]"
              alt="image"
              src={Street}
            />
          </div>
        </div>

        <Image
          className="absolute right-0 top-0 z-[-1]"
          alt="image"
          src={Leaves}
        />
      </div>
      <div className="container m-auto my-6">
        <div className="text-center text-green my-5 text-[25px] md:text-[35px]">
          Наши местные и международные сертификаты
        </div>
        <div className="flex justify-center flex-wrap gap-10">
          {certificates.map((value, index) => (
            <Image alt="image" key={index} src={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
