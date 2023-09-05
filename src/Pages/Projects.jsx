import { FaGithub } from "react-icons/fa";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { Link } from "react-router-dom";
export const Projects = () => {
  const Projects = [
    {
      label: "My Portofolio",
      src: "../public/images/project.png",
      link: "https://github.com/MuhammadNurMaulana/My-Portfolio",
      description: "Personal website portfolio built in React Js, Tailwind CSS",
      tech: ["../public/images/icons8-react-150.png", "../public/images/icons8-tailwind-css-150.png"],
    },
  ];

  return (
    <div className=" w-full pt-32 pb-52 bg-slate-50 dark:bg-slate-800 dark:text-white px-8 md:px-20 xl:pl-48 xl:pr-44 lg:pl-32 lg:pr-28 transition-all duration-500">
      <div className="flex gap-5 items-center">
        <HiOutlineColorSwatch className="text-3xl" />
        <h1 className="text-xl lg:text-2xl font-bold">Projects</h1>
      </div>

      <div className="mt-20 grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Projects.map((project) => (
          <div key={project.label} className=" border-4 border-slate-800/10 bg-slate-200 dark:bg-slate-900/80 rounded-md">
            <img src={project.src} alt={project.label} />
            <div className="flex justify-between items-center p-3">
              <h1 className="text-2xl font-bold">{project.label}</h1>
              <Link to={project.link} target="_blank">
                <FaGithub />
              </Link>
            </div>
            <h1 className="text-xl font-semibold p-3">{project.description}</h1>
            <div className="flex items-center">
              <p className="tet-lg font-semibold p-3">Tech use :</p>
              {project.tech.map((techImage, index) => (
                <img key={index} src={techImage} alt={`Tech ${index + 1}`} className="w-7 h-7 mr-4" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
