"use client";

import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function LanguageBtn() {
  const locale = useCurrentLocale(i18nConfig);

  const [dispLocale, setDispLocale] = useState(locale);
  const pathname = usePathname();
  const router = useRouter();

  const toggle = () => {
    const newLocale = dispLocale === "kr" ? "en" : "kr";
    const pathnames = pathname.split("/");

    let newPath;
    if (dispLocale === "en") {
      const newPaths = pathnames.filter((p) => p !== "en");
      newPath = "/kr" + newPaths.join("/");
    } else {
      if (pathname.startsWith("/kr")) {
        const newPaths = pathnames.filter((p) => p !== "kr");
        newPath = "/en" + newPaths.join("/");
      } else {
        const newPaths = pathnames.filter((p) => p !== "en");
        newPath = "/en" + newPaths.join("/");
      }
    }

    setDispLocale(newLocale);
    router.push(newPath);
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
