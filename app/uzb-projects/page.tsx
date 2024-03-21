import Image from "next/image";
import Hero from "../assets/images/uzb_proj_hero.png";
import { uzb_projects } from "./resources/data";
import Card from "../shared/card";
const Projects = () => {
  return (
    <>
      <div className="relative">
        <Image className="object-cover w-full h-[90vh]" alt="bg" src={Hero} />
        <div className="bg-[#00000081] absolute top-0 left-0 right-0 w-full h-full"></div>
        <div className="right-0 left-0 m-auto absolute top-[30%] text-white flex flex-col items-center">
          <div className="flex flex-col">
            {/* <Animations delay={0.6}> */}
            <p className="text-[40px] sm:text-[50px] md:text-[60px] text-center 2xl:text-[70px]">
              Наши проекты в Узбекистане
            </p>
            {/* </Animations> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {uzb_projects.part1.map((value, index) => (
          <Card
            image={value.image}
            caption={value.coption1}
            key={index}
            maxwidth={400}
            height={350}
          />
        ))}
      </div>
      <div className="text-green my-10 text-[25px] md:text-[35px] text-center">
        Наши проекты в процессе
      </div>
      <div className="flex flex-wrap gap-10 justify-start container m-auto">
        {uzb_projects.part2.map((value, index) => (
          <Card
            image={value.image}
            caption={value.coption1}
            key={index}
            maxwidth={400}
            height={350}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
