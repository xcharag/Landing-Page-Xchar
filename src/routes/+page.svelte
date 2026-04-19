<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import Building2Icon from "@lucide/svelte/icons/building-2";
	import CloudCogIcon from "@lucide/svelte/icons/cloud-cog";
	import CodeIcon from "@lucide/svelte/icons/code";
	import Gamepad2Icon from "@lucide/svelte/icons/gamepad-2";
	import MapPinnedIcon from "@lucide/svelte/icons/map-pinned";
	import MonitorSmartphoneIcon from "@lucide/svelte/icons/monitor-smartphone";
	import RocketIcon from "@lucide/svelte/icons/rocket";
	import ShieldCheckIcon from "@lucide/svelte/icons/shield-check";
	import UsersIcon from "@lucide/svelte/icons/users";
	import WorkflowIcon from "@lucide/svelte/icons/workflow";
	import MetricCard from "$lib/components/metric-card.svelte";
	import OfferCard from "$lib/components/offer-card.svelte";
	import ProjectCard from "$lib/components/project-card.svelte";
	import SectionHeader from "$lib/components/section-header.svelte";
	import SkillCluster from "$lib/components/skill-cluster.svelte";
	import * as Accordion from "$lib/components/ui/accordion/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import {
		capabilityTabs,
		certifications,
		experiences,
		faqs,
		metrics,
		offers,
		personalHighlights,
		profile,
		skillGroups,
		workSignals,
	} from "$lib/data/profile";

	let activeCapability = $state(capabilityTabs[0]?.id ?? "build");
	let activeFaq = $state(faqs[0]?.id ?? "work");
</script>

<svelte:head>
	<title>Software Developer | C#, Svelte, Python, Angular</title>
	<meta
		name="description"
		content="Software developer based in Santa Cruz, Bolivia, building operational software with C#, Svelte, Python, and Angular."
	/>
</svelte:head>

