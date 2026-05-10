import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
	const href = project.url || (project.repository ? `https://github.com/${project.repository}` : "#");
	
	return (
		<Link 
			href={href} 
			target="_blank" 
			rel="noopener noreferrer"
			aria-label={`View project: ${project.title}`}
		>
			<article className="p-4 md:p-8">
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
				{project.tech && (
					<div className="flex flex-wrap gap-2 mt-4">
						{project.tech.map((t) => (
							<span
								key={t}
								className="px-2 py-1 text-[10px] font-mono border rounded border-zinc-500 text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-200 transition-colors duration-500"
							>
								{t}
							</span>
						))}
					</div>
				)}
			</article>
		</Link>
	);
};
