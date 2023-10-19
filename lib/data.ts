import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import {SiPytorch} from "react-icons/si"
import {FaPython} from "react-icons/fa"

import {SiScikitlearn} from "react-icons/si"
import {TbChartArcs} from "react-icons/tb"

import {BiLogoPostgresql} from "react-icons/bi"
import {SiJavascript} from "react-icons/si"
import {SiTypescript} from "react-icons/si"

import {TbBrandNextjs} from "react-icons/tb"
import {FaNodeJs} from "react-icons/fa"
import {BsGit} from "react-icons/bs"
//SiTailwindcss

import{SiTailwindcss} from "react-icons/si"
import{SiPrisma} from "react-icons/si"
import{SiMongodb} from "react-icons/si"
import{SiRedux} from "react-icons/si"
import{SiGraphql} from "react-icons/si"
import{SiDjango} from "react-icons/si"
import{SiFramer} from "react-icons/si"
import{SiRaspberrypi} from "react-icons/si"

import{SiEspressif} from "react-icons/si"
import{SiArduino} from "react-icons/si"
import{SiFigma} from "react-icons/si"
import{SiLinux} from "react-icons/si"
import{TbBrandThreejs} from "react-icons/tb"




export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Junior Project Assisstant",
    location: "Msigma Gokulam Ltd",
    description:
      "Researching, Developing and Implimenting new engineering project Ideas for Undergrad Academic students.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 Nov - 2023 Aug",
  },
  {
    title: "React Native Developer",
    location: "Freelance, Startup",
    description:
      "Developing and maintaining the android application using React Native and firebase. Mentored Co developers, facilitating their growth in react development and introducing best practices to maintain codebase integrity.",
    icon: React.createElement(FaReact),
    date: "2022 July- 2022 Sep",
  },
  {
    title: "Data Scientist | Model Developer",
    location: "Freelance, Startup",
    description:
      "Applied fundamental data science principles to implement the project's core objective, classifying accident occurrences. Ensured that code was not only functional but also highly readable and well-documented. Notebooks included titles, explanations, and comments for clear understanding.",
    icon: React.createElement(SiPytorch),
    date: "March 2022 - April 2022",
  },
  {
    title: "Data Analyst",
    location: "Freelance, Client",
    description:
      "Applied statistical methods to uncover patterns and relationships with the given data, including hypothesis testing, regression analysis, and descriptive statistics.",
    icon: React.createElement(SiScikitlearn),
    date: "Aug 2021 - Jan 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Food Delivery Website",
    description:
      "Users can explore and order delicious foods from restaurants based on location. They can also explore new and exciting cuisines.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Accident Detection",
    description:
      "The website analyze input photos/video for accidents by passing them through a YOLO model and focus on enhancing safety of drivers.",
    tags: ["Pytorch", "Python", "Flask", "Deep Learning"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Customer Segmentation",
    description:
      "In the customer segmentation project, clustering algorithms were applied and delivered actionable insights for tailored marketing and enhanced customer experiences.",
    tags: ["Scikit Learn", "Machine Learning", "Python"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [

  "Pytorch",
  "Python",
  "Scikit Learn",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",

] as const;


export const skillsData2 = [
  {
    title: "Python",
    icon: React.createElement(FaPython),
  },

  {
    title: "Pytorch",
    icon: React.createElement(SiPytorch),
  },

  {
    title: "Scikit Learn",
    icon: React.createElement(SiScikitlearn),
  },

  {
    title: "Matplotlib",
    icon: React.createElement(TbChartArcs),
  },

  {
    title: "Postgresql",
    icon: React.createElement(BiLogoPostgresql),
  },

  {
    title: "Javascript",
    icon: React.createElement(SiJavascript),
  },

  {
    title: "Typescript",
    icon: React.createElement(SiTypescript),
  },

  {
    title: "React",
    icon: React.createElement(FaReact),
  },

  {
    title: "Nextjs",
    icon: React.createElement(TbBrandNextjs),
  },

  {
    title: "Threejs",
    icon: React.createElement(TbBrandThreejs)
  },

  {
    title: "NodeJs",
    icon: React.createElement(FaNodeJs),
  },

  {
    title: "Git",
    icon: React.createElement(BsGit),
  },

  {
    title: "Tailwindcss",
    icon: React.createElement(SiTailwindcss),
  },

  {
    title: "Prisma",
    icon: React.createElement(SiPrisma),
  },

  {
    title: "Mongodb",
    icon: React.createElement(SiMongodb),
  },

  {
    title: "Redux",
    icon: React.createElement(SiRedux),
  },

  {
    title: "Graphql",
    icon: React.createElement(SiGraphql),
  },

  {
    title: "Django",
    icon: React.createElement(SiDjango),
  },

  {
    title: "Framer Motion",
    icon: React.createElement(SiFramer)
  },

  {
    title: "Raspberrypi",
    icon: React.createElement(SiRaspberrypi)
  },

  {
    title: "Espressif",
    icon: React.createElement(SiEspressif)
  },

  {
    title: "Arduino",
    icon: React.createElement(SiArduino)
  },

  {
    title: "Figma",
    icon: React.createElement(SiFigma)
  },

  {
    title: "Linux",
    icon: React.createElement(SiLinux)
  },

] as const;