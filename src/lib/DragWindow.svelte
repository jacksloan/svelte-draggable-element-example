<script lang="ts">
	import { draggable } from '$lib/draggable';
	import { createEventDispatcher } from 'svelte';
	import { spring } from 'svelte/motion';

	export let coords = spring({ x: 0, y: 0 });
	export let zIndex;
	export let props: any = {};

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	function minimize() {
		dispatch('minimize');
	}

	function maximize() {
		dispatch('maximize');
	}

	function handleDrag(event) {
		coords.update(($coords) => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy,
		}));
	}
</script>

<div
	class="relative"
	style="transform: translate({$coords.x}px, {$coords.y}px); z-index: {zIndex};"
>
	<div use:draggable on:dragstart on:dragmove={handleDrag} class="bg-gray-400">
		<slot />
	</div>
</div>
