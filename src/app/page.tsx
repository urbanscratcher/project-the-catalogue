"use client";

import Loading from "@/components/Loading";
import { LanguageContext } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import NotionService from "./NotionService";

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

  const { language } = useContext(LanguageContext);

  return (
    <>
      {projects.length > 0 ? (
        <div className="py-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-[420px_auto] lg:max-w-none">
          <ol className="flex flex-col gap-5 break-words whitespace-pre-wrap">
            {projects.map((post: any, i) => (
              <li key={post.id}>
                <div className="flex flex-col">
                  <p className="font-bold leading-6 tracking-wide">
                    <Link
                      href={
                        post?.github
                          ? `/projects/${post.github.split("/")[4]}`
                          : ""
                      }
                      className="hover:underline"
                      target="_self"
                    >
                      {String.fromCharCode(64 + i + 1)}.{" "}
                      {post.title.toUpperCase()}
                    </Link>
                    <span> </span>
                    <a
                      className="text-sm underline underline-offset-2 hover:no-underline"
                      href={`${post?.link}`}
                      target="_blank"
                    >
                      {language === "kr" ? "링크" : "link"}
                    </a>
                    <span> </span>
                    <a
                      className="text-sm underline underline-offset-2 hover:no-underline"
                      href={`${post?.github}`}
                      target="_blank"
                    >
                      {language === "kr" ? "깃헙" : "github"}
                    </a>
                    <span className="font-normal tracking-normal">
                      &nbsp;&nbsp;
                      {language === "kr"
                        ? post?.descriptionKr ?? ""
                        : post.description}
                      &nbsp;
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
          {/* list display */}
          <ol className="grid lg:grid-cols-3 gap-0">
            {projects.map((post: any, i) => (
              <li key={post.id} className="py-2 px-4">
                <Link
                  className="w-fit"
                  href={
                    post?.github ? `/projects/${post.github.split("/")[4]}` : ""
                  }
                >
                  <p className="font-bold text-2xl">
                    {String.fromCharCode(64 + i + 1)}.
                  </p>
                  {post?.cover?.url ? (
                    <Image
                      src={post.cover.url}
                      alt={post.title}
                      width={200}
                      height={0}
                      className="object-cover"
                    />
                  ) : (
                    <p>{post.title}</p>
                  )}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="flex min-h-[90vh] justify-center text-center py-48">
          <Loading />
        </div>
      )}
    </>
  );
}