<main class="relative overflow-x-clip pb-16">
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div class="ambient-grid absolute inset-x-0 top-0 h-[72rem]"></div>
		<div
			class="hero-orb left-[-9rem] top-8 h-72 w-72 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.32),transparent_70%)]"
		></div>
		<div
			class="hero-orb right-[-6rem] top-20 h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.28),transparent_72%)]"
		></div>
		<div
			class="hero-orb left-[35%] top-[34rem] h-64 w-64 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_70%)]"
		></div>
	</div>

	<header class="sticky top-0 z-40">
		<div class="content-shell pt-4">
			<div
				class="glass-panel mx-auto flex items-center justify-between gap-4 rounded-full border px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
			>
				<div class="flex min-w-0 items-center gap-3">
					<div
						class="bg-primary text-primary-foreground grid size-10 shrink-0 place-items-center rounded-full font-display text-sm font-semibold"
					>
						BO
					</div>
					<div class="min-w-0">
						<p class="truncate text-sm font-semibold">Software Developer</p>
						<p class="text-muted-foreground truncate text-xs">Santa Cruz, Bolivia</p>
					</div>
				</div>

				<nav class="hidden items-center gap-6 text-sm font-medium md:flex">
					<a class="hover:text-foreground/70 transition-colors" href="#experience">Experience</a>
					<a class="hover:text-foreground/70 transition-colors" href="#stack">Stack</a>
					<a class="hover:text-foreground/70 transition-colors" href="#availability">Availability</a>
				</nav>

				<Button href="#availability" size="sm" class="hidden md:inline-flex">
					Let&apos;s work
					<ArrowRightIcon class="size-4" />
				</Button>
			</div>
		</div>
	</header>

	<section class="section-space pt-10 sm:pt-16">
		<div class="content-shell">
			<div class="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
				<div class="fade-up space-y-8">
					<div class="flex flex-wrap gap-3">
						{#each profile.availability as item}
							<Badge
								variant="outline"
								class="border-primary/18 rounded-full bg-white/60 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em]"
							>
								{item}
							</Badge>
						{/each}
					</div>

					<div class="space-y-5">
						<p class="text-primary/70 text-sm font-semibold uppercase tracking-[0.3em]">
							C# • Svelte • Python • Angular
						</p>
						<h1
							class="font-display max-w-4xl text-5xl leading-[0.95] font-semibold sm:text-6xl lg:text-7xl"
						>
							{profile.title}
						</h1>
						<p class="text-muted-foreground max-w-2xl text-lg leading-relaxed sm:text-xl">
							{profile.summary}
						</p>
					</div>

					<div class="flex flex-wrap gap-4">
						<Button href="#experience" size="lg" class="shadow-[0_16px_32px_rgba(59,130,246,0.22)]">
							Explore experience
							<ArrowRightIcon class="size-4" />
						</Button>
						<Button href="#availability" variant="outline" size="lg" class="bg-white/65">
							How I work
						</Button>
					</div>

					<div class="text-muted-foreground flex flex-wrap gap-6 text-sm leading-relaxed">
						<div class="flex items-center gap-2">
							<MapPinnedIcon class="text-primary size-4" />
							<span>{profile.location}</span>
						</div>
						<div class="flex items-center gap-2">
							<UsersIcon class="text-primary size-4" />
							<span>Leadership and delivery ownership</span>
						</div>
						<div class="flex items-center gap-2">
							<RocketIcon class="text-primary size-4" />
							<span>Open to remote, part-time, and negotiable work</span>
						</div>
					</div>
				</div>

				<div class="fade-up space-y-5 lg:pt-8" style="animation-delay: 120ms;">
					<Card.Root class="glass-panel border px-0 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
						<Card.Header class="space-y-4 px-6 pt-6">
							<div class="flex flex-wrap gap-2">
								<Badge class="bg-primary/12 text-primary rounded-full">Operational software</Badge>
								<Badge class="bg-accent text-accent-foreground rounded-full">Reusable systems</Badge>
							</div>
							<div class="space-y-3">
								<Card.Title class="font-display text-2xl font-semibold">
									Delivery snapshot
								</Card.Title>
								<Card.Description class="text-sm leading-relaxed sm:text-base">
									I combine implementation, product thinking, team coordination, and deployment ownership
									when the project needs more than a single coding lane.
								</Card.Description>
							</div>
						</Card.Header>

						<Card.Content class="space-y-6 px-6 pb-6">
							<div class="grid gap-4 sm:grid-cols-2">
								<div class="bg-background/80 rounded-2xl border p-4">
									<div class="mb-3 flex items-center gap-3">
										<div class="bg-primary/12 grid size-10 place-items-center rounded-xl">
											<CodeIcon class="text-primary size-5" />
										</div>
										<p class="font-semibold">Build</p>
									</div>
									<p class="text-muted-foreground text-sm leading-relaxed">
										Custom systems, SaaS-ready products, and front-end components built for real usage.
									</p>
								</div>

								<div class="bg-background/80 rounded-2xl border p-4">
									<div class="mb-3 flex items-center gap-3">
										<div class="bg-primary/12 grid size-10 place-items-center rounded-xl">
											<WorkflowIcon class="text-primary size-5" />
										</div>
										<p class="font-semibold">Integrate</p>
									</div>
									<p class="text-muted-foreground text-sm leading-relaxed">
										Traceability-heavy workflows, ERP-connected flows, and smoother operator experience.
									</p>
								</div>

								<div class="bg-background/80 rounded-2xl border p-4">
									<div class="mb-3 flex items-center gap-3">
										<div class="bg-primary/12 grid size-10 place-items-center rounded-xl">
											<UsersIcon class="text-primary size-5" />
										</div>
										<p class="font-semibold">Lead</p>
									</div>
									<p class="text-muted-foreground text-sm leading-relaxed">
										Small-team coordination, product ownership, and practical planning for delivery.
									</p>
								</div>

								<div class="bg-background/80 rounded-2xl border p-4">
									<div class="mb-3 flex items-center gap-3">
										<div class="bg-primary/12 grid size-10 place-items-center rounded-xl">
											<CloudCogIcon class="text-primary size-5" />
										</div>
										<p class="font-semibold">Operate</p>
									</div>
									<p class="text-muted-foreground text-sm leading-relaxed">
										Deployment, infrastructure structure, maintenance, and refactoring for live systems.
									</p>
								</div>
							</div>

							<Separator class="bg-border/70" />

							<div class="space-y-3">
								<div class="flex items-center justify-between gap-4">
									<p class="text-sm font-semibold">Current stack focus</p>
									<p class="text-muted-foreground text-xs uppercase tracking-[0.18em]">Today</p>
								</div>
								<div class="flex flex-wrap gap-2">
									{#each profile.highlightStack as skill}
										<Badge variant="secondary" class="rounded-full bg-secondary/80 px-3 py-1">
											{skill}
										</Badge>
									{/each}
								</div>
							</div>
						</Card.Content>
					</Card.Root>

					<Card.Root class="border-border/60 bg-card/82 border shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm">
						<Card.Content class="space-y-3 px-6 py-6">
							<p class="text-primary/70 text-xs font-semibold uppercase tracking-[0.18em]">
								Faster project starts
							</p>
							<p class="font-display text-2xl font-semibold">
								I can accelerate new solutions with systems I&apos;ve already built.
							</p>
							<p class="text-muted-foreground text-sm leading-relaxed">
								{profile.offerNote}
							</p>
						</Card.Content>
					</Card.Root>
				</div>
			</div>

			<div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{#each metrics as metric}
					<MetricCard value={metric.value} label={metric.label} detail={metric.detail} />
				{/each}
			</div>
		</div>
	</section>

	<section class="section-anchor pb-8" id="signals">
		<div class="content-shell">
			<SectionHeader
				eyebrow="Selected Work"
				title="The kind of environments I have already shipped for."
				intro="Most of my work sits close to the business: accounting flows, ERP-linked logistics, productized systems, and mobile backend modernization."
			/>

			<div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{#each workSignals as signal}
					<Card.Root class="border-border/60 bg-card/80 h-full border shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm">
						<Card.Header class="space-y-3 px-6 pt-6">
							<Badge variant="outline" class="w-fit rounded-full">{signal.context}</Badge>
							<Card.Title class="font-display text-xl font-semibold">{signal.name}</Card.Title>
						</Card.Header>
						<Card.Content class="px-6 pb-6">
							<p class="text-muted-foreground text-sm leading-relaxed">{signal.summary}</p>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</section>

	<section class="section-anchor section-space" id="experience">
		<div class="content-shell space-y-12">
			<SectionHeader
				eyebrow="Experience"
				title="Hands-on delivery, product ownership, and backend modernization."
				intro="I have worked across custom enterprise software, SaaS structuring, ERP-connected workflows, and backend refactors where the goal is not only to ship features but to make the system easier to operate."
			/>

			<div class="space-y-8">
				{#each experiences as experience}
					<Card.Root class="glass-panel border px-0 shadow-[0_22px_70px_rgba(15,23,42,0.07)]">
						<Card.Header class="space-y-6 px-6 pt-6">
							<div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
								<div class="max-w-3xl space-y-4">
									<Badge class="bg-primary/12 text-primary w-fit rounded-full">
										{experience.role}
									</Badge>
									<div class="space-y-3">
										<Card.Title class="font-display text-3xl leading-tight font-semibold">
											{experience.company}
										</Card.Title>
										<Card.Description class="text-sm leading-relaxed sm:text-base">
											{experience.summary}
										</Card.Description>
									</div>
								</div>

								<div class="bg-background/80 max-w-sm rounded-2xl border p-4">
									<p class="text-primary/70 text-xs font-semibold uppercase tracking-[0.18em]">
										Leadership
									</p>
									<p class="mt-3 text-sm leading-relaxed">{experience.leadership}</p>
								</div>
							</div>

							<div class="grid gap-3 md:grid-cols-3">
								{#each experience.highlights as item}
									<div class="bg-background/70 rounded-2xl border p-4 text-sm leading-relaxed">
										{item}
									</div>
								{/each}
							</div>
						</Card.Header>

						<Card.Content class="px-6 pb-6">
							<div class="grid gap-5 xl:grid-cols-3">
								{#each experience.projects as project}
									<ProjectCard
										title={project.title}
										client={project.client}
										role={project.role}
										impact={project.impact}
										summary={project.summary}
										highlights={project.highlights}
										tags={project.tags}
									/>
								{/each}
							</div>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</section>

	<section class="section-space">
		<div class="content-shell space-y-10">
			<SectionHeader
				eyebrow="Capabilities"
				title="I can build, lead, and keep the software operating after launch."
				intro="The work I enjoy most is where technical implementation, user experience, and operational clarity need to come together."
				align="center"
			/>

			<Tabs.Root bind:value={activeCapability} class="gap-8">
				<Tabs.List
					variant="line"
					class="bg-background/70 mx-auto grid w-full max-w-2xl grid-cols-3 rounded-full border p-2"
				>
					{#each capabilityTabs as tab}
						<Tabs.Trigger value={tab.id} class="rounded-full text-sm">
							{tab.label}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>

				{#each capabilityTabs as tab}
					<Tabs.Content value={tab.id}>
						<Card.Root class="glass-panel border px-0 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
							<Card.Content class="grid gap-8 px-6 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
								<div class="space-y-4">
									<p class="text-primary/70 text-xs font-semibold uppercase tracking-[0.18em]">
										{tab.label}
									</p>
									<h3 class="font-display text-3xl leading-tight font-semibold">{tab.title}</h3>
									<p class="text-muted-foreground text-base leading-relaxed">{tab.summary}</p>
								</div>

								<div class="grid gap-3 sm:grid-cols-2">
									{#each tab.items as item}
										<div class="bg-background/75 rounded-2xl border p-4 text-sm leading-relaxed">
											{item}
										</div>
									{/each}
								</div>
							</Card.Content>
						</Card.Root>
					</Tabs.Content>
				{/each}
			</Tabs.Root>
		</div>
	</section>

	<section class="section-anchor section-space" id="stack">
		<div class="content-shell space-y-10">
			<SectionHeader
				eyebrow="Stack"
				title="Core technologies and delivery strengths."
				intro="I keep my technical range focused on tools that help me ship production-ready software and reusable front-end systems."
			/>

			<div class="grid gap-4 lg:grid-cols-2">
				{#each skillGroups as group}
					<SkillCluster
						title={group.title}
						description={group.description}
						skills={group.skills}
					/>
				{/each}
			</div>
		</div>
	</section>

	<section class="section-space">
		<div class="content-shell grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
			<div class="space-y-8">
				<SectionHeader
					eyebrow="Certifications"
					title="Formal learning that supports the day-to-day work."
					intro="I already hold cloud, GitHub, and database certifications, and I am continuing to strengthen my architecture practice in C#."
				/>

				<div class="grid gap-4 md:grid-cols-2">
					{#each certifications as certification}
						<Card.Root class="border-border/60 bg-card/82 border shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm">
							<Card.Content class="space-y-4 px-6 py-6">
								<div class="flex items-start justify-between gap-4">
									<div class="space-y-2">
										<p class="font-display text-xl font-semibold">{certification.name}</p>
										<p class="text-muted-foreground text-sm leading-relaxed">
											{certification.detail}
										</p>
									</div>
									<Badge
										class={certification.status === "Certified"
											? "bg-primary/12 text-primary rounded-full"
											: "bg-accent text-accent-foreground rounded-full"}
									>
										{certification.status}
									</Badge>
								</div>
							</Card.Content>
						</Card.Root>
					{/each}
				</div>
			</div>

			<Card.Root class="glass-panel border px-0 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
				<Card.Header class="space-y-4 px-6 pt-6">
					<div class="flex flex-wrap gap-2">
						<Badge class="bg-primary/12 text-primary rounded-full">About me</Badge>
						<Badge variant="outline" class="rounded-full">Outside work</Badge>
					</div>
					<Card.Title class="font-display text-3xl font-semibold">
						I also like the human side of a personal page.
					</Card.Title>
					<Card.Description class="text-sm leading-relaxed sm:text-base">
						I want the page to feel professional without hiding personality, because clients and teams are
						still working with a person, not only a stack.
					</Card.Description>
				</Card.Header>

				<Card.Content class="space-y-6 px-6 pb-6">
					<div class="grid gap-4 sm:grid-cols-2">
						<div class="bg-background/78 rounded-2xl border p-4">
							<div class="mb-3 flex items-center gap-3">
								<div class="bg-primary/12 grid size-10 place-items-center rounded-xl">
									<Building2Icon class="text-primary size-5" />
								</div>
								<p class="font-semibold">Work style</p>
							</div>
							<ul class="space-y-3">
								{#each profile.identity as item}
									<li class="text-muted-foreground text-sm leading-relaxed">{item}</li>
								{/each}
							</ul>
						</div>

						<div class="bg-background/78 rounded-2xl border p-4">
							<div class="mb-3 flex items-center gap-3">
								<div class="bg-primary/12 grid size-10 place-items-center rounded-xl">
									<Gamepad2Icon class="text-primary size-5" />
								</div>
								<p class="font-semibold">Off the clock</p>
							</div>
							<div class="flex flex-wrap gap-2">
								<Badge variant="secondary" class="rounded-full bg-secondary/80">League of Legends</Badge>
								<Badge variant="secondary" class="rounded-full bg-secondary/80">Rainbow Six Siege</Badge>
								<Badge variant="secondary" class="rounded-full bg-secondary/80">Minecraft</Badge>
								<Badge variant="secondary" class="rounded-full bg-secondary/80">Age of Empires II HD</Badge>
							</div>
						</div>
					</div>

					<Separator class="bg-border/70" />

					<ul class="space-y-3">
						{#each personalHighlights as item}
							<li class="text-muted-foreground flex gap-3 text-sm leading-relaxed">
								<span class="bg-primary mt-2 inline-block size-1.5 shrink-0 rounded-full"></span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</Card.Content>
			</Card.Root>
		</div>
	</section>

	<section class="section-anchor section-space" id="availability">
		<div class="content-shell space-y-10">
			<SectionHeader
				eyebrow="Availability"
				title="Open to building, improving, or productizing business software."
				intro="If the project needs clean implementation, practical product thinking, or someone who can accelerate delivery from an existing foundation, I am open to discussing it."
			/>

			<div class="grid gap-4 xl:grid-cols-3">
				{#each offers as offer}
					<OfferCard title={offer.title} summary={offer.summary} bullets={offer.bullets} />
				{/each}
			</div>

			<div class="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
				<Card.Root class="glass-panel border px-0 shadow-[0_22px_70px_rgba(15,23,42,0.07)]">
					<Card.Content class="space-y-6 px-6 py-6">
						<div class="space-y-3">
							<p class="text-primary/70 text-xs font-semibold uppercase tracking-[0.18em]">
								Why this page exists
							</p>
							<h3 class="font-display text-3xl leading-tight font-semibold">
								I want to make it easy to understand what I do and how I can help.
							</h3>
							<p class="text-muted-foreground text-base leading-relaxed">
								I do not want negotiation to feel intimidating. If the project is a fit, we can talk about
								scope, timing, salary, or project-based pricing in a practical way.
							</p>
						</div>

						<div class="grid gap-4 sm:grid-cols-2">
							<div class="bg-background/78 rounded-2xl border p-4">
								<div class="mb-3 flex items-center gap-3">
									<div class="bg-primary/12 grid size-10 place-items-center rounded-xl">
										<ShieldCheckIcon class="text-primary size-5" />
									</div>
									<p class="font-semibold">What I value</p>
								</div>
								<p class="text-muted-foreground text-sm leading-relaxed">
									Clarity, maintainability, and software that actually helps the people using it.
								</p>
							</div>

							<div class="bg-background/78 rounded-2xl border p-4">
								<div class="mb-3 flex items-center gap-3">
									<div class="bg-primary/12 grid size-10 place-items-center rounded-xl">
										<MonitorSmartphoneIcon class="text-primary size-5" />
									</div>
									<p class="font-semibold">Good fit projects</p>
								</div>
								<p class="text-muted-foreground text-sm leading-relaxed">
									Internal tools, operator-facing systems, web apps, and API-backed products that need
									better structure.
								</p>
							</div>
						</div>
					</Card.Content>
				</Card.Root>

				<Card.Root class="border-border/60 bg-card/82 border shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm">
					<Card.Header class="space-y-3 px-6 pt-6">
						<Card.Title class="font-display text-2xl font-semibold">
							Quick answers
						</Card.Title>
						<Card.Description class="leading-relaxed">
							A few details clients usually want to know before starting a conversation.
						</Card.Description>
					</Card.Header>

					<Card.Content class="px-6 pb-6">
						<Accordion.Root type="single" bind:value={activeFaq}>
							{#each faqs as faq}
								<Accordion.Item value={faq.id}>
									<Accordion.Trigger>{faq.question}</Accordion.Trigger>
									<Accordion.Content>
										<p class="text-muted-foreground leading-relaxed">{faq.answer}</p>
									</Accordion.Content>
								</Accordion.Item>
							{/each}
						</Accordion.Root>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</section>
</main>
