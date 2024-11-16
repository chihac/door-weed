<script lang="ts">
	import { userState } from '$lib/store/globalState.svelte';
	// const handleClick = $props();
	function handleClick() {
		userState.cookies += userState.cookiesPerClick;
	}
</script>

<button class="cookie" onclick={handleClick}> 🍪 </button>

<style>
	.cookie {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: linear-gradient(45deg, #d4a373, #bc8c5e);
		border: none;
		box-shadow:
			inset 0 -3px 2px rgba(0, 0, 0, 0.2),
			inset 2px 2px 4px rgba(255, 255, 255, 0.3);
		cursor: pointer;
		transition: transform 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
	}

	.cookie:hover {
		transform: scale(1.1);
	}

	.cookie:active {
		transform: scale(0.95);
	}
</style>
