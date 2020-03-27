<script>
	import A from './html/A.svelte';

	export let segment;
</script>

<style>
	/* nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0 1em;
		font-size: 1.5vw;
		text-transform: lowercase;
	} */

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		list-style-type: none;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: flex;
		flex: 1;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 62, 0);
		display: block;
		bottom: -1px;
	}

	/* a {
		text-decoration: none;
		display: block;
		color: var(--font-color);
	} */
</style>

<nav>
	<ul>
		<li>
			<h2>
				<A aria-current='{segment === undefined ? "page" : undefined}' href='.'>CV</A>
			</h2>
		</li>
		<!-- <li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li> -->

		<!-- <li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li> -->
	</ul>
</nav>