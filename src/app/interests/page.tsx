type Interest = {
  display: string;
  url: string;
  materials?: string;
  slug: string;
};

const interests: Interest[] = [
  {
    display: "Generative Art",
    url: "",
    materials: "",
    slug: "generative-art",
  },
  { display: "p5.js", url: "", slug: "generative-art" },
  { display: "JavaScript", url: "", slug: "generative-art" },
  { display: "TypeScript", url: "", slug: "generative-art" },
  { display: "React", url: "", slug: "generative-art" },
  { display: "Next.js", url: "", slug: "generative-art" },
  { display: "Three.js", url: "", slug: "generative-art" },
  { display: "React Three Fiber", url: "", slug: "generative-art" },
  { display: "CSS", url: "", slug: "generative-art" },
  { display: "React Query", url: "", slug: "generative-art" },
  { display: "Zustand", url: "", slug: "generative-art" },
  { display: "Docker", url: "", slug: "generative-art" },
  { display: "NestJS", url: "", slug: "generative-art" },
];

function InterestsPage() {
  return (
    <section className="py-20 mx-auto container px-4 h-[calc(100vh-50px)]">
      <ul className="flex gap-2 flex-wrap w-1/2">
        {interests.map((i, index) => (
          <li
            key={index}
            className="whitespace-nowrap text-4xl tracking-wide font-normal flex gap-2"
          >
            <p>{i.display}</p>
            <p className={index === interests.length - 1 ? "hidden" : ""}>•</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default InterestsPage;
