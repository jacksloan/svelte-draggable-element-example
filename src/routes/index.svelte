<script lang="ts">
	import { link } from '$lib/helpers';
</script>

<main class="container mx-auto px-4 pt-4 prose">
	<h1>Draggable Examples</h1>

	<ul>
		<li>
			<a href={link('basic')}>Basic</a>
		</li>
		<li>
			<a href={link('madac')}>mad.ac clone</a>
		</li>
	</ul>
</main>

<style lang="postcss">
	a {
		@apply text-blue-500;
	}
</style>
