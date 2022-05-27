import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IService } from "./type";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPa using <b>HTML</b>, <b>CSS</b> and  <b>React.js</b>",
    icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about:
      "Handle database, server, api using <b>Express</b> & other popular frameworks",
    icon: FaServer,
  },
  {
    title: "API Development",
    about:
      "Handle database, server, api using <b>Express</b> & other popular frameworks",
    icon: AiOutlineApi,
  },
  {
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>",
    icon: MdDeveloperMode,
  },
  {
    title: "UI/UX Designer",
    about:
      "Stunning user interface designer using <b>Figma</b> and <b>Framer</b>",
    icon: AiOutlineAntDesign,
  },
  {
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit emet consectetur adipisicing elit. Hic quis minima autem!",
    icon: RiComputerLine,
  },
];
