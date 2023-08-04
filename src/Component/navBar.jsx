import React, { useState } from "react";
import {
  BsCart3,
  BsSuitHeart,
  BsSearch,
  BsFillChatTextFill,
} from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo-small.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import ScrollToHashElement from "./scrollTo";

const navLinks = [
  { name: "Product", to: "#product" },
  { name: "Download", to: "#download" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [classNameAnim, setclassNameAnim] = useState("hidden-botom");
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
    setclassNameAnim("show");
  };

  return (
    <div className="sticky top-0 w-full bg-white shadow-lg h-[80px] z-40 md:px-16 px-5">
      <ScrollToHashElement />
      <div className="flex justify-between items-center h-full px-4">
        <h1 className="flex items-center text-lg font-bold  text-white">
          <Link href="/">
            <img src={logo} alt="logo" className="w-12" />
          </Link>
          <span className=" text-white-gray text-2xl font-bold ml-4 hover:text-orange">
            AFTA Wallet
          </span>
        </h1>

        <div className="hidden md:flex items-center gap-16">
          <nav className="hidden md:flex items-center gap-11 text-white-gray text-bold text-2xl hover:text-white-gray-light">
            {navLinks.map(({ name, to }) => (
              <NavLink
                key={name + to}
                to={to}
                className={({ isActive }) => {
                  return isActive
                    ? "text-black"
                    : "text-white-gray hover:text-white-gray-light";
                }}
              >
                {name}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center   text-white text-xl bg-orange p-3 rounded-full hover:bg-orange-dark focus:outline-none justify-center align-middle">
            <a
              href="https://wa.link/4y31k2"
              className="flex items-center"
              target="_blank"
            >
              <BsFillChatTextFill className="mx-4" />
              <span className="mr-5">Contact us</span>
            </a>
          </div>
        </div>

        <div className=" pr-2 md:hidden">
          <div
            className=" border flex justify-center items-center px-2 py-1 border-white-gray-light rounded-md focus:border-2 cursor-pointer"
            onClick={handleIsOpen}
          >
            <span className=" text-lg text-white-gray">Menu </span>
            {isOpen ? (
              <MdOutlineClose className=" text-orange-dark font-bold text-lg w-7" />
            ) : (
              <FiMenu className="text-orange-dark font-bold text-lg w-7" />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`${classNameAnim} bg-white p-4 px-20 z-40 left-0 absolute w-full md:hidden`}
        >
          <ul className=" flex flex-col items-start gap-4">
            {navLinks.map(({ name, to }) => (
              <NavLink
                key={name + to}
                to={to}
                className={({ isActive }) => {
                  return isActive ? "text-white-gray" : "text-white-gray";
                }}
              >
                {name}
              </NavLink>
            ))}
          </ul>
          <div className="mt-4 md:hidden flex items-center justify-between gap-6">
            <div className="flex items-center   text-white text-xl bg-orange p-3 rounded-full hover:bg-orange-dark focus:outline-none justify-center align-middle">
              <a
                href="https://wa.link/4y31k2"
                className="flex items-center"
                target="_blank"
              >
                <BsFillChatTextFill className="mx-4" />
                <span className="mr-5">Contact us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
