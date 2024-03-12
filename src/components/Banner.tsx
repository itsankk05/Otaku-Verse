import Frame1 from "../images/Frame.svg";
import Frame2 from "../images/Frame2.svg";

export default function Banner() {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="container pt-24 mt-20 ">
        <div className="hero-section-group text-white p-5">
          <div className="text-slate-400 text-xs font-thin text-center mb-5 font-Inter tracking-widest uppercase">
            watch earn share
          </div>
          <h1 className="text-3xl sm:text-6xl lg:text-8xl grid justify-center font-bold leading-none tracking-wide">
            <span className="flex items-center">
              Entertain
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
              Watch, Enjoy!
            </span>
          </h1>
          <div className="pt-8 text-md md:text-lg text-center text-slate-500">
            Embrace the Future of Digital Collectibles.
          </div>
        </div>
        <div className="sponsored-section flex justify-center items-center mt-20">
          <div className="w-48">
            <img
              className="w-full"
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/resources/Shardeum_WhiteTXT.png"
              alt="Sponsored"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
