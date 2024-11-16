import { inventory } from './store/globalState.svelte';
import { shopData } from '../data/data';
import triggerCPSCookie from './gameTick';

function populateInventory() {
	for (const item of shopData) {
		inventory.push({
			id: item.id,
			name: item.name,
			quantity: 0,
			level: 1
		});
	}
}

export default function startGame() {
	populateInventory();
	setInterval(() => {
		triggerCPSCookie();
	}, 1000);
}
