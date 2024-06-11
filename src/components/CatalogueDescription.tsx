"use client";
import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";

function CatalogueDescription({ post }: { post: any }) {
  const locale = useCurrentLocale(i18nConfig);
  return (
    <span className="font-normal tracking-normal">
      &nbsp;&nbsp;
      {locale === "kr" ? post?.descriptionKr ?? "" : post.description}
      &nbsp;
      <small>
        {new Date(post.projectStart).getFullYear().toString().substring(2, 4) +
          "." +
          (new Date(post.projectStart).getMonth() + 1)}
        -
        {post?.projectEnd &&
          new Date(post.projectEnd).getFullYear().toString().substring(2, 4) +
            "." +
            (new Date(post.projectEnd).getMonth() + 1)}
      </small>
    </span>
  );
}

export default CatalogueDescription;
