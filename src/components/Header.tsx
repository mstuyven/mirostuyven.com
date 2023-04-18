import miroImage from '../assets/miro.webp'
import { Icons } from './Icons'

export function Header() {
	return <header class="flex gap-2 items-center p-3 border-b border-zinc-700 bg-zinc-900 z-10">
		<img src={miroImage} alt="My face" class="w-8 aspect-square rounded-full" />
		<div class="flex items-baseline gap-4">
			<h1 class="text-xl font-bold mr-8">Miro Stuyven</h1>
			<a href="#portfolio" class="text-zinc-300">Portfolio</a>
			<a href="#contact" class="text-zinc-300">Contact</a>
		</div>
		<div class="flex-1"></div>
		<a href="https://www.linkedin.com/in/miro-stuyven-541b00190/" class="fill-current p-2" target="_blank" aria-label="LinkedIn">{Icons.linkedin}</a>
		<a href="https://github.com/mstuyven" class="fill-current p-2" target="_blank" aria-label="GitHub">{Icons.github}</a>
	</header>
}
