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
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // isPressed ? "translate-x-1 translate-y-1" : ""
  return (
    <div className="relative w-[250px] aspect-video">
      <div
        className={`bg-white border rounded-md border-black overflow-hidden active:translate-x-1 active:translate-y-1`}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
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
          {(!isHovered || !thumbnail) && (
            <Image src={imgUrl} alt={title} fill className="object-cover" />
          )}
          {isHovered && thumbnail && (
            <video src={thumbnail} autoPlay loop muted className={`absolute`} />
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
