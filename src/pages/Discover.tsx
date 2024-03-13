import { useState, useEffect } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import { useWriteContract } from "wagmi";

let videoElement: YouTubePlayer = null;

export default function Discover() {
  const [isPaused, setIsPaused] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const { writeContract } = useWriteContract();

  useEffect(() => {
    if (videoElement) {
      if (isPaused) {
        videoElement.target.pauseVideo();
      } else {
        videoElement.target.playVideo();
      }
    }
  }, [isPaused, videoElement]);

  //get current time and video status in real time
  useEffect(() => {
    const interval = setInterval(async () => {
      if (videoElement && videoElement.target.getCurrentTime() > 0) {
        if (videoElement.target.playerInfo.playerState === 1) {
          console.log("the video is running");
        } else if (videoElement.target.playerInfo.playerState === 2) {
          console.log("the video is paused");
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const _onReady = (event: YouTubePlayer) => {
    videoElement = event;
  };
  const _onEnd = () => {
    console.log("Video has ended");
    setVideoEnded(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-4xl my-20 font-bold mb-4 text-center">
          Start Binging, Start Minting
        </h1>
        <YouTube
          className="my-10"
          videoId={"YuFjcIsdih8"}
          opts={opts}
          onReady={_onReady}
          onEnd={_onEnd}
        />

        {videoEnded && (
          <button
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            disabled={!videoEnded}
            onClick={() => {
              console.log("clicked");
              writeContract({
                address: "0x45AC6AB7446Fd0124D344519B7474364aF1e9f76",
                abi: [
                  {
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                    ],
                    name: "ERC721IncorrectOwner",
                    type: "error",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "ERC721InsufficientApproval",
                    type: "error",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "approver",
                        type: "address",
                      },
                    ],
                    name: "ERC721InvalidApprover",
                    type: "error",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
                    ],
                    name: "ERC721InvalidOperator",
                    type: "error",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                    ],
                    name: "ERC721InvalidOwner",
                    type: "error",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                      },
                    ],
                    name: "ERC721InvalidReceiver",
                    type: "error",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                      },
                    ],
                    name: "ERC721InvalidSender",
                    type: "error",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "ERC721NonexistentToken",
                    type: "error",
                  },
                  {
                    anonymous: false,
                    inputs: [
                      {
                        indexed: true,
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                      {
                        indexed: true,
                        internalType: "address",
                        name: "approved",
                        type: "address",
                      },
                      {
                        indexed: true,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "Approval",
                    type: "event",
                  },
                  {
                    anonymous: false,
                    inputs: [
                      {
                        indexed: true,
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                      {
                        indexed: true,
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
                      {
                        indexed: false,
                        internalType: "bool",
                        name: "approved",
                        type: "bool",
                      },
                    ],
                    name: "ApprovalForAll",
                    type: "event",
                  },
                  {
                    anonymous: false,
                    inputs: [
                      {
                        indexed: false,
                        internalType: "uint256",
                        name: "_fromTokenId",
                        type: "uint256",
                      },
                      {
                        indexed: false,
                        internalType: "uint256",
                        name: "_toTokenId",
                        type: "uint256",
                      },
                    ],
                    name: "BatchMetadataUpdate",
                    type: "event",
                  },
                  {
                    anonymous: false,
                    inputs: [
                      {
                        indexed: false,
                        internalType: "uint256",
                        name: "_tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "MetadataUpdate",
                    type: "event",
                  },
                  {
                    anonymous: false,
                    inputs: [
                      {
                        indexed: true,
                        internalType: "address",
                        name: "from",
                        type: "address",
                      },
                      {
                        indexed: true,
                        internalType: "address",
                        name: "to",
                        type: "address",
                      },
                      {
                        indexed: true,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "Transfer",
                    type: "event",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "to",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "approve",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                    ],
                    name: "balanceOf",
                    outputs: [
                      {
                        internalType: "uint256",
                        name: "",
                        type: "uint256",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "getApproved",
                    outputs: [
                      {
                        internalType: "address",
                        name: "",
                        type: "address",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
                    ],
                    name: "isApprovedForAll",
                    outputs: [
                      {
                        internalType: "bool",
                        name: "",
                        type: "bool",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                      },
                      {
                        internalType: "string",
                        name: "tokenURI",
                        type: "string",
                      },
                    ],
                    name: "mintNFT",
                    outputs: [
                      {
                        internalType: "uint256",
                        name: "",
                        type: "uint256",
                      },
                    ],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [],
                    name: "mintPrice",
                    outputs: [
                      {
                        internalType: "uint256",
                        name: "",
                        type: "uint256",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [],
                    name: "name",
                    outputs: [
                      {
                        internalType: "string",
                        name: "",
                        type: "string",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "ownerOf",
                    outputs: [
                      {
                        internalType: "address",
                        name: "",
                        type: "address",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "from",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "to",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "from",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "to",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                      {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                      },
                    ],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
                      {
                        internalType: "bool",
                        name: "approved",
                        type: "bool",
                      },
                    ],
                    name: "setApprovalForAll",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "bytes4",
                        name: "interfaceId",
                        type: "bytes4",
                      },
                    ],
                    name: "supportsInterface",
                    outputs: [
                      {
                        internalType: "bool",
                        name: "",
                        type: "bool",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [],
                    name: "symbol",
                    outputs: [
                      {
                        internalType: "string",
                        name: "",
                        type: "string",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "tokenURI",
                    outputs: [
                      {
                        internalType: "string",
                        name: "",
                        type: "string",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "from",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "to",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                ],
                functionName: "mintNFT",
                args: ["0x00dEC5435c6dAd27174Bc97f873bE840D622Bb42", "1234"],
              });
            }}
          >
            Mint
          </button>
        )}
      </div>
    </div>
  );
}
