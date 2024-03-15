export default function Footer() {
  return (
    <div>
      <footer className="container mx-auto p-3 pb-12">
        <div
          id="footer-frame"
          className="rounded-2xl border border-gray-800 flex flex-col lg:flex-row"
        >
          <div className="basis-1/3 py-5 px-3 md:p-10 xl:pr-32 flex flex-col gap-12 lg:gap-52">
            <div className="flex flex-row gap-5">
              <img
                className="w-6 h-6 my-1 ml-2"
                src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/resources/Dragonball-removebg.png"
                alt="logo"
              />
              <h3 className="text-2xl text-white font-Sora font-semibold tracking-wide">
                OtakuVerse
              </h3>
            </div>
            <div className="flex flex-row justify-between items-center text-slate-500 transition-all ease-in-out delay-200 text-sm font-Inter ">
              <div className="hover:text-slate-300 cursor-pointer">Support</div>
              <div className="hover:text-slate-300 whitespace-nowrap cursor-pointer">
                Term of Services
              </div>
              <div className="hover:text-slate-300 cursor-pointer">License</div>
            </div>
          </div>
          <div className="basis-1/3 border p-10 xl:p-12 border-y-gray-800 border-x-transparent lg:border-x-gray-800 lg:border-y-transparent flex flex-col justify-start gap-6">
            <div className="flex flex-col justify-start gap-2 w-max text-white text-md font-Sora ">
              <div className="hover:text-slate-400 cursor-pointer">
                Auctions
              </div>
              <div className="hover:text-slate-400 cursor-pointer">Roadmap</div>
              <div className="hover:text-slate-400 cursor-pointer">
                Discover
              </div>
              <div className="hover:text-slate-400 cursor-pointer">
                Community
              </div>
            </div>

            <div className="flex flex-row justify-start gap-4 mt-auto items-center text-slate-500 transition-all ease-in-out text-2xl">
              <i className="bx bxl-facebook-square cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-linkedin-square cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-github cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-twitter cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-instagram-alt cursor-pointer hover:text-slate-300"></i>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col gap-10 lg:gap-0 py-5 px-3 md:p-10 xl:px-24 xl:py-12 justify-center ">
            <div className="text-slate-500 text-center lg:text-start text-sm font-Inter mb-auto">
              Made with Anime! <p>Made with Awesomeness!!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
