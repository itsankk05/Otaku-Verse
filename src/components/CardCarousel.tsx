import React from "react";

import Item1 from "../images/Item1.png";
import Item2 from "../images/Item2.png";
import Item3 from "../images/Item3.png";
import Item4 from "../images/Item4.png";
import Item5 from "../images/Item5.png";

export default function CardCarousel() {
  const scrl = React.useRef(null);
  const slide = (shift: number) => {
    scrl.current.scrollLeft += shift;
  };
  return (
    <div>
      <section id="card-carousel" className="relative">
        <h2 className="text-white text-center font-Sora text-3xl my-16">
          Latest live auctions
        </h2>
        <button
          id="button-carousel"
          onClick={() => slide(+500)}
          className="py-5 px-6 z-20 text-white rounded-full absolute backdrop-blur-sm right-12 md:right-40 top-1/2"
        >
          <i className="bx bx-chevron-right leading-2 text-4xl font-thin"></i>
        </button>
        <div
          style={{ width: "200%" }}
          ref={scrl}
          className="carousel-wrapper relative right-40 md:right-52 flex flex-row snap-x overflow-auto scroll-smooth gap-6"
        >
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item1} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item2} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item3} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item4} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item5} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item1} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item2} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item3} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item4} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>

            <div className="flex items-center"></div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item1} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item2} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item3} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>

            <div className="flex items-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
