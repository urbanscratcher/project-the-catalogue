import { i18nRouter } from "next-i18n-router";
import { type NextRequest } from "next/server";
import i18nConfig from "./i18nConfig";

function middleware(request: NextRequest) {
  // const isMain = request.nextUrl.pathname === "/";

  // if (isMain) {
  //   NextResponse.rewrite(new URL("/projects", request.url));
  // }
  return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};

export default middleware;
