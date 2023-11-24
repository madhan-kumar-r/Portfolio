import navLogo from "./Assets/navLogo.svg";
import reactLogo from "./Assets/react_logo.png";
import "../App.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" py-2">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 animate-rotate"
              src={navLogo}
              alt=""
            />
            <h1 className="text-white text-2xl sm:text-3xl font-semibold ml-2">
              My Portfolio
            </h1>
          </div>
          <ul className="hidden md:flex space-x-4 text-white text-xl">
            <Link className="link" smooth to="home">Home</Link>
            <Link className="link" smooth to="about">About</Link>
            <Link className="link" smooth to="skills">Skills</Link>
            <Link className="link" smooth to="contact">Contact</Link>
          </ul>
          {/* Add a responsive menu icon for mobile */}
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white text-2xl">
              &#9776;
            </button>
            {isOpen && (
              <>
                <ul className="hidden md:flex space-x-4 text-white text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
