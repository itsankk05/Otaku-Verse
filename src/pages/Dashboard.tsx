import { useState } from "react";
import OTVTOKENABI from "../abis/NFTContract.js";
import constants from "../helper/constants.js";
import { useAccount, useWriteContract } from "wagmi";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Define an array of objects containing image URLs and other relevant data
  const imageItems = [
    {
      id: 1,
      title: "Anime 1",
      coverUrl:
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
      imageUrls: [
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp",
      ],
      description:
        "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together",
    },
    {
      id: 2,
      title: "Anime 2",
      coverUrl:
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp",
      imageUrl: [
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp",
      ],
      description:
        "Haki is a special power system in the anime series One Piece, granting users various abilities such as enhanced physical strength, precognition, and the ability to control others.",
    },
    {
      id: 3,
      title: "Anime 3",
      coverUrl:
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/images.jpg",
      imageUrl: [
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/images.jpg",
      ],
      description:
        "Azuki Anime is a community-driven platform providing curated recommendations and discussions for anime enthusiasts.",
    },
    {
      id: 4,
      title: "Anime 4",
      coverUrl:
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/matt.webp",
      imageUrl: [
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/matt.webp",
      ],
      description:
        "Azuki Anime is a community-driven platform providing curated recommendations and discussions for anime enthusiasts.",
    },
    {
      id: 5,
      title: "Anime 5",
      coverUrl:
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E4S1_4.webp",
      imageUrl: [
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E4S1_4.webp",
      ],
      description:
        "Azuki Anime is a community-driven platform providing curated recommendations and discussions for anime enthusiasts.",
    },
    {
      id: 6,
      title: "Anime 6",
      coverUrl:
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/bcb5c83e36ffbfee2f769c32e51894fb.jpg",
      imageUrl: [
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/bcb5c83e36ffbfee2f769c32e51894fb.jpg",
      ],
      description:
        "Mob Psycho 100 is an anime series that follows the journey of a powerful psychic middle schooler named Mob as he navigates through life while learning to control his extraordinary abilities and facing various supernatural challenges.",
    },

    // Add more objects for other images
  ];
  const contractAddress = constants.CONRACTADDR;
  const contractABI = OTVTOKENABI;
  const { address } = useAccount();

  /*
   * Create a method that gets all waves from your contract
   */
  const { writeContract } = useWriteContract();

  return (
    <div>
      <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16 ">
        {/* <div className="flex justify-center items-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm m-10 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              writeContract({
                address: contractAddress as `0x${string}`,
                abi: contractABI,
                functionName: "mintNFT",
                args: [address!, "1234"],
              });
            }}
          >
            Mint
          </button>
        </div> */}

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6 my-10">
              Dashboard
            </h2>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            {imageItems.map((item, index) => (
              <Link key={index} to={`/available-nft/${item.id}`}>
                <div
                  className="relative overflow-hidden bg-white shadow-md rounded-xl p-9 transition duration-300 ease-in-out hover:bg-white-300 hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.coverUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    width: "300px",
                  }}
                >
                  <div className="p-9 bg-opacity-75"></div>
                  <p className="opacity-0 hover:opacity-100 duration-300 absolute inset-0  flex justify-center items-center">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
