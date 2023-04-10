import { useState } from 'preact/hooks'
import { Icons } from './Icons'

export function Contact() {
	const [revealed, setReveal] = useState(false)
	return <section id="contact" class="px-3 py-8 bg-gradient-to-tr from-zinc-900 from-20% to-slate-800 flex flex-col items-center">
		<h2 class="mb-2 text-lg font-bold text-center pb-1">Contact</h2>
		<p class="pb-1">Reporting a bug? Want to hire me? Just saying hi?</p>
		<div class="pt-4">
			{revealed
				? <a href="mailto:mirostuyven@gmail.com" class="flex items-center fill-current">
					{Icons.mail}
					<span class="ml-2">mirostuyven@gmail.com</span>
				</a>
				: <button onClick={() => setReveal(true)} class="flex items-center fill-current border px-2 hover:bg-white hover:bg-opacity-10">
					{Icons.mail}
					<span class="ml-2">Reveal</span>
				</button>
			}
		</div>
	</section>
}
