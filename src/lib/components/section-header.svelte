<script lang="ts">
	import { cn } from "$lib/utils.js";

	type SectionHeaderProps = {
		eyebrow: string;
		title: string;
		intro: string;
		align?: "left" | "center";
		class?: string;
	};

	let {
		eyebrow,
		title,
		intro,
		align = "left",
		class: className,
	}: SectionHeaderProps = $props();
</script>

<div class={cn("max-w-3xl space-y-3", align === "center" && "mx-auto text-center", className)}>
	<p class="text-primary/70 text-xs font-semibold uppercase tracking-[0.28em]">{eyebrow}</p>
	<h2 class="font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
	<p class="text-muted-foreground text-base leading-relaxed sm:text-lg">{intro}</p>
</div>
