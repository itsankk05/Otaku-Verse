import React from "react";

import CatCardImage1 from "../images/CatCardImage-1.png";
import CatCardImage2 from "../images/CatCardImage-2.png";
import CatCardImage3 from "../images/CatCardImage-3.png";
import CatCardImage4 from "../images/CatCardImage-4.png";
import CatCardImage5 from "../images/CatCardImage-5.png";
import CatCardImage6 from "../images/CatCardImage-6.png";

import UserIcon from "../images/User-Icon.png";
import ArtworkIcon from "../images/Artworks-Icon.png";
import ArtistIcon from "../images/Artists-Icon.png";
import WalletIcon from "../images/Wallet-Icon.png";

export default function Overline() {
  return (
    <div>
      <section id="section3" className="flex justify-center">
        <div className="content-wrapper container my-28 2xl:px-20">
          <div className="flex flex-col justify-center">
            <span className="text-slate-500 font-Inter tracking-widest text-xs text-center uppercase font-semibold">
              Overline
            </span>
            <h3 className="text-white text-3xl text-center font-Sora my-5">
              Most popular NFTs
            </h3>
            <div className="flex flex-wrap lg:flex-row justify-center items-center gap-3 my-3">
              <div className="border border-gray-800 rounded-lg font-bold px-2 py-1 text-sm cursor-pointer text-slate-500 transition-all ease-in-out hover:border-gray-600">
                Architecture
              </div>
              <div className="border border-gray-800 rounded-lg font-bold px-2 py-1 text-sm cursor-pointer text-slate-500 transition-all ease-in-out hover:border-gray-600">
                Photography
              </div>
              <div className="border border-gray-800 rounded-lg font-bold px-2 py-1 text-sm cursor-pointer text-slate-500 transition-all ease-in-out hover:border-gray-600">
                Games
              </div>
              <div className="border border-gray-800 rounded-lg font-bold px-2 py-1 text-sm cursor-pointer text-slate-500 transition-all ease-in-out hover:border-gray-600">
                Music
              </div>
            </div>
            <div className="flex flex-wrap lg:flex-row justify-center gap-4 mt-6 px-3 xl:px-0">
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage1}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <hr className="border-gray-800 my-4" />
              </div>
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage2}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <hr className="border-gray-800 my-4" />
              </div>{" "}
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage3}
                  alt="Item Slider"
                />
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>

                <hr className="border-gray-800 my-4" />
              </div>{" "}
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage4}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <hr className="border-gray-800 my-4" />
              </div>{" "}
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage5}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <hr className="border-gray-800 my-4" />
              </div>{" "}
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage6}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <hr className="border-gray-800 my-4" />
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <button className="text-slate-500 font-Sora text-sm py-3 px-4 rounded-xl font-bold cursor-pointer transition-all hover:scale-90 border-2 border-slate-700">
                Show me more
              </button>
            </div>
          </div>
          <hr
            id="dividerContainer"
            className="border border-gray-800 my-28 mx-auto"
          />
          <div className="flex flex-wrap lg:flex-row justify-center items-center gap-20">
            <div className="flex flex-col justify-center items-center">
              <img className="w-8 h-8" src={UserIcon} alt="user icon" />
              <div className="text-white text-4xl md:text-5xl font-Sora text-center my-4">
                300k
              </div>
              <div className="text-slate-500 text-sm font-Inter text-center ">
                Users Active
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-8 h-8" src={ArtworkIcon} alt="user icon" />
              <div className="text-white text-4xl md:text-5xl font-Sora text-center my-4">
                52,5k
              </div>
              <div className="text-slate-500 text-sm font-Inter text-center ">
                Artworks
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-8 h-8" src={ArtistIcon} alt="user icon" />
              <div className="text-white text-4xl md:text-5xl font-Sora text-center my-4">
                17,5k
              </div>
              <div className="text-slate-500 text-sm font-Inter text-center ">
                Artists
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-8 h-8" src={WalletIcon} alt="user icon" />
              <div className="text-white text-4xl md:text-5xl font-Sora text-center my-4">
                35.58
              </div>
              <div className="text-slate-500 text-sm font-Inter text-center ">
                ETH Spent
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
