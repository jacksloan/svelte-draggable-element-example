<script lang="ts">
	import DragElement from '$lib/DragElement.svelte';
	import { spring } from 'svelte/motion';
	import type { Spring } from 'svelte/motion';

	const coords1 = createCoords();
	const coords2 = createCoords();
	const coords3 = createCoords();
	const coords4 = createCoords();

	function createCoords() {
		return spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.3 });
	}

	function reset(c: Spring<{ x: number; y: number }>) {
		c.update(() => ({ x: 0, y: 0 }));
	}

	function resetAllCoords() {
		[coords1, coords2, coords3, coords4].forEach(reset);
	}
</script>

<section class="flex flex-row py-1 bg-blue-500 text-white items-center">
	<h1 class="px-2">Draggable Elements Example</h1>
	<button
		class="border border-blue-700 bg-white text-blue-700 px-2 rounded-md"
		on:click={resetAllCoords}>Reset Position</button
	>
</section>
<main class="w-full h-full p-2 select-none">
	<DragElement coords={coords1}>
		<div
			class="w-64 h-64 flex flex-row items-center justify-center bg-red-400 border border-red-600 rounded-md"
		>
			<p>Drag Me</p>
		</div>
	</DragElement>

	<DragElement coords={coords2}>
		<div
			class="w-64 h-64 flex flex-row items-center justify-center bg-green-400 border border-green-600 rounded-md"
		>
			<p>Drag Me</p>
		</div>
	</DragElement>

	<DragElement coords={coords3}>
		<div
			class="w-64 h-64 flex flex-row items-center justify-center bg-indigo-400 border border-indigo-600 rounded-md"
		>
			<p>Drag Me</p>
		</div>
	</DragElement>

	<DragElement coords={coords4}>
		<div
			class="w-64 h-64 flex flex-row items-center justify-center bg-yellow-400 border border-yellow-600 rounded-md"
		>
			<p>Drag Me</p>
		</div>
	</DragElement>
</main>
