import { ConnectButton } from "@rainbow-me/rainbowkit";
import RightColorPalette from "../images/Right-ColorPalette.png";

import SilverHand from "../images/Silver-Hand.png";

export default function Description() {
  return (
    <div>
      <section
        id="section2"
        className="flex justify-center border border-b-gray-800 border-transparent"
      >
        <div className="content-wrapper container my-28 2xl:px-20 ">
          <div className="flex flex-col lg:flex-row">
            <div className="basis-1/2 text-center lg:text-start text-white p-5 my-auto">
              <span className="text-slate-500 font-Inter tracking-widest text-sm uppercase font-semibold">
                Overline
              </span>
              <h2 className="font-Sora text-3xl lg:text-4xl  xl:text-6xl mt-3 mb-5">
                Unlock the Anime Frontier: <br className="lg:hidden block" />{" "}
                NFT Trading and Collecting
              </h2>
              <p className="text-slate-500 font-Inter">
                Unlock the Anime Frontier: Your Ultimate Hub for NFT Trading and
                Collecting Embark on a New Era: Transforming the Anime NFT
                Landscape. Explore, Trade, and Collect with Ease!
              </p>
            </div>
            <div className="basis-1/2 flex justify-end">
              <div className="w-128">
                <img
                  className="w-full h-full object-cover"
                  src={
                    "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/1anime.png"
                  }
                  alt="Color Palettes"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div id="card-wrapper" className="mt-36 2xl:px-24 block">
            <div className="flex flex-col gap-16 px-3 lg:px-0 mx-auto justify-center w-full lg:flex-row lg:gap-4 lg:h-100 2xl:h-128">
              <div className="card-body border border-gray-900 overflow-hidden h-full relative rounded-xl snap-center p-6 basis-1/3  flex flex-col justify-center">
                <h4 className="text-2xl text-white mt-4 mb-6 font-Sora font-normal tracking-wider">
                  Check out the <br /> most popular NFT's
                </h4>
                <button
                  id="button-carousel"
                  className="py-5 px-6 z-20 text-white rounded-full absolute backdrop-blur-sm right-8 top-72"
                >
                  <i className="bx bx-chevron-right leading-2 text-4xl font-thin"></i>
                </button>
                <div className="img-wrapper overflow-y-hidden relative w-full flex flex-row gap-5">
                  <div data-status="active" className="min-w-56 ">
                    <img
                      className="my-3 rounded-xl w-full h-80 object-cover"
                      src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/c0d10ac746764f4daaa3c10e3260b83a.jpg"
                      alt="Item Slider"
                    />{" "}
                    <p className="text-white text-sm font-Sora">
                      One-Piece
                      <br />
                    </p>
                    <hr className="border-gray-800 my-4" />
                  </div>
                  <div data-status="inactive" className="min-w-56">
                    <img
                      className="my-3 rounded-xl w-full h-80 object-cover"
                      src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/d3fe5844d81e1fe318620a000cee00f1.jpg"
                      alt="Item Slider"
                    />{" "}
                    <p className="text-white text-sm font-Sora">
                      Black Panther
                      <br />
                    </p>
                    <hr className="border-gray-800 my-4" />
                  </div>
                  <div data-status="inactive" className="min-w-56">
                    <img
                      className="my-3 rounded-xl w-full h-80 object-cover"
                      src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/dbfa56475c5c785d45660626f9e30473.jpg"
                      alt="Item Slider"
                    />{" "}
                    <p className="text-white text-sm font-Sora">
                      Skull
                      <br />
                    </p>
                    <hr className="border-gray-800 my-4" />
                  </div>
                </div>
              </div>
              <div
                id="card-2"
                className="card-body relative rounded-xl border border-gray-900 bg-midnight snap-center p-3 basis-1/3 h-full min-h-full flex flex-col justify-center items-start gap-0"
              >
                <div className="relative sm:left-1/4 lg:left-2.5 -top-24 lg:-top-16 z-10 -mb-24">
                  <img
                    className="w-full h-full"
                    src={SilverHand}
                    alt="Silver Hand"
                  />
                </div>
                <div className="px-6 pt-4 w-full relative z-20 mt-auto">
                  <h4 className="text-xl md:text-2xl text-white font-Sora mb-3">
                    Get started collecting
                    <br className="hidden lg:block" /> your NFTs
                  </h4>
                  <p className="text-slate-500 text-sm font-Inter">
                    Get started creating your NFTs and
                    <br /> bring your digital assets to life with ease.
                  </p>
                </div>
              </div>
              <div className="card-body border border-gray-900 rounded-xl px-8 py-4 basis-1/3 h-full flex flex-col justify-center lg:justify-start">
                <h3 className="mt-6 text-white text-xl md:text-2xl font-Sora text-center lg:text-start">
                  Top NFT at a lower
                  <br className="hidden lg:block" /> price
                </h3>
                <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-7">
                  <img
                    className="aspect-square rounded-2xl"
                    alt="Card item"
                    src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/de8d11750fe67195be01ce424de0e8fb.jpg"
                    width="110"
                    height="110"
                  />

                  <div className="flex justify-between flex-col">
                    <div className="text-wrapper-ellips">
                      <p className="text-white text-sm pb-1 w-full block basis-full">
                        Monk
                      </p>
                      <div className="flex flex-row justify-start lg:justify-between">
                        <div className="text-white text-xs hidden lg:flex items-center  font-Sora">
                          <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                        </div>
                        <span
                          className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-bold text-center flex items-center h-5 py-3 px-3 mb-2 whitespace-nowrap text-xs"
                          style={{ fontSize: "11px" }}
                        >
                          &#32;
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between  pb-2">
                      <div className="text-gray-600 text-xs font-Inter"></div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                  <img
                    className="aspect-square rounded-2xl"
                    alt="Card item"
                    src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/download.jpg"
                    width="110"
                    height="110"
                  />

                  <div className="flex justify-between flex-col">
                    <div className="text-wrapper-ellips">
                      <p className="text-white text-sm pb-1 w-full block basis-full">
                        Pokemon
                      </p>
                      <div className="flex flex-row justify-start lg:justify-between">
                        <div className="text-white text-xs hidden lg:flex items-center  font-Sora">
                          <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                        </div>
                        <span
                          className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-bold text-center flex items-center h-5 py-3 px-3 mb-2 whitespace-nowrap text-xs"
                          style={{ fontSize: "11px" }}
                        >
                          &#32;
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between  pb-2">
                      <div className="text-gray-600 text-xs font-Inter"></div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                  <img
                    className="aspect-square rounded-2xl"
                    alt="Card item"
                    src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/e375b5bc3d3e2df39d59b7fcad7793bd.jpg"
                    width="110"
                    height="110"
                  />

                  <div className="flex justify-between flex-col">
                    <div className="text-wrapper-ellips">
                      <p className="text-white text-sm pb-1 w-full block basis-full">
                        Hat
                      </p>
                      <div className="flex flex-row justify-start lg:justify-between">
                        <div className="text-white text-xs hidden lg:flex items-center  font-Sora">
                          <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                        </div>
                        <span
                          className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-bold text-center flex items-center h-5 py-3 px-3 mb-2 whitespace-nowrap text-xs"
                          style={{ fontSize: "11px" }}
                        >
                          &#32;
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between  pb-2">
                      <div className="text-gray-600 text-xs font-Inter"></div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                  <img
                    className="aspect-square rounded-2xl"
                    alt="Card item"
                    src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/f0acb7bd04be5990641e4bf35053b682.jpg"
                    width="110"
                    height="110"
                  />

                  <div className="flex justify-between flex-col">
                    <div className="text-wrapper-ellips">
                      <p className="text-white text-sm pb-1 w-full block basis-full">
                        Fire
                      </p>
                      <div className="flex flex-row justify-start lg:justify-between">
                        <div className="text-white text-xs hidden lg:flex items-center  font-Sora">
                          <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                        </div>
                        <span
                          className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-bold text-center flex items-center h-5 py-3 px-3 mb-2 whitespace-nowrap text-xs"
                          style={{ fontSize: "11px" }}
                        >
                          &#32;
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between  pb-2">
                      <div className="text-gray-600 text-xs font-Inter"></div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 lg:flex-row mt-36"></div>
        </div>
      </section>
    </div>
  );
}
