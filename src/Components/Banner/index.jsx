import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope, FaDiscord, FaYoutube, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BannerStyle } from "./Banner.styles";

export const Banner = () => {
  const Contact = [
    {
      label: "Github",
      link: "https://github.com/MuhammadNurMaulana",
      icon: <FaGithub className="text-xl lg:text-2xl" />,
    },
    {
      label: "Telegram",
      link: "https://t.me/uqs64maul",
      icon: <FaTelegram className="text-xl lg:text-2xl" />,
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/ctizz4",
      icon: <FaInstagram className="text-xl lg:text-2xl" />,
    },
    {
      label: "LinkedIn",
      link: "",
      icon: <FaLinkedinIn className="text-xl lg:text-2xl" />,
    },
    {
      label: "Email",
      link: "mailto:muhammadnrmaulana@gmail.com",
      icon: <FaEnvelope className="text-xl lg:text-2xl" />,
    },
    {
      label: "Discord",
      link: "https://discord.gg/pST7m8WC",
      icon: <FaDiscord className="text-xl lg:text-2xl" />,
    },
  ];
  return (
    <BannerStyle>
      <BannerStyle.Header>
        <div className="absolute bottom-5 flex gap-4">
          {Contact.map((contact) => (
            <Link to={contact.link} key={contact.label} className="group relative" target="_black">
              <div className="absolute -top-8 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-700">{contact.label}</div>
              {contact.icon}
            </Link>
          ))}
        </div>
      </BannerStyle.Header>
      <BannerStyle.Footer />
    </BannerStyle>
  );
};
