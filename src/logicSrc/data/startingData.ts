import type { UserState } from '../state/globalState.svelte';

export const startingData: UserState = {
	health: 10,
	energy: 10,
	gold: 0,
	inventory: [],
	resources: [],
	maxHealth: 10,
	maxEnergy: 10
};
