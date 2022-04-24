<script lang="ts">
	import { basePath } from '$lib/constants';
</script>

<main class="container mx-auto px-4 pt-4 prose">
	<h1>Draggable Examples</h1>

	<ul>
		<li>
			<a href={basePath + '/madac'}>Basic</a>
		</li>
		<li>
			<a href={basePath + '/madac'}>mad.ac clone</a>
		</li>
	</ul>
</main>

<style lang="postcss">
	a {
		@apply text-blue-500;
	}
</style>
