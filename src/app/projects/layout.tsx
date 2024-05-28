import CatalogueList from "@/components/CatalogueList";
import type { ReactNode } from "react";

function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="md:relative md:top-[36px] md:container md:mx-auto md:max-w-screen-xl md:flex md:flex-row pb-12 md:pt-12 pt-[84px] md:gap-12">
      <section className="md:sticky md:top-[84px] md:h-[calc(100vh-120px)] md:w-[420px]">
        <div className="md:relative md:overflow-hidden">
          <div className="md:h-[calc(100vh-120px)] md:overflow-y-scroll px-4 md:sidebar">
            <CatalogueList />
          </div>
        </div>
      </section>
      <section className="p-4">{children}</section>
    </div>
  );
}

export default ProjectsLayout;
