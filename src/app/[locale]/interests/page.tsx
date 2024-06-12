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
    materials: "https://github.com/urbanscratcher/study-graphics",
    slug: "generative-art",
  },
  {
    display: "p5.js",
    url: "",
    materials: "https://github.com/urbanscratcher/study-p5js",
    slug: "p5js",
  },
  {
    display: "Nature of Code",
    url: "",
    materials: "https://note-nature-of-code.netlify.app/",
    slug: "nature-of-code",
  },
  {
    display: "React",
    url: "",
    materials: "https://github.com/urbanscratcher/study-react2",
    slug: "react",
  },
  {
    display: "TypeScript",
    url: "",
    materials: "https://github.com/urbanscratcher/study-react-typescript",
    slug: "typescript-for-react",
  },
  {
    display: "JavaScript",
    url: "",
    materials: "https://github.com/urbanscratcher/study-js",
    slug: "javascript",
  },
  {
    display: "Next.js",
    url: "",
    materials: "https://github.com/urbanscratcher/study-nextjs",
    slug: "nextjs",
  },
  {
    display: "Three.js",
    url: "",
    materials: "https://github.com/urbanscratcher/study-threejs",
    slug: "threejs",
  },
  {
    display: "React Three Fiber",
    url: "",
    materials: "https://github.com/urbanscratcher/study-r3f",
    slug: "r3f",
  },
  {
    display: "HTML/CSS",
    url: "",
    materials: "https://github.com/urbanscratcher/study-html-css-udemy",
    slug: "html-css",
  },
  {
    display: "React Query",
    url: "",
    materials: "https://github.com/urbanscratcher/study-react-query",
    slug: "react-query",
  },
  {
    display: "Docker",
    url: "",
    materials: "https://github.com/urbanscratcher/study-docker",
    slug: "docker",
  },
];

function InterestsPage() {
  return (
    <section className="py-20 mx-auto px-4 max-w-3xl h-[calc(100vh-100px)] flex items-center">
      <ul className="flex gap-2 flex-wrap">
        {interests.map((i, index) => (
          <li
            key={index}
            className="whitespace-nowrap text-4xl tracking-wide font-normal flex gap-2"
          >
            <a href={i?.materials || ""} target="_blank">
              <p className="hover:underline hover:decoration-2">{i.display}</p>
            </a>
            <p className={index === interests.length - 1 ? "hidden" : ""}>•</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default InterestsPage;
