export type Locale = "es" | "en";

export type Localized = Record<Locale, string>;

export type Metric = {
	value: string;
	label: Localized;
	note: Localized;
};

export type TimelineEntry = {
	id: string;
	period: Localized;
	title: Localized;
	company: string;
	kind: "internship" | "role" | "promotion";
	state: "completed" | "active";
	teaser: Localized;
	summary: Localized;
	bullets: Localized[];
	tags: string[];
};

export type SkillGroup = {
	title: Localized;
	skills: string[];
};

export type Certification = {
	name: string;
	status: Localized;
	note: Localized;
};

export const ui = {
	metaTitle: {
		es: "Oscar Aguilar (xchar) · Desarrollador de software | C#, Svelte, Python",
		en: "Oscar Aguilar (xchar) · Software Developer | C#, Svelte, Python",
	},
	metaDescription: {
		es: "Oscar Aguilar, desarrollador en Santa Cruz, Bolivia. C#, Blazor, Web API, Svelte, Python y Angular.",
		en: "Oscar Aguilar, developer based in Santa Cruz, Bolivia. C#, Blazor, Web API, Svelte, Python, and Angular.",
	},
	nav: {
		services: { es: "Servicios", en: "Services" },
		timeline: { es: "Trayectoria", en: "Timeline" },
		stack: { es: "Stack", en: "Stack" },
		contact: { es: "Contacto", en: "Contact" },
	},
	hero: {
		eyebrow: {
			es: "C# / Svelte / Python / Angular",
			en: "C# / Svelte / Python / Angular",
		},
		title: {
			es: "Construyo software que ordena operaciones y baja fricción real.",
			en: "I build software that clarifies operations and removes real friction.",
		},
		summary: {
			es: "Integro ERPs, armo backends y construyo frontends que duran.",
			en: "I integrate ERPs, build backends, and craft frontends that last.",
		},
		primaryAction: {
			es: "Ver trayectoria",
			en: "View timeline",
		},
		secondaryAction: {
			es: "Ver stack",
			en: "See stack",
		},
		statusLabel: {
			es: "Activo ahora",
			en: "Active now",
		},
		statusValue: {
			es: "Microcom-TI + UPSA",
			en: "Microcom-TI + UPSA",
		},
		availability: [
			{
				es: "Remoto sin problema",
				en: "Remote-friendly",
			},
			{
				es: "Medio tiempo negociable",
				en: "Part-time negotiable",
			},
			{
				es: "Alcance y salario conversables",
				en: "Scope and salary negotiable",
			},
		],
		quickFacts: [
			{
				es: "Software que va a producción, no demos.",
				en: "Software that ships to production, not demos.",
			},
			{
				es: "Dos proyectos activos al mismo tiempo.",
				en: "Two active projects running in parallel.",
			},
			{
				es: "Me quedo hasta que el sistema funciona solo.",
				en: "I stay until the system runs on its own.",
			},
		],
	},
	impact: {
		eyebrow: {
			es: "Impacto",
			en: "Impact",
		},
		title: {
			es: "Poca explicación, señales claras.",
			en: "Less explanation, clearer signals.",
		},
	},
	services: {
		eyebrow: {
			es: "Servicios",
			en: "Services",
		},
		title: {
			es: "Lo que puedo construir para vos.",
			en: "What I can build for you.",
		},
		intro: {
			es: "Trabajo como independiente. Sin agencia de por medio — hablás directamente conmigo.",
			en: "I work independently. No agency in between — you talk directly with me.",
		},
	},
	timeline: {
		eyebrow: {
			es: "Línea de tiempo",
			en: "Timeline",
		},
		title: {
			es: "De pasantía a liderar equipos con ERP real.",
			en: "From internship to leading teams with real ERP.",
		},
		intro: {
			es: "Cada etapa se construyó sobre la anterior. Hacé clic para ver el detalle.",
			en: "Each stage built on the previous one. Click any milestone to see the detail.",
		},
		activeLabel: {
			es: "Detalle activo",
			en: "Active detail",
		},
		tagsLabel: {
			es: "Claves",
			en: "Highlights",
		},
	},
	stack: {
		eyebrow: {
			es: "Stack y forma de trabajo",
			en: "Stack and workflow",
		},
		title: {
			es: "Tecnología, certificaciones y estilo de colaboración.",
			en: "Technology, certifications, and collaboration style.",
		},
		intro: {
			es: "Lo que uso a diario, lo que tengo certificado y cómo prefiero trabajar.",
			en: "What I use daily, what I have certified, and how I prefer to work.",
		},
	},
	close: {
		eyebrow: {
			es: "Contacto",
			en: "Contact",
		},
		title: {
			es: "Hablemos directo. Sin formularios.",
			en: "Let's talk. No forms needed.",
		},
		summary: {
			es: "Elegí el canal que más te acomoda. Respondo rápido.",
			en: "Pick whichever channel works best for you. I reply fast.",
		},
		pills: [
			{
				es: "Remoto",
				en: "Remote",
			},
			{
				es: "Part-time",
				en: "Part-time",
			},
			{
				es: "Proyecto por alcance",
				en: "Scope-based project",
			},
			{
				es: "Soporte y mantenimiento",
				en: "Support and maintenance",
			},
		],
	},
	labels: {
		themeDark: { es: "Oscuro", en: "Dark" },
		themeLight: { es: "Claro", en: "Light" },
		langSpanish: { es: "ES", en: "ES" },
		langEnglish: { es: "EN", en: "EN" },
		completed: { es: "Cerrado", en: "Completed" },
		active: { es: "Actual", en: "Active" },
		internship: { es: "Pasantía", en: "Internship" },
		role: { es: "Rol", en: "Role" },
		promotion: { es: "Ascenso", en: "Promotion" },
	},
};

