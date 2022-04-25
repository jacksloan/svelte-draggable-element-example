<script lang="ts">
	import DragElement from '$lib/DragElement.svelte';
	import { spring } from 'svelte/motion';

	import Reminders from '$lib/Reminders.svelte';
	import Card from '$lib/Card.svelte';

	const coordsReminders = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });
	setTimeout(() => coordsReminders.set({ x: 50, y: 50 }), 0);

	const coordsAbout = spring({ x: -500, y: -200 }, { damping: 0.3, stiffness: 0.1 });
	setTimeout(() => coordsAbout.set({ x: 100, y: 150 }), 0);

	const coordsWork = spring({ x: 500, y: 500 }, { damping: 0.3, stiffness: 0.1 });
	setTimeout(() => coordsWork.set({ x: 350, y: 300 }), 0);

	const coordsTeam = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });
	setTimeout(() => coordsTeam.set({ x: 500, y: 50 }), 0);

	const coordsContact = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });
	setTimeout(() => coordsContact.set({ x: 600, y: 250 }), 0);

	const coordsLatestWork = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });
	setTimeout(() => coordsLatestWork.set({ x: 125, y: 125 }), 0);

	let isRemindersEditing: boolean;
</script>

<!-- clone of the dashboard at https://mad.ac -->
<main class="h-screen w-screen p-0 m-0 bg-peach-dark relative">
	<div class="overflow-visible">
		<DragElement
			isDraggable={!isRemindersEditing}
			coords={coordsReminders}
			containerClass="shadow-2xl rounded-3xl bg-white cursor-grab"
		>
			<Reminders bind:isEditing={isRemindersEditing} />
		</DragElement>

		<DragElement
			coords={coordsLatestWork}
			isDraggable={true}
			containerClass="shadow-2xl rounded-3xl bg-white cursor-grab"
		>
			<Card title="Latest Work">
				<section class="w-96 p-6 text-gray-600">
					<h2 class="text-2xl font-bold">Donut</h2>
					<p class="font-light text-gray-500 mt-1">DeFi made quick and easy</p>
				</section>
				<div class="-mt-36">
					<img
						draggable="false"
						class="mx-auto w-96"
						src="/donut-applet.png"
						alt="Donut phone illustration"
					/>
				</div>
			</Card>
		</DragElement>

		<DragElement coords={coordsAbout} isDraggable={true} containerClass="link link-lg">
			<h3>About</h3>
		</DragElement>

		<DragElement coords={coordsWork} isDraggable={true} containerClass="link link-lg">
			<h3>Work</h3>
		</DragElement>

		<DragElement coords={coordsContact} isDraggable={true} containerClass="link link-sm">
			<h3>Contact</h3>
		</DragElement>

		<DragElement coords={coordsTeam} isDraggable={true} containerClass="link link-sm">
			<h3>Team</h3>
		</DragElement>
	</div>
</main>

<style lang="scss">
	:global .link {
		@apply rounded-full border border-gray-200 bg-white absolute shadow-md cursor-pointer;

		h3 {
			@apply text-2xl text-gray-700;
		}
	}
	:global .link-lg {
		@apply py-6 px-16;
	}

	:global .link-sm {
		@apply py-4 px-8;
	}

	main {
		background: linear-gradient(0.33turn, #f6a192, #ffd9df, #f6c492, #f6a192);
		background-size: 1000% 1000%;
		animation: GradientBackground 12s ease infinite;
	}

	/* prettier-ignore */
	@keyframes GradientBackground {
		0%   { background-position: 0%   50%; }
		50%  { background-position: 100% 50%; }
		100% { background-position: 0%   50%; }
	}
</style>
