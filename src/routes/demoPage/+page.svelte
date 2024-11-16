<script>
	import Card from '../../components/card.svelte';
</script>

<main>
	{#each Array(5) as _, i}
		<Card
			title={'card'}
			description={i}
			imageUrl="https://media.discordapp.net/attachments/501483475849707540/1307058074523013120/PXL_20241115_190155404.MP.jpg?ex=673994f0&is=67384370&hm=0ca3715f4ce1632f4ba657492b3c94cb294d224e884e08aa27eb79297b7f2687&=&format=webp&width=508&height=674"
		/>
	{/each}
	<Card title={'this is'} description={'dood'} imageUrl="" />
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
