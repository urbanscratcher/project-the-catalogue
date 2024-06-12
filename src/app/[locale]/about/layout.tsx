import type { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <section className="py-20 mx-auto px-4">
      <div
        className={`prose max-w-3xl mx-auto prose-code:before:content-none prose-code:after:content-none prose-h1:text-7xl prose-h1:break-words prose-h1:font-normal prose-h3:font-normal prose-h2:font-normal prose-h2:text-3xl prose-h1:text-center prose-h1:leading-tight prose-h1:tracking-wide prose-code:bg-gray-200 prose-code:px-[6px] prose-code:py-[2px] prose-code:rounded-[4px] prose-h2:tracking-wide prose-code:text-base`}
      >
        {children}
      </div>
    </section>
  );
}

export default layout;
