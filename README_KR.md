# The Catalogue

May 2024 ~ June 2024 (3주)

포트폴리오 전시를 위해 개발한 웹사이트입니다. 관리 편의성을 위해 Notion을 백엔드로 사용했으며, GitHub 레포지토리 README 마크다운 파일을 연동해 상세 페이지로 출력했습니다.

## 주요 기능
- **포트폴리오 목록**: 각 프로젝트를 간략하게 요약한 목록으로, 마우스 호버시 썸네일 영상이 자동 재생됩니다. 모든 데이터는 Notion 데이터베이스와 연동됩니다.
- **프로젝트 소개**: GitHub 레포지토리의 README 마크다운 파일과 연동해 보여주고 있습니다.

## 기술적 중점 사항
- Notion을 백엔드로 이용할 수 없을까 고민하다가, Notion API를 알게 되었고, 이를 통해 프로젝트를 관리하도록 만들었습니다.
- Notion에서는 프로젝트 설명, 역할, 테크 스택, 링크 등 프로젝트의 메타데이터들을 기록합니다.
- Notion CORS 이슈로 Cloudflare Worker를 통해 프록시를 설정했습니다.
- 저는 보통 프로젝트를 README에서 정리하기 때문에, 프로젝트 소개 페이지는 Notion 페이지를 사용하지 않고, GitHub README 마크다운 파일을 html로 변환했습니다.

## 시연
1. 포트폴리오 목록
<video src="https://github.com/urbanscratcher/project-the-catalogue/assets/17016494/678643a2-a848-4ab0-91d7-9a7e55328285" controls></video>

2. 노션을 백엔드로 사용
<video src="https://github.com/urbanscratcher/project-the-catalogue/assets/17016494/43c71b2c-50ed-4ad2-ba69-60ad94a66883" controls></video>

## 기술 구성
### 프론트엔드
- **프레임워크**: Next.js
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **마크다운 변환**: react-markdown, rehype-highlight, rehype-raw, remark-gfm

### 백엔드
- Notion API
- GitHub Repository

### 개발 환경
- **소스 코드**: GitHub
- **패키지 관리**: pnpm
- **기타**: VSCode, Eslint, Prettier

### 클라우드 서비스 및 배포
- **프론트엔드 호스팅 및 배포**: Vercel


---

## 회고

## 다음은...
