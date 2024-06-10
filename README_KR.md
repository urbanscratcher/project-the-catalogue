# The Catalogue

2024 5월 ~ 2024 6월 (3주)

포트폴리오 전시를 위해 개발한 카탈로그 컨셉의 웹사이트입니다.

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


## 참고 자료
- Notion CORS 이슈 해결
  - [스택오버플로우](https://stackoverflow.com/questions/74081980/notion-so-api-always-throws-cors-error-while-developing-react-application-locall)
  - [깃헙 이슈 리포트](https://github.com/makenotion/notion-sdk-js/issues/96#issuecomment-870581720)
---

## 회고
- CORS 문제 때문에 막막해 하다가 스택오버플로우 글을 보고 Cloudflare를 통해 프록시를 구성할 수 있었다. Notion API는 CORS를 지원하지 않아 클라이언트 단에서 사용하기가 다소 불편했다. 그런데 개발하다 보니 그냥 서버 컴포넌트로 정적 페이지 렌더링을 하면 되지 않나라는 생각이 들었다.
- 핀터레스트를 보다가 떠올린, 하고 싶은 스타일이 있긴 했는데 빨리 개발하고 싶어서 심플한 스타일로 구성했다. 아이디어가 생기면 자꾸 일을 만들어 버려서, 중요한 것에 집중하는 지혜가 필요하다.

## 다음은...
- 3D 렌더링으로 사이트를 꾸며 보고 싶다.
