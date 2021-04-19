<script lang="ts">
	import './app.scss';
	import DragContainer from '$lib/DragContainer.svelte';
</script>

<h1 class="px-2 bg-blue-500 text-white">Welcome to SvelteKit</h1>
<p class="px-2 test">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<DragContainer />

<style lang="scss">
	.test {
		@apply text-indigo-700;
	}
</style>
