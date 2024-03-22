import Image from "next/image";
import Hero from "../assets/images/abroad_proj_bg.png";
import { uzb_projects } from "./resources/data";
import Card from "../shared/card";
import Link from "next/link";
import generateSlug from "../utils/slugGenerator";
const AbroadProjects = () => {
  return (
    <>
      <div className="relative">
        <Image className="object-cover w-full h-[90vh]" alt="bg" src={Hero} />
        <div className="bg-[#00000081] absolute top-0 left-0 right-0 w-full h-full"></div>
        <div className="right-0 left-0 m-auto absolute top-[30%] text-white flex flex-col items-center">
          <div className="flex flex-col">
            {/* <Animations delay={0.6}> */}
            <p className="text-[40px] sm:text-[50px] md:text-[60px] text-center 2xl:text-[70px]">
              Наши проекты за границей
            </p>
            {/* </Animations> */}
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="my-5 text-[25px] md:text-[35px] text-center">
          Турция
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container m-auto gap-10">
          {uzb_projects.slice(0, 9).map((value, index) => (
            <Link
              className="max-w-[400px] m-auto"
              key={index}
              href={
                "uzb-projects/" + generateSlug(value.coption1) + "-" + value.id
              }
            >
              <Card
                image={value.image}
                caption={value.coption1}
                maxwidth={400}
                height={350}
                secondaryCaption={value.caption2}
              />
            </Link>
          ))}
        </div>
        <div className="my-10 text-[25px] md:text-[35px] text-center">
          Туркменистан
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container m-auto gap-10">
          {uzb_projects.slice(9, 15).map((value, index) => (
            <Link
              className="max-w-[400px] m-auto"
              key={index}
              href={
                "abroad-projects/" +
                generateSlug(value.coption1) +
                "-" +
                value.id
              }
            >
              <Card
                image={value.image}
                caption={value.coption1}
                maxwidth={400}
                height={350}
                secondaryCaption={value.caption2}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center mt-10 gap-10">
          {uzb_projects.slice(16).map((value, index) => (
            <div key={index}>
              {index === 0 && (
                <div className="my-10 text-[25px] md:text-[35px] text-center">
                  Казахстан
                </div>
              )}
              {index === 1 && (
                <div className="my-10 text-[25px] md:text-[35px] text-center">
                  Ирак
                </div>
              )}
              <Link
                href={
                  "uzb-projects/" +
                  generateSlug(value.coption1) +
                  "-" +
                  value.id
                }
              >
                <Card
                  image={value.image}
                  caption={value.coption1}
                  maxwidth={400}
                  height={350}
                  secondaryCaption={value.caption2}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AbroadProjects;
