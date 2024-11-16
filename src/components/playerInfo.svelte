<script lang="ts">
	import { userState } from '$lib/store/globalState.svelte';
</script>

cookies: {userState.cookies.toFixed(1)}
<!-- cookiesPerClick: {userState.cookiesPerClick.toFixed(1)} -->
cookiesPerSecond: {userState.cookiesPerSecond.toFixed(1)}
