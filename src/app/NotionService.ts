export default class NotionService {
  private PROXIED_URL: string =
    "https://notion-cors.urbanscratcher.workers.dev";

  constructor() {}

  async getProjects(): Promise<any> {
    const dbId = process.env.NEXT_PUBLIC_PROJECT_DB;
    const query = {
      database_id: dbId,
      page_size: 20,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    };

    const data = await fetch(`${this.PROXIED_URL}/databases/${dbId}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    try {
      const res = await data.json();

      const result = res.results.map((res: any) =>
        this.convertToProjectPost(res)
      );

      return {
        hasMore: res.has_more,
        nextCursor: res.next_cursor ?? "",
        data: result,
      };
    } catch {
      return {
        hasMore: false,
        nextCursor: "",
        data: [],
      };
    }
  }

  private convertToProjectPost(page: any): any {
    console.log(page);
    let cover = page.cover;
    cover =
      cover?.type == "file"
        ? cover.file
        : cover?.type == "external"
        ? cover.external.url
        : "";

    console.log(page.properties);

    return {
      id: page.id,
      cover: cover,
      title: page.properties.Title.title[0].plain_text,
      description: page.properties.Description.rich_text[0].plain_text,
      slug: page.properties.Slug.formula.string,
      role: page.properties.Role.multi_select,
      techStack: page.properties.TechStack.multi_select,
      date: page.properties.Updated.last_edited_time,
      link: page.properties.Link.url,
      github: page.properties.Github.url,
    };
  }
}
