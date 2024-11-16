export let globalState = $state({ thing: 0, thang: 'string' });

export let userState = $state({ cookies: 0, cookiesPerSecond: 0, cookiesPerClick: 1 });

export interface InventoryItem {
	id: number;
	name: string;
	quantity: number;
	level: number;
}

export let inventory: InventoryItem[] = $state([]);
