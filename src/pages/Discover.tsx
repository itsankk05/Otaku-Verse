import { useState, useEffect } from "react";

import YouTube, { YouTubePlayer } from "react-youtube";

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
          videoId={"60A31DKGzAM"}
          opts={opts}
          onReady={_onReady}
          onEnd={_onEnd}
        />

        {videoEnded && (
          <button
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            disabled={!videoEnded}
          >
            Mint
          </button>
        )}
      </div>
    </div>
  );
}