export type Service = {
	icon: "globe" | "layout" | "smartphone" | "wrench";
	title: Localized;
	description: Localized;
	tags: string[];
};

export const services: Service[] = [
	{
		icon: "globe",
		title: { es: "Páginas web", en: "Web Pages" },
		description: {
			es: "Sitios rápidos, bien posicionados y fáciles de actualizar. Desde landing pages hasta portales corporativos.",
			en: "Fast, well-ranked sites that are easy to maintain. From landing pages to corporate portals.",
		},
		tags: ["Svelte", "Tailwind", "SEO", "CMS"],
	},
	{
		icon: "layout",
		title: { es: "Aplicaciones web", en: "Web Apps" },
		description: {
			es: "Sistemas internos, dashboards y plataformas SaaS con lógica real, no demos. Integración con APIs y ERPs.",
			en: "Internal tools, dashboards, and SaaS platforms with real business logic. API and ERP integration.",
		},
		tags: ["C#", "Web API", "Svelte", "Angular"],
	},
	{
		icon: "smartphone",
		title: { es: "Aplicaciones móviles", en: "Mobile Apps" },
		description: {
			es: "Apps para Android e iOS con .NET MAUI o Flutter. Conectadas al mismo backend de tu sistema web.",
			en: "Android and iOS apps with .NET MAUI or Flutter, connected to your existing web backend.",
		},
		tags: [".NET MAUI", "Flutter", "Android", "iOS"],
	},
	{
		icon: "wrench",
		title: { es: "Mantenimiento web", en: "Web Maintenance" },
		description: {
			es: "Actualizaciones, corrección de bugs, mejoras de rendimiento y soporte continuo para tu plataforma actual.",
			en: "Updates, bug fixes, performance improvements, and ongoing support for your current platform.",
		},
		tags: ["Soporte", "Performance", "Bugs", "Uptime"],
	},
];

export const metrics: Metric[] = [
	{
		value: "55%",
		label: {
			es: "menos pérdidas",
			en: "loss reduction",
		},
		note: {
			es: "EDI+ conectado a Oracle Fusion ERP",
			en: "EDI+ connected to Oracle Fusion ERP",
		},
	},
	{
		value: "2",
		label: {
			es: "sitios activos hoy",
			en: "active workplaces today",
		},
		note: {
			es: "Microcom-TI y UPSA en paralelo",
			en: "Microcom-TI and UPSA in parallel",
		},
	},
	{
		value: "2",
		label: {
			es: "equipos coordinados",
			en: "teams coordinated",
		},
		note: {
			es: "uno de 4 y otro de 1, además de mí",
			en: "one team of 4 and another of 1, plus me",
		},
	},
	{
		value: "4",
		label: {
			es: "personas en NIBU",
			en: "people on NIBU team",
		},
		note: {
			es: "incluyéndome",
			en: "including me",
		},
	},
];

