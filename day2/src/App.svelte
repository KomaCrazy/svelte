<script>
	
	import { onMount } from "svelte";

	import { apiData, datatable} from './store.js';
	
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
				
		{#each $datatable as box}
		<tr>
			<th>{box.id}</th>
			<th>{box.user}</th>
			<th>{box.pwd}</th>
		</tr>
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
		padding-left: 12px;
		padding-top: 12px;
		padding-bottom: 12px;
		padding-right: 12px;
	}

	</style>