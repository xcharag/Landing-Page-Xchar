<script lang="ts">
	import { Badge } from "$lib/components/ui/badge/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";

	type ProjectCardProps = {
		title: string;
		client: string;
		role: string;
		impact: string;
		summary: string;
		highlights: string[];
		tags: string[];
	};

	let { title, client, role, impact, summary, highlights, tags }: ProjectCardProps = $props();
</script>

<Card.Root class="border-border/60 bg-card/85 h-full border shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm">
	<Card.Header class="space-y-4 px-6 pt-6">
		<div class="flex flex-wrap gap-2">
			<Badge class="bg-primary/10 text-primary rounded-full">{client}</Badge>
			<Badge variant="outline" class="rounded-full">{role}</Badge>
		</div>
		<div class="space-y-3">
			<Card.Title class="font-display text-xl leading-tight font-semibold">{title}</Card.Title>
			<Card.Description class="text-sm leading-relaxed">{summary}</Card.Description>
		</div>
	</Card.Header>

	<Separator class="bg-border/70 mx-6" />

	<Card.Content class="flex flex-col gap-5 px-6 py-6">
		<div class="space-y-2">
			<p class="text-primary/70 text-xs font-semibold uppercase tracking-[0.18em]">Impact</p>
			<p class="text-sm leading-relaxed font-medium">{impact}</p>
		</div>

		<ul class="space-y-3">
			{#each highlights as highlight}
				<li class="text-muted-foreground flex gap-3 text-sm leading-relaxed">
					<span class="bg-primary/70 mt-2 inline-block size-1.5 shrink-0 rounded-full"></span>
					<span>{highlight}</span>
				</li>
			{/each}
		</ul>

		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<Badge variant="outline" class="rounded-full bg-white/55">
					{tag}
				</Badge>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
