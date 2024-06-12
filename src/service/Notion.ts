import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cookies } from "next/headers";
import { cache } from "react";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAbout = cache(async () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  const pageId =
    lang?.value === "en"
      ? "33ee21de-aa45-4b5e-9b75-553047a58928"
      : "c2d908f4-41f1-4c41-a892-98667dd0c93a";

  const response = await notion?.blocks?.children?.list({ block_id: pageId });

  if (!response) {
    console.log("no response");
  }

  const blocks = response.results as any;
  return blocks;
});

export const fetchPageBySlug = cache(async (slug: string) => {
  console.log(slug);
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = cache(async (pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});
