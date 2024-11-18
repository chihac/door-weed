import { describe, it, expect, beforeEach } from 'vitest';
import { ResourceType, userState } from '../src/logicSrc/state/globalState.svelte';
import { initalise } from '../src/logicSrc';
import { startingData } from '../src/logicSrc/data/startingData';
import {
	gainEnergy,
	gainGold,
	gainHealth,
	rewardResource,
	spendEnergy,
	spendGold,
	spendResource,
	takeDamage
} from '../src/logicSrc/gameActions';

describe('User State', () => {
	beforeEach(() => {
		initalise();
	});
	it('should have initial health of 10', () => {
		expect(userState.health).toBe(10);
	});
	it('should have initial energy of 10', () => {
		expect(userState.energy).toBe(10);
	});
	it('should have initial gold of 0', () => {
		expect(userState.gold).toBe(0);
	});
	it('should have initial inventory of empty', () => {
		expect(userState.inventory).toEqual([]);
	});
	it('should have initial resources of empty', () => {
		expect(userState.resources).toEqual([]);
	});
	it('should have initial max health of 10', () => {
		expect(userState.maxHealth).toBe(10);
	});
	it('should have initial max energy of 10', () => {
		expect(userState.maxEnergy).toBe(10);
	});
});

describe('rewardResource', () => {
	beforeEach(() => {
		initalise(startingData);
	});
	it('adds a single resource to the inventory', () => {
		rewardResource({ name: ResourceType.WOOD, level: 1 }, 10);
		expect(userState.resources).toEqual([{ name: ResourceType.WOOD, level: 1, quantity: 10 }]);
	});
	it('stacks the same resource of same quality with eachother', () => {
		rewardResource({ name: ResourceType.WOOD, level: 1 }, 10);
		rewardResource({ name: ResourceType.WOOD, level: 1 }, 10);
		expect(userState.resources).toEqual([{ name: ResourceType.WOOD, level: 1, quantity: 20 }]);
	});
	it('adds a new entry into the inventory for each new resource name', () => {
		rewardResource({ name: ResourceType.WOOD, level: 1 }, 10);
		rewardResource({ name: ResourceType.STONE, level: 1 }, 10);
		expect(userState.resources).toEqual([
			{ name: ResourceType.WOOD, level: 1, quantity: 10 },
			{ name: ResourceType.STONE, level: 1, quantity: 10 }
		]);
	});
	it('adds a new entry into the investory for each new quality of the same resource', () => {
		rewardResource({ name: ResourceType.WOOD, level: 1 }, 10);
		rewardResource({ name: ResourceType.WOOD, level: 2 }, 10);
		expect(userState.resources).toEqual([
			{ name: ResourceType.WOOD, level: 1, quantity: 10 },
			{ name: ResourceType.WOOD, level: 2, quantity: 10 }
		]);
	});
});

describe('spendResource', () => {
	beforeEach(() => {
		initalise(startingData);
		rewardResource({ name: ResourceType.WOOD, level: 1 }, 100);
		rewardResource({ name: ResourceType.WOOD, level: 2 }, 100);
		rewardResource({ name: ResourceType.STONE, level: 1 }, 100);
	});
	it('removes a single resource from the inventory', () => {
		spendResource({ name: ResourceType.STONE, level: 1 }, 5);
		expect(userState.resources).toEqual([
			{ name: ResourceType.WOOD, level: 1, quantity: 100 },
			{ name: ResourceType.WOOD, level: 2, quantity: 100 },
			{ name: ResourceType.STONE, level: 1, quantity: 95 }
		]);
	});
	it('does not remove the resource from the inventory if the quantity is 0', () => {
		spendResource({ name: ResourceType.STONE, level: 1 }, 100);
		expect(userState.resources).toEqual([
			{ name: ResourceType.WOOD, level: 1, quantity: 100 },
			{ name: ResourceType.WOOD, level: 2, quantity: 100 },
			{ name: ResourceType.STONE, level: 1, quantity: 0 }
		]);
	});
	it('throws an error if the resource from the inventory if the quantity is less than 0', () => {
		expect(() => spendResource({ name: ResourceType.STONE, level: 1 }, 1000)).toThrow(
			'Not enough resource'
		);
	});
	it('throws an error if the resource from the inventory if the resource is not found', () => {
		expect(() => spendResource({ name: ResourceType.IRON, level: 1 }, 1000)).toThrow(
			'Resource not found'
		);
	});
});

describe('gainGold', () => {
	beforeEach(() => {
		initalise(startingData);
	});
	it('adds gold to the user state', () => {
		expect(userState.gold).toBe(0);
		gainGold(10);
		expect(userState.gold).toBe(10);
	});
});
describe('spendGold', () => {
	beforeEach(() => {
		initalise(startingData);
		gainGold(10);
	});
	it('removes gold from the user state', () => {
		expect(userState.gold).toBe(10);
		spendGold(5);
		expect(userState.gold).toBe(5);
	});
	it('throws an error if the user does not have enough gold', () => {
		expect(() => spendGold(100)).toThrow('Not enough gold');
	});
});
describe('spendEnergy', () => {
	beforeEach(() => {
		initalise(startingData);
	});
	it('removes energy from the user state', () => {
		expect(userState.energy).toBe(10);
		spendEnergy(5);
		expect(userState.energy).toBe(5);
	});
	it('throws an error if the user does not have enough energy', () => {
		expect(() => spendEnergy(100)).toThrow('Not enough energy');
	});
});
describe('gainEnergy', () => {
	beforeEach(() => {
		initalise(startingData);
		spendEnergy(10);
	});
	it('adds energy to the user state', () => {
		expect(userState.energy).toBe(0);
		gainEnergy(10);
		expect(userState.energy).toBe(10);
	});
	it('caps energy at max energy', () => {
		expect(userState.energy).toBe(0);
		gainEnergy(10);
		expect(userState.energy).toBe(10);
		gainEnergy(10);
		expect(userState.energy).toBe(10);
	});
});
describe('takeDamage', () => {
	beforeEach(() => {
		initalise(startingData);
	});
	it('removes health from the user state', () => {
		expect(userState.health).toBe(10);
		takeDamage(5);
		expect(userState.health).toBe(5);
	});
	it('does not allow health to go below 0', () => {
		expect(userState.health).toBe(10);
		takeDamage(100);
		expect(userState.health).toBe(0);
	});
});
describe('gainHealth', () => {
	beforeEach(() => {
		initalise(startingData);
		takeDamage(5);
	});
	it('adds health to the user state', () => {
		expect(userState.health).toBe(5);
		gainHealth(1);
		expect(userState.health).toBe(6);
	});
	it('caps health at max health', () => {
		expect(userState.health).toBe(5);
		gainHealth(10);
		expect(userState.health).toBe(10);
	});
});
