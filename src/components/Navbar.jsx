import { useState } from "react";
import { BsPostcardHeartFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClasses = (path) => {
    return `flex items-center w-[90%] justify-center p-2 transition duration-300 rounded-lg ${
      location.pathname === path
        ? "bg-gray-800 text-white dark:bg-white dark:text-black"
        : ""
    }`;
  };

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <>
      <div
        className={`h-[96%] relative dark:bg-[#1F2937] bg-[#F9FAFB] border-2 dark:border-none dark:text-white m-4 rounded-xl p-4 text-black flex flex-col transition-width duration-300 mt-4 pt-10 ${
          isExpanded ? "w-56" : "w-20"
        } hidden md:block`}
      >
        <div className="flex flex-col h-full items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-gray-600 w-12 h-12 flex items-center justify-center">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="avatar"
                className="rounded-full"
              />
            </div>
            {isExpanded && (
              <span className=" text-gray-500 dark:text-gray-200">
                johndoe@example.com
              </span>
            )}
          </div>
          <Link to="/" className={getLinkClasses("/")}>
            <div className="flex items-center px-2">
              <GoHomeFill fontSize={28} />
              {isExpanded && <span className="ml-4">Home</span>}
            </div>
          </Link>
          <Link to="/users" className={getLinkClasses("/users")}>
            <div className="flex items-center px-2">
              <FaUsers fontSize={28} />
              {isExpanded && <span className="ml-4">Users</span>}
            </div>
          </Link>
          <Link to="/posts" className={getLinkClasses("/posts")}>
            <div className="flex items-center px-2">
              <BsPostcardHeartFill fontSize={28} />
              {isExpanded && <span className="ml-4">Posts</span>}
            </div>
          </Link>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <button
            className={`bg-gray-800 text-white dark:bg-white dark:text-black rounded-lg p-2 ${
              isExpanded ? "px-6" : ""
            }`}
            onClick={handleLogOut}
          >
            {isExpanded ? "Log Out" : <CiLogout fontSize={28} />}
          </button>
        </div>
        <button
          onClick={toggleNavbar}
          className="absolute top-1/2 right-4 font-semibold transform translate-x-full -translate-y-1/2 border-2 dark:border-gray-500 text-gray-400 bg-white dark:bg-gray-900  dark:text-white  w-8 h-8 p-2 rounded-full outline-none flex justify-center items-center"
        >
          {isExpanded ? <RxDoubleArrowLeft /> : <RxDoubleArrowRight />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 z-50 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="rounded-full bg-gray-600 w-12 h-12 flex items-center justify-center">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <span className="text-gray-200">johndoe@example.com</span>
          </div>
          <Link to="/" className={getLinkClasses("/")}>
            <div className="flex items-center px-4 py-2">
              <GoHomeFill fontSize={24} />
              <span className="ml-4">Home</span>
            </div>
          </Link>
          <Link to="/users" className={getLinkClasses("/users")}>
            <div className="flex items-center px-4 py-2">
              <FaUsers fontSize={24} />
              <span className="ml-4">Users</span>
            </div>
          </Link>
          <Link to="/posts" className={getLinkClasses("/posts")}>
            <div className="flex items-center px-4 py-2">
              <BsPostcardHeartFill fontSize={24} />
              <span className="ml-4">Posts</span>
            </div>
          </Link>
          <button
            className="mt-auto bg-gray-700 p-2 rounded-lg"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </div>

      <button
        onClick={handleMobileMenuToggle}
        className={`fixed ${
          setIsMobileMenuOpen ? "top-5 left-5" : "left-1/2 -translate-x-1/2"
        } z-50 md:hidden text-gray-600 dark:text-gray-200`}
      >
        {isMobileMenuOpen ? (
          <RxCross2 fontSize={24} color="#fff" />
        ) : (
          <GiHamburgerMenu fontSize={28} />
        )}
      </button>
    </>
  );
};

export default Navbar;
