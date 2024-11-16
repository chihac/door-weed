export interface ShopItem {
	id: number;
	name: string;
	basePrice: number;
	baseUpgradePrice: number;
	baseCookiesPerSecond: number;
	// baseCookiesPerClick?: number;
}
export const shopData: ShopItem[] = [
	{
		id: 1,
		name: 'Cursor',
		basePrice: 15,
		baseUpgradePrice: 100,
		baseCookiesPerSecond: 0.1
		// baseCookiesPerClick: 0.1
	},
	{
		id: 2,
		name: 'Grandma',
		basePrice: 100,
		baseUpgradePrice: 500,
		baseCookiesPerSecond: 0.5
	},
	{
		id: 3,
		name: 'Farm',
		basePrice: 500,
		baseUpgradePrice: 2000,
		baseCookiesPerSecond: 4
	},
	{
		id: 4,
		name: 'Mine',
		basePrice: 2000,
		baseUpgradePrice: 10000,
		baseCookiesPerSecond: 10
	}
];
