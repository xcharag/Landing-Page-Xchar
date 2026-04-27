<script lang="ts">
	import { browser } from "$app/environment";
	import GraduationCapIcon from "@lucide/svelte/icons/graduation-cap";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import BriefcaseIcon from "@lucide/svelte/icons/briefcase-business";
	import GlobeIcon from "@lucide/svelte/icons/globe";
	import MapPinnedIcon from "@lucide/svelte/icons/map-pinned";
	import MailIcon from "@lucide/svelte/icons/mail";
	import MessageCircleIcon from "@lucide/svelte/icons/message-circle";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import PhoneIcon from "@lucide/svelte/icons/phone";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import SunIcon from "@lucide/svelte/icons/sun-medium";
	import UsersIcon from "@lucide/svelte/icons/users";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import SectionHeader from "$lib/components/section-header.svelte";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import {
		type Locale,
		certifications,
		heroCloud,
		metrics,
		personalTags,
		skillGroups,
		tickerItems,
		timeline,
		ui,
		workModes,
	} from "$lib/data/profile";

	type ThemeMode = "dark" | "light";

	let locale = $state<Locale>("es");
	let theme = $state<ThemeMode>("dark");
	let activeTimelineId = $state("microcom-mid");

	const tickerLoop = [...tickerItems, ...tickerItems];

	const activeTimeline = $derived.by(
		() => timeline.find((entry) => entry.id === activeTimelineId) ?? timeline[0]
	);

	function t(value: Record<Locale, string>) {
		return value[locale];
	}

	function applyTheme(nextTheme: ThemeMode) {
		theme = nextTheme;
	}

	function applyLocale(nextLocale: Locale) {
		locale = nextLocale;
	}

	onMount(() => {
		const storedTheme = localStorage.getItem("theme");
		const storedLocale = localStorage.getItem("locale");

		theme = storedTheme === "light" ? "light" : "dark";
		locale = storedLocale === "en" ? "en" : "es";
	});

	$effect(() => {
		if (!browser) return;

		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.lang = locale;
		localStorage.setItem("theme", theme);
		localStorage.setItem("locale", locale);
	});
</script>

<svelte:head>
	<title>{t(ui.metaTitle)}</title>
	<meta name="description" content={t(ui.metaDescription)} />
</svelte:head>

