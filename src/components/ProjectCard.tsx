import { Icons } from './Icons'
import { Tag } from './Tag'

type Props = {
	title: string
	image: string
	tags?: string[]
	description?: string
	link?: string
	github?: string
}
export function ProjectCard({ title, image, tags, description, link, github }: Props) {
	return <article class="group relative bg-zinc-800 rounded-md shadow-md overflow-hidden" tabIndex={0}>
		<div class="flex p-1 items-center">
			<h3 class="flex-1 px-1">{title}</h3>
			{link && <a href={link} target="_blank" class="p-1 fill-current hover:fill-zinc-300">{Icons.external_link}</a>}
			{github && <a href={github} target="_blank" class="p-1 fill-current hover:fill-zinc-300">{Icons.github}</a>}
		</div>
		<div class="flex py-1 px-2 gap-1">
			{tags?.map(tag => <Tag name={tag} />)}
		</div>
		<div class="relative aspect-video bg-zinc-700 cursor-pointer overflow-hidden">
			<img src={image} class="aspect-video object-cover motion-safe:transition-all group-focus:brightness-[25%] group-focus:scale-150 group-hover:brightness-[25%] group-hover:scale-150" />
			<p class="absolute inset-0 p-2 flex items-center text-center motion-safe:transition-all scale-0 group-focus:scale-100 group-hover:scale-100">{description}</p>
		</div>
	</article>
}
