import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/Resume_Rustam_Sheoran.pdf" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Rustam Sheoran
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in px-4">
        <h2 className="text-sm text-zinc-500 max-w-xl mx-auto leading-6">
          I mainly work on backend systems, distributed systems, Linux environments, infrastructure, Kubernetes, Docker, and open-source development. 
          I enjoy debugging systems, protocol engineering, observability, and low-level architecture related problems.
        </h2>
        <div className="mt-8">
          <Link
            href="/Resume_Rustam_Sheoran.pdf"
            target="_blank"
            className="px-6 py-2 text-sm font-medium transition-all duration-300 border rounded-full text-zinc-300 border-zinc-500 hover:text-white hover:border-zinc-200"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
