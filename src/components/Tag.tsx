type Props = {
	name: string
}
export function Tag({ name }: Props) {
	return <div class="px-1 pb-0.5 bg-zinc-700">{name}</div>
}
