<script lang="ts">
	import DragElement from '$lib/DragElement.svelte';
	import { spring } from 'svelte/motion';
	import { tick } from 'svelte';

	const c1 = spring({ x: 0, y: 0 }, { damping: 0.3, stiffness: 0.1 });

	let reminders: { value: string; input: HTMLElement; checked: boolean }[] = [
		{ value: "We don't pitch", input: undefined, checked: false },
		{ value: "We don't play it safe", input: undefined, checked: false },
		{ value: "We're honest and transparent", input: undefined, checked: false },
		{ value: 'Partnerships over one-nighters', input: undefined, checked: false },
		{ value: 'Prototypes over presentations', input: undefined, checked: false },
		{ value: 'People over process', input: undefined, checked: false },
		{ value: 'No meetings on Fridays', input: undefined, checked: false },
		{ value: 'Milestones over deadlines', input: undefined, checked: false },
		{ value: 'Remote is the new black', input: undefined, checked: false },
		{ value: 'Quality first and foremost', input: undefined, checked: false },
	];

	$: totalUnchecked = reminders.filter((r) => !r.checked).length;

	let editingReminderIndex = -1;

	async function handleKeypress(e: KeyboardEvent) {
		if (
			(e.code === 'Backspace' || e.code === 'Delete') &&
			(reminders[editingReminderIndex]?.value?.length ?? 1) === 0 &&
			editingReminderIndex > 0
		) {
			e.preventDefault();
			e.stopPropagation();
			removeAtIndex(editingReminderIndex);
		}

		if (
			e.code === 'Enter' &&
			editingReminderIndex > 0 &&
			editingReminderIndex === reminders.length - 1
		) {
			await addReminder();
		}
	}

	function removeAtIndex(index: number) {
		reminders[index - 1].input.focus();
		reminders = reminders.filter((_, i) => index !== i);
	}

	async function addReminder() {
		reminders = reminders.concat({ value: '', input: undefined, checked: false });
		await tick();
		reminders[reminders.length - 1].input.focus();
	}
</script>

<svelte:window on:keydown={handleKeypress} />

<!-- clone of the dashboard at https://mad.ac -->
<main class="h-screen w-screen p-0 m-0 bg-peach-dark relative">
	<DragElement
		isDraggable={editingReminderIndex < 0}
		coords={c1}
		containerClass="shadow-2xl rounded-3xl bg-white absolute top-96 left-96"
	>
		<div class="w-full relative">
			<button
				on:click={addReminder}
				aria-label="Add Reminder"
				class="absolute focus:outline-none z-50 bottom-3 right-3 w-8 h-8 rounded-full bg-blue-500 flex flex-row items-center justify-center shadow-md"
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M9.75 16C9.75 16.4142 9.41421 16.75 9 16.75C8.58579 16.75 8.25 16.4142 8.25 16L8.25 9.75L2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 8.58579 1.58579 8.25 2 8.25L8.25 8.25L8.25 2C8.25 1.58579 8.58579 1.25 9 1.25C9.41421 1.25 9.75 1.58579 9.75 2V8.25L16 8.25C16.4142 8.25 16.75 8.58579 16.75 9C16.75 9.41421 16.4142 9.75 16 9.75L9.75 9.75V16Z"
						fill="white"
					/></svg
				>
			</button>
			<div class="rounded-t-3xl bg-gray-100 w-full h-9 flex flex-row justify-center items-center">
				<h2 class="text-gray-400 text-xs font-semibold">Reminders</h2>
			</div>
			<div class="pt-3 pb-5 px-6 relative overflow-y-auto" style="max-height: 37.5rem;">
				<h3
					class="text-2xl tracking-wider text-blue-500"
					style="font-family: 'Arial Rounded MT Bold', Arial, Helvetica, sans-serif;"
				>
					Commandments {totalUnchecked}
				</h3>
				<ul class="mt-3 relative">
					{#each reminders as item, index}
						<li class="flex flex-row items-center relative p-3">
							<input
								bind:checked={item.checked}
								type="checkbox"
								class="w-5 h-5 form-checkbox rounded-full border border-gray-400 focus:outline-none focus:ring-0 focus:ring-transparent text-blue-500"
							/>
							<input
								bind:value={item.value}
								on:focus={() => (editingReminderIndex = index)}
								on:blur={() => (editingReminderIndex = -1)}
								bind:this={item.input}
								style="width: {item.value.length * 9}px; min-width: 200px;"
								class="ml-3 block focus:outline-none text-gray-500 font-normal"
							/>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</DragElement>
</main>

<style lang="scss">
	main {
		background: linear-gradient(0.33turn, #f6a192, #ffd9df, #f6c492, #f6a192);

		background-size: 400% 400%;
		animation: GradientBackground 12s ease infinite;
	}

	li::after {
		content: '';
		width: calc(100% - 0.25rem);
		@apply border-b border-gray-200 absolute bottom-0;
	}

	.scaleText {
		transform: scale(1, 0.95);
	}

	@keyframes GradientBackground {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

	.svg-container-height {
		height: 20rem;
	}
</style>
