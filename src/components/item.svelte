<script lang="ts">
	import { userState } from '$lib/store/globalState.svelte';
	import { inventory } from '$lib/store/globalState.svelte';

	export interface Props {
		name: string;
		quantity: number;
		level: number;
		price: number;
		upgradePrice: number;
		cookiesPerSecond: number;
		// onClick: () => void;
	}
	import calculateCPS from '$lib/gameCalculateCPS';
	let { name, quantity, level, price, upgradePrice, cookiesPerSecond }: Props = $props();

	function onClick() {
		// if (!validatePurcchase(price, userState.cookies)) return;
		userState.cookies -= price;
		inventory.find((inventoryItem) => inventoryItem.name === name).quantity++;
		calculateCPS();
	}
	function validatePurcchase(price: number, currentCookies: number) {
		if (currentCookies >= price) {
			return true;
		} else {
			return false;
		}
	}
</script>

<div class="item">
	<h3>{name}</h3>
	<div class="item-details">
		<span>Price: {price}</span>
		<button onclick={onClick}>BUY</button>
		<span>CPS: {cookiesPerSecond}</span>
		<span>Upgrade Price: {upgradePrice}</span>
		<button>UPGRADE</button>
	</div>
	<span class="quantity">Qty: {quantity}</span>
	<span class="level">Lvl: {level}</span>
</div>

<style>
	.item {
		border: 1px solid #ccc;
		padding: 1rem;
		border-radius: 4px;
		margin: 0.5rem;
	}

	.item-details {
		display: flex;
		justify-content: space-between;
		margin-top: 0.5rem;
	}

	.quantity,
	.level {
		color: #666;
		font-size: 0.9rem;
	}
</style>
