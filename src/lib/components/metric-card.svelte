<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";

	type MetricCardProps = {
		value: string;
		label: string;
		detail: string;
	};

	let { value, label, detail }: MetricCardProps = $props();
</script>

<Card.Root class="border-border/60 bg-card/80 h-full border shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm">
	<Card.Content class="flex h-full flex-col gap-4 px-6 py-6">
		<p class="font-display text-3xl leading-none font-semibold sm:text-4xl">{value}</p>
		<div class="space-y-2">
			<p class="text-foreground/80 text-xs font-semibold uppercase tracking-[0.18em]">{label}</p>
			<p class="text-muted-foreground text-sm leading-relaxed">{detail}</p>
		</div>
	</Card.Content>
</Card.Root>
