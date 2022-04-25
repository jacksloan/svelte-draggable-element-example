<script lang="ts">
	import { tick } from 'svelte';
	export let title: string;
</script>

<div class="w-full relative">
	<div class="rounded-t-3xl bg-gray-100 w-full h-9 flex flex-row justify-center items-center">
		<h2 class="text-gray-500 text-xs font-semibold">{title}</h2>
	</div>
	<slot />
</div>
