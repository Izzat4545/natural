import { idFinder } from "@/app/utils/idFinder";
import { uzb_projects } from "../resources/data";
import { uzb_projects_type } from "@/app/interfaces/projects";
import Image from "next/image";
import Person from "../../assets/icons/person.svg";
import Tree from "../../assets/icons/tree.svg";
import Bike from "../../assets/icons/bike.svg";
import Bush from "../../assets/icons/bush.svg";
import Car from "../../assets/icons/car.svg";
import Plant from "../../assets/icons/plant.svg";

const ProjectDetail = ({ params }: { params: { detail: string } }) => {
  function getCurrentData() {
    return idFinder<uzb_projects_type>(uzb_projects, params.detail);
  }
  const info = [
    {
      title: "Тратуары",
      value: getCurrentData()?.sidewalks,
      icon: Person,
    },
    {
      title: "Объем озеленения",
      value: getCurrentData()?.landscapingVolume,
      icon: Plant,
    },
    {
      title: "Посаженные деревья",
      value: getCurrentData()?.plantedTrees,
      icon: Tree,
    },
    {
      title: "Посаженные кустарники",
      value: getCurrentData()?.plantedShrubs,
      icon: Bush,
    },
    {
      title: "Вело-дороги",
      value: getCurrentData()?.bikeLine,
      icon: Bike,
    },
    {
      title: "Авто-дороги",
      value: getCurrentData()?.carRoads,
      icon: Car,
    },
  ];
  return (
    <div className="py-5 flex sm:flex-row flex-col gap-10 justify-around container m-auto">
      <div className="m-auto">
        <Image src={getCurrentData()!.image} alt="Image" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {info.map((value, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Image alt="icon" src={value.icon} />
            <div className="flex-col">
              <div>{value.title}</div>
              <div>{value.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
