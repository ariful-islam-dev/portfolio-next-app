import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IService, ISkill } from "./type";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPa using <b>HTML</b>, <b>CSS</b> and  <b>React.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about:
      "Handle database, server, api using <b>Express</b> & other popular frameworks",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about:
      "Handle database, server, api using <b>Express</b> & other popular frameworks",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>",
    Icon: MdDeveloperMode,
  },
  {
    title: "UI/UX Designer",
    about:
      "Stunning user interface designer using <b>Figma</b> and <b>Framer</b>",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit emet consectetur adipisicing elit. Hic quis minima autem!",
    Icon: RiComputerLine,
  },
];

export const languages: ISkill[] = [
  {
    name: "Node",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "React Native",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Metarial-ui",
    level: "78%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Figma",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Illustrator",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "45%",
    Icon: BsCircleFill,
  },
];
