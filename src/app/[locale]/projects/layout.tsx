import CatalogueList from "@/components/CatalogueList";
import type { ReactNode } from "react";

function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    // md:pt-12 pt-[84px]
    <div className="md:relative md:top-[36px] md:container md:mx-auto md:max-w-screen-xl md:flex md:flex-row pb-12 md:gap-4 md:pt-12 pt-[84px]">
      {/* md:top-[84px] md:h-[calc(100vh-120px)] */}
      <section className="md:sticky md:top-[84px] md:h-[calc(100vh-120px)] md:w-[420px] flex-shrink-0">
        <div className="md:relative md:overflow-hidden">
          {/* md:h-[calc(100vh-120px)]  */}
          <div className="md:overflow-y-scroll md:h-[calc(100vh-120px)] px-2 md:sidebar">
            <CatalogueList />
          </div>
        </div>
      </section>
      <section className="p-4 md:p-0">{children}</section>
    </div>
  );
}

export default ProjectsLayout;
