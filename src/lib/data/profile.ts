export type Metric = {
	value: string;
	label: string;
	detail: string;
};

export type WorkSignal = {
	name: string;
	context: string;
	summary: string;
};

export type Project = {
	title: string;
	client: string;
	role: string;
	impact: string;
	summary: string;
	highlights: string[];
	tags: string[];
};

export type ExperienceBlock = {
	company: string;
	role: string;
	summary: string;
	leadership: string;
	highlights: string[];
	projects: Project[];
};

export type CapabilityTab = {
	id: string;
	label: string;
	title: string;
	summary: string;
	items: string[];
};

export type SkillGroup = {
	title: string;
	description: string;
	skills: string[];
};

export type Certification = {
	name: string;
	status: "Certified" | "In progress";
	detail: string;
};

export type Offer = {
	title: string;
	summary: string;
	bullets: string[];
};

export type Faq = {
	id: string;
	question: string;
	answer: string;
};

export const profile = {
	title: "I build operational software that makes complex business workflows easier to run.",
	summary:
		"Software developer based in Santa Cruz, Bolivia, focused on C#, Svelte, Python, and Angular. I ship internal tools, ERP-connected workflows, SaaS-ready products, and maintainable APIs for teams that want speed, structure, and clearer operations.",
	location: "Santa Cruz, Bolivia",
	availability: ["Remote-friendly", "Part-time open", "Negotiable compensation"],
	identity: [
		"24 years old",
		"Open to contract, remote, and half-time work",
		"Comfortable leading delivery, not only coding",
	],
	highlightStack: [
		"C# / .NET",
		"Svelte",
		"shadcn-ui/svelte",
		"Python APIs",
		"Angular",
		"ERP integrations",
	],
	offerNote:
		"I also offer already-developed systems and reusable foundations to help clients launch new solutions faster.",
};

export const metrics: Metric[] = [
	{
		value: "1.5+ years",
		label: "Professional experience",
		detail: "Focused on business software, internal operations, and maintainable delivery across .NET, Python, Svelte, and Angular.",
	},
	{
		value: "55% lower losses",
		label: "Measured business impact",
		detail: "Achieved by improving invoice and product-reception traceability for the EDI+ project connected to Oracle Fusion ERP.",
	},
	{
		value: "2 teams led",
		label: "Parallel delivery ownership",
		detail: "Promoted to mid developer and trusted to coordinate a 4-person team and a 2-person team in parallel, including myself.",
	},
	{
		value: "4-person squad",
		label: "Current backend leadership",
		detail: "At UPSA, I help lead maintenance, new features, and refactoring for the NIBU mobile app backend.",
	},
];

export const workSignals: WorkSignal[] = [
	{
		name: "Microcom-TI",
		context: "Product and client delivery",
		summary:
			"Progressed from junior implementation into mid-level leadership with ownership across product delivery, maintenance, and team coordination.",
	},
	{
		name: "Santa Luz SRL",
		context: "Real-estate operations",
		summary:
			"Built SISCON, an accounting and property-operations system adapted to the company's valuation, payment, and expense workflows.",
	},
	{
		name: "Nexocorp / EDI+",
		context: "ERP-connected logistics",
		summary:
			"Delivered a traceability-focused reception system integrated with Oracle Fusion ERP for one of the largest business groups in Santa Cruz.",
	},
	{
		name: "UPSA / NIBU",
		context: "Mobile app backend",
		summary:
			"Maintaining and refactoring the backend behind NIBU while migrating away from Strapi into a dedicated C# Web API service.",
	},
];

