import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
      </div>
    </div>
  );
};

export default Footer;
