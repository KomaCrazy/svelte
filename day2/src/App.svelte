<script>
	
	import { onMount } from "svelte";

	import { apiData, dataid} from './store.js';
	
	onMount(async () => {
	  const link1 = "http://192.168.1.50:5000/2"
	  const link2 = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
	  const link3 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon"
	  fetch(link1)
	  .then(response => response.json())
	  .then(data => {
			console.log(data);
		apiData.set(data);
	  }).catch(error => {
		console.log(error);
		return [];
	  });
	});
	</script>
	
	<main>
		<h1>Whiskey Drinks Menu</h1>
		<ul>
		{#each $dataid as dataid , datauser}
			<li>{dataid}</li>
		{/each}
		</ul>
	</main>
	
	<style>
	
	</style>