"use client";

import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";
import ProjectDetailLoader from "./ProjectDetailLoader";

function ProjectDetail({ slug }: { slug: string }) {
  const locale = useCurrentLocale(i18nConfig);

  const url =
    locale == "en"
      ? `https://raw.githubusercontent.com/urbanscratcher/${slug}/main/README.md`
      : `https://raw.githubusercontent.com/urbanscratcher/${slug}/main/README_KR.md`;

  return (
    <>
      <ProjectDetailLoader url={url} />
    </>
  );
}

export default ProjectDetail;
