# The Catalogue

May 2024 ~ June 2024 (3 weeks)

This is a catalog concept website developed for showcasing my portfolio.

## Features

- **Portfolio List**: A summary list of each project, with thumbnail videos automatically playing when hovered over. All data is linked with the Notion database.
- **Project Details**: Integrated with GitHub repository README markdown files for detailed project descriptions.
- **Responsive Design**: Ensures good visibility on mobile screens.
- **Multilingual Support**: Supports both English and Korean.

## Technical Focus

- While exploring how to use Notion as a backend, I discovered the Notion API. I realized that managing my portfolio through it would be efficient.
- In Notion, I manage project descriptions, roles, tech stacks, and links.
- Due to CORS issues with Notion, I set up a proxy using Cloudflare Worker.
- As I typically organize my projects in README.md files, the project introduction page does not pull data from Notion but instead displays the GitHub README markdown file converted to HTML.
- Next.js middleware and the `next-i18n-router` are used to switch languages between Korean and English.

## Demo

1. Viewing Projects
   <video src="https://github.com/urbanscratcher/project-the-catalogue/assets/17016494/4f4a7986-c76e-488d-8463-05935044e394" controls></video>

2. Using Notion as Backend
   <video src="https://github.com/urbanscratcher/project-the-catalogue/assets/17016494/43c71b2c-50ed-4ad2-ba69-60ad94a66883" controls></video>

## Tech Stack

### Frontend

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Markdown Conversion**: react-markdown, rehype-highlight, rehype-raw, remark-gfm, @9gustin/react-notion-render
- **Multilingual Support**: next-i18n-router, next-cookie

### Backend

- **Project Metadata**: @notionhq/client (Notion API)
- **Project Details**: GitHub Repository

### Development Environment

- **Source Code**: GitHub
- **Package Management**: pnpm
- **Others**: VSCode, Eslint, Prettier

### Cloud Services and Deployment

- **Frontend Hosting and Deployment**: Vercel

## References

- Solving Notion CORS Issues
  - [Stack Overflow](https://stackoverflow.com/questions/74081980/notion-so-api-always-throws-cors-error-while-developing-react-application-locall)
  - [GitHub Issue Report](https://github.com/makenotion/notion-sdk-js/issues/96#issuecomment-870581720)

---

## Reflection

- I struggled with CORS issues in using Notion API until I found a Stack Overflow post suggesting the use of Cloudflare for proxy setup. Sinc Notion API does not support CORS, it was inconvenient for client-side usage. During development, I realized I could just use server components for static page rendering. I ended up dividing server and client components, though I decided to keep the proxy just in case.
- Shifting data loading to server components also altered the behavior of the Korean-English language switching. Previously, language switching was handled seamlessly through component swapping. It now triggers page reloads due to routing, but the source has become more SEO-friendly. I'm curious if different libraries could influence this behavior, but for now, I'm satisfied with a simple implementation.
- Images and videos fetched from Notion are stored on AWS S3 and expire after some time. Consequently, I set the `revalidate` parameter to 1 minute. Furthermore, due to a rate limit that causes errors when requests increase rapidly, I have started using Cloudinary for new image and video uploads to avoid disruptions.
- Fixing the size and position of the left sidebar after loading turned out to be unexpectedly tricky. I spent quite some time stabilizing its appearance, but I managed to learn some CSS tricks from the Next.js official website. Adjusting for mobile screens was also challenging, but the solutions turned out to be pretty straightforward.
- Although I was inspired by some cool ideas from Pinterest, I opted for a simpler design to keep the development straightforward. I need to stick to the basics and avoid continually adding more work with every new idea.

## Next

- I would like to explore decorating the site with 3D rendering.
