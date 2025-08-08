import React from "react";
import VibeGoLogo from "../assets/VibeGo_Logo.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1737109193379-3ecf2fd3359a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxpbmRpYW4lMjB0cmFmZmljJTIwbGlnaHRzfGVufDB8fDB8fHww)] h-screen pt-8  flex justify-between flex-col w-full">
        <img className="w-40 ml-8 mt-5" src={VibeGoLogo} alt="VibeGo Logo" />
        <div className="bg-white pb-7 py-5 px-5">
          <h2 className="text-[25px] font-bold"> Get Started with VibeGo</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
