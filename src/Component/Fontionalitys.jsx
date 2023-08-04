import React from "react";
import Ball from "../assets/ball.svg";
import Xsvg from "../assets/x.svg";

const Fontionalitys = () => {
  return (
    <div
      className="  flex items-center justify-center flex-col-reverse md:flex-row"
      id="product"
    >
      <div className=" w-2/3 md:w-1/3 flex flex-wrap flex-col  justify-center items-center mt-10 md:mt-0 ">
        {/* <img
          src={Ball}
          alt="ball"
          className=" absolute w-2/12 -z-20  left-28"
        />
        <img
          src={Ball}
          alt="ball"
          className=" left-3/3  -bottom-2/4 absolute w-10 -z-20"
        />
        <img
          src={Xsvg}
          alt="ball"
          className=" left-1/3 bottom-20 absolute w-10 -z-20"
        /> */}
        <img
          src="https://media.walletfactory.com/wp-content/uploads/2022/04/28200750/crypto-phone-623x1024.png.webp"
          alt=""
          className=" w-2/3"
        />
      </div>
      <div className="md:w-2/3 flex flex-wrap gap-10 justify-center items-center ">
        <div className=" w-5/12 flex flex-col items-center justify-center text-xl">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/27/18/new-pound.jpg"
            alt=""
            className=" w-28"
          />
          <h1 className=" text-2xl font-extrabold mt-3 text-center">
            Wallet more money
          </h1>
          <div className=" text-white-gray-light text-justify mt-3">
            Once you make a deposit in a new local currency, we automatically
            create a new wallet for you. You don't have to worry about the
            details. Just use your wallet as if it were one and the same.
          </div>
        </div>
        <div className=" w-5/12 flex flex-col items-center justify-center text-xl">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/27/18/new-pound.jpg"
            alt=""
            className=" w-28"
          />
          <h1 className=" text-2xl font-extrabold mt-3">Wallet more money</h1>
          <div className=" text-white-gray-light text-justify mt-3">
            Once you make a deposit in a new local currency, we automatically
            create a new wallet for you. You don't have to worry about the
            details. Just use your wallet as if it were one and the same.
          </div>
        </div>
        <div className=" w-5/12 flex flex-col items-center justify-center text-xl">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/27/18/new-pound.jpg"
            alt=""
            className=" w-28"
          />
          <h1 className=" text-2xl font-extrabold mt-3">Wallet more money</h1>
          <div className=" text-white-gray-light text-justify mt-3">
            Once you make a deposit in a new local currency, we automatically
            create a new wallet for you. You don't have to worry about the
            details. Just use your wallet as if it were one and the same.
          </div>
        </div>
        <div className=" w-5/12 flex flex-col items-center justify-center text-xl">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/27/18/new-pound.jpg"
            alt=""
            className=" w-28"
          />
          <h1 className=" text-2xl font-extrabold mt-3">Wallet more money</h1>
          <div className=" text-white-gray-light text-justify mt-3">
            Once you make a deposit in a new local currency, we automatically
            create a new wallet for you. You don't have to worry about the
            details. Just use your wallet as if it were one and the same.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fontionalitys;
