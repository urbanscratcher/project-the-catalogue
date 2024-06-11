"use client";

import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LanguageBtn() {
  const locale = useCurrentLocale(i18nConfig);

  const [dispLocale, setDispLocale] = useState(locale);
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  const newPaths = pathnames.filter((p) => p !== "kr" && p !== "en");
  const router = useRouter();

  useEffect(() => {
    setDispLocale(locale);
  }, [locale]);

  const toggle = () => {
    const newPath =
      locale === "en" ? "/kr" + newPaths.join("/") : "/en" + newPaths.join("/");
    router.push(newPath);
    router.refresh(); // to stabilize
  };

  return (
    <p
      className="hover:cursor-pointer hover:underline uppercase"
      onClick={toggle}
    >
      {dispLocale}
    </p>
  );
}

export default LanguageBtn;
