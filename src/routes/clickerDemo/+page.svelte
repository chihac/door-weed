<script lang="ts">
	import Item from '../../components/item.svelte';
	import { inventory } from '$lib/store/globalState.svelte';
	import Shop from '../../components/shop.svelte';
	import Cookie from '../../components/cookie.svelte';
	import PlayerInfo from '../../components/playerInfo.svelte';
	import startGame from '$lib/gaemStart';
	startGame();
</script>

<PlayerInfo />
<Cookie />
<Shop />
