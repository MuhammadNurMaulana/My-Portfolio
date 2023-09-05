import { FaInfoCircle } from "react-icons/fa";

export const Info = () => {
  return (
    <div className=" w-full pt-32 pb-60 bg-slate-50 dark:bg-slate-800 dark:text-white px-8 md:px-20 xl:pl-48 xl:pr-44 lg:pl-32 lg:pr-28 transition-all duration-500">
      <div className="flex gap-5 items-center">
        <FaInfoCircle className="text-3xl" />
        <h1 className="text-xl lg:text-2xl font-bold">Information</h1>
      </div>
      <div className="mt-4">
        <h1 className="font-semibold text-lg">How can I create this portfolio website?</h1>
        <p className="">Thank you for visiting my website. I created this portfolio website using React and Tailwind to design a visually appealing website.</p>
        <p className="mt-4">
          As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but
          also a humble attitude that values every members input. When I am not immersed in lines of code, you might find me exploring the latest trends in the tech world, tinkering with personal coding projects, or engaging in
          thought-provoking discussions on software architecture and design patterns.
        </p>
        <p className="mt-4">
          This blog is my platform to share insights, experiences, and discoveries from my journey as a frontend developer. Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape
          the digital landscape in remarkable ways.
        </p>
      </div>
    </div>
  );
};
