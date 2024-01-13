import Link from "next/link";
import React from "react";
import { Navigation } from "../componentes/nav";
import { Card } from "../componentes/card";
import { Eye } from "lucide-react";
import { Project } from "./types";

const REVALIDATE_PROJCTS_IN_SECONDS = 3600;
const { NEXT_PUBLIC_CONTENTFUL_TOKEN, NEXT_PUBLIC_CONTENTFUL_SPACE } =
  process.env;
const apiUrl = `https://cdn.contentful.com/spaces/${NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/master/entries?access_token=${NEXT_PUBLIC_CONTENTFUL_TOKEN}`;
const getProjects = async () => {
  const res = await fetch(apiUrl, {
    next: {
      revalidate: REVALIDATE_PROJCTS_IN_SECONDS,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  return json;
};

export default async function ProjectsPage() {
  const { items } = await getProjects();
  const projects: Project[] = items.map((item: any) => item.fields) || [];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projetos ✨
          </h2>
          <p className="mt-4 text-zinc-400">
            Alguns projetos que fiz enquanto estudava programação.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {projects.map((project) => (
            <Card>
              <Link href={project.url || ""}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      {project.updateAt ? (
                        <time
                          dateTime={new Date(project.updateAt).toISOString()}
                        >
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(project.updateAt))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Eye className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(project.countView)}
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

