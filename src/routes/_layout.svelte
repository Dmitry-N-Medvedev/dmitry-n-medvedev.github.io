<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment} />

<main id='main'>
	<slot></slot>
</main>