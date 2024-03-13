import React from "react";


export default function CardCarousel() {
  const scrl = React.useRef(null);
  const slide = (shift: number) => {
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
            <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Gemini_Generated_Image%20(2).jpeg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                 <br />  
              </p>
              <div style={{ fontSize: "11px" }}></div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Gemini_Generated_Image%20(3).jpeg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
              <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
               
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img
            
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Gemini_Generated_Image%20(4).jpeg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                 <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img
          width="300"
          height="300"
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/images.jpg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
               <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Gemini_Generated_Image%20(6).jpeg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img
          className="h-50 w-50"
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/5478a0cb18478fd31194171b97c02cb6.jpg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
             <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
             
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/4a2f75b3fb5bddd3d8843073d04bc39b.jpg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
               <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Gemini_Generated_Image%20(7).jpeg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
               <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
             
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/1c8361e50fd7452cd942a102cdab3d78.jpg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
               <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
             
              </div>
            </div>

            <div className="flex items-center"></div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/1c8361e50fd7452cd942a102cdab3d78.jpg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                 <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
              
                           </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
            </div>
            <hr className="border-gray-800 my-4" />
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/241e10fc0a3e52029551db5fa83d417a.jpg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
           <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
            
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
          <img
              src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/241e10fc0a3e52029551db5fa83d417a.jpg"
              alt="Card Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                <br /> 
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
              
              </div>
            </div>

            <div className="flex items-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
