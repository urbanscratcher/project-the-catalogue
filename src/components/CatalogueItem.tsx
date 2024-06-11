"use client";
import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function CatalogueItem({ post, i }: { post: any; i: any }) {
  const locale = useCurrentLocale(i18nConfig);
  const pathname = usePathname();
  const path = pathname.split("/")[2] ?? undefined;
  const [showDemo, setShowDemo] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // detect mouse movement
  const detectMouseMoving = (e: any) => {
    setPosition({
      x: e.clientX + 30,
      y: e.clientY + 20,
    });
  };

  const getGithubPath = (github: string) => {
    let path;
    const paths = github.split("/");
    try {
      path = paths[paths.length - 1];
    } catch (e) {
      path = undefined;
    }
    return path;
  };

  const mouseEnterHandler = (post: any) => {
    setShowDemo(true);
    if (post?.thumbnail) {
      setThumbnail(post.thumbnail);
    } else {
      setThumbnail("");
    }
  };

  const mouseMoveHandler = () => {
    if (showDemo) {
      window.addEventListener("mousemove", detectMouseMoving);
    }
  };

  const mouseLeaveHandler = () => {
    setShowDemo(false);
    window.removeEventListener("mousemove", detectMouseMoving);
  };
  return (
    <>
      <li
        onMouseEnter={() => mouseEnterHandler(post)}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
        key={post.id}
        className={`mx-2 my-1 ${
          post?.github && getGithubPath(post.github) === path
            ? "selected relative translate-x-2 transition-transform"
            : ""
        } `}
      >
        <div className="flex flex-col">
          <p className={`font-bold leading-6 tracking-wide`}>
            {post?.github ? (
              <Link
                href={`/projects/${post.github.split("/")[4]}`}
                className={`hover:underline`}
              >
                {String.fromCharCode(64 + i + 1)}. {post.title.toUpperCase()}
              </Link>
            ) : (
              <Link
                href={`/projects/${post.slug}`}
                className={`hover:underline`}
              >
                {String.fromCharCode(64 + i + 1)}. {post.title.toUpperCase()}
              </Link>
            )}
            <span>
              {post?.link || post?.github ? (
                <span className="font-normal">{" | "}</span>
              ) : (
                ""
              )}
              {post?.link && (
                <>
                  <a
                    className="text-sm underline underline-offset-2 hover:no-underline"
                    href={`${post.link}`}
                    target="_blank"
                  >
                    {locale === "kr" ? "사이트" : "Site"}
                  </a>
                  <span> </span>
                </>
              )}
              {post?.github && (
                <a
                  className="text-sm underline underline-offset-2 hover:no-underline"
                  href={`${post.github}`}
                  target="_blank"
                >
                  {locale === "kr" ? "깃헙" : "GitHub"}
                </a>
              )}
            </span>
            <span className="font-normal tracking-normal">
              &nbsp;&nbsp;
              {locale === "kr" ? post?.descriptionKr ?? "" : post.description}
              &nbsp;
              <small>
                {new Date(post.projectStart)
                  .getFullYear()
                  .toString()
                  .substring(2, 4) +
                  "." +
                  (new Date(post.projectStart).getMonth() + 1)}
                -
                {post?.projectEnd &&
                  new Date(post.projectEnd)
                    .getFullYear()
                    .toString()
                    .substring(2, 4) +
                    "." +
                    (new Date(post.projectEnd).getMonth() + 1)}
              </small>
            </span>
          </p>

          <div className="border-t border-gray-800 p-1 my-1  text-xs flex justify-between">
            <ul className="flex gap-3">
              {post.techStack.map((el: any) => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
            <ul className=" flex gap-2">
              {post.role.map((el: any) => (
                <li className="font-bold" key={el.id}>
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
      {showDemo && thumbnail !== "" && position.x !== 0 && position.y !== 0 && (
        <video
          src={thumbnail}
          autoPlay
          loop
          muted
          className={`outline outline-1 z-20 fixed aspect-video w-3/12 bg-white min-w-[240px]`}
          style={{
            left: position.x + "px",
            top: position.y + "px",
          }}
        />
      )}
    </>
  );
}

export default CatalogueItem;