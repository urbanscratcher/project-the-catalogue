type SelectOption = {
  id: string;
  name: string;
  color: string;
};

type ProjectPost = {
  id: string;
  cover: any;
  title: string;
  description: string;
  descriptionKr: string;
  slug: string;
  role: SelectOption[];
  techStack: SelectOption[];
  date: string;
  link: string;
  github: string;
  projectStart: string;
  projectEnd?: string | undefined;
  thumbnailImage?: string;
  thumbnailVideo?: string;
};

export default class NotionService {
  private PROXIED_URL: string = process.env.NEXT_PUBLIC_PROXIED_URL || "";

  constructor() {}

  async getProjects(): Promise<any> {
    const query = {
      page_size: 20,
      sorts: [
        {
          property: "ProjectDuration",
          direction: "ascending",
        },
      ],
    };

    const data = await fetch(this.PROXIED_URL, {
      method: "POST",
      body: JSON.stringify(query),
    });

    try {
      const res = await data.json();

      const result = res.results
        .map((res: any) => this.convertToProjectPost(res))
        .sort((a: ProjectPost, b: ProjectPost) =>
          a.projectStart < b.projectStart ? -1 : 1
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

  private convertToProjectPost(page: any): ProjectPost {
    let cover = page.cover;
    cover =
      cover?.type == "file"
        ? cover.file
        : cover?.type == "external"
        ? cover.external.url
        : "";

    const techStack: SelectOption[] = page.properties.TechStack.multi_select;
    techStack.sort((a, b) => (a.name > b.name ? 1 : -1));

    const role: SelectOption[] = page.properties.Role.multi_select;
    role.sort((a, b) => (a.name > b.name ? 1 : -1));

    const res = {
      id: page.id,
      cover: cover,
      title: page.properties.Title.title[0].plain_text,
      description: page.properties.Description.rich_text[0].plain_text,
      descriptionKr:
        page.properties.Description_kr?.rich_text[0]?.plain_text ?? "",
      slug: page.properties.Slug.formula.string,
      role: role,
      techStack: techStack,
      date: page.properties.Updated.last_edited_time,
      link: page.properties.Link.url,
      github: page.properties.Github.url,
      projectStart: page.properties.ProjectDuration.date?.start ?? "2023-01-01",
      projectEnd: page.properties.ProjectDuration.date?.end ?? undefined,
      thumbnail:
        page.properties.Thumbnail?.files.length > 0
          ? page.properties.Thumbnail?.files[0].file.url
          : undefined,
    };

    return res;
  }
}
