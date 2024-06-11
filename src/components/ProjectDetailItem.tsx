"use client";

import Link from "next/link";
import ThumbnailFrame from "./ThumbnailFrame";

function ProjectDetailItem({ post, idx }: { post: any; idx: number }) {
  const alphabetOrder = String.fromCharCode(64 + idx + 1);

  return (
    <li key={post.id} className={"py-2 px-4"}>
      <p className="font-bold text-2xl">{alphabetOrder}.</p>
      <Link
        className="w-fit h-fit"
        href={post?.github ? `/projects/${post.github.split("/")[4]}` : ""}
      >
        <ThumbnailFrame
          imgUrl={post?.cover?.url || ""}
          thumbnail={post.thumbnail}
          title={post.title}
        />
      </Link>
    </li>
  );
}

export default ProjectDetailItem;