export const experiences: ExperienceBlock[] = [
	{
		company: "Microcom-TI",
		role: "Junior Developer -> Mid Developer",
		summary:
			"I started as a junior developer on a client-specific enterprise project and then grew into a mid-level role with team leadership, product ownership, deployment responsibilities, and live-system maintenance.",
		leadership:
			"I was responsible for one team of 4 and one team of 1, not counting myself, while coordinating delivery across integration, product, and maintenance tracks.",
		highlights: [
			"Moved from direct implementation into leadership and coordination responsibilities.",
			"Balanced hands-on development with product, Scrum-style, and infrastructure ownership.",
			"Maintained live systems while also pushing new product work forward.",
		],
		projects: [
			{
				title: "SISCON",
				client: "Santa Luz SRL",
				role: "Junior Developer",
				impact: "Built a custom accounting and property-operations system aligned to a real-estate company's day-to-day flow.",
				summary:
					"I developed core accounting, payment registration, egress registration, and support for the valuation method used by Santa Luz.",
				highlights: [
					"Integrated accounting and property-management workflows into one system.",
					"Mapped the solution to the company's specific valuation and operational process.",
					"Helped shape a system designed around real user behavior, not generic ERP assumptions.",
				],
				tags: ["C# / .NET", "Accounting", "Property management", "Custom workflow"],
			},
			{
				title: "EDI+",
				client: "Nexocorp",
				role: "Mid Developer and team lead",
				impact: "Reduced losses by about 55% by improving invoice-to-reception traceability in an ERP-connected flow.",
				summary:
					"My team built a full reception and traceability system integrated with Oracle Fusion ERP for a holding group that includes brands such as Farmacorp, Farmacias Dr. Osvaldo, Amarket, and Pizza Hut.",
				highlights: [
					"Delivered a more intuitive interface for reception staff than the ERP-native process.",
					"Improved speed and confidence through cleaner structure and better operational visibility.",
					"Reduced payments for invoices that had not been received or were poorly tracked.",
				],
				tags: ["Oracle Fusion ERP", "Traceability", "Team leadership", "Operations UX"],
			},
			{
				title: "SISCON SaaS",
				client: "Internal product expansion",
				role: "Mid Developer, PO, Scrum Master, and infra owner",
				impact: "Turned a client-specific system into a SaaS-ready structure that can support multiple companies.",
				summary:
					"With a compact team, I helped reshape SISCON from a single-instance solution into a reusable multi-company product while still maintaining the original Santa Luz version.",
				highlights: [
					"Shifted the system from one-company logic toward a SaaS model.",
					"Took ownership of deployment, infrastructure, and overall environment structure.",
					"Worked in a more product-focused role while keeping direct technical responsibility where needed.",
				],
				tags: ["SaaS", "Deployment", "Infrastructure", "Product ownership"],
			},
		],
	},
	{
		company: "Universidad Privada de Santa Cruz de la Sierra (UPSA)",
		role: "Mid Developer",
		summary:
			"I currently work on the maintenance and refactoring of the backend for NIBU, the university mobile app available on the App Store and Play Store.",
		leadership:
			"I help coordinate a 4-person team including myself, balancing maintenance, new feature delivery, and structural refactoring work.",
		highlights: [
			"Leading backend modernization while continuing to deliver live product work.",
			"Driving a migration from Strapi toward a dedicated REST API service in C#.",
			"Owning both maintenance pressure and long-term refactoring quality.",
		],
		projects: [
			{
				title: "NIBU backend modernization",
				client: "UPSA",
				role: "Mid Developer and team lead",
				impact: "Migrated a mobile-app backend from a CMS dependency to a dedicated C# Web API service.",
				summary:
					"The work combines maintenance, refactoring, and feature development so the backend becomes easier to extend and more reliable for the long term.",
				highlights: [
					"Replaced Strapi with a purpose-built API architecture.",
					"Delivered new functionality while cleaning up backend structure.",
					"Focused on maintainability instead of layering more complexity onto a CMS-driven model.",
				],
				tags: ["C# Web API", "Refactoring", "Mobile backend", "Team coordination"],
			},
		],
	},
];

export const capabilityTabs: CapabilityTab[] = [
	{
		id: "build",
		label: "Build",
		title: "Implementation focused on clarity, speed, and real operational use.",
		summary:
			"I work best on software that needs to solve concrete business friction, not just look complete in a demo.",
		items: [
			"C# solutions using Blazor, Web API, and desktop approaches when the workflow needs it.",
			"Svelte front-ends with shadcn-ui/svelte and reusable components that stay maintainable.",
			"Python services with Django and FastAPI for APIs and internal tooling.",
			"Angular front-end work when the existing stack or team direction calls for it.",
		],
	},
	{
		id: "lead",
		label: "Lead",
		title: "I can lead delivery, not only contribute code.",
		summary:
			"My experience already includes team direction, task ownership, product involvement, and keeping people aligned when the system gets more complex.",
		items: [
			"Led parallel teams during my mid-developer role at Microcom-TI.",
			"Acted as PO or Scrum Master when the SISCON SaaS effort needed product coordination more than raw coding hours.",
			"Translate scope into work that is understandable for both technical and non-technical stakeholders.",
			"Comfortable with negotiable delivery models, phased scope, and practical prioritization.",
		],
	},
	{
		id: "operate",
		label: "Operate",
		title: "Delivery continues after launch: infrastructure, maintenance, and integration matter.",
		summary:
			"I have already been responsible for live-system maintenance, deployment structure, and workflow integrations where errors cost real money.",
		items: [
			"Deployment and infrastructure ownership for productized business systems.",
			"ERP integrations, especially around traceability and operator experience.",
			"Maintenance of live client systems while new versions are being developed.",
			"Refactor-first decisions when legacy architecture starts blocking velocity.",
		],
	},
];

