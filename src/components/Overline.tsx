import UserIcon from "../images/User-Icon.png";
import ArtworkIcon from "../images/Artworks-Icon.png";
import ArtistIcon from "../images/Artists-Icon.png";
import WalletIcon from "../images/Wallet-Icon.png";

export default function Overline() {
  return (
    <div>
      <section id="section3" className="flex justify-center">
        <div className="content-wrapper container my-28 2xl:px-20">
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
      <hr
        id="dividerContainer"
        className="border border-gray-800 my-10 mx-auto"
      />
    </div>
  );
}
