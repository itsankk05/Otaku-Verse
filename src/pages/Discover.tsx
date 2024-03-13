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
      // get current time
      const elapsed_seconds = videoElement.target.getCurrentTime();

      // calculations
      const elapsed_milliseconds = Math.floor(elapsed_seconds * 1000);
      const ms = elapsed_milliseconds % 1000;
      const min = Math.floor(elapsed_milliseconds / 60000);
      const seconds = Math.floor((elapsed_milliseconds - min * 60000) / 1000);

      const formattedCurrentTime =
        min.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0") +
        ":" +
        ms.toString().padStart(3, "0");

      // console.log(formattedCurrentTime);

      // Pause and Play video
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
        const elapsed_seconds = videoElement.target.getCurrentTime();

        // calculations
        const elapsed_milliseconds = Math.floor(elapsed_seconds * 1000);
        const ms = elapsed_milliseconds % 1000;
        const min = Math.floor(elapsed_milliseconds / 60000);
        const seconds = Math.floor((elapsed_milliseconds - min * 60000) / 1000);

        const formattedCurrentTime =
          min.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0") +
          ":" +
          ms.toString().padStart(3, "0");

        // console.log(formattedCurrentTime);

        // verify video status
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
          videoId={"IUN664s7N-c"}
          opts={opts}
          onReady={_onReady}
          onEnd={_onEnd}
        />
        <button onClick={togglePause}>Pause</button>
        {videoEnded && <p className="text-white">The video has ended.</p>}
      </div>
    </div>
  );
}
