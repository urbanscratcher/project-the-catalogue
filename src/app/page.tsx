"use client";

import { useEffect, useState } from "react";
import NotionService from "./NotionService";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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

  return (
    <>
      {projects.length > 0 ? (
        <div className="mt-12 max-wlg mx-auto grid gap-6 lg:grids-cols-2 lg:grid-cols-2 lg:max-w-none">
          {" "}
          <ol className="flex flex-col gap-5">
            {projects.map((post: any, i) => (
              <li key={post.id}>
                <div className="flex flex-col">
                  <p className="font-bold leading-6 tracking-wide">
                    <a
                      href={`http://${post?.link}`}
                      className="hover:underline"
                      target="_blank"
                    >
                      {String.fromCharCode(64 + i + 1)}.{" "}
                      {post.title.toUpperCase()}
                    </a>
                    <span className="text-gray-700 font-normal tracking-normal">
                      &nbsp;&nbsp;{post.description}&nbsp;
                    </span>
                    <a
                      className="text-sm hover:underline"
                      href={`${post?.github}`}
                      target="_blank"
                    >
                      source
                    </a>
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
          {/* list display */}
          {projects.map((post: any, i) => (
            <Link
              key={post.id}
              href={
                post?.github ? `/projects/${post.github.split("/")[4]}` : ""
              }
            >
              <p className="font-bold text-2xl">
                {String.fromCharCode(64 + i + 1)}.
              </p>
              {post?.cover && (
                <Image
                  src={post.cover.url}
                  alt={post.title}
                  width={200}
                  height={0}
                />
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
