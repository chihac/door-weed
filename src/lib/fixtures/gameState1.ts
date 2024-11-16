import type { InventoryItem } from '$lib/store/globalState.svelte';

export const inventory: InventoryItem[] = [
	{
		name: 'sword',
		quantity: 1,
		level: 1
	},
	{
		name: 'shield',
		quantity: 1,
		level: 1
	}
];
