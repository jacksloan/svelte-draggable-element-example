<script lang="ts">
	import DragElement from '$lib/DragElement.svelte';
	import { spring } from 'svelte/motion';

	import Reminders from '$lib/Reminders.svelte';

	const remindersCoords = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });

	let isEditing: boolean;
</script>

<!-- clone of the dashboard at https://mad.ac -->
<main class="h-screen w-screen p-0 m-0 bg-peach-dark relative">
	<DragElement
		isDraggable={!isEditing}
		coords={remindersCoords}
		containerClass="shadow-2xl rounded-3xl bg-white absolute top-96 left-96"
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
