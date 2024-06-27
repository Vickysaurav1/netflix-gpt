import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen aspect-video pt-[20%] px-[12%] md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="pt-[75%] md:py-6  text-sm md:text-lg w-[100%] md:w-1/4 ">{overview}</p>
      <div className="flex pt-3">
        <button className="bg-white text-black px-10 py-4 border-solid flex gap-2 justify-center items-center hover:bg-opacity-80 rounded-lg">
          <i className="fa-solid fa-play fa-20px"></i>
          <span>Play</span>
        </button>
        <button className="mx-2 bg-gray-500 px-10 py-4 border-solid flex gap-2 justify-center items-center hover:bg-opacity-80 rounded-lg">
          <i className="fa-regular fa-circle-info"></i>
          <span>More info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
