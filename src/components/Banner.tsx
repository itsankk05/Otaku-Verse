import React from "react";
import Frame1 from "../images/Frame.svg";
import Frame2 from "../images/Frame2.svg";

import Sponsor1 from "../images/Ritter-Sport.png";
import Sponsor2 from "../images/Nike.png";
import Sponsor3 from "../images/Adidas.png";
import Sponsor4 from "../images/New-Holland.png";

export default function Banner() {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="container pt-24 mt-20 ">
        <div className="hero-section-group text-white p-5">
          <div className="text-slate-400 text-xs font-thin text-center mb-5 font-Inter tracking-widest uppercase">
            non fungible tokens
          </div>
          <h1 className="text-3xl sm:text-6xl lg:text-8xl grid justify-center font-bold leading-none tracking-wide">
            <span className="flex items-center">
              A new NFT
              <img
                className="w-8 h-8 sm:w-10 sm:h-14 mt-3"
                src={Frame1}
                alt="frame1"
              />
            </span>

            <span className="ml-20 flex items-center">
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 mt-4 mr-2"
                src={Frame2}
                alt="frame2"
              />
              Experience
            </span>
          </h1>
          <div className="pt-8 text-md md:text-lg text-center text-slate-500">
            Discover, collect and sell
          </div>
          <div className="flex justify-center pt-10">
            <div
              id="search-wrapper"
              className="bg-white flex items-center py-4 px-4 rounded-lg"
            >
              <input
                type="text"
                placeholder="Items, collections and creators"
                className="md:w-56 text-xs border border-transparent border-r-gray-300"
              />
              <select
                defaultValue="Category"
                className="text-black text-xs w-28 px-3 my-auto font-Sora"
              >
                <option disabled value="Category">
                  Category
                </option>
                <option value="NFT">NFT</option>
              </select>
              <i className="bx bx-search bx-flip-horizontal text-indigo-800 font-bold text-2xl leading-4	md:ml-4 cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="sponsored-section flex justify-center items-center gap-8 sm:gap-20 mt-20">
          <div className="w-16">
            <img className="w-full" src={Sponsor1} alt="Ritter Sport" />
          </div>
          <div className="w-16">
            <img className="w-full" src={Sponsor2} alt="Ritter Sport" />
          </div>
          <div className="w-16">
            <img className="w-full" src={Sponsor3} alt="Ritter Sport" />
          </div>
          <div className="w-16">
            <img className="w-full" src={Sponsor4} alt="Ritter Sport" />
          </div>
        </div>
      </div>
    </div>
  );
}
