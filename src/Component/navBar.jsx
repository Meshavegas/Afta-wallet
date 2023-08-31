import React, { useState } from "react";
import {
  BsCart3,
  BsSuitHeart,
  BsFillPersonPlusFill,
  BsFillChatTextFill,
} from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo-small.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import ScrollToHashElement from "./scrollTo";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Input,
} from "@material-tailwind/react";

const navLinks = [
  { name: "Product", to: "/#product" },
  { name: "Download", to: "/#download" },
  // {
  //   name: "API",
  //   to: "",
  // },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [classNameAnim, setclassNameAnim] = useState("hidden-botom");
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
    setclassNameAnim("show");
  };
  const [openD, setOpenD] = useState(false);

  const handleOpenD = () => setOpenD(!openD);

  return (
    <div className="sticky top-0 w-full bg-white shadow-lg h-[80px] z-40 md:px-16 px-5">
      <ScrollToHashElement />
      <div className="flex justify-between items-center h-full px-4">
        <h1 className="flex items-center text-lg font-bold  text-white">
          <Link href="/">
            <img src={logo} alt="logo" className="w-12" />
          </Link>
          <Link href="/">
            <span className=" text-white-gray text-2xl font-bold ml-4 hover:text-orange">
              AFTA Wallet
            </span>
          </Link>
        </h1>

        <div className="hidden md:flex items-center gap-16">
          <nav className="hidden md:flex items-center gap-11 text-white-gray text-bold text-2xl hover:text-white-gray-light">
            {navLinks.map(({ name, to }) => (
              <NavLink
                key={name + to}
                to={to}
                className="text-white-gray hover:text-white-gray-light"
              >
                {name}
              </NavLink>
            ))}
            <a
              target="_blank"
              href="https://us-central1-afta-wallet.cloudfunctions.net/api/v1/docs"
            >
              API
            </a>
          </nav>
          <a
            href="https://afta-wallet-admin.web.app/signup/user"
            className="flex items-center   text-white text-xl bg-orange p-3 rounded-full hover:bg-orange-dark focus:outline-none justify-center align-middle"
          >
            <div className="flex items-center" target="_blank">
              <BsFillPersonPlusFill className="mx-4" />
              <span className="mr-5">SingUp</span>
            </div>
          </a>
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
            <a
              target="_blank"
              href="https://us-central1-afta-wallet.cloudfunctions.net/api/v1/docs"
            >
              API
            </a>
          </ul>
          <div className="mt-4 md:hidden flex items-center justify-between gap-6">
            <div className="flex items-center   text-white text-xl bg-orange p-3 rounded-full hover:bg-orange-dark focus:outline-none justify-center align-middle">
              <a
                href="https://afta-wallet-admin.web.app/signup/user"
                className="flex items-center"
                target="_blank"
              >
                <BsFillPersonPlusFill className="mx-4" />
                <span className="mr-5">SingUp</span>
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center">
        <Dialog
          open={openD}
          handler={handleOpenD}
          className="md:w-[30%] w-[80%] absoltue md:left-[35%] left-[10%] top-[10%] md:top-[25%]"
        >
          <DialogHeader className="flex justify-between px-10  bg-gradient-to-r from-orange to-purple rounded-t-lg">
            <h1 className="">Write us</h1>
            <span
              className=" text-white opacity-60 font-bold hover:cursor-pointer"
              onClick={handleOpenD}
            >
              X
            </span>
          </DialogHeader>
          <DialogBody className=" flex flex-col justify-center items-center gap-4">
            <label
              for="UserName"
              className="w-full relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="UserName"
                placeholder="Full name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-[66%] peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Full name
              </span>
            </label>
            <label
              for="UserEmail"
              className="w-full relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-[66%] peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Email
              </span>
            </label>
            <label
              for="UserPhone"
              className="w-full relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="phone"
                id="UserEmail"
                placeholder="Phone"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-[66%] peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Phone number
              </span>
            </label>
            <label
              for="UserMessage"
              className="w-full h-32 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange focus-within:ring-1 focus-within:ring-blue-600"
            >
              <textarea
                type="phone"
                id="UserMessage"
                placeholder="Message"
                className=" w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
          </DialogBody>
          <DialogFooter className=" flex justify-center">
            <Button
              variant="text"
              color="red"
              onClick={handleOpenD}
              className="mr-1 text-xl bg-orange w-[90%] rounded-3xl text-white"
            >
              <span>Submit</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};
