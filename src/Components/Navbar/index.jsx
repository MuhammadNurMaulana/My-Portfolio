import { Link, NavLink } from "react-router-dom";
import { NavMenu, navLinks } from "./Navbar.styles";
import { useState, useEffect } from "react";
import { BiAdjust } from "react-icons/bi";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [navShow, setNavShow] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const toggleNav = () => {
    setNavShow(!navShow);
  };

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav className="relative">
      <div
        className={`flex fixed justify-between top-0 w-full left-0 py-2 px-6 lg:py-6 lg:px-28 xl:px-44 transition-all items-center duration-500 outline-none text-lg lg:text-xl font-semibold md:px-16  z-50 ${
          isScroll ? "bg-white text-slate-800 dark:bg-slate-950 dark:text-white" : "bg-transparent text-slate-800 dark:text-white"
        }`}
      >
        <div className="gap-3 items-center hidden lg:flex">
          <div className="p-4 cursor-pointer navbar-theme" onClick={toggleTheme}>
            <BiAdjust className="w-[25px] h-[25px]" />
          </div>

          <Link className="font-mono">Muhammad Nur Maulana</Link>
          <img src="../public/images/verified.png" alt="verified" />
        </div>

        <div className=" gap-4 hidden lg:flex nav-link">
          {navLinks.map((link) => (
            <NavLink to={link.path} key={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "transition-all duration-300")}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className=" max-w-max p-4 cursor-pointer flex flex-col gap-1 lg:hidden" onClick={toggleNav}>
          <NavMenu clasess={isScroll ? "bg-black dark:bg-white" : "bg-slate-900 dark:bg-white"} />
          <NavMenu clasess={isScroll ? "bg-black dark:bg-white" : "bg-slate-900 dark:bg-white"} />
          <NavMenu clasess={isScroll ? "bg-black dark:bg-white" : "bg-slate-900 dark:bg-white"} />
        </div>

        <div className="p-4 cursor-pointer navbar-theme lg:hidden" onClick={toggleTheme}>
          <BiAdjust className="w-[20px] h-[20px]" />
        </div>

        {navShow && (
          <div
            className={`gap-4 absolute top-full w-full left-0 justify-center items-center flex flex-col py-4 lg:hidden  ${isScroll ? "bg-white text-slate-800 dark:bg-slate-950" : "bg-slate-50 text-slate-800 dark:bg-slate-800 nav-link"} `}
          >
            <div className="flex gap-2">
              <Link className="font-mono dark:text-white text-lg md:text-xl">Muhammad Nur Maulana</Link>
              <img src="../public/images/verified.png" alt="verified" />
            </div>
            {navLinks.map((link) => (
              <NavLink to={link.path} key={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "transition-all duration-300 font-semibold text-sm md:text-lg dark:text-white ")}>
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