export const skillGroups: SkillGroup[] = [
	{
		title: "C# and .NET",
		description: "My strongest implementation area for business software and API work.",
		skills: ["Blazor", "Web API", "Desktop apps", "REST services", "Clean architecture"],
	},
	{
		title: "Front-end systems",
		description: "Reusable interfaces with a focus on practical UX for operators and business users.",
		skills: ["Svelte", "shadcn-ui/svelte", "Reusable components", "Angular", "Responsive UI"],
	},
	{
		title: "Python backend",
		description: "Useful when the project needs lightweight service delivery or Django-based structure.",
		skills: ["Django", "FastAPI", "API design", "Internal tooling"],
	},
	{
		title: "Delivery and operations",
		description: "The work around the software that usually decides whether the project actually succeeds.",
		skills: ["Deployment", "Infrastructure", "SaaS structuring", "Maintenance", "ERP integrations"],
	},
];

export const certifications: Certification[] = [
	{
		name: "Huawei HCIA (Cloud)",
		status: "Certified",
		detail: "Cloud fundamentals and platform knowledge.",
	},
	{
		name: "GitHub Foundations",
		status: "Certified",
		detail: "Version-control workflows and collaboration foundations.",
	},
	{
		name: "MongoDB DBA",
		status: "Certified",
		detail: "Database administration fundamentals for MongoDB environments.",
	},
	{
		name: "C# Clean Architecture",
		status: "In progress",
		detail: "Currently taking the class and continuing to sharpen system design fundamentals.",
	},
];

export const personalHighlights = [
	"I am 24 years old and based in Santa Cruz, Bolivia.",
	"I enjoy video games including League of Legends, Rainbow Six Siege, Minecraft, and Age of Empires II HD.",
	"I am comfortable working remotely and open to half-time arrangements when the fit is right.",
];

export const offers: Offer[] = [
	{
		title: "Fast-start internal tools",
		summary:
			"I can reuse proven ideas, modules, and previously developed systems to get new solutions moving faster.",
		bullets: [
			"Good fit for internal workflows that need results quickly.",
			"Useful when you want a tailored solution without starting from zero.",
			"Strong option for accounting, operations, and traceability flows.",
		],
	},
	{
		title: "ERP and workflow improvement",
		summary:
			"I enjoy projects where the main value is reducing friction, ambiguity, and manual mistakes in business operations.",
		bullets: [
			"Traceability and operator experience are a major strength.",
			"I care about UI clarity for real users, not only technical completeness.",
			"I can translate complex business steps into simpler tools.",
		],
	},
	{
		title: "Negotiable collaboration",
		summary:
			"I do not work from a rigid pricing model. Salary, scope, and time commitment can all be discussed based on the project.",
		bullets: [
			"Open to remote roles.",
			"Open to part-time or half-time arrangements.",
			"Open to discussing salary or project-based compensation.",
		],
	},
];

export const faqs: Faq[] = [
	{
		id: "work",
		question: "What kinds of engagements am I open to?",
		answer:
			"Remote work is completely fine for me, and I am open to part-time, half-time, contract, or negotiable salary arrangements. I prefer shaping the model around the actual scope instead of forcing one fixed format.",
	},
	{
		id: "advantage",
		question: "What do you get besides coding?",
		answer:
			"You get someone who can also lead small teams, own delivery structure, think in product terms, and take responsibility for deployment, maintenance, and live-system quality when needed.",
	},
	{
		id: "speed",
		question: "Where can I move especially fast?",
		answer:
			"I can move quickly on internal tools, operator-facing workflows, accounting and management systems, SaaS-ready reshapes of existing software, and maintainable front-ends built from reusable components.",
	},
];
