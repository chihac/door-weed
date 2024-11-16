<script>
	import { globalState } from '$lib/store/globalState.svelte';
	let { title, description, imageUrl } = $props();
	function handleClick() {
		globalState.thing += 1;
	}
</script>

<div class="card">
	<img src={imageUrl} alt={title} />
	<button class="card-content" onclick={handleClick}>
		<h2 class="card-title">{title}</h2>
		<p class="card-description">{description}</p>
		{globalState.thing}
	</button>
</div>

<style>
	.card {
		border: 1px solid #ccc;
		border-radius: 8px;
		overflow: hidden;
		width: 300px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
	.card img {
		width: 100%;
		height: auto;
	}
	.card-content {
		padding: 16px;
	}
	.card-title {
		font-size: 1.5em;
		margin: 0;
	}
	.card-description {
		font-size: 1em;
		color: #666;
	}
</style>
