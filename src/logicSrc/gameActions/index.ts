import { userState, type Resource } from '../state/globalState.svelte';

export function spawnEnemy() {
	console.log('spawn enemy');
}

export function rewardResource(resource: Resource, quantity: number) {
	const existingResource = userState.resources.find(
		(r) => r.name === resource.name && r.level === resource.level
	);
	if (existingResource) {
		userState.resources = userState.resources.map((r) =>
			r.name === resource.name ? { ...r, quantity: r.quantity + quantity } : r
		);
	} else {
		userState.resources = [
			...userState.resources,
			{
				...resource,
				quantity: quantity
			}
		];
	}
}

export function spendResource(resourceToAdd: Resource, quantity: number) {
	const existingResource = userState.resources.find(
		(resource) => resource.name === resourceToAdd.name && resource.level === resourceToAdd.level
	);
	if (!existingResource) {
		throw new Error('Resource not found');
	}
	if (existingResource.quantity < quantity) {
		throw new Error('Not enough resource');
	}
	userState.resources = userState.resources.map((resource) =>
		resource.name === resourceToAdd.name
			? { ...resource, quantity: resource.quantity - quantity }
			: resource
	);
}

export function gainGold(amount: number) {
	userState.gold += amount;
}

export function spendGold(amount: number) {
	if (userState.gold < amount) {
		throw new Error('Not enough gold');
	}
	userState.gold -= amount;
}

export function spendEnergy(amount: number) {
	if (userState.energy < amount) {
		throw new Error('Not enough energy');
	}
	userState.energy -= amount;
}
export function gainEnergy(amount: number) {
	if (userState.energy + amount > userState.maxEnergy) {
		amount = userState.maxEnergy - userState.energy;
	}
	userState.energy += amount;
}
export function takeDamage(amount: number) {
	userState.health = Math.max(0, userState.health - amount);
}
export function gainHealth(amount: number) {
	if (userState.health + amount > userState.maxHealth) {
		amount = userState.maxHealth - userState.health;
	}
	userState.health += amount;
}
