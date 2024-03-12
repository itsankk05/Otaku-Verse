import React from "react";

import Item1 from "../images/Item1.png";
import Item2 from "../images/Item2.png";
import Item3 from "../images/Item3.png";
import Item4 from "../images/Item4.png";
import Item5 from "../images/Item5.png";

import Avatar1 from "../images/01.png";
import Avatar2 from "../images/02.png";
import Avatar3 from "../images/03.png";
import Avatar4 from "../images/04.png";

export default function CardCarousel() {
  const scrl = React.useRef(null);
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };
  return (
    <div>
      <section id="card-carousel" className="relative">
        <h2 className="text-white text-center font-Sora text-3xl my-16">
          Grab'EM all!
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
  <img src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/00c2a0f2eacf573f1919e43c4bb728f7.jpg" alt="Card Thumbnail" />

            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/1e7f87b0d351f0f1e80ace863ae1b09c.jpg" alt="Card Thumbnail" />
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
             
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/241e10fc0a3e52029551db5fa83d417a.jpg" alt="Card Thumbnail" />
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/00c2a0f2eacf573f1919e43c4bb728f7.jpg" alt="Card Thumbnail" />
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"    
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
               
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/56000167aebe4859d4c225929efdfc2f.jpg" alt="Card Thumbnail" />
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
             
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
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
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
