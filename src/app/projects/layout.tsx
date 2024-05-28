import CatalogueList from "@/components/CatalogueList";
import type { ReactNode } from "react";

function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative top-[36px] container mx-auto max-w-screen-xl md:flex md:flex-row md:py-12 md:gap-6">
      <section className="sticky top-[84px] h-[calc(100vh-120px)] w-[420px]">
        <div className="relative overflow-hidden">
          <div className="h-[calc(100vh-120px)] overflow-y-scroll pr-4 sidebar">
            <CatalogueList />
          </div>
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
}

export default ProjectsLayout;
