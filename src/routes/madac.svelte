<script lang="ts">
	import DragElement from '$lib/DragElement.svelte';
	import { spring } from 'svelte/motion';

	import Reminders from '$lib/Reminders.svelte';

	const _1 = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });
	const _2 = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });
	const _3 = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });
	const _4 = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });
	const _5 = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });

	setTimeout(() => _1.set({ x: 150, y: 550 }), 100);
	setTimeout(() => _2.set({ x: 800, y: 0 }), 300);
	setTimeout(() => _3.set({ x: 1500, y: 350 }), 500);
	setTimeout(() => _4.set({ x: 500, y: 600 }), 700);
	setTimeout(() => _5.set({ x: 850, y: 350 }), 900);

	let isEditing: boolean;
</script>

<!-- clone of the dashboard at https://mad.ac -->
<main class="h-screen w-screen p-0 m-0 bg-peach-dark relative">
	<DragElement
		isDraggable={!isEditing}
		coords={_1}
		containerClass="shadow-2xl rounded-3xl bg-white absolute"
	>
		<Reminders bind:isEditing />
	</DragElement>
	<DragElement
		isDraggable={!isEditing}
		coords={_2}
		containerClass="shadow-2xl rounded-3xl bg-white absolute"
	>
		<Reminders bind:isEditing />
	</DragElement>
	<DragElement
		isDraggable={!isEditing}
		coords={_3}
		containerClass="shadow-2xl rounded-3xl bg-white absolute"
	>
		<Reminders bind:isEditing />
	</DragElement>
	<DragElement
		isDraggable={!isEditing}
		coords={_4}
		containerClass="shadow-2xl rounded-3xl bg-white absolute"
	>
		<Reminders bind:isEditing />
	</DragElement>
	<DragElement
		isDraggable={!isEditing}
		coords={_5}
		containerClass="shadow-2xl rounded-3xl bg-white absolute"
	>
		<Reminders bind:isEditing />
	</DragElement>
</main>

<style lang="scss">
	main {
		background: linear-gradient(0.33turn, #f6a192, #ffd9df, #f6c492, #f6a192);
		background-size: 400% 400%;
		animation: GradientBackground 12s ease infinite;
	}

	/* prettier-ignore */
	@keyframes GradientBackground {
		0%   { background-position: 0%   50%; }
		50%  { background-position: 100% 50%; }
		100% { background-position: 0%   50%; }
	}
</style>
