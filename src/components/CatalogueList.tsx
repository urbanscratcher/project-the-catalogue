"use client";

import NotionService from "@/app/NotionService";
import { LanguageContext } from "@/context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

function CatalogueList() {
  const [projects, setProjects] = useState([]);
  const pathname = usePathname();
  const path = pathname.split("/")[2] ?? undefined;
  const [showDemo, setShowDemo] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const { language } = useContext(LanguageContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // detect mouse movement

  const handleMouseMove = (e: any) => {
    setPosition({
      x: e.clientX + 30,
      y: e.clientY + 20,
    });
  };

  useEffect(() => {
    const n = new NotionService();
    const p = n.getProjects();
    p.then((d) => {
      if (d.data) {
        setProjects(d.data);
      }
    });
  }, []);

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

  return (
    <>
      <ol className="flex flex-col gap-5 break-words whitespace-pre-wrap">
        {projects.map((post: any, i) => (
          <li
            onMouseEnter={() => {
              setShowDemo(true);
              if (post?.thumbnail) {
                setThumbnail(post.thumbnail);
              } else {
                setThumbnail("");
              }
            }}
            onMouseMove={() => {
              if (showDemo) {
                window.addEventListener("mousemove", handleMouseMove);
              }
            }}
            onMouseLeave={() => {
              setShowDemo(false);
              window.removeEventListener("mousemove", handleMouseMove);
            }}
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
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    {String.fromCharCode(64 + i + 1)}.{" "}
                    {post.title.toUpperCase()}
                  </Link>
                ) : (
                  <Link
                    href={`/projects/${post.slug}`}
                    className={`hover:underline`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    {String.fromCharCode(64 + i + 1)}.{" "}
                    {post.title.toUpperCase()}
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
                        {language === "kr" ? "링크" : "link"}
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
                      {language === "kr" ? "깃헙" : "github"}
                    </a>
                  )}
                </span>
                <span className="font-normal tracking-normal">
                  &nbsp;&nbsp;
                  {language === "kr"
                    ? post?.descriptionKr ?? ""
                    : post.description}
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
        ))}
      </ol>
      {showDemo && thumbnail !== "" ? (
        <video
          src={thumbnail}
          autoPlay
          loop
          muted
          className={`outline outline-1 z-20 fixed aspect-video w-3/12 bg-white`}
          style={{
            left: position.x + "px",
            top: position.y + "px",
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default CatalogueList;