<main class="relative overflow-x-clip pb-20">
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div class="ambient-grid absolute inset-x-0 top-0 h-[88rem]"></div>
		<div class="hero-orb left-[-10rem] top-0 h-72 w-72 bg-cyan-400/18"></div>
		<div class="hero-orb right-[-8rem] top-16 h-80 w-80 bg-sky-500/16"></div>
		<div class="hero-orb left-[42%] top-[38rem] h-72 w-72 bg-amber-400/14"></div>
	</div>

	<header class="sticky top-0 z-40">
		<div class="content-shell pt-4">
			<div class="glass-panel flex items-center justify-between gap-4 rounded-full border px-4 py-3 shadow-soft">
				<div class="flex min-w-0 items-center gap-3">
					<div class="brand-chip">XC</div>
					<div class="min-w-0">
						<p class="truncate text-sm font-semibold">Oscar Aguilar</p>
						<p class="text-muted-foreground truncate text-xs">
							{locale === "es" ? "Desarrollador de software" : "Software Developer"}
						</p>
					</div>
				</div>

				<nav class="hidden items-center gap-5 text-sm font-medium lg:flex">
					<a class="nav-link" href="#timeline">{t(ui.nav.timeline)}</a>
					<a class="nav-link" href="#stack">{t(ui.nav.stack)}</a>
					<div class="flex items-center gap-0.5">
						<a href="https://github.com/xcharag" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="GitHub">
							<svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.742 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
						</a>
						<a href="https://www.linkedin.com/in/oscar-aguilar-xchar/" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="LinkedIn">
							<svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
						</a>
					</div>
					<Button href="#contact" size="sm" class="rounded-full shadow-soft-strong">
						{t(ui.nav.contact)}
					</Button>
				</nav>

				<div class="flex items-center gap-2">
					<div class="segmented-control hidden sm:flex">
						<button
							type="button"
							class:segmented-active={locale === "es"}
							onclick={() => applyLocale("es")}
						>
							{t(ui.labels.langSpanish)}
						</button>
						<button
							type="button"
							class:segmented-active={locale === "en"}
							onclick={() => applyLocale("en")}
						>
							{t(ui.labels.langEnglish)}
						</button>
					</div>

					<div class="segmented-control">
						<button
							type="button"
							class:segmented-active={theme === "dark"}
							onclick={() => applyTheme("dark")}
						>
							<MoonIcon class="size-4" />
							<span class="hidden sm:inline">{t(ui.labels.themeDark)}</span>
						</button>
						<button
							type="button"
							class:segmented-active={theme === "light"}
							onclick={() => applyTheme("light")}
						>
							<SunIcon class="size-4" />
							<span class="hidden sm:inline">{t(ui.labels.themeLight)}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</header>

	<section class="section-space pt-10 sm:pt-14">
		<div class="content-shell">
			<div class="grid gap-10 xl:grid-cols-[0.94fr_1.06fr] xl:items-center">
				<div class="space-y-8">
					<div class="fade-up flex flex-wrap gap-3">
						{#each ui.hero.availability as item}
							<Badge variant="outline" class="rounded-full bg-background/70 px-3 py-1 uppercase tracking-[0.18em]">
								{t(item)}
							</Badge>
						{/each}
					</div>

					<div class="fade-up space-y-6" style="animation-delay: 80ms;">
						<p class="text-primary/80 text-sm font-semibold uppercase tracking-[0.28em]">
							{t(ui.hero.eyebrow)}
						</p>
						<div class="space-y-3">
							<h1 class="font-display text-5xl leading-[0.88] font-bold sm:text-6xl xl:text-7xl">
								Oscar<br />Aguilar
							</h1>
							<div class="flex flex-wrap items-center gap-x-3 gap-y-1">
								<span class="font-mono text-primary text-sm tracking-[0.22em]">@xchar</span>
								<span class="select-none text-border/80">·</span>
								<span class="text-muted-foreground text-sm">Santa Cruz, Bolivia</span>
							</div>
						</div>
						<p class="max-w-2xl text-lg font-medium leading-snug sm:text-xl">
							{t(ui.hero.title)}
						</p>
						<p class="text-muted-foreground max-w-2xl text-base leading-relaxed">
							{t(ui.hero.summary)}
						</p>
					</div>

					<div class="fade-up flex flex-wrap gap-4" style="animation-delay: 140ms;">
						<Button href="#timeline" size="lg" class="shadow-soft-strong">
							{t(ui.hero.primaryAction)}
							<ArrowRightIcon class="size-4" />
						</Button>
						<Button href="#stack" size="lg" variant="outline" class="bg-background/60">
							{t(ui.hero.secondaryAction)}
						</Button>
					</div>

					<div class="fade-up grid gap-3 sm:grid-cols-3" style="animation-delay: 180ms;">
						{#each ui.hero.quickFacts as fact}
							<div class="mini-panel">
								<p class="text-sm leading-relaxed">{t(fact)}</p>
							</div>
						{/each}
					</div>
				</div>

				<div class="fade-up xl:justify-self-end" style="animation-delay: 120ms;">
					<div class="hero-stage">
						<div class="hero-ring hero-ring-one"></div>
						<div class="hero-ring hero-ring-two"></div>
						<div class="hero-ring hero-ring-three"></div>

						<div class="relative flex h-full flex-col justify-between">
							<div class="flex items-start justify-between gap-4">
								<div>
									<p class="text-primary/80 text-xs font-semibold uppercase tracking-[0.24em]">
										{t(ui.hero.statusLabel)}
									</p>
									<p class="mt-2 font-display text-2xl font-semibold">{t(ui.hero.statusValue)}</p>
								</div>
								<div class="location-pill">
									<MapPinnedIcon class="size-4" />
									<span>SCZ</span>
								</div>
							</div>

							<div class="hero-core">
								<p class="font-display text-6xl font-semibold">55%</p>
								<p class="text-muted-foreground text-sm uppercase tracking-[0.2em]">
									{t(metrics[0].label)}
								</p>
								<p class="mt-3 text-center text-sm leading-relaxed text-foreground/75">
									{t(metrics[0].note)}
								</p>
							</div>

							{#each heroCloud as chip}
								<div class={`tech-chip ${chip.className}`}>{chip.label}</div>
							{/each}

							<div class="grid gap-3 sm:grid-cols-2">
								<div class="mini-panel">
									<p class="text-xs uppercase tracking-[0.18em] text-primary/80">Microcom-TI</p>
									<p class="mt-2 text-sm font-medium">EDI+ / SISCON SaaS / liderazgo</p>
								</div>
								<div class="mini-panel">
									<p class="text-xs uppercase tracking-[0.18em] text-primary/80">UPSA</p>
									<p class="mt-2 text-sm font-medium">NIBU / C# Web API / refactor</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{#each metrics as metric}
					<Card.Root class="metric-panel">
						<Card.Content class="space-y-4 px-5 py-5">
							<p class="font-display text-4xl leading-none font-semibold">{metric.value}</p>
							<div class="space-y-2">
								<p class="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/75">
									{t(metric.label)}
								</p>
								<p class="text-muted-foreground text-sm leading-relaxed">
									{t(metric.note)}
								</p>
							</div>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</section>

	<section class="pb-8">
		<div class="content-shell">
			<div class="ticker-shell">
				<div class="ticker-track">
					{#each tickerLoop as item}
						<span class="ticker-item">{item}</span>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="section-anchor section-space" id="timeline">
		<div class="content-shell space-y-10">
			<SectionHeader
				eyebrow={t(ui.timeline.eyebrow)}
				title={t(ui.timeline.title)}
				intro={t(ui.timeline.intro)}
			/>

			<div class="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
				<div class="glass-panel rounded-[2rem] border p-4 sm:p-5">
					<div class="space-y-3">
						{#each timeline as entry, index}
							<button
								type="button"
								class={`timeline-button ${activeTimelineId === entry.id ? "timeline-button-active" : ""}`}
								onclick={() => (activeTimelineId = entry.id)}
							>
								<div class="timeline-rail">
									<div class={`timeline-dot ${activeTimelineId === entry.id ? "timeline-dot-active" : ""}`}></div>
									{#if index !== timeline.length - 1}
										<div class="timeline-line"></div>
									{/if}
								</div>

								<div class="min-w-0 flex-1 text-left">
									<div class="flex flex-wrap items-center gap-2">
										<Badge variant="outline" class="rounded-full bg-background/55">
											{t(ui.labels[entry.kind])}
										</Badge>
										<Badge
											class={entry.state === "active"
												? "rounded-full bg-primary/14 text-primary"
												: "rounded-full bg-secondary text-secondary-foreground"}
										>
											{t(ui.labels[entry.state])}
										</Badge>
									</div>
									<p class="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
										{t(entry.period)}
									</p>
									<p class="mt-2 font-display text-xl font-semibold">{t(entry.title)}</p>
									<p class="text-sm font-medium text-foreground/75">{entry.company}</p>
									<p class="text-muted-foreground mt-2 text-sm leading-relaxed">
										{t(entry.teaser)}
									</p>
								</div>
							</button>
						{/each}
					</div>
				</div>

				{#key activeTimeline.id}
					<div in:fly={{ y: 16, duration: 220 }} out:fly={{ y: -12, duration: 160 }}>
						<Card.Root class="glass-panel overflow-hidden rounded-[2rem] border shadow-soft">
							<Card.Header class="space-y-5 px-6 pt-6 sm:px-8 sm:pt-8">
							<div class="flex flex-wrap items-center gap-2">
								<Badge variant="outline" class="rounded-full bg-background/55">
									{t(ui.timeline.activeLabel)}
								</Badge>
								<Badge
									class={activeTimeline.state === "active"
										? "rounded-full bg-primary/14 text-primary"
										: "rounded-full bg-secondary text-secondary-foreground"}
								>
									{t(ui.labels[activeTimeline.state])}
								</Badge>
							</div>

							<div class="grid gap-4 lg:grid-cols-[0.84fr_0.16fr]">
								<div class="space-y-4">
									<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
										{t(activeTimeline.period)}
									</p>
									<h2 class="font-display text-3xl leading-tight font-semibold sm:text-4xl">
										{t(activeTimeline.title)}
									</h2>
									<p class="text-muted-foreground text-lg leading-relaxed">{t(activeTimeline.summary)}</p>
								</div>

								<div class="hidden items-start justify-end lg:flex">
									<div class="grid size-14 place-items-center rounded-2xl border border-border/80 bg-background/60">
										{#if activeTimeline.kind === "internship"}
											<GraduationCapIcon class="size-6 text-primary" />
										{:else if activeTimeline.kind === "promotion"}
											<SparklesIcon class="size-6 text-primary" />
										{:else}
											<BriefcaseIcon class="size-6 text-primary" />
										{/if}
									</div>
								</div>
							</div>
							</Card.Header>

							<Card.Content class="grid gap-6 px-6 pb-6 sm:px-8 sm:pb-8 lg:grid-cols-[1fr_0.92fr]">
							<div class="detail-panel">
								<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
									{activeTimeline.company}
								</p>
								<ul class="mt-4 space-y-3">
									{#each activeTimeline.bullets as bullet}
										<li class="flex gap-3 text-sm leading-relaxed text-muted-foreground">
											<span class="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary"></span>
											<span>{t(bullet)}</span>
										</li>
									{/each}
								</ul>
							</div>

							<div class="space-y-4">
								<div class="detail-panel">
									<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
										{t(ui.timeline.tagsLabel)}
									</p>
									<div class="mt-4 flex flex-wrap gap-2">
										{#each activeTimeline.tags as tag}
											<Badge variant="secondary" class="rounded-full bg-secondary/70 px-3 py-1">
												{tag}
											</Badge>
										{/each}
									</div>
								</div>

								<div class="detail-panel">
									<div class="flex items-center gap-2 text-sm font-medium">
										<UsersIcon class="size-4 text-primary" />
										<span>{locale === "es" ? "Lectura rápida" : "Quick read"}</span>
									</div>
									<p class="mt-3 text-sm leading-relaxed text-muted-foreground">
										{t(activeTimeline.teaser)}
									</p>
								</div>
							</div>
							</Card.Content>
						</Card.Root>
					</div>
				{/key}
			</div>
		</div>
	</section>

	<section class="section-anchor section-space" id="stack">
		<div class="content-shell space-y-10">
			<SectionHeader
				eyebrow={t(ui.stack.eyebrow)}
				title={t(ui.stack.title)}
				intro={t(ui.stack.intro)}
			/>

			<div class="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
				<div class="grid gap-4 md:grid-cols-2">
					{#each skillGroups as group}
						<Card.Root class="glass-panel rounded-[1.6rem] border">
							<Card.Content class="space-y-4 px-5 py-5">
								<p class="font-display text-2xl font-semibold">{t(group.title)}</p>
								<div class="flex flex-wrap gap-2">
									{#each group.skills as skill}
										<Badge variant="outline" class="rounded-full bg-background/55 px-3 py-1">
											{skill}
										</Badge>
									{/each}
								</div>
							</Card.Content>
						</Card.Root>
					{/each}
				</div>

				<div class="grid gap-4">
					<Card.Root class="glass-panel rounded-[1.8rem] border">
						<Card.Header class="space-y-3 px-6 pt-6">
							<div class="flex items-center gap-2">
								<GlobeIcon class="size-4 text-primary" />
								<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
									{locale === "es" ? "Certificaciones" : "Certifications"}
								</p>
							</div>
							<Card.Title class="font-display text-3xl font-semibold">
								{locale === "es" ? "Lo formal también suma." : "The formal side matters too."}
							</Card.Title>
						</Card.Header>

						<Card.Content class="grid gap-3 px-6 pb-6">
							{#each certifications as certification}
								<div class="mini-panel flex items-center justify-between gap-4">
									<div class="min-w-0">
										<p class="truncate font-medium">{certification.name}</p>
										<p class="text-muted-foreground text-sm">{t(certification.note)}</p>
									</div>
									<Badge
										class={t(certification.status) === "En curso" || t(certification.status) === "In progress"
											? "rounded-full bg-amber-400/16 text-amber-500"
											: "rounded-full bg-primary/14 text-primary"}
									>
										{t(certification.status)}
									</Badge>
								</div>
							{/each}
						</Card.Content>
					</Card.Root>

					<Card.Root class="glass-panel rounded-[1.8rem] border">
						<Card.Content class="grid gap-5 px-6 py-6 md:grid-cols-2">
							<div class="space-y-4">
								<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
									{locale === "es" ? "Cómo trabajo" : "How I work"}
								</p>
								<div class="flex flex-wrap gap-2">
									{#each workModes as mode}
										<Badge variant="secondary" class="rounded-full bg-secondary/70 px-3 py-1">
											{t(mode)}
										</Badge>
									{/each}
								</div>
							</div>

							<div class="space-y-4">
								<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
									{locale === "es" ? "Fuera del código" : "Outside code"}
								</p>
								<div class="flex flex-wrap gap-2">
									{#each personalTags as tag}
										<Badge variant="outline" class="rounded-full bg-background/55 px-3 py-1">
											{tag}
										</Badge>
									{/each}
								</div>
							</div>
						</Card.Content>
					</Card.Root>
				</div>
			</div>
		</div>
	</section>

	<section class="section-anchor section-space" id="contact">
		<div class="content-shell space-y-10">
			<SectionHeader
				eyebrow={t(ui.close.eyebrow)}
				title={t(ui.close.title)}
				intro={t(ui.close.summary)}
			/>

			<div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
				{#each ui.close.pills as pill}
					<div class="mini-panel flex items-center gap-3">
						<span class="size-2 shrink-0 rounded-full bg-primary"></span>
						<p class="text-sm font-medium">{t(pill)}</p>
					</div>
				{/each}
			</div>

			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				<a
					href="mailto:odaguilarsoliz@gmail.com"
					class="contact-option-card group"
				>
					<div class="contact-option-icon">
						<MailIcon class="size-6 text-primary" />
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
							{locale === "es" ? "Contáctame por" : "Contact me via"}
						</p>
						<p class="font-display mt-1 text-2xl font-semibold">Email</p>
						<p class="text-muted-foreground mt-2 truncate text-sm">odaguilarsoliz@gmail.com</p>
					</div>
					<ArrowRightIcon class="size-5 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
				</a>

				<a
					href="https://wa.link/v27ges"
					target="_blank"
					rel="noopener noreferrer"
					class="contact-option-card group"
				>
					<div class="contact-option-icon">
						<MessageCircleIcon class="size-6 text-primary" />
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
							{locale === "es" ? "Contáctame por" : "Contact me via"}
						</p>
						<p class="font-display mt-1 text-2xl font-semibold">WhatsApp</p>
						<p class="text-muted-foreground mt-2 text-sm">+591 69193459</p>
					</div>
					<ArrowRightIcon class="size-5 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
				</a>

				<a
					href="tel:+59169193459"
					class="contact-option-card group"
				>
					<div class="contact-option-icon">
						<PhoneIcon class="size-6 text-primary" />
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
							{locale === "es" ? "Contáctame por" : "Contact me via"}
						</p>
						<p class="font-display mt-1 text-2xl font-semibold">
							{locale === "es" ? "Teléfono" : "Phone"}
						</p>
						<p class="text-muted-foreground mt-2 text-sm">+591 69193459</p>
					</div>
					<ArrowRightIcon class="size-5 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
				</a>
			</div>

			<div class="grid gap-5 sm:grid-cols-2">
				<a
					href="https://www.linkedin.com/in/oscar-aguilar-xchar/"
					target="_blank"
					rel="noopener noreferrer"
					class="contact-option-card group"
				>
					<div class="contact-option-icon">
						<svg class="size-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">LinkedIn</p>
						<p class="font-display mt-1 text-2xl font-semibold">Oscar Aguilar</p>
						<p class="text-muted-foreground mt-2 text-sm">oscar-aguilar-xchar</p>
					</div>
					<ArrowRightIcon class="size-5 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
				</a>

				<a
					href="https://github.com/xcharag"
					target="_blank"
					rel="noopener noreferrer"
					class="contact-option-card group"
				>
					<div class="contact-option-icon">
						<svg class="size-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.742 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">GitHub</p>
						<p class="font-display mt-1 text-2xl font-semibold">xcharag</p>
						<p class="text-muted-foreground mt-2 text-sm">@xcharag</p>
					</div>
					<ArrowRightIcon class="size-5 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
				</a>
			</div>
		</div>
	</section>
</main>