export const timeline: TimelineEntry[] = [
	{
		id: "conecta",
		period: {
			es: "Feb 2024 - Jun 2024",
			en: "Feb 2024 - Jun 2024",
		},
		title: {
			es: "Pasantía universitaria",
			en: "University internship",
		},
		company: "Conecta Redes y Servicios",
		kind: "internship",
		state: "completed",
		teaser: {
			es: "Primer paso profesional.",
			en: "First professional step.",
		},
		summary: {
			es: "Mi inicio formal en un entorno profesional antes de entrar a roles de desarrollo más fuertes.",
			en: "My formal start in a professional environment before moving into stronger software roles.",
		},
		bullets: [
			{
				es: "Etapa de febrero a junio de 2024.",
				en: "Stage from February to June 2024.",
			},
			{
				es: "Punto de partida de la línea de tiempo profesional.",
				en: "Starting point of the professional timeline.",
			},
			{
				es: "Base previa al salto a Microcom y luego UPSA.",
				en: "Foundation before the move to Microcom and later UPSA.",
			},
		],
		tags: ["Inicio", "Pasantía", "2024"],
	},
	{
		id: "microcom-junior",
		period: {
			es: "Dic 2024 - Ene 2026",
			en: "Dec 2024 - Jan 2026",
		},
		title: {
			es: "Junior Developer",
			en: "Junior Developer",
		},
		company: "Microcom-TI",
		kind: "role",
		state: "completed",
		teaser: {
			es: "SISCON para Santa Luz SRL.",
			en: "SISCON for Santa Luz SRL.",
		},
		summary: {
			es: "Entré a Microcom para desarrollar SISCON, un sistema contable y operativo adaptado a Santa Luz SRL.",
			en: "I joined Microcom to build SISCON, an accounting and operations system tailored for Santa Luz SRL.",
		},
		bullets: [
			{
				es: "Contabilidad, pagos, egresos y método de valuación.",
				en: "Accounting, payments, egress records, and valuation workflow.",
			},
			{
				es: "Proyecto empresarial ajustado al rubro inmobiliario.",
				en: "Enterprise project tailored to real-estate operations.",
			},
			{
				es: "Base del sistema que luego evolucionó a SaaS.",
				en: "Foundation of the system that later evolved into SaaS.",
			},
		],
		tags: ["C#", "SISCON", "Santa Luz", "Contabilidad"],
	},
	{
		id: "upsa",
		period: {
			es: "Jun 2025 - Actualidad",
			en: "Jun 2025 - Present",
		},
		title: {
			es: "Mid Developer",
			en: "Mid Developer",
		},
		company: "UPSA",
		kind: "role",
		state: "active",
		teaser: {
			es: "Backend de NIBU y refactor.",
			en: "NIBU backend and refactor.",
		},
		summary: {
			es: "Trabajo sobre el backend de NIBU con foco en mantenimiento, nuevas funciones y migración desde Strapi a C# Web API.",
			en: "I work on the NIBU backend with a focus on maintenance, new features, and migration from Strapi to C# Web API.",
		},
		bullets: [
			{
				es: "Equipo de 4 personas incluyéndome.",
				en: "4-person team including me.",
			},
			{
				es: "Refactor del backend completo de la app móvil.",
				en: "Refactoring the full backend of the mobile app.",
			},
			{
				es: "Migración de CMS a API REST dedicada en C#.",
				en: "Migration from CMS to a dedicated C# REST API.",
			},
		],
		tags: ["UPSA", "NIBU", "C# Web API", "Refactor"],
	},
	{
		id: "microcom-mid",
		period: {
			es: "Ene 2026 - Actualidad",
			en: "Jan 2026 - Present",
		},
		title: {
			es: "Ascenso a Mid Developer",
			en: "Promotion to Mid Developer",
		},
		company: "Microcom-TI",
		kind: "promotion",
		state: "active",
		teaser: {
			es: "EDI+, liderazgo y SISCON SaaS.",
			en: "EDI+, leadership, and SISCON SaaS.",
		},
		summary: {
			es: "Pasé a coordinar equipos, liderar EDI+ para Nexocorp y empujar la versión SaaS de SISCON junto con despliegue e infraestructura.",
			en: "I moved into team coordination, led EDI+ for Nexocorp, and pushed the SaaS version of SISCON along with deployment and infrastructure.",
		},
		bullets: [
			{
				es: "Equipo de 4 para EDI+ con Nexocorp.",
				en: "Team of 4 for EDI+ with Nexocorp.",
			},
			{
				es: "Trazabilidad de recepción e integración con Oracle Fusion ERP.",
				en: "Reception traceability and Oracle Fusion ERP integration.",
			},
			{
				es: "Reducción aproximada del 55% en pérdidas operativas.",
				en: "Approximate 55% reduction in operational losses.",
			},
			{
				es: "Equipo pequeño aparte para SISCON SaaS, despliegue e infraestructura.",
				en: "Separate small team for SISCON SaaS, deployment, and infrastructure.",
			},
		],
		tags: ["EDI+", "Nexocorp", "Oracle Fusion ERP", "SaaS"],
	},
];

