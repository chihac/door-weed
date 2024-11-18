import { userState, type UserState } from './state/globalState.svelte';
import { startingData } from './data/startingData';

export function initalise(gameData: UserState = startingData) {
	userState.health = gameData.health;
	userState.energy = gameData.energy;
	userState.gold = gameData.gold;
	userState.inventory = gameData.inventory;
	userState.resources = gameData.resources;
	userState.maxHealth = gameData.maxHealth;
	userState.maxEnergy = gameData.maxEnergy;
}
