<script lang="ts">
	import DragWindow from './DragWindow.svelte';
	import { spring } from 'svelte/motion';
	import type { Spring } from 'svelte/motion';
	import Hello from './HelloComponent.svelte';
	import { writable } from 'svelte/store';

	interface Item {
		id: string;
		props: {
			title;
		};
		coords: Spring<{ x; y }>;
		component: any;
	}

	export let items = [
		{
			id: 'a',
			props: {
				title: 'Window',
				bg: 'bg-blue-500',
			},
			coords: spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 }),
			component: Hello,
		},
		{
			id: 'b',
			props: {
				title: 'Window',
				bg: 'bg-green-500',
			},
			coords: spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 }),
			component: Hello,
		},
		{
			id: 'c',
			props: {
				title: 'Window',
				bg: 'bg-yellow-500',
			},
			coords: spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 }),
			component: Hello,
		},
	].map((it, i) => ({ ...it, props: { ...it.props, title: `${it.props.title} ${i}` } }));

	const zIndex = writable(items.map((i) => i.id));

	function moveToEnd(selectedId) {
		zIndex.update((order) => [...order.filter((id) => id !== selectedId), selectedId]);
	}

	$: {
		console.log($zIndex);
	}
</script>

{#each items as { component, coords, props, id }, index}
	<DragWindow {...{ coords, zIndex: $zIndex.indexOf(id) }} on:dragstart={() => moveToEnd(id)}>
		<svelte:component this={component} {...props} />
	</DragWindow>
{/each}
