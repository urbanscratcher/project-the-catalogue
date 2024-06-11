import getProjects from "@/service/getProjects";
import Image from "next/image";
import Link from "next/link";

async function ProjectsList() {
  const projects = await getProjects();

  if (!projects.data) {
    return <p>No Projects :(</p>;
  }

  return (
    <ol className="grid lg:grid-cols-3 gap-0">
      {projects.data.map((post: any, i: number) => (
        <li key={post.id} className="py-2 px-4">
          <Link
            className="w-fit"
            href={post?.github ? `/projects/${post.github.split("/")[4]}` : ""}
          >
            <p className="font-bold text-2xl">
              {String.fromCharCode(64 + i + 1)}.
            </p>
            {post?.cover?.url ? (
              <Image
                src={post.cover.url}
                alt={post.title}
                width={200}
                height={0}
                className="object-cover"
              />
            ) : (
              <p>{post.title}</p>
            )}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default ProjectsList;
