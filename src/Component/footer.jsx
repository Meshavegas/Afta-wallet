import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Input,
} from "@material-tailwind/react";

const Footer = () => {
  const [openD, setOpenD] = useState(false);

  const handleOpenD = () => setOpenD(!openD);
  return (
    <div className=" text-white flex  flex-col justify-center items-center">
      <div className=" text-white">
        <span>AFTA Wallet 2023. All Rights Reserved.</span>
      </div>
      <div className=" flex gap-2 text-xl mt-7">
        <Link to="/privacy">Privacy</Link>
        <a href="#">.</a>
        <Link to="terms">Terms</Link>
        <a href="#">.</a>
        <a href="#">FAQ</a>
        <span className="mr-5 cursor-pointer" onClick={handleOpenD}>
          . Contact us
        </span>
      </div>
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

export default Footer;
