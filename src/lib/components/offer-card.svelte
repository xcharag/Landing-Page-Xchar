<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";

	type OfferCardProps = {
		title: string;
		summary: string;
		bullets: string[];
	};

	let { title, summary, bullets }: OfferCardProps = $props();
</script>

<Card.Root class="border-border/60 bg-card/82 h-full border shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm">
	<Card.Header class="space-y-3 px-6 pt-6">
		<Card.Title class="font-display text-xl font-semibold">{title}</Card.Title>
		<Card.Description class="leading-relaxed">{summary}</Card.Description>
	</Card.Header>
	<Card.Content class="px-6 pb-6">
		<ul class="space-y-3">
			{#each bullets as bullet}
				<li class="text-muted-foreground flex gap-3 text-sm leading-relaxed">
					<span class="bg-primary mt-2 inline-block size-1.5 shrink-0 rounded-full"></span>
					<span>{bullet}</span>
				</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
