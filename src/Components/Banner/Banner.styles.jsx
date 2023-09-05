import React from "react";

export const BannerStyle = (props) => {
  const { children } = props;
  return (
    <div className=" w-full py-32 bg-slate-50 dark:bg-slate-800 dark:text-white px-8 md:px-20 xl:pl-48 xl:pr-44 lg:pl-32 lg:pr-28">
      <div className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-950/40 rounded-md dark:hover:bg-slate-950/50 flex flex-col md:flex-row box-border overflow-hidden ">{children}</div>
    </div>
  );
};

const Header = (props) => {
  const { children } = props;
  return (
    <div className="w-full md:w-1/2 p-8 relative pb-24  ">
      <div className="flex gap-4 items-center">
        <p className="text-sm font-semibold">Hi I'm</p>
        <img src="../public/images/hand.png" alt="hands" className="bg-transparent" />
      </div>
      <h2 className="text-center text-xl mt-10 font-mono font-bold lg:text-3xl">Muhammad Nur Maulana</h2>
      <h4 className="text-center text-lg font-semibold font-serif lg:text-xl mt-3">Frontend Developer</h4>
      <p className="text-sm mt-10 font-semibold text-justify">
        I am a Frontend Developer with a passion for creating beautiful and responsive web applications. I have extensive experience in using modern technologies such as Tailwind, Bootstrap, and React.js to deliver high-quality products
        that meet the needs of clients and users. I am always eager to learn new skills and explore new challenges in the field of web development.
      </p>

      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-end bg-slate-300 dark:bg-slate-950/20 relative overflow-hidden ">
      <img src="../public/images/my.png" alt="my" className="w-[300px] md:w-[400px] relative z-20" />
      <span className="w-40 h-40 rounded-full bg-slate-200 dark:bg-slate-950 absolute right-0"></span>
      <span className="w-40 h-40 rounded-full bg-slate-200 dark:bg-slate-950 absolute -top-5 -right-5"></span>
      <span className="w-40 h-40 rounded-full bg-slate-200 dark:bg-slate-950 absolute -top-10 left-15"></span>
      <span className="w-40 h-40 rounded-full bg-slate-200 dark:bg-slate-950 absolute top-36 left-5"></span>
    </div>
  );
};

BannerStyle.Header = Header;
BannerStyle.Footer = Footer;
