export let globalState = $state({ thing: 0, thang: 'string' });

export interface InventoryItem {
	id: number;
	name: string;
	quantity: number;
	level: number;
}

export enum ResourceType {
	WOOD = 'Wood',
	STONE = 'Stone',
	IRON = 'Iron',
	FOOD = 'Food'
}
export interface Resource {
	name: ResourceType;
	level: number;
}
export interface ResourceState extends Resource {
	quantity: number;
}

export interface UserState {
	health: number;
	energy: number;
	maxHealth: number;
	maxEnergy: number;
	inventory: InventoryItem[];
	resources: ResourceState[];
	gold: number;
}

export let userState: UserState = $state({
	health: 0,
	maxHealth: 0,
	energy: 0,
	maxEnergy: 0,
	gold: 0,
	inventory: [],
	resources: []
});

export interface Enemy {
	health: number;
	maxHealth: number;
	id: number;
	damage: number;
}

export let worldState = $state({
	enemies: []
});
