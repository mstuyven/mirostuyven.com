import { ProjectCard } from './ProjectCard'
import portfolio from '../portfolio.json'

type Props = {
	path?: string
}
export function Portfolio({}: Props) {
	return <section id="portfolio" class="p-3">
		<h2 class="mb-2 text-lg font-bold text-center">Portfolio</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
			{portfolio.map(p =>
				<ProjectCard
					title={p.title}
					image={`/assets/portfolio/${p.image}`}
					tags={p.tags.split(' ')}
					description={p.description}
					link={p.link}
					github={p.github} />
			)}
		</div>
	</section>
}
