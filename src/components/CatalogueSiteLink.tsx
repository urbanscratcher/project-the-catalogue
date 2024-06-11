"use client";

import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";

function CatalogueSiteLink({ siteLink }: { siteLink: string }) {
  const locale = useCurrentLocale(i18nConfig);

  return (
    <a
      className="text-sm underline underline-offset-2 hover:no-underline"
      href={siteLink}
      target="_blank"
    >
      {locale === "kr" ? "사이트" : "Site"}
    </a>
  );
}

export default CatalogueSiteLink;