export const heroCloud = [
	{ label: "C# / .NET", className: "left-4 top-5 float-a" },
	{ label: "Blazor", className: "right-6 top-10 float-b" },
	{ label: "Web API", className: "left-10 top-28 float-c" },
	{ label: "Svelte", className: "right-12 top-36 float-a" },
	{ label: "FastAPI", className: "left-12 bottom-26 float-b" },
	{ label: "Angular", className: "right-6 bottom-20 float-c" },
	{ label: "Oracle ERP", className: "left-1/2 top-2 -translate-x-1/2 float-b" },
	{ label: "SaaS", className: "left-1/2 bottom-8 -translate-x-1/2 float-a" },
];

export const tickerItems = [
	"C#",
	"Blazor",
	"Web API",
	"Svelte",
	"shadcn-svelte",
	"Python",
	"FastAPI",
	"Angular",
	"ERP",
	"SaaS",
	"NIBU",
	"SISCON",
	"EDI+",
];

export const skillGroups: SkillGroup[] = [
	{
		title: {
			es: "Back-end principal",
			en: "Primary back-end",
		},
		skills: ["C#", "Blazor", "Web API", "Desktop", "Clean Architecture"],
	},
	{
		title: {
			es: "Front-end",
			en: "Front-end",
		},
		skills: ["Svelte", "shadcn-ui/svelte", "Angular", "Responsive UI"],
	},
	{
		title: {
			es: "Python",
			en: "Python",
		},
		skills: ["Django", "FastAPI", "APIs", "Servicios internos"],
	},
	{
		title: {
			es: "Operación",
			en: "Operations",
		},
		skills: ["ERP integrations", "Deploy", "Infraestructura", "Mantenimiento"],
	},
];

export const certifications: Certification[] = [
	{
		name: "Huawei HCIA (Cloud)",
		status: {
			es: "Certificado",
			en: "Certified",
		},
		note: {
			es: "Cloud",
			en: "Cloud",
		},
	},
	{
		name: "GitHub Foundations",
		status: {
			es: "Certificado",
			en: "Certified",
		},
		note: {
			es: "Control de versiones",
			en: "Version control",
		},
	},
	{
		name: "MongoDB DBA",
		status: {
			es: "Certificado",
			en: "Certified",
		},
		note: {
			es: "Base de datos",
			en: "Database",
		},
	},
	{
		name: "C# Clean Architecture",
		status: {
			es: "En curso",
			en: "In progress",
		},
		note: {
			es: "Arquitectura",
			en: "Architecture",
		},
	},
];

export const workModes = [
	{
		es: "Remoto sin problema",
		en: "Remote-friendly",
	},
	{
		es: "Medio tiempo",
		en: "Part-time",
	},
	{
		es: "Negociable",
		en: "Negotiable",
	},
	{
		es: "Proyecto o salario",
		en: "Project or salary",
	},
];

export const personalTags = [
	"League of Legends",
	"Rainbow Six Siege",
	"Minecraft",
	"Age of Empires II HD",
];
