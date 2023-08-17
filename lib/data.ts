import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflixImg from "@/public/netflix.png";
import ecomImg from "@/public/ecom.jpg";
import corpmateImg from "@/public/corpmate.png";

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
    title: "Graduated",
    location: "Jaipur, Rajasthan",
    description:
      "I'm a BCA graduate. In addition, I quickly located an internship offering front-end development training.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "For 6 months, I worked as a front-end developer, where I worked as a react developer as well as HTML and CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Mohali, Punjab",
    description:
      "I'm currently a full-stack developer at Softobiz Technology pvt.ltd. My stack consists of React, Nodejs, Expressjs, Javascript, Tailwind, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix",
    description:
      "It is a personal project that I am working on, and it retrieves movies from Netflix using their API.",
    tags: ["Next.js", "MongoDB"],
    imageUrl: netflixImg,
  },
  {
    title: "Ecommerce App Backend",
    description:
      "The present application is a fully operational backend ecommerce system developed using the Node.js framework.",
    tags: ["Node.js", "Express.js", "mysql"],
    imageUrl: ecomImg,
  },
  {
    title: "Corpmate",
    description:
      "This project is Resource - Project Application currently in progress within the organization.",
    tags: ["Next.js", "Strapi"],
    imageUrl: corpmateImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Redux",
  "Express.js",
  "Strapi",
] as const;
