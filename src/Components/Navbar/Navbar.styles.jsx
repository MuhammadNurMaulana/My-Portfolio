export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Tech Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Info", path: "/info" },
];

export const NavMenu = (props) => {
  const { clasess } = props;
  return <span className={`w-6 h-[3px] block ${clasess}`}></span>;
};
