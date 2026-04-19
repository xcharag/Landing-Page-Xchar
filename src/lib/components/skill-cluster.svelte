<script lang="ts">
	import { Badge } from "$lib/components/ui/badge/index.js";
	import * as Card from "$lib/components/ui/card/index.js";

	type SkillClusterProps = {
		title: string;
		description: string;
		skills: string[];
	};

	let { title, description, skills }: SkillClusterProps = $props();
</script>

<Card.Root class="border-border/60 bg-card/80 h-full border shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm">
	<Card.Header class="space-y-3 px-6 pt-6">
		<Card.Title class="font-display text-xl font-semibold">{title}</Card.Title>
		<Card.Description class="leading-relaxed">{description}</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-wrap gap-2 px-6 pb-6">
		{#each skills as skill}
			<Badge variant="secondary" class="rounded-full bg-secondary/80 px-3 py-1">
				{skill}
			</Badge>
		{/each}
	</Card.Content>
</Card.Root>
