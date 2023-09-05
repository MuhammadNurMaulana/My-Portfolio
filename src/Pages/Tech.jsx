import React from "react";
import { FaBookReader } from "react-icons/fa";

export const Tech = () => {
  const Skills = [
    {
      label: "HTML5",
      link: "../public/images/icons8-html-150.png",
    },
    {
      label: "CSS3",
      link: "../public/images/icons8-css-150.png",
    },
    {
      label: "Javascript",
      link: "../public/images/icons8-javascript-150.png",
    },
    {
      label: "Bootstrap",
      link: "../public/images/icons8-bootstrap-150.png",
    },
    {
      label: "Tailwind CSS",
      link: "../public/images/icons8-tailwind-css-150.png",
    },
    {
      label: "Sass",
      link: "../public/images/icons8-sass-avatar-150.png",
    },
    {
      label: "React Js",
      link: "../public/images/icons8-react-150.png",
    },
  ];
  return (
    <div className=" w-full py-32 bg-slate-50 dark:bg-slate-800 dark:text-white px-8 md:px-20 xl:pl-48 xl:pr-44 lg:pl-32 lg:pr-28 transition-all duration-300">
      <div className="flex gap-5 items-center">
        <FaBookReader className="text-3xl" />
        <h1 className="text-xl lg:text-2xl font-bold">Tech Skills</h1>
      </div>
      <p className="text-lg font-semibold mt-2">My list of hard skills in tech</p>

      <div className="grid grid-cols-2 grid-rows-4 md:grid-rows-3 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-4 gap-6 mt-10">
        {Skills.map((skill) => (
          <div key={skill.label} className="ring-2 ring-slate-800/20 grid justify-center py-4 rounded-md bg-slate-100 hover:bg-slate-200 transition-all duration-300 group dark:bg-slate-900/30 dark:hover:bg-slate-900/50">
            <img src={skill.link} alt={skill.label} className="group-hover:scale-110 transition-all duration-300 group" />
            <h1 className="text-center font-bold text-lg text-yellow-600 shadow-lg shadow-slate-700/40 rounded-md mt-2">{skill.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
