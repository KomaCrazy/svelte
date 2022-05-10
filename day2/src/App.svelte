<script>
	
	import { onMount } from "svelte";

	import { apiData, profile} from './store.js';
	
	onMount(async () => {
	  const link1 = "http://192.168.1.73:5000/2"
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
		<h1>Table</h1>
		<table>
			<th>Id</th>
			<th>user</th>
			<th>password</th>
		{#each $profile as box}
			<tr>{box}</tr>

		{/each}
	</table>
	</main>
	<style>
	body{
		font-family: Verdatna;
	}
	tr, th{
		border: 1px solid #dddddd;
		text-align: center;
		padding: 8px;
		padding-top: 8px;
		padding-bottom: 8px;
	}

	</style>