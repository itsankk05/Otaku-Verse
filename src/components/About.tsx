import AvatarCard1 from "../images/CardInCardAvatar-1.png";
import AvatarCard2 from "../images/CardInCardAvatar-2.png";
import AvatarCard3 from "../images/CardInCardAvatar-3.png";
import AvatarCard4 from "../images/CardInCardAvatar-4.png";
import AvatarCard5 from "../images/CardInCardAvatar-5.png";

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="content-wrapper container 2xl:px-20">
        <div
          id="card-2-2"
          className="card-body rounded-xl relative border mx-4 border-gray-900 bg-midnight mt-36 mb-16 flex justify-start"
        >
          <div
            id="p-card-wrapper"
            className="w-full h-full relative overflow-hidden p-6 lg:p-20"
          >
            <div className="relative z-10">
              <h3 className="text-white font-Sora font-bold lg:leading-tight text-2xl  md:text-4xl lg:text-5xl mt-3 mb-5">
                About the <br /> Creators! <br /> Connect Now
              </h3>
              <p className="text-slate-500 font-Inter text-sm">
              Join us in fostering community bonds. At [Website Name],  <br />{" "}
              we're dedicated to connecting with our community to share experiences, support one another, and create a vibrant, inclusive space for all.
              </p>
              <div className="flex justify-start items-center gap-4 mt-12">
                <a
                  className="text-white px-5 py-3 rounded-lg font-Sora whitespace-nowrap text-sm bg-gradient-contact ease-in duration-200 hover:bg-gradient-to-r from-indigo-700 to-indigo-800"
                  href="#getstarted"
                >
                  Get started
                </a>
                <a
                  className="text-slate-400 px-5 py-3 border font-Sora whitespace-nowrap text-sm rounded-lg border-slate-700 bg-transparent ease-in duration-100 hover:bg-gray-700 hover:text-white"
                  href="#more"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div>
              <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 top-20 right-64 border border-gray-800 bg-midnight flex justify-start items-start">
                <img src={AvatarCard1} alt="Avatar Profile" />
                <div className="flex flex-col justify-start pl-4 pr-2">
                  <div className="flex justify-between items-center gap-20">
                    <h5 className="text-white text-lg font-Sora">@brook_sim</h5>
                    <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                      4.78 ETH
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-6 mt-2">
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bx-images text-xl leading-4 pr-1"></i>
                      Items 206
                    </div>
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                      Collection 12
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 top-52 right-24 border border-gray-800 bg-midnight flex justify-start items-start">
                <img src={AvatarCard2} alt="Avatar Profile" />
                <div className="flex flex-col justify-start pl-4 pr-2">
                  <div className="flex justify-between items-center gap-20">
                    <h5 className="text-white text-lg font-Sora">
                      @marvinmckin
                    </h5>
                    <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                      7.55 ETH
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-6 mt-2">
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bx-images text-xl leading-4 pr-1"></i>
                      Items 206
                    </div>
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                      Collection 24
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 top-80 mt-4 right-80 border border-gray-800 bg-midnight flex justify-start items-start">
                <img src={AvatarCard3} alt="Avatar Profile" />
                <div className="flex flex-col justify-start pl-4 pr-2">
                  <div className="flex justify-between items-center gap-20">
                    <h5 className="text-white text-lg font-Sora">
                      @esther_howard
                    </h5>
                    <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                      5.31 ETH
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-6 mt-2">
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bx-images text-xl leading-4 pr-1"></i>
                      Items 387
                    </div>
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                      Collection 10
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 bottom-16 -right-32  border border-gray-800 bg-midnight flex justify-start items-start">
                <img src={AvatarCard4} alt="Avatar Profile" />
                <div className="flex flex-col justify-start pl-4 pr-2">
                  <div className="flex justify-between items-center gap-20">
                    <h5 className="text-white text-lg font-Sora">@brook_sim</h5>
                    <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                      4.78 ETH
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-6 mt-2">
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bx-images text-xl leading-4 pr-1"></i>
                      Items 24
                    </div>
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                      Collection 20
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 top-12 -right-48 border border-gray-800 bg-midnight flex justify-start items-start">
                <img src={AvatarCard5} alt="Avatar Profile" />
                <div className="flex flex-col justify-start pl-4 pr-2">
                  <div className="flex justify-between items-center gap-20">
                    <h5 className="text-white text-lg font-Sora">@brook_sim</h5>
                    <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                      4.78 ETH
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-6 mt-2">
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bx-images text-xl leading-4 pr-1"></i>
                      Items 24
                    </div>
                    <div className="text-slate-500 text-sm flex items-center font-Inter">
                      <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                      Collection 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
