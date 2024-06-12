"use client";
import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";
import AboutLoader from "./AboutLoader";

function About() {
  const locale = useCurrentLocale(i18nConfig);
  const url = locale == "en" ? "/assets/about.md" : "/assets/about_kr.md";

  return <AboutLoader url={url} />;
}

export default About;
