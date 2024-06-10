# The Catalogue

May 2024 ~ June 2024 (3 weeks)

This is a catalog concept website developed for showcasing my portfolio.

## Features
- **Portfolio List**: A summary list of each project with thumbnail videos that play automatically on hover. All data is synced with a Notion database.
- **Project Details**: Integrated with GitHub repository README markdown files for detailed project descriptions.

## Technical Focus
- I explored the possibility of using Notion as a backend and discovered the Notion API, which I used to manage projects.
- In Notion, I recorded metadata for each project such as descriptions, roles, tech stacks, and links.
- Due to Notion CORS issues, I set up a proxy using Cloudflare Workers.
- Since I usually organize projects in the README files, the project details page converts GitHub README markdown files to HTML instead of using Notion pages.

## Demo
1. Portfolio List
<video src="https://github.com/urbanscratcher/project-the-catalogue/assets/17016494/678643a2-a848-4ab0-91d7-9a7e55328285" controls></video>

2. Using Notion as Backend
<video src="https://github.com/urbanscratcher/project-the-catalogue/assets/17016494/43c71b2c-50ed-4ad2-ba69-60ad94a66883" controls></video>

## Tech Stack
### Frontend
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Markdown Conversion**: react-markdown, rehype-highlight, rehype-raw, remark-gfm

### Backend
- Notion API
- GitHub Repository

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
- I was initially stumped by the CORS problem but found a solution through a Stack Overflow post and set up a proxy using Cloudflare. Notion API doesn’t support CORS, making it inconvenient for client-side use. Later, I realized that static page rendering via server components could have been a better solution.
- I had a specific style in mind inspired by Pinterest but opted for a simpler design to expedite development. I need to focus on the essentials and avoid getting sidetracked by new ideas.

## Next
- I want to enhance the site with 3D rendering.
