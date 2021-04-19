<script lang="ts">
	import { draggable } from '$lib/draggable';
	import { createEventDispatcher } from 'svelte';
	import { spring } from 'svelte/motion';
	import { get } from 'svelte/store';
	import { topIndex } from '$lib/store';
	import { onMount } from 'svelte';

	export let coords = spring({ x: 0, y: 0 });
	export let zIndex = 0;

	const dispatch = createEventDispatcher();

	function handleDrag(event) {
		coords.update(($coords) => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy,
		}));
	}

	function updateZ() {
		$topIndex++;
		zIndex = get(topIndex);
	}

	onMount(() => {
		updateZ();
	});
</script>

<div
	class="relative inline-block select-none shadow-lg hover:shadow-xl transition-shadow duration-200"
	class:highlightTop={$topIndex === zIndex}
	use:draggable
	on:dragstart={updateZ}
	on:dragmove={handleDrag}
	style="transform: translate({$coords.x}px, {$coords.y}px); z-index: {zIndex}; cursor: grab;"
>
	<slot />
</div>

<style>
	.highlightTop {
		@apply shadow-2xl;
	}
</style>
