<script lang="ts">
	import { tick } from 'svelte';
	import PlusIcon from './PlusIcon.svelte';

	export let isEditing = false;

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

	let editingReminderIndex = -1;

	$: {
		isEditing = editingReminderIndex > -1;
	}

	$: totalUnchecked = reminders.filter((r) => !r.checked).length;

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

<div class="w-full relative">
	<button
		on:click={addReminder}
		aria-label="Add Reminder"
		class="absolute focus:outline-none z-50 bottom-3 right-3 w-9 h-9 rounded-full bg-blue-500 flex flex-row items-center justify-center shadow-md"
	>
		<PlusIcon width={18} height={18} />
	</button>
	<div class="rounded-t-3xl bg-gray-100 w-full h-9 flex flex-row justify-center items-center">
		<h2 class="text-gray-400 text-xs font-semibold">Reminders</h2>
	</div>
	<div class="pt-3 pb-5 px-6 relative overflow-y-auto" style="max-height: 37rem;">
		<div class="flex flex-row w-full justify-between items-center">
			<h3
				class="text-2xl tracking-wider text-blue-500"
				style="font-family: 'Arial Rounded MT Bold', Arial, Helvetica, sans-serif;"
			>
				Commandments
			</h3>
			<p class="text-xl tracking-widest leading-tight text-blue-500 font-light">
				{totalUnchecked}
			</p>
		</div>
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
						class:is-checked={item.checked}
					/>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	li::after {
		content: '';
		@apply w-full;
		@apply border-b;
		@apply border-gray-200;
		@apply absolute;
		@apply bottom-0;
	}

	// HACK - postcss will purge class bound variables
	.is-checked {
		@apply line-through;
		@apply text-gray-400;
	}
</style>
