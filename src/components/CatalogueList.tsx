"use client";

import NotionService from "@/app/NotionService";
import { LanguageContext } from "@/context/LanguageContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
function CatalogueList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const n = new NotionService();
    const p = n.getProjects();
    p.then((d) => {
      if (d.data) {
        setProjects(d.data);
      }
    });
  }, []);

  const { language } = useContext(LanguageContext);

  return (
    <ol className="flex flex-col gap-5 break-words whitespace-pre-wrap">
      {projects.map((post: any, i) => (
        <li key={post.id}>
          <div className="flex flex-col">
            <p className="font-bold leading-6 tracking-wide">
              <Link
                href={
                  post?.github ? `/projects/${post.github.split("/")[4]}` : ""
                }
                className="hover:underline"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {String.fromCharCode(64 + i + 1)}. {post.title.toUpperCase()}
              </Link>
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
  );
}

export default CatalogueList;
