<script lang="ts">
	import { inventory } from '$lib/store/globalState.svelte';
	import { shopData } from '../data/data';
	import Item from './item.svelte';
	import type { Props } from './item.svelte';
	import type { ShopItem } from '../data/data';
	import type { InventoryItem } from '$lib/store/globalState.svelte';

	function constructItemProps(shopData: ShopItem, inventoryItem: InventoryItem): Props {
		return {
			name: shopData.name,
			quantity: inventoryItem.quantity,
			level: inventoryItem.level,
			price: shopData.basePrice,
			upgradePrice: shopData.baseUpgradePrice,
			cookiesPerSecond: shopData.baseCookiesPerSecond
		};
	}
</script>

<main>
	{#each shopData as shopItem}
		<Item
			{...constructItemProps(
				shopItem,
				inventory.find((inventoryItem) => inventoryItem.id === shopItem.id) as InventoryItem
			)}
		/>
	{/each}
</main>
