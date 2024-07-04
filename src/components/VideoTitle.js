import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen aspect-video pt-[80%] md:pt-[20%] px-[12%] md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:flex md:py-6  text-sm md:text-lg w-[100%] md:w-2/3 ">
        {overview}
      </p>
      <div className="pt-[10%] flex md:pt-3">
        <button className="bg-white text-black px-2 py-2 md:px-10 md:py-4 border-solid flex gap-2 justify-center items-center hover:bg-opacity-80 rounded-lg">
          <i className="fa-solid fa-play fa-20px"></i>
          <span>Play</span>
        </button>
        <button className="hidden md:flex mx-2 bg-gray-500 px-2 py-2 md:px-10 md:py-4 border-solid gap-2 justify-center items-center hover:bg-opacity-80 rounded-lg">
          <i className="fa-solid fa-circle-info fa-20px"></i>
          <span>More info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
