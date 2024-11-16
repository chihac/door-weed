import { shopData } from '../data/data';
import { inventory, userState } from './store/globalState.svelte';

const ITEM_LEVEL_COEFFICIENT = 1.15; //move to global config file

export default function calculateCPS() {
	userState.cookiesPerSecond = 0;
	for (let item of inventory) {
		const data = shopData.find((shopItem) => shopItem.id === item.id);
		data &&
			(userState.cookiesPerSecond +=
				item.quantity * ITEM_LEVEL_COEFFICIENT ** (item.level - 1) * data.baseCookiesPerSecond);
	}
}
