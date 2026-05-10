import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

const ossContributions = [
	{
		repo: "kubernetes-sigs/headlamp",
		description: "Add support for custom resource definitions (CRDs) in the Kubernetes UI.",
		href: "https://github.com/kubernetes-sigs/headlamp/pull/5460",
		tech: ["Kubernetes", "React", "TypeScript"]
	},
	{
		repo: "kubernetes-sigs/headlamp",
		description: "Improve pod log streaming stability and backend observability.",
		href: "https://github.com/kubernetes-sigs/headlamp/pull/5457",
		tech: ["Kubernetes", "Go"]
	},
	{
		repo: "jaegertracing/jaeger",
		description: "Optimize span collection and concurrency handling for high-throughput environments.",
		href: "https://github.com/jaegertracing/jaeger/pull/8507",
		tech: ["Distributed Tracing", "Go", "Observability"]
	}
];

export default async function ProjectsPage() {
  const featured = allProjects.find((project) => project.slug === "kernel") || allProjects[0];
  const remaining = allProjects.filter((p) => p.slug !== featured.slug && p.published);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-12 max-w-7xl lg:px-8 md:space-y-20 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            A collection of my work in systems programming, distributed systems, and infrastructure.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Primary Featured Project */}
        <div className="grid grid-cols-1 gap-8 mx-auto">
          <Card>
            <Link 
              href={featured.url || (featured.repository ? `https://github.com/${featured.repository}` : "#")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="relative w-full h-full p-4 md:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                  {featured.tech && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {featured.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-[10px] font-mono border rounded border-zinc-500 text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-200 transition-colors duration-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-8">
                  <p className="text-zinc-200 hover:text-zinc-50 hidden lg:block font-mono text-sm">
                    View Repository <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
        </div>
        
        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 gap-6 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {remaining.map((project) => (
            <Card key={project.slug}>
              <Article project={project} />
            </Card>
          ))}
        </div>

        {/* Open Source Section */}
        <div className="pt-12 space-y-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
              Open Source Contributions
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Contributions to major cloud-native projects, focusing on backend observability and infrastructure reliability.
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          
          <div className="grid grid-cols-1 gap-6 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
            {ossContributions.map((oss) => (
              <Card key={oss.href}>
                <Link href={oss.href} target="_blank" rel="noopener noreferrer">
                  <article className="p-4 md:p-8 h-full flex flex-col justify-between">
                    <div>
                      <h2 className="z-20 text-xl font-bold duration-1000 text-zinc-200 group-hover:text-white font-display">
                        {oss.repo}
                      </h2>
                      <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {oss.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {oss.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 text-[10px] font-mono border rounded border-zinc-500 text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-200 transition-colors duration-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
