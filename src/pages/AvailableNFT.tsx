import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function AvailableNFT() {
  // Get the anime ID from the URL parameter
  const { id } = useParams();

  // Sample imageItems data
  const imageItems = [
    {
      id: 1,
      coverUrl: "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
      imageUrls: [
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
        "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp"
      ],
      description: "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together",
    },
    {
        id: 2,
        coverUrl: "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
        imageUrls: [
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp"
        ],
        description: "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together",
      },
      {
        id: 3,
        coverUrl: "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
        imageUrls: [
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp"
        ],
        description: "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together",
      },
      {
        id: 4,
        coverUrl: "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
        imageUrls: [
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp"
        ],
        description: "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together",
      },
      {
        id: 5,
        coverUrl: "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
        imageUrls: [
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp"
        ],
        description: "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together",
      },
      {
        id: 6,
        coverUrl: "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
        imageUrls: [
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/Otaku%20E1S1_1.jpg",
          "https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/nft-images/haki-1024x341.jpg.webp"
        ],
        description: "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together",
      },
    // Add more objects for other anime items with their respective IDs, coverUrl, imageUrls, and descriptions
  ];

  // Retrieve imageUrls for the specified anime ID
  const selectedAnime = imageItems.find(anime => anime.id === Number(id));
  const imageUrls = selectedAnime ? selectedAnime.imageUrls : [];

  return (
    <div className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6 my-10">
            Available NFTs for Anime ID: {id}
          </h2>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="relative overflow-hidden bg-white shadow-md rounded-xl p-9">
              <img src={imageUrl} alt={`NFT ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-2">{`NFT ${index + 1}`}</h3>
                {/* You can add more information here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
