import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./type";

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

export const projects: IProject[] = [
  {
    name: "Ema Jhon",
    description:
      "This is a demo shopping application. Any person can buy any electronic product like a TV, Canea and many other bags, etc",
    image_path: "https://i.ibb.co/Vq23BKZ/ema-jhon.png",
    deployed_url: "https://ema-john-simple-2bc72.web.app/",
    github_url:
      "https://github.com/ariful4966/programmingHero-course-revesion/tree/module_50_5_deploy_to_heroku_and_practice_problem_Ema-John",
    category: ["react"],
    key_techs: ["React", "Node", "React-Router", "Firebase"],
  },
  {
    name: "Red Onion",
    description:
      "Food delivery is one of reasonable work. Hot onion is the demo food order and gets delivered to react application.",
    image_path: "https://i.ibb.co/sWsYW4t/red-onions.png",
    deployed_url: "https://red-onion-restaurant-7f195.web.app/",
    github_url:
      "https://github.com/ariful4966/programmingHero-course-revesion/tree/module_45_5_1_hot-onion_restaurant_app_with_react_state",
    category: ["mongo", "react"],
    key_techs: ["React", "Node", "Metarial UI", "Firebase"],
  },
  {
    name: "Aircnc Travel Agency",
    description:
      "A travel agency is one of the most popular visiting ways to and another place. Aircnc is one of them. If your want to visit any place.",
    image_path: "https://i.ibb.co/58F7kgB/aircnc.png",
    deployed_url: "https://aircnc-0.web.app/",
    github_url: "https://github.com/ariful4966/air-cnc",
    category: ["react", "redux"],
    key_techs: ["Redux", "React-Router", "React", "Firebase"],
  },
  {
    name: "Aircnc Travel Agency",
    description:
      "A travel agency is one of the most popular visiting ways to and another place. Aircnc is one of them. If your want to visit any place.",
    image_path: "https://i.ibb.co/58F7kgB/aircnc.png",
    deployed_url: "https://aircnc-0.web.app/",
    github_url: "https://github.com/ariful4966/air-cnc",
    category: ["react", "redux"],
    key_techs: ["Redux", "React-Router", "React", "Firebase"],
  },
  {
    name: "E School",
    description:
      " The Present-day the world has much many e-school. These e-schools are provided us grate opportunities for time managemen.",
    image_path: "https://i.ibb.co/7gvwvpV/e-school.png",
    deployed_url:
      "https://ariful4966.github.io/programmingHero-course-revesion/",
    github_url:
      "https://github.com/ariful4966/programmingHero-course-revesion/tree/module_10_e-school",
    category: ["react"],
    key_techs: ["HTML", "CSS", "Javascript", "PSD-to-HTML"],
  },

  {
    name: "Creative Agency",
    description:
      "A creative agency is a website that services of their software development, web development, graphic design, content writing, mobile app development and etc.",
    image_path: "https://i.ibb.co/Sd1c1QS/creative-agency.png",
    deployed_url: "https://creative-agency-892ed.web.app/",
    github_url:
      "https://github.com/ariful4966/programmingHero-course-revesion/tree/module_56_reactive-agency",
    category: ["node", "express", "mongo"],
    key_techs: ["React", "Node", "Express", "Mongodb", "Firebase"],
  },
  {
    name: "Beach Resort",
    description:
      "This a sea beach resort. Every country has historic places or sea beach resorts. Every person will be enjoying their leisure time.",
    image_path: "https://i.ibb.co/Kj4BQ3L/beatch-resort.png",
    deployed_url: "https://beatch-resort-project.netlify.app/",
    github_url:
      "https://github.com/ariful4966/programmingHero-course-revesion/tree/module_56_reactive-agency",
    category: ["react"],
    key_techs: ["React", "Contentful", "Netlify"],
  },
];
