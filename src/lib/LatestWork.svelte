<script>
	import Card from './Card.svelte';
	import { link } from './helpers';
</script>

<Card title="Latest Work">
	<section class="w-96 p-6 text-gray-600">
		<h2 class="text-2xl font-bold">Donut</h2>
		<p class="font-light text-gray-500 mt-1">DeFi made quick and easy</p>
	</section>
	<div class="-mt-36">
		<img
			draggable="false"
			class="mx-auto w-96"
			src={link('donut-applet.png')}
			alt="Donut phone illustration"
		/>
	</div>
	<div class="p-2 rounded-full absolute right-4 bottom-4 bg-gray-100">
		<svg
			class="-rotate-45"
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="22"
			viewBox="0 0 22 22"
			aria-hidden="true"
			focusable="false"
			fill="none"
			><path
				d="M4 11.75C3.58579 11.75 3.25 11.4142 3.25 11C3.25 10.5858 3.58579 10.25 4 10.25V11.75ZM18.5303 10.4697C18.8232 10.7626 18.8232 11.2374 18.5303 11.5303L13.7574 16.3033C13.4645 16.5962 12.9896 16.5962 12.6967 16.3033C12.4038 16.0104 12.4038 15.5355 12.6967 15.2426L16.9393 11L12.6967 6.75736C12.4038 6.46447 12.4038 5.98959 12.6967 5.6967C12.9896 5.40381 13.4645 5.40381 13.7574 5.6967L18.5303 10.4697ZM4 10.25H18V11.75H4V10.25Z"
				fill="#505050"
			/></svg
		>
	</div>
</Card>
