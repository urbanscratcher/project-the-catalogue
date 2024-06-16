"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CatalogueDescription from "./CatalogueDescription";
import CatalogueGithub from "./CatalogueGithub";
import CatalogueSiteLink from "./CatalogueSiteLink";

function getPath(str: string) {
  let path;
  const paths = str.split("/");
  try {
    path = paths[paths.length - 1];
  } catch (e) {
    path = undefined;
  }
  return path;
}

function CatalogueItem({ post, idx }: { post: any; idx: number }) {
  const pathname = usePathname();

  const isActive = post?.github && getPath(post.github) === getPath(pathname);

  const linkUrl = post?.github
    ? `/projects/${post.github.split("/")[4]}`
    : `/projects/${post.slug}`;

  const isJustText = !post?.github;
  const alphabetOrder = isJustText
    ? "[✕]"
    : String.fromCharCode(64 + idx + 1) + ".";

  return (
    <li key={post.id} className={`mx-2 my-1`}>
      <div className="flex flex-col">
        <p
          className={`font-bold leading-6 transition-all tracking-wide underline underline-offset-2 decoration-black/0 ${
            isActive ? "decoration-2 decoration-black/100" : ""
          }`}
        >
          {isJustText ? (
            <span className="uppercase">
              {alphabetOrder} {post.title}
            </span>
          ) : (
            <Link
              href={linkUrl}
              className={`hover:underline hover:decoration-black/100 hover:decoration-1 uppercase visited:bg-red-100`}
            >
              {alphabetOrder} {post.title}
            </Link>
          )}
          {/* Site Link and GitHub */}
          <span>
            {post?.link || post?.github ? (
              <span className="font-normal">{" | "}</span>
            ) : (
              ""
            )}
            {post?.link && (
              <>
                <CatalogueSiteLink siteLink={post.link} />
                <span> </span>
              </>
            )}
            {post?.github && <CatalogueGithub githubUrl={post.github} />}
          </span>
          {/* Description */}
          <CatalogueDescription post={post} />
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
  );
}

export default CatalogueItem;
