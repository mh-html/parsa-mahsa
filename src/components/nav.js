import React, { useState } from "react";
import { Link } from "react-router-dom";

//fontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookieBite,
  faHome,
  faContactBook,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [navBar, setNavBar] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-700 to-pink-600 p-3 md:py-4 md:px-6 text-white">
      <div className="container mx-auto flex items-center justify-between flex-row-reverse">
        <div>
          <h1 className="font-bold text-2xl cursor-pointer">PARSA MAHSA</h1>
        </div>

        <div className="md:hidden" onClick={() => setNavBar(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div
        className="fixed top-0 right-0 w-2/3 h-screen md:w-auto md:h-auto bg-purple-700 md:bg-transparent z-10 md:static transition-all duration-300"
        style={{ right: navBar ? "0" : "-100%" }}
      >
        <div className=" md:hidden p-10" onClick={() => setNavBar(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="flex items-start pr-8 md:pr-0 md:items-center flex-col  md:flex-row md:justify-start ">
          <li onClick={() => setNavBar(false)} className="py-6 md:py-0 md:px-4 text-lg hover:animate-pulse hover:font-bold">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> خانه
            </Link>
          </li>
          <li onClick={() => setNavBar(false)} className="py-6 md:py-0 md:px-4 text-lg hover:animate-pulse hover:font-bold">
            <Link to="/cookes">
              <FontAwesomeIcon icon={faCookieBite} /> لیست آشپزی
            </Link>
          </li>
          <li onClick={() => setNavBar(false)} className="py-6 md:py-0 md:px-4 text-lg hover:animate-pulse hover:font-bold">
            <Link to="/aboutus">
              <FontAwesomeIcon icon={faContactBook} /> ارتباط باما
            </Link>
          </li>
          <li onClick={() => setNavBar(false)} className="py-6 md:py-0 md:px-4 text-lg hover:animate-pulse hover:font-bold">
            <Link to="/likes">
              <FontAwesomeIcon icon={faHeart} /> علاقه مندی
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
