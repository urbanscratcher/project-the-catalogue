"use client";

import Image from "next/image";
import { useState } from "react";
import CircleDisplay from "./CircleDisplay";

function ThumbnailFrame({
  imgUrl,
  title,
  thumbnail,
}: {
  imgUrl: string;
  title: string;
  thumbnail?: string | undefined;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-[250px] aspect-video">
      <div
        className={`bg-white border rounded-md border-black overflow-hidden active:translate-x-1 active:translate-y-1`}
        onTouchStart={() => {}}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* display bar */}
        <div className={`flex gap-1 border-b p-1 border-b-black `}>
          <CircleDisplay />
          <CircleDisplay />
          <CircleDisplay />
        </div>
        {/* img or vid */}
        <div className="w-[250px] aspect-video overflow-hidden relative outline outline-1 bg-white">
          {
            <Image
              src={imgUrl}
              alt={title}
              fill
              sizes={"100vw"}
              className={`object-cover duration-100 ${
                !isHovered ? "opacity-100" : "opacity-0"
              } transition-opacity`}
              onError={(e) => {
                console.error(e);
              }}
            />
          }
          {thumbnail && (
            <video
              src={thumbnail}
              autoPlay
              loop
              muted
              className={`absolute duration-100 transition-opacity ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>
      </div>
      <div
        className={`-z-10 absolute w-[250px] h-full rounded-md bg-black left-1 top-1`}
      ></div>
    </div>
  );
}

export default ThumbnailFrame;
