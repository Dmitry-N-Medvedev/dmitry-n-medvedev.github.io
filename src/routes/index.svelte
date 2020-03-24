<script>
	import CV from '../components/CV/index.svelte';
	import { onMount } from 'svelte';

	let data = null;

	onMount(async () => {
		data = await (await fetch('/data/cv.json')).json();
	});
</script>

<style>
</style>

<svelte:head>
	<title>Dmitry N. Medvedev</title>
</svelte:head>

<CV {data} />