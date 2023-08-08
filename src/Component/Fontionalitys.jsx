import React from "react";
import videoCashout from "../assets/agent-cashout.mp4";
import Book from "../assets/book.svg";
import funnel from "../assets/funnel.svg";
import network from "../assets/network.svg";
import plus from "../assets/plus.svg";
import { BsFunnel } from "react-icons/bs";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
// import Xsvg from "../assets/x.svg";
// const PhoneFrame = ({ children }) => {
//   const imageUrl =
//     "https://firebasestorage.googleapis.com/v0/b/maniv-a665b.appspot.com/o/portrait_black.png?alt=media&token=36ff1f0b-e7e2-4305-852d-c5f40742a579";
//   return (
//     <div className="relative w-40 h-80 border">
//       <div
//         className=" absolute inset-0 w-full h-full"
//         style={{
//           maskImage: `url(${imageUrl})`,
//           maskSize: "100% 100%",
//           WebkitMaskImage: `url(${imageUrl})`,
//         }}
//       >
//         <div className="w-full h-full bg-white rounded-lg p-4">{children}</div>
//       </div>
//     </div>
//   );
// };
const GradientIcon = ({ icon: Icon }) => {
  return (
    <div className="gradientIcon">
      <Icon className="icon" />
    </div>
  );
};

const Fontionalitys = () => {
  return (
    <div
      className="  flex items-center justify-center flex-col-reverse md:flex-row"
      id="product"
    >
      <div className=" w-full md:w-1/3 flex flex-wrap flex-col  justify-center items-center mt-10 md:mt-0">
        <div className="flex justify-center items-center h-screen">
          <div className="phone-frame">
            <video
              src={videoCashout}
              muted
              autoPlay
              loop
              className="  phone-image"
            />
          </div>
        </div>
        {/* <div
          className={`bg-[url('https://firebasestorage.googleapis.com/v0/b/maniv-a665b.appspot.com/o/portrait_black.png?alt=media&token=36ff1f0b-e7e2-4305-852d-c5f40742a579')] bg-no-repeat px-2 border w-full h-96 bg-contain`}
        >
          <video
            src={videoCashout}
            muted
            autoPlay
            loop
            className=" w-fit"
          ></video>
        </div> */}
      </div>
      <div className="md:w-2/3 flex flex-wrap gap-10 justify-center items-center ">
        <div className="w-full sm:w-5/12 flex flex-col items-center justify-center text-xl">
          <img src={funnel} alt="" className=" w-24 h-24" />
          <h1 className=" text-2xl font-extrabold mt-3 text-center">
            Fund your wallet
          </h1>
          <div className=" text-light text-justify mt-3">
            Deposit money into your wallet directly using any of the available
            mobile money for free or through a local Agent. We do our best to
            cover most networks available.
          </div>
        </div>
        <div className=" w-full sm:w-5/12 flex flex-col items-center justify-center text-xl">
          <img src={Book} alt="" className=" w-24 h-24" />
          <h1 className=" text-2xl font-extrabold mt-3">Cashout your funds</h1>
          <div className=" text-light text-justify mt-3">
            From any mobile money operator, cashout funds from your wallet in
            the currency you have funded. Your Cashout will cost you only 4%
            with no hidden charges. Cashout limits may apply.
          </div>
        </div>
        <div className=" w-full sm:w-5/12 flex flex-col items-center justify-center text-xl">
          <img src={network} alt="" className=" w-24 h-24" />
          <h1 className=" text-2xl font-extrabold mt-3">Track transactions</h1>
          <div className=" text-light text-justify mt-3">
            Track all transactions in one place with a detailed history of every
            operation you perform on the wallet. We make sure your funds don't
            escape.
          </div>
        </div>
        <div className=" w-full sm:w-5/12 flex flex-col items-center justify-center text-xl">
          <img src={plus} alt="" className=" w-24 h-24" />
          <h1 className=" text-2xl font-extrabold mt-3">Wallet more money</h1>
          <div className=" text-light text-justify mt-3">
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
