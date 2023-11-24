import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div id="contact" className="max-w-7xl mx-auto border-t border-gray-300 py-3 flex justify-around">
      <div className="flex flex-col">
        <p className="text-gray-500 font-bold mb-2">PAGES</p>

        <Link
          to="home"
          className="mb-3 text-white hover:text-blue-500 transition duration-300 cursor-pointer"
          smooth
        >
          Home
        </Link>
        <Link
          to="skills"
          className="mb-3 text-white hover:text-blue-500 transition duration-300 cursor-pointer"
          smooth
        >
          Skills
        </Link>
        <Link
          to="about"
          className="mb-3 text-white hover:text-blue-500 transition duration-300 cursor-pointer"
          smooth
        >
          About
        </Link>
      </div>

      <div className="flex flex-col">
        <p className="text-gray-500 font-bold mb-2">SOCIAL</p>

        <div className="flex items-center cursor-pointer">
          <GitHubIcon className="mr-2 text-white" />
          <p className="text-white my-1">GitHub</p>
        </div>

        <div className="flex items-center cursor-pointer">
          <EmailIcon className="mr-2 text-white" />
          <p className="text-white my-1">Email</p>
        </div>

        <div className="flex items-center cursor-pointer">
          <LinkedInIcon className="mr-2 text-white" />
          <p className="text-white my-1">LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
