import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflixImg from "@/public/netflix.png";
import ecomImg from "@/public/ecom.jpg";
import corpmateImg from "@/public/corpmate.png";
import fabfusionImg from "@/public/fabfusion.png";

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
    name: "HG International, School",
    title: "Higher Secondary Education",
    location: "Aburoad, Rajasthan",
    description: "Commerce",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2019",
  },
  {
    name: "JECRC University",
    title: "Graduated",
    location: "Jaipur, Rajasthan",
    description:
      "I'm a BCA graduate. In addition, I quickly located an internship offering front-end development training.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    name: "E Developers World",
    title: "Frontend Developer ",
    location: "Remote",
    description:
      "For 6 months, I worked as a front-end developer, where I worked as a react developer as well as HTML and CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    name: "Softobiz Technology Pvt. Ltd.",
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
    title: "Movieflix",
    description:
      "I've created a dynamic movie and show discovery app using Next.js and MongoDB, enabling users to access a vast library of entertainment content with seamless navigation and efficient data management.",
    tags: ["Next.js", "MongoDB"],
    imageUrl: netflixImg,
  },
  {
    title: "Ecommerce App Backend",
    description:
      "I've developed a robust e-commerce backend application using Node.js, Express.js, and MySQL, providing a reliable and scalable foundation for online retail operations.",
    tags: ["Node.js", "Express.js", "mysql"],
    imageUrl: ecomImg,
  },
  {
    title: "Corpmate",
    description:
      "I've successfully built a project using Next.js and Strapi, streamlining resource management for the company. This comprehensive solution ensures efficient organization and accessibility of vital assets.",
    tags: ["Next.js", "Strapi"],
    imageUrl: corpmateImg,
  },
  {
    title: "Fab Fusion",
    description:
      "Built with Next.js and React, offering users a visually appealing and seamless shopping experience. With a user-friendly interface, secure authentication, and dynamic product catalog.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    imageUrl: fabfusionImg,
  },
] as const;

export const skillsData = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git & Github",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "RestAPI",
  "Redux",
  "Express.js",
  "Strapi",
] as const;
