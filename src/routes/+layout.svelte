<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script>
		{`
			(function () {
				try {
					var theme = localStorage.getItem("theme") || "dark";
					var locale = localStorage.getItem("locale") || "es";
					document.documentElement.classList.toggle("dark", theme === "dark");
					document.documentElement.lang = locale;
				} catch (error) {
					document.documentElement.classList.add("dark");
					document.documentElement.lang = "es";
				}
			})();
		`}
	</script>
</svelte:head>
{@render children()}
