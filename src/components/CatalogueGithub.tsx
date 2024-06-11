"use client";
import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";

function CatalogueGithub({ githubUrl }: { githubUrl: string }) {
  const locale = useCurrentLocale(i18nConfig);
  return (
    <a
      className="text-sm underline underline-offset-2 hover:no-underline"
      href={`${githubUrl}`}
      target="_blank"
    >
      {locale === "kr" ? "깃헙" : "GitHub"}
    </a>
  );
}

export default CatalogueGithub;
