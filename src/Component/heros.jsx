import React, { useEffect, useState } from "react";
import whatsapp from "../assets/whatsapp-button.png";
import Deposit from "../assets/momo-deposit.mp4";
import scan from "../assets/scan.png";
import playStore from "../assets/google-play-badge.svg";
import appStore from "../assets/app-store-badge.svg";
import { TypeAnimation } from "react-type-animation";

const Heros = () => {
  const [deferredPrompt, setDeferredPrompt] = useState();
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt !== null) {
      // Show the install prompt
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    }
  };

  return (
    <div className="flex justify-center gap-3 items-center flex-col md:flex-row">
      <div className=" md:w-1/2 flex flex-col gap-6">
        <h1 className=" font-extrabold text-3xl">
          <TypeAnimation
            sequence={[
              "Deposit any currency and amount",
              1000,
              "One wallet for all your local currency ",
              1000,
              "Secure and fast exchange wallet",
              1000,
              "Cashout anywhere easyly",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className=" text-light md:text-left  text-center text-xl flex flex-col justify-center md:items-start items-center ">
          Travel across Africa without having to worry about exchanging from one
          local currency to another. You get to keep more of the value of your
          money in any given local currency.
          <div
            className=" text-2xl w-full  cursor-pointer justify-center flex flex-col items-center"
            onClick={handleInstall}
          >
            <div className="bg-orange-dark text-white w-fit mt-4 px-8 py-3 rounded-3xl ">
              Download
            </div>
          </div>
        </p>
        <div>
          <h1 className=" font-bold text-xl md:text-2xl text-center">
            Just scan or tap on whatsapp
          </h1>
          <div className=" flex md:flex-row flex-col justify-center gap-5 items-center">
            <a href="https://wa.link/4y31k2" className="w-1/3">
              <img src={whatsapp} alt="" className="w-full" />
            </a>
            <img src={scan} alt="" className=" md:w-1/5" />
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 ">
        <video src={Deposit} muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Heros;
