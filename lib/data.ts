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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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