"use client";

import Image from "next/image";
import Link from "next/link";

function ProjectDetailItem({ post, idx }: { post: any; idx: number }) {
  const alphabetOrder = String.fromCharCode(64 + idx + 1);

  return (
    <li key={post.id} className={"py-2 px-4"}>
      <Link
        className="w-fit"
        href={post?.github ? `/projects/${post.github.split("/")[4]}` : ""}
      >
        <p className="font-bold text-2xl">{alphabetOrder}</p>
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
  );
}

export default ProjectDetailItem;
